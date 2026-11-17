import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NEEDED, neededPath } from "./src/data/needed.js";

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Writes a copy of the built index.html for /needed and each /needed/<slug>,
// with that page's own title and description. Static hosts then serve those
// links directly (status 200), and WhatsApp shows the right title in its preview.
function neededPages() {
  return {
    name: "needed-pages",
    apply: "build",
    closeBundle() {
      const dist = resolve(__dirname, "dist");
      const base = readFileSync(resolve(dist, "index.html"), "utf8");
      const pages = [
        {
          path: neededPath(),
          title: "Documents needed for certificates — Sri Palaniyandavar Xerox, Palani",
          desc: "தேவையான ஆவணங்கள்: ஜாதி சான்றிதழ், முதல் பட்டதாரி, OBC, நலவாரியம், ரேஷன் கார்டு. Document checklists for Community, First Graduate, OBC, Labour Welfare Board and Ration Card applications.",
        },
        ...NEEDED.map((n) => ({
          path: neededPath(n.slug),
          title: `${n.ta} | ${n.en} – Documents needed`,
          desc: `${n.lists.flatMap((l) => l.items).map((i) => i.en).join(", ")}.`,
        })),
      ];
      for (const p of pages) {
        const meta = [
          `<title>${escape(p.title)}</title>`,
          `<meta name="description" content="${escape(p.desc)}" />`,
          `<meta property="og:title" content="${escape(p.title)}" />`,
          `<meta property="og:description" content="${escape(p.desc)}" />`,
          `<meta property="og:type" content="website" />`,
        ].join("\n  ");
        const html = base
          .replace(/<title>[\s\S]*?<\/title>/, "")
          .replace(/<meta name="description"[^>]*>/, "")
          .replace("</head>", `  ${meta}\n</head>`);
        const out = resolve(dist, `.${p.path}/index.html`);
        mkdirSync(dirname(out), { recursive: true });
        writeFileSync(out, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), neededPages()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      // 404.html is served by static hosts for unknown addresses; it loads the same app, which shows the 404 page.
      input: { main: "index.html", notFound: "404.html" },
    },
  },
});
