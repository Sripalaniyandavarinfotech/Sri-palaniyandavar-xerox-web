// The four things the shop is, each with the counter colour used for it across the site.
const PILLARS = [
  {
    id: "xerox",
    en: "Xerox & printing",
    ta: "ஜெராக்ஸ் & பிரிண்டிங்",
    text: "Photocopies, printouts and scanning for forms, certificates, ID documents and study material.",
  },
  {
    id: "aadhaar",
    en: "Aadhaar centre",
    ta: "ஆதார் மையம்",
    text: "Registered centre for Aadhaar address, mobile number and email updates, and e-Aadhaar download.",
  },
  {
    id: "esevai",
    en: "e-Sevai centre",
    ta: "இ-சேவை மையம்",
    text: "TNEGA-registered centre for Tamil Nadu government e-Sevai applications and certificates.",
  },
  {
    id: "csc",
    en: "CSC",
    ta: "பொது சேவை மையம்",
    text: "Common Service Centre for citizen services: PAN, passport, PF, bill payments, banking and more.",
  },
];

export default function Pillars() {
  return (
    <section className="pillars" aria-label="What the shop does">
      <div className="container pillar-grid">
        {PILLARS.map((p) => (
          <a key={p.id} href="#services" className={`pillar p-${p.id}`}>
            <h2>{p.en}</h2>
            <p className="pillar-ta" lang="ta">{p.ta}</p>
            <p>{p.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
