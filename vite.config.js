import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      // 404.html is served by static hosts for unknown addresses; it loads the same app, which shows the 404 page.
      input: { main: "index.html", notFound: "404.html" },
    },
  },
});
