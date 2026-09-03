export default function CourseBanner() {
  return (
    <section className="course-banner">
      <div className="container course-banner__inner">
        <div className="course-banner__copy">
          <h2>
            Online Learning with Weekend/Weekday <br className="course-banner__break" />
            Live classes and Mentoring Sessions
          </h2>
          <div className="course-banner__actions">
            <a href="#demo" className="btn btn-primary course-banner__enroll">
              Enroll Now
            </a>
            <a href="#full-stack-ai" className="btn course-banner__callback">
              Request a call back
            </a>
          </div>
        </div>

        <div className="course-banner__art" aria-hidden="true">
          <span className="course-banner__tag course-banner__tag--css">CSS</span>
          <span className="course-banner__tag course-banner__tag--html">HTML</span>
          <span className="course-banner__tag course-banner__tag--js">JS</span>
          <span className="course-banner__tag course-banner__tag--react">React</span>
          <span className="course-banner__tag course-banner__tag--code">&lt;/&gt;</span>

          <svg viewBox="0 0 320 220" className="course-banner__laptop" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="20" width="200" height="130" rx="8" fill="#123524" stroke="#3fae72" strokeWidth="2" />
            <rect x="72" y="32" width="176" height="106" rx="3" fill="#0c2417" />
            <rect x="84" y="46" width="90" height="6" rx="3" fill="#e6c25c" />
            <rect x="84" y="60" width="60" height="6" rx="3" fill="#e7677a" />
            <rect x="84" y="74" width="120" height="6" rx="3" fill="#f4f4f4" opacity="0.85" />
            <rect x="84" y="88" width="70" height="6" rx="3" fill="#f4f4f4" opacity="0.6" />
            <rect x="84" y="102" width="100" height="6" rx="3" fill="#e6c25c" />
            <rect x="84" y="116" width="50" height="6" rx="3" fill="#e7677a" />
            <path d="M50 150 L270 150 L286 172 L34 172 Z" fill="#0f2b1c" stroke="#3fae72" strokeWidth="2" />
            <rect x="150" y="158" width="20" height="6" rx="3" fill="#3fae72" opacity="0.6" />
          </svg>

          <div className="course-banner__cup" aria-hidden="true">
            <div className="course-banner__steam" />
          </div>
        </div>
      </div>
    </section>
  );
}
