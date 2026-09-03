import { CERTIFICATIONS } from "../data.js";

export default function Certification() {
  return (
    <section id="certification" className="section certification">
      <div className="container certification__grid">
        <div className="certification__copy">
          <span className="eyebrow amber">Certification</span>
          <h2>Walk away with proof of what you built</h2>
          <p>
            Every capstone is reviewed and signed off before you get certified — so each certificate
            reflects a project you actually shipped, not just seat time.
          </p>

          <ul className="certification__list">
            {CERTIFICATIONS.map((c) => (
              <li key={c.name}>
                <span className="certification__list-name">{c.name}</span>
                <span className="certification__list-detail">{c.detail}</span>
              </li>
            ))}
          </ul>

          <a href="#demo-form" className="btn btn-primary">Book a Free Demo</a>
        </div>

        <div className="certification__art" aria-hidden="true">
          <div className="certification__card">
            <div className="certification__card-top">
              <span className="certification__seal">SA</span>
              <div>
                <p className="certification__card-brand">Srikara Academy</p>
                <p className="certification__card-sub">Full Stack Development with AI</p>
              </div>
            </div>
            <p className="certification__card-title">Certificate of Completion</p>
            <p className="certification__card-name">Awarded for successfully completing all<br />capstone projects and program modules</p>
            <div className="certification__card-foot">
              <span>Verified Program</span>
              <span>ID: SA-FS-AI-2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
