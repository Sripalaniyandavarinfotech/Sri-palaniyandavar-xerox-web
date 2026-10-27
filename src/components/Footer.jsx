import { SITE } from "../data/site";
import Brand from "./Brand";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="kolam-border" aria-hidden="true" />
      <div className="container">
        <div className="footer-card">
          <div className="footer-grid">
            <div>
              <Brand />
              <p className="footer-about">
                Your convenient local destination for document services, digital assistance and eligible government
                service support in Palani.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Contact</h4>
              <p>40, PKGR Complex, Rajendra Road, Palani – 624601</p>
              {SITE.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>)}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <SocialLinks className="social-on-dark" />
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Service availability, official approvals, processing times and charges depend on the relevant authorities,
              service providers and applicable rules.
            </p>
            <p>© {new Date().getFullYear()} {SITE.name}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
