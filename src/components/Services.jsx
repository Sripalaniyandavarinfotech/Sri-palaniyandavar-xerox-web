import { useEffect, useRef, useState } from "react";
import { GROUPS, SERVICES } from "../data/services";
import { PRIMARY_TEL } from "../data/site";
import Logo from "./Logo";
import ServiceIcon from "./ServiceIcon";

const FILTERS = [{ id: "all", short: "All services", ta: "அனைத்தும்" }, ...GROUPS];

// UPI shows the real payment app logos from the Dashboard Icons catalog. The
// other services use drawn line icons, with the first Tamil letter as a fallback.
const firstLetter = (text) => {
  const seg = new Intl.Segmenter("ta", { granularity: "grapheme" }).segment(text)[Symbol.iterator]().next();
  return seg.value?.segment ?? text[0];
};

function ServiceMark({ service }) {
  if (service.logos) {
    return (
      <span className="tile-logos">
        {service.logos.map((name) => <Logo key={name} name={name} size={30} />)}
      </span>
    );
  }
  if (service.icon) {
    return <span className="tile-icon" aria-hidden="true"><ServiceIcon name={service.icon} /></span>;
  }
  return <span className="tile-icon" lang="ta" aria-hidden="true">{firstLetter(service.ta)}</span>;
}

function ServiceDialog({ service, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (service && !dialog.open) dialog.showModal();
  }, [service]);

  if (!service) return null;
  const { ta, title, tag, intro, items, note, cats } = service;

  return (
    <dialog
      ref={ref}
      className={`svc-dialog g-${cats[0]}`}
      aria-labelledby="svc-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      <div className="svc-dialog-inner">
        <button className="dialog-close" onClick={() => ref.current.close()} aria-label="Close"><span aria-hidden="true">×</span></button>
        <ServiceMark service={service} />
        {tag && <span className="tile-tag">{tag}</span>}
        <h3 id="svc-dialog-title">
          <span lang="ta">{ta}</span>
          {title}
        </h3>
        <p>{intro}</p>
        <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="dialog-note">{note}</p>
        <a href={PRIMARY_TEL} className="btn btn-primary">Call to check documents</a>
      </div>
    </dialog>
  );
}

export default function Services() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const shown = SERVICES.filter((s) => filter === "all" || s.cats.includes(filter));

  return (
    <section className="section services" id="services">
      <div className="container">
        <header className="sec-head">
          <h2>Our services</h2>
          <p className="sec-ta" lang="ta">எங்கள் சேவைகள்</p>
          <p>Pick a service to see what's included and what to bring.</p>
        </header>

        <div className="chips" role="group" aria-label="Filter services">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`chip g-${f.id}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.short}
              <span lang="ta">{f.ta}</span>
            </button>
          ))}
        </div>

        <div className="tiles">
          {shown.map((s) => (
              <button
                key={s.id}
                className={`tile g-${s.cats[0]} ${s.featured ? "tile-featured" : ""}`}
                onClick={() => setOpen(s)}
              >
                <ServiceMark service={s} />
                {s.tag && <span className="tile-tag">{s.tag}</span>}
                <span className="tile-ta" lang="ta">{s.ta}</span>
                <span className="tile-en">{s.title}</span>
                <span className="tile-sum">{s.summary}</span>
              </button>
          ))}
        </div>

        <p className="services-warning">
          For payments and banking, never share your UPI PIN or bank OTP with anyone, including our staff.
        </p>
      </div>

      <ServiceDialog service={open} onClose={() => setOpen(null)} />
    </section>
  );
}
