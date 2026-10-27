const PEOPLE = [
  { en: "Students", ta: "மாணவர்கள்" },
  { en: "Families", ta: "குடும்பங்கள்" },
  { en: "Pilgrims", ta: "பக்தர்கள்" },
  { en: "Job seekers", ta: "வேலை தேடுவோர்" },
  { en: "Travellers", ta: "பயணிகள்" },
  { en: "Local shops", ta: "கடைகள்" },
  { en: "Seniors", ta: "பெரியவர்கள்" },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div>
          <header className="sec-head">
            <h2>A paperwork counter for Palani</h2>
            <p className="sec-ta" lang="ta">எங்களைப் பற்றி</p>
          </header>
          <div className="about-text">
            <p>
              We're a xerox and digital service shop on Rajendra Road. Most people come to us for something that needs a
              computer, a printer and a bit of patience: updating Aadhaar, applying through e-Sevai, paying a bill,
              booking a train, or getting a form printed and copied.
            </p>
            <p>
              If you're not comfortable with online forms, we'll fill them in with you and explain the next step.
            </p>
            <p className="muted">
              Official approvals, processing times and fees are set by the relevant departments and service providers.
            </p>
          </div>
        </div>
        <div className="people">
          <h3>Who comes to the counter</h3>
          <ul>
            {PEOPLE.map(({ en, ta }) => (
              <li key={en}>
                <span>{en}<small lang="ta">{ta}</small></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
