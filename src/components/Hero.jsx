import { PRIMARY_TEL, SITE } from "../data/site";
import Copier from "./Copier";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            <span className="hero-ta" lang="ta">ஸ்ரீ பழனியாண்டவர் ஜெராக்ஸ்</span>
            <span className="hero-en">Sri Palaniyandavar Xerox, Palani</span>
          </h1>
          <p className="hero-lede">
            Xerox, printing, Aadhaar updates, e-Sevai applications, bill payments and ticket bookings at one
            counter on Rajendra Road. Call before you come and we'll tell you what to bring.
          </p>
          <ul className="hero-badges">
            <li>Registered Aadhaar Centre</li>
            <li>TNEGA e-Sevai Centre</li>
          </ul>
          <div className="hero-actions">
            <a href={PRIMARY_TEL} className="btn btn-turmeric">Call {SITE.phones[0].label}</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="btn btn-whatsapp">
              <Logo name="whatsapp" /> WhatsApp us
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost">
              <Logo name="google-maps" /> Get directions
            </a>
          </div>
        </div>
        <div className="hero-art">
          <Copier />
        </div>
      </div>
      <div className="kolam-border" aria-hidden="true" />
    </section>
  );
}
