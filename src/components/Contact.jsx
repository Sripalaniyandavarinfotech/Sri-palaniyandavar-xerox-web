import { SITE } from "../data/site";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <header className="sec-head">
          <h2>Find the shop</h2>
          <p className="sec-ta" lang="ta">தொடர்புக்கு</p>
        </header>
        <div className="contact-grid">
          <div className="contact-card">
            <ul className="contact-list">
              <li>
                <Logo name="google-maps" size={22} />
                <div>
                  <span className="label">Address</span>
                  <p>{SITE.addressLines[0]}<br />{SITE.addressLines[1]}</p>
                </div>
              </li>
              <li>
                <span className="logo-spacer" aria-hidden="true" />
                <div>
                  <span className="label">Phone</span>
                  <p>
                    {SITE.phones.map((p, i) => (
                      <span key={p.tel}>{i > 0 && <br />}<a href={`tel:${p.tel}`}>{p.label}</a></span>
                    ))}
                  </p>
                </div>
              </li>
              <li>
                <Logo name="whatsapp" size={22} />
                <div>
                  <span className="label">WhatsApp</span>
                  <p><a href={SITE.whatsapp} target="_blank" rel="noopener">{SITE.phones[0].label}</a></p>
                </div>
              </li>
              <li>
                <Logo name="gmail" size={22} />
                <div>
                  <span className="label">Email</span>
                  <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                </div>
              </li>
            </ul>
            <SocialLinks className="social-on-dark" />
            <a className="btn btn-primary" href={SITE.mapsUrl} target="_blank" rel="noopener">
              <Logo name="google-maps" /> Open in Google Maps
            </a>
          </div>
          <div className="map">
            <iframe
              title={`${SITE.name} location`}
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
