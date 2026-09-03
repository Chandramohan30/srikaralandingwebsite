import { AI_TRACK_OPTIONS, FREE_COURSES } from "../data.js";

export default function FullStackAI() {
  return (
    <section id="full-stack-ai" className="section ai-track">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow amber">Zero To Hero In Coding</span>
          <h2>Advanced Full Stack Development with AI</h2>
          <p>
            From absolute beginner to AI-powered Full Stack Developer. No prior coding experience required —
            choose the track that fits your goal and budget.
          </p>
        </div>

        <div className="grid grid-3 ai-track__grid">
          {AI_TRACK_OPTIONS.map((opt) => (
            <div
              className={`card ai-track__card ${opt.featured ? "ai-track__card--featured" : ""}`}
              style={{ "--accent": opt.accent }}
              key={opt.id}
            >
              {opt.featured && <span className="ai-track__featured-flag">Most complete</span>}
              <span className="tag" style={{ "--accent": opt.accent }}>{opt.label}</span>
              <h3 className="ai-track__name">{opt.name}</h3>
              <p className="ai-track__stack">{opt.stack}</p>

              <div className="ai-track__price">
                <strong>{opt.price}</strong>
                <span>{opt.duration}</span>
              </div>

              <ul className="ai-track__bullets">
                {opt.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="ai-track__testing">
                <span className="ai-track__testing-label">Testing focus</span>
                <p>{opt.testingFocus}</p>
              </div>

              <a href="#demo" className={`btn btn-block ${opt.featured ? "btn-primary" : "btn-outline"}`}>
                Enquire about {opt.name}
              </a>
            </div>
          ))}
        </div>

        <div className="ai-track__courses">
          <h3 className="ai-track__courses-title">Free recorded courses, included at no extra cost</h3>
          <p className="ai-track__courses-lead">
            Recorded sessions that stack on top of your live classes — the higher your option, the more of these
            unlock automatically.
          </p>
          <div className="ai-track__courses-list">
            {FREE_COURSES.map((c) => (
              <div className="ai-track__course-row" key={c.name}>
                <span className="ai-track__course-name">{c.name}</span>
                <span className="ai-track__course-hours">{c.hours}</span>
                <span className="ai-track__course-scope">{c.scope}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
