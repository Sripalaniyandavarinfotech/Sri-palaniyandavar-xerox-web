import { PRIMARY_TEL, SITE } from "../data/site";
import Brand from "./Brand";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/needed", label: "Documents needed" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Brand />
          <nav className="nav-links" aria-label="Main">
            {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <a href={PRIMARY_TEL} className="btn btn-primary btn-sm nav-call">Call {SITE.phones[0].label}</a>
        </div>
      </header>
    </>
  );
}
