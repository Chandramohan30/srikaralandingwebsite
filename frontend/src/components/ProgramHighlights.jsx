import { PROGRAM_HIGHLIGHTS } from "../data.js";

const ICONS = {
  "Live, Instructor-Led Classes": (
    <path d="M15 10l5-3v10l-5-3M4 6h11v12H4z" />
  ),
  "AI-Native Coding": (
    <path d="M12 3l1.8 4.6L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.4L12 3zM5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15zM19 14l1 2.4L22 17l-2 1-1 2.4-1-2.4-2-1 2-.6L19 14z" />
  ),
  "Testing Built In": (
    <path d="M12 3l7 3v6c0 4.4-3 7.9-7 9-4-1.1-7-4.6-7-9V6l7-3zM9 12l2 2 4-4" />
  ),
  "7+ Real Capstone Projects": (
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 8v5M21 8v5" />
  ),
  "CoHub Platform Access": (
    <path d="M4 5h16v11H4zM9 20h6M12 16v4" />
  ),
  "Placement Support": (
    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 7h16v12H4zM4 12h16" />
  ),
};

export default function ProgramHighlights() {
  return (
    <section className="section why-track">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Program Overview</span>
          <h2>Learn to code the way companies hire in 2026</h2>
          <p className="center">
            In-person mentorship, AI as a coding partner, and automation testing skills — six things most
            bootcamps skip.
          </p>
        </div>

        <div className="why-track__grid">
          {PROGRAM_HIGHLIGHTS.map((item) => (
            <div className="why-track__item" key={item.title}>
              <span className="why-track__icon" style={{ "--accent": item.accent }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[item.title]}
                </svg>
              </span>
              <div>
                <h3 className="why-track__title">{item.title}</h3>
                <p className="why-track__detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
