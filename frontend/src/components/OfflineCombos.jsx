import { useState } from "react";
import { OFFLINE_COMBOS } from "../data.js";

export default function OfflineCombos() {
  const [active, setActive] = useState("IGNITE");
  const combo = OFFLINE_COMBOS.find((c) => c.id === active);

  return (
    <section id="offline-programs" className="section offline">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">2 Offline Combos</span>
          <h2>Choose the combo that fits your goal</h2>
          <p>Start with Ignite, or go straight for the full AI-powered Full Stack track.</p>
        </div>

        <div className="grid grid-2 offline__summary">
          {OFFLINE_COMBOS.map((c) => (
            <div
              className="card offline__summary-card"
              style={{ "--accent": c.accent }}
              key={c.id}
            >
              <span className="tag" style={{ "--accent": c.accent }}>
                {c.combo}
              </span>
              <h3 className="offline__summary-name">{c.name}</h3>
              <p className="offline__summary-tagline">{c.tagline}</p>
              <p className="offline__summary-stack">{c.stack}</p>

              <div className="offline__summary-duration">
                <span>{c.duration} · {c.cadence}</span>
              </div>

              <ul className="offline__summary-bullets">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <button
                className={`btn btn-block ${active === c.id ? "btn-primary" : "btn-outline"}`}
                onClick={() => setActive(c.id)}
              >
                {active === c.id ? "Viewing details below ↓" : `See ${c.name} in detail`}
              </button>
            </div>
          ))}
        </div>

        <div className="offline__detail card" style={{ "--accent": combo.accent }}>
          <div className="offline__detail-head">
            <h3>{combo.name} — {combo.tagline}</h3>
            <span className="offline__detail-hours">
              {combo.totalHours || `${combo.subcombos.length} stack combinations`}
            </span>
          </div>

          {combo.modules && (
            <div className="offline__table" role="table">
              <div className="offline__table-row offline__table-row--head" role="row">
                <span role="columnheader">Module</span>
                <span role="columnheader">Hours</span>
                <span role="columnheader">Capstone / Output</span>
              </div>
              {combo.modules.map((m) => (
                <div className="offline__table-row" role="row" key={m.name}>
                  <span role="cell">{m.name}</span>
                  <span role="cell" className="offline__table-hours">{m.hours}</span>
                  <span role="cell" className="offline__table-output">{m.output}</span>
                </div>
              ))}
            </div>
          )}

          {combo.subcombos && (
            <>
              <p className="offline__subcombo-lead">
                Every path shares the same SQL/PostgreSQL, deployment track & Playwright AI testing — only the
                frameworks change.
              </p>
              <div className="grid grid-3 offline__subcombo-grid">
                {combo.subcombos.map((s) => (
                  <div className="offline__subcombo" key={s.name}>
                    <h4>{s.name}</h4>
                    <p>{s.frontend} frontend + {s.backend} backend</p>
                  </div>
                ))}
              </div>

              <div className="offline__capstones">
                {combo.capstones.map((cap) => (
                  <div className="offline__capstone" key={cap.n}>
                    <span className="offline__capstone-n">{cap.n}</span>
                    <div>
                      <h4>{cap.name}</h4>
                      <p>{cap.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="offline__roles">
            <span className="offline__roles-label">Targets these roles:</span>
            {combo.roles.map((r) => (
              <span className="offline__role-pill" key={r}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
