import { useState } from "react";
import { SYLLABUS_MODULES, COURSE_COMBOS } from "../data.js";
import SyllabusDownloadModal from "./SyllabusDownloadModal.jsx";

const SYLLABUS_PDF = "/srikara-full-stack-ai-syllabus.pdf";

export default function Syllabus() {
  const [openModule, setOpenModule] = useState(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const half = Math.ceil(SYLLABUS_MODULES.length / 2);
  const columns = [SYLLABUS_MODULES.slice(0, half), SYLLABUS_MODULES.slice(half)];

  const toggle = (n) => setOpenModule((cur) => (cur === n ? null : n));

  return (
    <section id="syllabus" className="section syllabus">
      <div className="container syllabus__panel">
        <div className="section-head center">
          <span className="eyebrow">Syllabus Overview</span>
          <h2>Our curriculum, structured by industry experts</h2>
          <p className="center">
            13 modules covering the essentials of frontend, backend and database technologies — tap a
            module to see what's inside.
          </p>
        </div>

        <div className="syllabus__columns">
          {columns.map((col, colIndex) => (
            <div className="syllabus__list" key={colIndex}>
              {col.map((m) => {
                const isOpen = openModule === m.n;
                return (
                  <div className={`syllabus__item ${isOpen ? "syllabus__item--open" : ""}`} key={m.n}>
                    <button
                      className="syllabus__item-head"
                      onClick={() => toggle(m.n)}
                      aria-expanded={isOpen}
                      aria-controls={`module-panel-${m.n}`}
                    >
                      <span className="syllabus__item-name">Module {m.n} — {m.name}</span>
                      <span className="syllabus__item-chevron" aria-hidden="true">
                        <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 8l5 5 5-5" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="syllabus__item-body" id={`module-panel-${m.n}`}>
                        <p>{m.detail}</p>
                        <ul>
                          {m.topics.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="syllabus__combos">
          <h3>8 course combos, built from these modules</h3>
          <div className="syllabus__combos-grid">
            {COURSE_COMBOS.map((c) => (
              <div className="syllabus__combo" key={c.name}>
                <span>{c.name}</span>
                <strong>{c.duration}</strong>
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="syllabus__download" onClick={() => setShowDownloadModal(true)}>
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 3v10m0 0l-4-4m4 4l4-4M4 16h12" />
          </svg>
          Download Syllabus
        </button>
      </div>

      {showDownloadModal && (
        <SyllabusDownloadModal pdfUrl={SYLLABUS_PDF} onClose={() => setShowDownloadModal(false)} />
      )}
    </section>
  );
}
