import { CAREER_ROLES } from "../data.js";

export default function Careers() {
  return (
    <section id="careers" className="section careers">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow violet">Career Outcomes</span>
          <h2>Job roles you can target</h2>
          <p>Every track is mapped to real, hiring-active job titles — not just a certificate.</p>
        </div>

        <div className="grid grid-3">
          {CAREER_ROLES.map((role) => (
            <div className="card careers__card" key={role.title} style={{ "--accent": "var(--cyan)" }}>
              <h3 className="careers__title">{role.title}</h3>
              <p className="careers__detail">{role.detail}</p>
              <div className="careers__tags">
                {role.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
