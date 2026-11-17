import { useEffect, useState } from "react";
import { BRANCHES, NEEDED, NEEDED_DISCLAIMER, WHY_US, neededPath } from "../data/needed";
import { SITE } from "../data/site";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import Logo from "./Logo";
import ServiceIcon from "./ServiceIcon";

// "Documents needed" section: /needed lists every certificate, and
// /needed/<slug> shows one checklist. Each page has its own link so the shop
// can send it to a customer, and the customer can share it on WhatsApp.

const countItems = (entry) => entry.lists.reduce((n, l) => n + l.items.length, 0);

const pageUrl = (slug) => `${window.location.origin}${neededPath(slug)}`;

// The WhatsApp message carries the full list, so the customer can read it in
// the chat even without opening the link.
function whatsappText(entry) {
  const lines = [`*${entry.ta} | ${entry.en}*`, `தேவையான ஆவணங்கள் | Documents needed`, ""];
  entry.lists.forEach((list) => {
    if (list.title) lines.push(`*${list.title.ta}*`);
    list.items.forEach((item, i) => lines.push(`${i + 1}. ${item.ta} (${item.en})`));
    lines.push("");
  });
  if (entry.note) lines.push(`குறிப்பு: ${entry.note.ta}`, "");
  lines.push(`${SITE.name}, Palani`, pageUrl(entry.slug));
  return lines.join("\n");
}

function Bi({ ta, en, as: Tag = "span", className = "" }) {
  return (
    <Tag className={`bi ${className}`}>
      <span lang="ta" className="bi-ta">{ta}</span>
      <span className="bi-en">{en}</span>
    </Tag>
  );
}

function Crumbs({ entry }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li>{entry ? <a href={neededPath()}>Documents needed</a> : <span aria-current="page">Documents needed</span>}</li>
        {entry && <li><span aria-current="page">{entry.en}</span></li>}
      </ol>
    </nav>
  );
}

function ShareBar({ entry }) {
  const [copied, setCopied] = useState(false);
  const url = pageUrl(entry.slug);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  return (
    <div className="share-bar">
      <p className="share-label">
        <span lang="ta">இந்தப் பட்டியலை அனுப்ப</span> · Send this list
      </p>
      <div className="share-actions">
        <a
          className="btn btn-whatsapp"
          href={`https://wa.me/?text=${encodeURIComponent(whatsappText(entry))}`}
          target="_blank"
          rel="noopener"
        >
          <Logo name="whatsapp" /> Share on WhatsApp
        </a>
        <button type="button" className="btn btn-outline" onClick={copy}>
          {copied ? "Link copied" : "Copy link"}
        </button>
        <button type="button" className="btn btn-outline" onClick={() => window.print()}>Print</button>
      </div>
    </div>
  );
}

function Checklist({ entry }) {
  const total = countItems(entry);
  const [have, setHave] = useState(() => new Set());
  const isServices = entry.kind === "services";

  const toggle = (key) =>
    setHave((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <div className="checklist">
      {!isServices && (
        <p className="check-progress" aria-live="polite">
          <strong>{have.size} / {total}</strong>{" "}
          <span lang="ta">தயார்</span> · ready
          <span className="check-hint"> <span lang="ta">உங்களிடம் உள்ளதைத் தொட்டுக் குறிக்கவும்</span> · tap what you already have</span>
        </p>
      )}
      {entry.lists.map((list, li) => (
        <section key={li} className="check-group">
          {list.title && <Bi as="h3" ta={list.title.ta} en={list.title.en} className="check-step" />}
          <ol className="check-items">
            {list.items.map((item, i) => {
              const key = `${li}-${i}`;
              const body = (
                <>
                  <span className="check-num" aria-hidden="true">{i + 1}</span>
                  <Bi ta={item.ta} en={item.en} className="check-text" />
                </>
              );
              if (isServices) {
                return (
                  <li key={key}>
                    {item.link ? (
                      <a className="check-row check-link" href={neededPath(item.link)}>
                        {body}
                        <span className="check-more">Documents →</span>
                      </a>
                    ) : (
                      <div className="check-row">{body}</div>
                    )}
                  </li>
                );
              }
              return (
                <li key={key}>
                  <label className={`check-row ${have.has(key) ? "is-done" : ""}`}>
                    <input type="checkbox" checked={have.has(key)} onChange={() => toggle(key)} />
                    {body}
                    <span className="check-box" aria-hidden="true" />
                  </label>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

function Branches() {
  return (
    <section className="needed-block">
      <Bi as="h2" ta="எங்கள் கடை முகவரி" en="Our shop address" className="block-title" />
      <div className="branches">
        {BRANCHES.map((b) => (
          <article key={b.en} className="branch">
            <Bi as="h3" ta={b.ta} en={b.en} />
            <p lang="ta" className="branch-ta">{b.addressTa}</p>
            <p className="branch-en">{b.addressEn}</p>
            <div className="branch-phones">
              {b.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="btn btn-outline btn-sm">Call {p.label}</a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <p className="needed-disclaimer">
      <span lang="ta">{NEEDED_DISCLAIMER.ta}</span>
      <span>{NEEDED_DISCLAIMER.en}</span>
    </p>
  );
}

function NeededIndex() {
  return (
    <>
      <header className="needed-head">
        <Crumbs />
        <h1><Bi ta="தேவையான ஆவணங்கள்" en="Documents needed" /></h1>
        <p className="needed-lede">
          <span lang="ta">நீங்கள் எதற்கு விண்ணப்பிக்க வேண்டும் என்பதைத் தேர்ந்தெடுங்கள். கொண்டுவர வேண்டிய ஆவணங்களின் முழுப் பட்டியல் காட்டப்படும்.</span>
          <span>Pick what you want to apply for. You will see the full list of documents to bring, and you can send it to your family on WhatsApp.</span>
        </p>
      </header>

      <ul className="needed-grid">
        {NEEDED.map((n) => (
          <li key={n.slug}>
            <a className="needed-card" href={neededPath(n.slug)}>
              <span className="tile-icon" aria-hidden="true"><ServiceIcon name={n.icon} /></span>
              <Bi ta={n.ta} en={n.en} className="needed-card-title" />
              <span className="needed-card-count">
                {n.kind === "services"
                  ? <><span lang="ta">{countItems(n)} சேவைகள்</span> · {countItems(n)} services</>
                  : <><span lang="ta">{countItems(n)} ஆவணங்கள்</span> · {countItems(n)} documents</>}
                <span aria-hidden="true"> →</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <section className="needed-block">
        <Bi as="h2" ta="எங்கள் சிறப்பம்சங்கள்" en="Why choose us?" className="block-title" />
        <ul className="why-list">
          {WHY_US.map((w) => <li key={w.en}><Bi ta={w.ta} en={w.en} /></li>)}
        </ul>
      </section>
    </>
  );
}

function NeededDetail({ entry }) {
  const others = NEEDED.filter((n) => n.slug !== entry.slug);
  return (
    <>
      <header className="needed-head">
        <Crumbs entry={entry} />
        <div className="needed-title">
          <span className="tile-icon" aria-hidden="true"><ServiceIcon name={entry.icon} /></span>
          <h1><Bi ta={entry.ta} en={entry.en} /></h1>
        </div>
        <div className="needed-about">
          <p className="about-label"><span lang="ta">இது என்ன?</span> · What is this?</p>
          <p lang="ta">{entry.about.ta}</p>
          <p className="muted">{entry.about.en}</p>
        </div>
      </header>

      <section className="needed-block">
        <Bi as="h2" ta={entry.lead.ta} en={entry.lead.en} className="block-title" />
        <Checklist entry={entry} />
        {entry.note && (
          <p className="needed-note">
            <strong><span lang="ta">குறிப்பு</span> · Note</strong>
            <span lang="ta">{entry.note.ta}</span>
            <span>{entry.note.en}</span>
          </p>
        )}
        {entry.kind !== "services" && (
          <p className="needed-tip">
            <span lang="ta">ஒவ்வொரு ஆவணத்தின் ஜெராக்ஸ் நகலும் எடுத்துவரவும். மறந்துவிட்டால் எங்கள் கடையிலேயே எடுத்துக்கொள்ளலாம்.</span>
            <span>Bring a photocopy of each document too. If you forget, we can make copies at the shop.</span>
          </p>
        )}
        <ShareBar entry={entry} />
      </section>

      <Branches />

      <section className="needed-block">
        <Bi as="h2" ta="மற்ற சேவைகள்" en="Other certificates" className="block-title" />
        <ul className="other-links">
          {others.map((n) => (
            <li key={n.slug}><a href={neededPath(n.slug)}><Bi ta={n.ta} en={n.en} /></a></li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default function Needed({ slug }) {
  const entry = slug ? NEEDED.find((n) => n.slug === slug) : null;

  useEffect(() => {
    document.title = entry
      ? `${entry.en} – documents needed | ${SITE.name}`
      : `Documents needed for certificates | ${SITE.name}`;
  }, [entry]);

  return (
    <>
      <Navbar />
      <main className="needed">
        <div className="container needed-wrap">
          {entry ? <NeededDetail entry={entry} /> : <NeededIndex />}
          {!entry && <Branches />}
          <Disclaimer />
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
