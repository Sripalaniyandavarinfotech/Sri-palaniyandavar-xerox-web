import { PRIMARY_TEL, SITE } from "../data/site";
import Copier from "./Copier";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            <span className="hero-en">Sri Palaniyandavar Xerox</span>
            <span className="hero-ta" lang="ta">ஸ்ரீ பழனியாண்டவர் ஜெராக்ஸ்</span>
          </h1>
          <p className="hero-role">Xerox shop, Aadhaar centre, e-Sevai centre and CSC in Palani</p>
          <p className="hero-lede">
            Photocopies and printouts, Aadhaar updates, e-Sevai applications, bill payments, banking and ticket
            bookings, all at one counter on Rajendra Road. Call before you come and we'll tell you what to bring.
          </p>
          <ul className="hero-badges">
            <li className="b-aadhaar">Registered Aadhaar Centre</li>
            <li className="b-esevai">TNEGA e-Sevai Centre</li>
            <li className="b-csc">CSC (Common Service Centre)</li>
          </ul>
          <div className="hero-actions">
            <a href={PRIMARY_TEL} className="btn btn-primary">Call {SITE.phones[0].label}</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" className="btn btn-whatsapp">
              <Logo name="whatsapp" /> WhatsApp us
            </a>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="btn btn-outline">
              <Logo name="google-maps" /> Get directions
            </a>
          </div>
        </div>
        <div className="hero-art">
          <Copier />
        </div>
      </div>
      <div className="cmyk-bar" aria-hidden="true" />
    </section>
  );
}
