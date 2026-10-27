// A photocopier in line art, seen from the front. Its outline draws in once,
// then it runs a copy on a loop: the lid lifts, a document drops onto the
// glass, the lid closes, the scan light sweeps across, and the printed copy
// slides down out of the paper slot on the front of the machine.

const BODY = [
  // Main body
  "M 80 128 H 320 Q 330 128 330 138 V 330 Q 330 340 320 340 H 80 Q 70 340 70 330 V 138 Q 70 128 80 128 Z",
  // Scanner unit (the glass sits on top of it)
  "M 78 96 H 322 Q 330 96 330 104 V 128 H 70 V 104 Q 70 96 78 96 Z",
  // Control panel on the right, with its screen
  "M 330 100 H 366 Q 374 100 374 108 V 122 Q 374 128 366 128 H 330",
  "M 338 106 H 356 V 120 H 338 Z",
  // Paper drawers and their handles
  "M 70 236 H 330",
  "M 70 288 H 330",
  "M 180 260 H 220",
  "M 180 312 H 220",
  // Feet
  "M 92 340 V 352 H 112 V 340",
  "M 288 340 V 352 H 308 V 340",
];

// The lid hinges at its right end, so it lifts from the left.
const LID = "M 84 78 H 316 Q 322 78 322 84 V 96 H 78 V 84 Q 78 78 84 78 Z";

export default function Copier({ className = "" }) {
  let i = 0;
  return (
    <svg className={`copier ${className}`} viewBox="0 0 400 370" aria-hidden="true">
      <defs>
        {/* Only the part of the copy below the slot is visible, so it looks like it comes out of it */}
        <clipPath id="copier-slot">
          <rect x="0" y="160" width="400" height="80" />
        </clipPath>
      </defs>

      {BODY.map((d) => (
        <path key={d} className="art-line" d={d} pathLength="1" style={{ "--i": i++ }} />
      ))}
      <circle className="art-line" cx="365" cy="114" r="4" pathLength="1" style={{ "--i": i++ }} />

      {/* Paper slot and the status light beside it */}
      <rect className="slot" x="110" y="155" width="180" height="7" rx="3.5" />
      <circle className="copier-led" cx="306" cy="158" r="5" />

      {/* The finished copy, sliding down out of the slot */}
      <g clipPath="url(#copier-slot)">
        <g className="copy-sheet">
          <rect className="sheet" x="128" y="160" width="144" height="58" rx="2" />
          <path className="sheet-text" d="M 142 176 H 222 M 142 188 H 256 M 142 200 H 238" />
        </g>
      </g>

      {/* Scan light: a bright bar with a soft glow, moving across the scanner */}
      <g className="scan">
        <rect className="scan-glow" x="66" y="104" width="44" height="18" rx="5" />
        <rect className="scan-bar" x="84" y="104" width="8" height="18" rx="3" />
      </g>

      {/* Original document, placed on the glass while the lid is up */}
      <g className="doc">
        <rect className="sheet" x="110" y="48" width="160" height="48" rx="2" />
        <path className="sheet-text" d="M 124 60 H 204 M 124 70 H 246 M 124 80 H 228" />
      </g>

      <g className="lid">
        <path className="art-line" d={LID} pathLength="1" style={{ "--i": i++ }} />
      </g>
    </svg>
  );
}
