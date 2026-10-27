// A photocopier in line art. Its outline draws in once, then it runs a copy on
// a loop: the lid lifts, a document drops onto the glass, the lid closes, the
// scan light sweeps across, and the copy slides out onto the tray.

const BODY = [
  // Scanner unit (the glass sits on top of it)
  "M 84 92 H 308 Q 316 92 316 100 V 126 H 76 V 100 Q 76 92 84 92 Z",
  // Control panel with its screen
  "M 312 62 H 368 Q 376 62 376 70 V 96 Q 376 104 368 104 H 316",
  "M 322 70 H 348 V 88 H 322 Z",
  // Main body
  "M 92 150 H 352 Q 362 150 362 160 V 340 Q 362 350 352 350 H 92 Q 82 350 82 340 V 160 Q 82 150 92 150 Z",
  // Gap between scanner and body where copies come out
  "M 76 126 L 82 150",
  "M 316 126 L 362 150",
  // Paper drawers and their handles
  "M 82 236 H 362",
  "M 82 294 H 362",
  "M 202 258 H 242",
  "M 202 316 H 242",
  // Output tray
  "M 82 146 L 26 136 L 22 142 L 82 156",
  // Feet
  "M 104 350 V 362 H 124 V 350",
  "M 320 350 V 362 H 340 V 350",
];

// The lid hinges at its right end, so it lifts from the left.
const LID = "M 96 72 H 296 Q 302 72 302 78 V 92 H 90 V 78 Q 90 72 96 72 Z";

export default function Copier({ className = "" }) {
  let i = 0;
  return (
    <svg className={`copier ${className}`} viewBox="0 0 400 380" aria-hidden="true">
      {BODY.map((d) => (
        <path key={d} className="art-line" d={d} pathLength="1" style={{ "--i": i++ }} />
      ))}
      <circle className="art-line" cx="358" cy="76" r="5" pathLength="1" style={{ "--i": i }} />
      <circle className="art-line" cx="358" cy="92" r="5" pathLength="1" style={{ "--i": i++ }} />
      <circle className="copier-led" cx="104" cy="200" r="5" />

      {/* Original document, placed on the glass while the lid is up */}
      <g className="doc">
        <path className="sheet" d="M 124 44 H 264 V 92 H 124 Z" />
        <path className="sheet-text" d="M 138 56 H 214 M 138 66 H 248 M 138 76 H 232" />
      </g>

      {/* Scan light: a bright bar with a soft glow around it */}
      <g className="scan">
        <rect className="scan-glow" x="70" y="100" width="44" height="22" rx="6" />
        <rect className="scan-bar" x="88" y="100" width="8" height="22" rx="3" />
      </g>

      <g className="lid">
        <path className="art-line" d={LID} pathLength="1" style={{ "--i": i++ }} />
      </g>

      {/* The finished copy */}
      <g className="copy-sheet">
        <path className="sheet" d="M 30 128 L 92 116 L 96 136 L 34 148 Z" />
        <path className="sheet-text" d="M 44 132 L 78 126 M 46 138 L 84 131" />
      </g>
    </svg>
  );
}
