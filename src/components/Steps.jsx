const STEPS = [
  {
    title: "Call to check",
    text: "Ask whether the service is available that day, which documents you need, and what it costs.",
  },
  {
    title: "Bring originals and copies",
    text: "Carry the original documents and a photocopy of each. If you forget the copies, we can make them here.",
  },
  {
    title: "Check and keep your receipt",
    text: "Read your details before we submit, and keep the acknowledgement slip or payment receipt safe.",
  },
];

export default function Steps() {
  return (
    <section className="section visit" id="visit">
      <div className="container">
        <header className="sec-head">
          <h2>Before you visit</h2>
          <p className="sec-ta" lang="ta">வருவதற்கு முன்</p>
        </header>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="step-num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
