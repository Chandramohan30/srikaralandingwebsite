import { PROJECTS } from "../data.js";


const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const LOGO = {
  html: `${DEVICON}/html5/html5-original.svg`,
  css: `${DEVICON}/css3/css3-original.svg`,
  js: `${DEVICON}/javascript/javascript-original.svg`,
  bootstrap: `${DEVICON}/bootstrap/bootstrap-original.svg`,
  react: `${DEVICON}/react/react-original.svg`,
  python: `${DEVICON}/python/python-original.svg`,
  django: `${DEVICON}/django/django-plain.svg`,
  postgresql: `${DEVICON}/postgresql/postgresql-original.svg`,
};

// Short display label + the real logos badged around it, per project.
const PROJECT_META = {
  "srikara-blog-html": { label: "BLOG", logos: ["html"] },
  "srikara-blog-css": { label: "RESPONSIVE BLOG", logos: ["html", "css"] },
  "srikara-blog-js": { label: "DYNAMIC BLOG", logos: ["html", "css", "js"] },
  "srikara-pricing": { label: "PRICING UI", logos: ["bootstrap"] },
  "srikara-portfolio": { label: "PORTFOLIO", logos: ["react"] },
  "srikara-breakout": { label: "GAME DEVELOPMENT", logos: ["python"] },
  "srikara-api": { label: "REST API", logos: ["django", "postgresql"] },
  "srikara-fullstack": { label: "FULL STACK", logos: ["react", "django", "postgresql"] },
};

// Badge positions: 2 logos sit above the title box (left/right); a 3rd sits
// below it — same "linked in by a dashed line" layout as the reference image.
const BADGE_POSITIONS = [
  { cx: 118, cy: 70 },
  { cx: 362, cy: 70 },
  { cx: 240, cy: 70 },
];

function TitleCard({ seed, accent }) {
  const meta = PROJECT_META[seed] || { label: "PROJECT", logos: [] };
  const gid = `grad-${seed}`;
  const fontSize = meta.label.length > 8 ? 32 : 42;
  const boxY = 118;
  const boxH = 68;
  const boxCenterY = boxY + boxH / 2;

  return (
    <svg viewBox="0 0 480 300" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1720" />
          <stop offset="60%" stopColor="#122430" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="480" height="300" fill={`url(#${gid})`} />

      {/* dashed connectors from badges into the title box */}
      {meta.logos.map((_, i) => {
        const pos = BADGE_POSITIONS[i];
        const boxEdgeY = pos.cy < boxCenterY ? boxY : boxY + boxH;
        return (
          <line
            key={`line-${i}`}
            x1={pos.cx}
            y1={pos.cy}
            x2={240}
            y2={boxEdgeY}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
        );
      })}

      {/* title box */}
      <rect x="60" y={boxY} width="360" height={boxH} rx="4" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <text
        x="240"
        y={boxCenterY + fontSize * 0.35}
        textAnchor="middle"
        fontFamily="'Segoe UI', system-ui, sans-serif"
        fontWeight="700"
        fontSize={fontSize}
        fill="#fff"
      >
        {meta.label}
      </text>

      {/* logo badges */}
      {meta.logos.map((key, i) => {
        const pos = BADGE_POSITIONS[i];
        return (
          <g key={key}>
            <circle cx={pos.cx} cy={pos.cy} r="27" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
            <image href={LOGO[key]} x={pos.cx - 16} y={pos.cy - 16} width="32" height="32" />
          </g>
        );
      })}
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow violet">Capstone Projects</span>
          <h2>Build a real, deployable portfolio</h2>
          <p className="center">
            Every module ends in a project — from a static blog to a full-stack, role-based, deployed
            application.
          </p>
        </div>

        <div className="grid grid-3 projects__grid">
          {PROJECTS.map((p) => (
            <div className="card projects__card" key={p.seed} style={{ "--accent": "var(--cyan)" }}>
              <div className="projects__thumb">
                <TitleCard seed={p.seed} accent="var(--cyan)" />
                <span className="projects__thumb-tag">Capstone {p.n}</span>
              </div>
              <span className="tag" style={{ "--accent": "var(--cyan)" }}>{p.tech}</span>
              <h3 className="projects__name">{p.name}</h3>
              <p className="projects__detail">{p.detail}</p>
            </div>
          ))}
        </div>
        <p className="projects__note">Real tech marks for the stack you'll actually build each capstone with.</p>
      </div>
    </section>
  );
}