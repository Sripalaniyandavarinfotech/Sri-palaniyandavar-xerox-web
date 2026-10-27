import { SITE } from "../data/site";
import Logo from "./Logo";

const LINKS = [
  { href: SITE.whatsapp, label: "WhatsApp", icon: "whatsapp" },
  { href: SITE.instagram, label: "Instagram", icon: "instagram" },
  { href: SITE.facebook, label: "Facebook", icon: "facebook" },
];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`social ${className}`}>
      {LINKS.map(({ href, label, icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener" aria-label={`${label} (opens in a new tab)`}>
            <Logo name={icon} /> <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
