import { useEffect, useState } from "react";

// Opening animation: the logo appears, the shop name "prints" onto a sheet as a
// scan light passes over it, a CMYK strip runs underneath, then the sheet slides
// away. It plays once per visit, any tap or key skips it, and it is left out
// entirely for people who prefer reduced motion.

const SEEN_KEY = "intro-seen";
const SHOW_MS = 2300;
const EXIT_MS = 500;

const shouldPlay = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return !sessionStorage.getItem(SEEN_KEY);
  } catch {
    return true;
  }
};

export default function Intro() {
  const [phase, setPhase] = useState(() => (shouldPlay() ? "show" : "done"));

  useEffect(() => {
    if (phase === "done") return;
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch { /* storage blocked: intro just plays again */ }
    document.body.classList.add("no-scroll");

    const leave = () => setPhase((p) => (p === "show" ? "leaving" : p));
    const timer = setTimeout(leave, SHOW_MS);
    window.addEventListener("keydown", leave);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", leave);
    };
  }, [phase === "done"]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase !== "leaving") return;
    const timer = setTimeout(() => {
      setPhase("done");
      document.body.classList.remove("no-scroll");
    }, EXIT_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`intro ${phase === "leaving" ? "intro-leaving" : ""}`}
      aria-hidden="true"
      onClick={() => setPhase("leaving")}
    >
      <div className="intro-sheet">
        <img className="intro-logo" src="/logo.webp" alt="" width="160" height="160" />
        <div className="intro-print-area">
          <div className="intro-print">
            <p className="intro-name">Sri Palaniyandavar Xerox</p>
            <p className="intro-ta" lang="ta">ஸ்ரீ பழனியாண்டவர் ஜெராக்ஸ்</p>
            <ul className="intro-roles">
              <li className="b-xerox">Xerox</li>
              <li className="b-aadhaar">Aadhaar</li>
              <li className="b-esevai">e-Sevai</li>
              <li className="b-csc">CSC</li>
            </ul>
          </div>
          <span className="intro-scan" />
        </div>
        <span className="intro-cmyk" />
      </div>
      <span className="intro-skip">Tap to skip</span>
    </div>
  );
}
