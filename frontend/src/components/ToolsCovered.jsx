import { useEffect, useRef, useState } from "react";
import { TOOLS } from "../data.js";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
// Map each tool label to a devicon slug + variant. Tools without a devicon
// entry fall back to a plain text chip so nothing renders broken.
const ICON_MAP = {
  "HTML5": "html5/html5-original",
  "CSS3": "css3/css3-original",
  "Bootstrap": "bootstrap/bootstrap-original",
  "JavaScript": "javascript/javascript-original",
  "TypeScript": "typescript/typescript-original",
  "React JS": "react/react-original",
  "Next.js": "nextjs/nextjs-original",
  "Node.js": "nodejs/nodejs-original",
  "Express": "express/express-original",
  "Python": "python/python-original",
  "Django": "django/django-plain",
  "Java": "java/java-original",
  "Spring Boot": "spring/spring-original",
  "SQL": "mysql/mysql-original",
  "PostgreSQL": "postgresql/postgresql-original",
  "Git & GitHub": "git/git-original",
  "Postman": "postman/postman-original",
};

const PAGE_SIZE = 6;

export default function ToolsCovered() {
  const scrollerRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const pages = [];
  for (let i = 0; i < TOOLS.length; i += PAGE_SIZE) {
    pages.push(TOOLS.slice(i, i + PAGE_SIZE));
  }

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const page = Math.round(el.scrollLeft / el.clientWidth);
      setActivePage(page);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goToPage = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="section tools-covered">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow violet">Tools Covered</span>
          <h2>Everything you'll actually build with</h2>
        </div>

        <div className="tools-covered__scroller" ref={scrollerRef}>
          {pages.map((page, pageIndex) => (
            <div className="tools-covered__page" key={pageIndex}>
              {page.map((tool) => {
                const slug = ICON_MAP[tool];
                return (
                  <div className="tools-covered__tile" key={tool}>
                    {slug ? (
                      <img src={`${ICON_BASE}/${slug}.svg`} alt={tool} loading="lazy" />
                    ) : (
                      <span className="tools-covered__fallback">{tool.slice(0, 2)}</span>
                    )}
                    <span>{tool}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {pages.length > 1 && (
          <div className="tools-covered__dots" role="tablist" aria-label="Tools pages">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={activePage === i}
                aria-label={`Show tools page ${i + 1}`}
                className={`tools-covered__dot ${activePage === i ? "tools-covered__dot--active" : ""}`}
                onClick={() => goToPage(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
