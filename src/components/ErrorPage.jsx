import { useEffect } from "react";
import { PRIMARY_TEL, SITE } from "../data/site";
import Logo from "./Logo";

// Full-page message for a missing page (404) or a crash, in the site's style.
// The drawing is the shop's photocopier with a paper jam.

const VARIANTS = {
  notfound: {
    code: "Error 404",
    title: "Page not found",
    ta: "இந்தப் பக்கம் கிடைக்கவில்லை",
    text: "This page doesn't exist. The link may be wrong or out of date. Everything we offer is on the home page.",
    docTitle: "Page not found — Sri Palaniyandavar Xerox",
  },
  crash: {
    code: "Something went wrong",
    title: "This page couldn't load",
    ta: "பக்கம் சரியாக ஏற்றப்படவில்லை",
    text: "Something on our side stopped the page from loading. Reload to try again, or call or WhatsApp us and we'll help directly.",
    docTitle: "Something went wrong — Sri Palaniyandavar Xerox",
  },
};

function PaperJam() {
  return (
    <svg className="jam-art" viewBox="0 0 240 200" aria-hidden="true">
      {/* Copier */}
      <path className="jam-line" d="M48 70 H192 Q198 70 198 76 V176 Q198 182 192 182 H48 Q42 182 42 176 V76 Q42 70 48 70 Z" />
      <path className="jam-line" d="M46 50 H194 Q200 50 200 56 V70 H40 V56 Q40 50 46 50 Z" />
      <path className="jam-line" d="M52 38 H188 Q192 38 192 42 V50 H48 V42 Q48 38 52 38 Z" />
      <path className="jam-line" d="M42 132 H198 M42 158 H198 M108 145 H132 M108 170 H132" />
      <rect className="jam-slot" x="70" y="88" width="100" height="6" rx="3" />
      {/* Crumpled sheet stuck in the slot */}
      <path className="jam-sheet" d="M80 91 L92 104 L84 112 L98 120 L90 128 L106 124 L118 132 L126 120 L140 126 L136 112 L150 108 L142 98 L158 91 Z" />
      <path className="jam-crease" d="M96 104 L112 116 M124 108 L132 120 M108 98 L118 110" />
      {/* Warning light */}
      <circle className="jam-led" cx="182" cy="91" r="6" />
    </svg>
  );
}

export default function ErrorPage({ variant = "notfound" }) {
  const v = VARIANTS[variant];

  useEffect(() => {
    document.title = v.docTitle;
  }, [v.docTitle]);

  return (
    <div className="error-page">
      <header className="error-head">
        <a href="/" className="brand">
          <img className="brand-logo" src="/logo-128.webp" alt="" width="48" height="48" />
          <span className="brand-text">
            <strong>{SITE.name}</strong>
            <small lang="ta">ஸ்ரீ பழனியாண்டவர் ஜெராக்ஸ்</small>
          </span>
        </a>
      </header>

      <main className="error-main">
        <PaperJam />
        <p className="error-code">{v.code}</p>
        <h1>{v.title}</h1>
        <p className="error-ta" lang="ta">{v.ta}</p>
        <p className="error-text">{v.text}</p>
        <div className="error-actions">
          {variant === "crash" ? (
            <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>Reload page</button>
          ) : (
            <a href="/" className="btn btn-primary">Go to home page</a>
          )}
          <a href="/#services" className="btn btn-outline">See our services</a>
        </div>
        <div className="error-contact">
          <a href={PRIMARY_TEL}>Call {SITE.phones[0].label}</a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener"><Logo name="whatsapp" size={18} /> WhatsApp</a>
        </div>
      </main>

      <div className="cmyk-bar" aria-hidden="true" />
    </div>
  );
}
