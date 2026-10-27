// Hand-drawn line icons for the services the Dashboard Icons catalog doesn't cover.
// All share one 24×24 grid and 1.8px rounded strokes so they read as one set.

const ICONS = {
  // Aadhaar: fingerprint
  fingerprint: [
    "M5 11a7 7 0 0 1 11.5-5.4",
    "M19 11v1.5",
    "M8 20c.7-1.6 1-3.4 1-5.5V11a3 3 0 0 1 6 0v1.5",
    "M12 11v3.5c0 2.6-.5 4.7-1.6 6.5",
    "M15 15.5c0 1.8-.3 3.4-.8 4.8",
    "M5 14.5v-1",
    "M18.4 17.5c.4-1.2.6-2.6.6-4",
  ],
  // e-Sevai: certificate with an official seal
  certificate: [
    "M6 3h9l4 4v14H6z",
    "M15 3v4h4",
    "M9 9h5",
    "M9 12h7",
    "M12 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    "M10.5 19.5 10 22l2-1 2 1-.5-2.5",
  ],
  // Smart card: card with a chip
  smartcard: [
    "M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
    "M7 10h3.5v4H7z",
    "M13.5 10.5H18",
    "M13.5 13.5H16.5",
  ],
  // PAN and ID cards: card with a photo
  idcard: [
    "M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z",
    "M9 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M6 16c.6-1.5 1.7-2.3 3-2.3s2.4.8 3 2.3",
    "M14.5 10H18",
    "M14.5 13H17",
  ],
  // Passport: booklet with a globe
  passport: [
    "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
    "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "M9 10h6",
    "M12 7c-.9 1.6-.9 4.4 0 6",
    "M12 7c.9 1.6.9 4.4 0 6",
    "M9 17h6",
  ],
  // PF withdrawal: rupee coin
  rupee: [
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    "M9 7.5h6",
    "M9 10.5h6",
    "M9.5 7.5c2.8 0 4 1 4 2.6 0 1.7-1.4 2.7-4 2.7l4 4",
  ],
  // Xerox: photocopier
  copier: [
    "M6 4h12v4H6z",
    "M5 8h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z",
    "M8 11.5h8",
    "M9.5 11.5v3.5h5v-3.5",
    "M7 19v2",
    "M17 19v2",
  ],
  // Printing and scanning: printer with a page
  printer: [
    "M7 9V3h10v6",
    "M5 9h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
    "M7 18H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2",
    "M7 14h10v7H7z",
    "M17.5 12h.01",
  ],
  // Online applications: screen with a form
  form: [
    "M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    "M12 16v4",
    "M8 20h8",
    "M7 8h5",
    "M7 11h10",
    "M15 8h2",
  ],
  // Bill payments: light bulb
  bulb: [
    "M9 18h6",
    "M10 21h4",
    "M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z",
  ],
  // Aadhaar-enabled banking: bank building
  bank: [
    "M3 9.5 12 4l9 5.5",
    "M4 9.5h16",
    "M6.5 9.5v7",
    "M10.5 9.5v7",
    "M13.5 9.5v7",
    "M17.5 9.5v7",
    "M4 16.5h16",
    "M3 20h18",
  ],
  // FASTag: car with a tag on the windscreen
  car: [
    "M5 16.5h14V13l-1.8-5H6.8L5 13z",
    "M5 13h14",
    "M8 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    "M16 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    "M13 9.5h2.5v2H13z",
  ],
  // TTD darshan: temple gopuram
  temple: [
    "M5 21h14",
    "M7 21v-8h10v8",
    "M8.5 13v-3h7v3",
    "M9.5 10V7h5v3",
    "M10.5 7V4.5h3V7",
    "M12 4.5V2.5",
    "M10.5 21v-3a1.5 1.5 0 0 1 3 0v3",
  ],
  // Train and flight tickets: train
  train: [
    "M8 3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z",
    "M5 10h14",
    "M9 6h6",
    "M9 13.5h.01",
    "M15 13.5h.01",
    "M9 17l-2 4",
    "M15 17l2 4",
  ],
};

export default function ServiceIcon({ name, size = 24, className = "" }) {
  const paths = ICONS[name];
  if (!paths) return null;
  return (
    <svg
      className={`service-icon ${className}`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((d) => <path key={d} d={d} />)}
    </svg>
  );
}
