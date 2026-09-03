import { COURSE, CONTACT } from "../data.js";
import { DemoFormFields, useDemoForm } from "./DemoForm.jsx";

export default function CourseHero() {
  const { form, update, status, errorMsg, handleSubmit } = useDemoForm("course-hero-form");

  return (
    <>
      <section id="top" className="hero">
        <div className="container hero__inner">
          <div className="hero__copy reveal">
            <span className="hero__badge">🔥 {COURSE.badge}</span>

            <h1 className="hero__title">{COURSE.name}</h1>
            <p className="hero__subtitle">{COURSE.tagline}</p>

            <p className="hero__lead">{COURSE.lead}</p>

            <div className="hero__actions">
              <a href="#demo" className="btn btn-primary">
                Book your free demo session →
              </a>
              <a href={CONTACT.phoneHref} className="btn btn-outline">
                Call {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="hero__panel reveal">
            <DemoFormFields
              form={form}
              update={update}
              status={status}
              errorMsg={errorMsg}
              handleSubmit={handleSubmit}
              compact
            />
          </div>
        </div>
      </section>

      <div className="info-strip">
        <div className="container info-strip__inner">
          {COURSE.stats.map((s) => (
            <div className="info-strip__item" key={s.label}>
              <span className="info-strip__label">{s.label}</span>
              <strong className="info-strip__value">{s.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
