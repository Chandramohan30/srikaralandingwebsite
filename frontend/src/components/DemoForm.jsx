import { useState } from "react";
import { createLead } from "../api.js";
import { CONTACT } from "../data.js";

const PROGRAM_OPTIONS = [
  { value: "NOT_SURE", label: "Not sure yet" },
  { value: "IGNITE", label: "Ignite (Offline, ₹35,000)" },
  { value: "ASCEND", label: "Ascend (Offline, ₹45,000)" }

];

const initialForm = { name: "", phone: "", email: "", program: "NOT_SURE", message: "" };

export function DemoFormFields({
  form,
  update,
  status,
  errorMsg,
  handleSubmit,
  compact,
  title,
  submitLabel,
  hideHeading,
}) {
  return (
    <form className={`demo__form card ${compact ? "demo__form--compact" : ""}`} onSubmit={handleSubmit} style={{ "--accent": "var(--amber)" }}>
      {!hideHeading && <h3>{title || (compact ? "I'm Interested" : "Book your free demo")}</h3>}

      <label>
        Full name
        <input
          type="text"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Your name"
          maxLength={100}
        />
      </label>

      <div className="demo__form-row">
        <label>
          Phone number
          <input
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="9XXXXXXXXX"
            maxLength={20}
          />
        </label>
        <label>
          Email (optional)
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            maxLength={150}
          />
        </label>
      </div>

      <label>
        Which combo interests you?
        <select value={form.program} onChange={update("program")}>
          {PROGRAM_OPTIONS.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </label>

      {!compact && (
        <label>
          Anything else we should know? (optional)
          <textarea
            value={form.message}
            onChange={update("message")}
            placeholder="Your background, preferred batch timing, etc."
            rows={3}
            maxLength={500}
          />
        </label>
      )}

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : submitLabel || "Book your free demo session →"}
      </button>

      {status === "success" && (
        <p className="demo__status demo__status--success">
          Thanks! We've received your request — our team will call you shortly.
        </p>
      )}
      {status === "error" && <p className="demo__status demo__status--error">{errorMsg}</p>}
    </form>
  );
}

export function useDemoForm(source) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await createLead({ ...form, source });
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return { form, update, status, errorMsg, handleSubmit };
}

export default function DemoForm() {
  const { form, update, status, errorMsg, handleSubmit } = useDemoForm("landing-page-demo-form");

  return (
    <section id="demo" className="section demo">
      <div className="container demo__inner">
        <div className="demo__copy">
          <span className="eyebrow amber">Special discount — first 20 students only</span>
          <h2>Ready to go from zero to AI-powered developer?</h2>
          <p>
            Pick your combo — Ignite, Ascend, or one of the Full Stack + AI options — and book a free demo class
            today. Sit in on a live session before you enroll.
          </p>

          <div className="demo__phone">
            <span>Prefer to talk it through?</span>
            <a href={CONTACT.phoneHref}> {CONTACT.phone}</a>
          </div>
        </div>

        <DemoFormFields form={form} update={update} status={status} errorMsg={errorMsg} handleSubmit={handleSubmit} />
      </div>
    </section>
  );
}
