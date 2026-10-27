import { PRIMARY_TEL, SITE } from "../data/site";
import Logo from "./Logo";

// Call, WhatsApp and directions pinned to the bottom of the screen on phones.
export default function FloatingButtons() {
  return (
    <div className="mobile-bar">
      <a href={PRIMARY_TEL} className="btn btn-maroon">Call</a>
      <a href={SITE.whatsapp} target="_blank" rel="noopener" className="btn btn-whatsapp"><Logo name="whatsapp" /> WhatsApp</a>
      <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="btn btn-plain"><Logo name="google-maps" /> Directions</a>
    </div>
  );
}
