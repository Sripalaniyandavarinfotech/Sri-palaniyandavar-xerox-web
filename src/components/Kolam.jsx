// A pulli kolam: a diamond of rice-flour dots, each wrapped in a loop, with petal
// loops at the four tips. With `draw`, the lines are traced in one after another,
// the way a kolam is drawn on a doorstep in the morning.

const ROWS = [1, 3, 5, 3, 1];
const GAP = 64;

function buildKolam() {
  const dots = [];
  const mid = (ROWS.length - 1) / 2;
  ROWS.forEach((count, r) => {
    for (let c = 0; c < count; c++) {
      const x = (c - (count - 1) / 2) * GAP;
      const y = (r - mid) * GAP;
      dots.push({ x, y });
    }
  });

  // Each dot gets a rounded diamond whose corners meet its neighbours' corners.
  const h = GAP / 2;
  const loops = dots.map(({ x, y }) =>
    `M ${x} ${y - h} Q ${x + h * 0.9} ${y - h * 0.9} ${x + h} ${y} Q ${x + h * 0.9} ${y + h * 0.9} ${x} ${y + h} ` +
    `Q ${x - h * 0.9} ${y + h * 0.9} ${x - h} ${y} Q ${x - h * 0.9} ${y - h * 0.9} ${x} ${y - h} Z`
  );

  // Petals at the top, right, bottom and left tips of the diamond.
  const tip = mid * GAP + h;
  const petal = (angle) => {
    const p = `M 0 ${-tip} C ${-h * 1.3} ${-tip - h * 1.6} ${h * 1.3} ${-tip - h * 1.6} 0 ${-tip}`;
    return { d: p, rotate: angle };
  };
  const petals = [0, 90, 180, 270].map(petal);

  // Smaller petals on the diagonals, just outside the corner loops.
  const d0 = GAP * 1.95;
  const diagonal = `M 0 ${-d0} C ${-h * 0.9} ${-d0 - h * 1.7} ${h * 0.9} ${-d0 - h * 1.7} 0 ${-d0}`;
  [45, 135, 225, 315].forEach((rotate) => petals.push({ d: diagonal, rotate }));

  // A four-pointed star line that weaves across the loops.
  const t = tip + h * 0.35;
  const k = t * 0.16;
  const star =
    `M 0 ${-t} Q ${k} ${-k} ${t} 0 Q ${k} ${k} 0 ${t} Q ${-k} ${k} ${-t} 0 Q ${-k} ${-k} 0 ${-t} Z`;

  // A big outer ring that ties the whole kolam together.
  const ring = tip + h * 1.5;
  return { dots, loops, petals, star, ring };
}

const KOLAM = buildKolam();

export default function Kolam({ className = "", draw = false }) {
  const { dots, loops, petals, star, ring } = KOLAM;
  const size = ring + 12;
  let i = 0;

  return (
    <svg
      className={`kolam ${draw ? "kolam-draw" : ""} ${className}`}
      viewBox={`${-size} ${-size} ${size * 2} ${size * 2}`}
      aria-hidden="true"
    >
      <circle className="kolam-line" r={ring} pathLength="1" style={{ "--i": i++ }} />
      {loops.map((d) => <path key={d} className="kolam-line" d={d} pathLength="1" style={{ "--i": i++ }} />)}
      <path className="kolam-line kolam-star" d={star} pathLength="1" style={{ "--i": i++ }} />
      {petals.map(({ d, rotate }) => (
        <path key={rotate} className="kolam-line" d={d} transform={`rotate(${rotate})`} pathLength="1" style={{ "--i": i++ }} />
      ))}
      {dots.map(({ x, y }) => <circle key={`${x},${y}`} className="kolam-dot" cx={x} cy={y} r="4.5" />)}
    </svg>
  );
}
