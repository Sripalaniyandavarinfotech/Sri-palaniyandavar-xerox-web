import { PRIMARY_TEL, SITE } from "../data/site";
import { SERVICES } from "../data/services";
import Brand from "./Brand";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

// The services people ask for most, listed in the footer.
const FOOTER_SERVICES = ["aadhaar", "esevai", "smartcard", "pan", "passport", "xerox", "printing", "bills", "fastag", "tickets"];

export default function Footer() {
  const services = FOOTER_SERVICES.map((id) => SERVICES.find((s) => s.id === id)).filter(Boolean);

  return (
    <footer className="footer">
      <div className="container footer-card">
        <div className="cmyk-bar" aria-hidden="true" />
        <div className="footer-grid">
          <div className="footer-about-col">
            <Brand />
            <p className="footer-about">
              Xerox shop, Aadhaar centre, e-Sevai centre and CSC on Rajendra Road, Palani. We help with documents,
              online applications, payments and bookings at one counter.
            </p>
            <ul className="footer-badges">
              <li className="b-aadhaar">Registered Aadhaar Centre</li>
              <li className="b-esevai">TNEGA e-Sevai Centre</li>
              <li className="b-csc">CSC (Common Service Centre)</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((s) => <li key={s.id}><a href="#services">{s.title}</a></li>)}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <address className="footer-contact">
              <p>{SITE.addressLines[0]}<br />{SITE.addressLines[1]}</p>
              <p>
                {SITE.phones.map((p, i) => (
                  <span key={p.tel}>{i > 0 && <br />}<a href={`tel:${p.tel}`}>{p.label}</a></span>
                ))}
              </p>
              <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            </address>
          </div>

          <div>
            <h4>Reach us</h4>
            <div className="footer-actions">
              <a href={PRIMARY_TEL} className="btn btn-primary">Call {SITE.phones[0].label}</a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener" className="btn btn-whatsapp">
                <Logo name="whatsapp" /> WhatsApp
              </a>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="btn btn-outline">
                <Logo name="google-maps" /> Directions
              </a>
            </div>
            <h4 className="footer-follow">Follow us</h4>
            <SocialLinks className="social-on-dark" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {SITE.name}, Palani.</p>
          <p>
            Service availability, official approvals, processing times and charges depend on the relevant authorities,
            service providers and applicable rules.
          </p>
        </div>
      </div>
    </footer>
  );
}
