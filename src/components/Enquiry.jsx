import { useState } from "react";
import { ENQUIRY_ENDPOINT } from "../data/site";

export default function Enquiry() {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") throw new Error(data.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section enquiry" id="enquiry">
      <div className="container">
        <header className="sec-head">
          <h2>Send us a message</h2>
          <p className="sec-ta" lang="ta">செய்தி அனுப்ப</p>
          <p>Leave your name and number and we'll call you back.</p>
        </header>
        <div className="enquiry-card">
          {status === "sent" ? (
            <div className="enquiry-done" role="status">
                            <h3>Message sent</h3>
              <p>We'll call you back on the number you gave.</p>
              <button type="button" className="btn btn-plain" onClick={() => setStatus("idle")}>Send another</button>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={onSubmit}>
              <input type="hidden" name="_subject" value="New enquiry from website" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <label>
                <span>Name</span>
                <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                <span>Phone No</span>
                <input
                  type="tel" name="phone" required autoComplete="tel" inputMode="tel"
                  pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number" placeholder="10-digit mobile number"
                />
              </label>
              <label className="full">
                <span>Message</span>
                <textarea name="message" rows={5} required placeholder="How can we help you?" />
              </label>
              {status === "error" && (
                <p className="enquiry-error full" role="alert">The message didn't go through. Check your connection and try again, or call us instead.</p>
              )}
              <button type="submit" className="btn btn-primary full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
