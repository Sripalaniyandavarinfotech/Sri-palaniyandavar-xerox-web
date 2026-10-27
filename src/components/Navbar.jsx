import { PRIMARY_TEL } from "../data/site";
import Brand from "./Brand";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "visit", label: "Before you visit" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Brand />
        <nav className="nav-links" aria-label="Main">
          {LINKS.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </nav>
        <a href={PRIMARY_TEL} className="btn btn-turmeric btn-sm nav-call">Call</a>
      </div>
    </header>
  );
}
