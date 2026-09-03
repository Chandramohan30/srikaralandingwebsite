import { useEffect, useRef, useState } from "react";
import { SUCCESS_STORIES } from "../data.js";
import review1 from "../assets/success/reviews-1.png";
import review2 from "../assets/success/reviews-2.png";
import review3 from "../assets/success/reviews-3.png";

const REVIEW_IMAGES = [
  { src: review1, alt: "Google reviews from Srikara Academy students, page 1" },
  { src: review2, alt: "Google reviews from Srikara Academy students, page 2" },
  { src: review3, alt: "Google reviews from Srikara Academy students, page 3" },
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function SuccessStories() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".story-card");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  return (
    <section id="success-stories" className="section success-stories">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow amber">Student Reviews</span>
          <h2>
            Real <span className="success-stories__accent">Success Stories</span> of Our Students
          </h2>
          <p className="center">
            Many of our students have successfully secured opportunities in growing companies — proving the
            right training can truly change a career path.
          </p>
        </div>
      </div>

      <div className="story-carousel container">
        <button
          type="button"
          className="story-arrow story-arrow--prev"
          onClick={() => scrollByCards(-1)}
          disabled={atStart}
          aria-label="Show previous success stories"
        >
          ‹
        </button>

        <div className="story-scroller" ref={trackRef} tabIndex={0} aria-label="Success stories carousel, scroll horizontally">
          <div className="story-track">
            {SUCCESS_STORIES.map((s) => (
              <article className="story-card" key={s.name}>
                <div className="story-card__top">
                  <div className="story-card__avatar" aria-hidden="true">
                    {initials(s.name)}
                  </div>
                  <h3 className="story-card__name">{s.name}</h3>

                  <ol className="story-card__timeline">
                    <li>
                      <span className="story-card__icon story-card__icon--before" aria-hidden="true">
                        ↺
                      </span>
                      <div>
                        <span className="story-card__label">Before Srikara</span>
                        <strong>{s.before}</strong>
                      </div>
                    </li>
                    <li>
                      <span className="story-card__icon story-card__icon--course" aria-hidden="true">
                        🎓
                      </span>
                      <div>
                        <span className="story-card__label">At Srikara</span>
                        <strong>{s.course}</strong>
                      </div>
                    </li>
                    <li>
                      <span className="story-card__icon story-card__icon--now" aria-hidden="true">
                        ●
                      </span>
                      <div>
                        <span className="story-card__label">Now</span>
                        <strong>{s.now}</strong>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="story-card__bottom">
                  <span className="story-card__company">{s.company}</span>
                  <div className="story-card__ctc">
                    Annual CTC: <strong>{s.ctc}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="story-arrow story-arrow--next"
          onClick={() => scrollByCards(1)}
          disabled={atEnd}
          aria-label="Show more success stories"
        >
          ›
        </button>
      </div>

      <div className="container">
        <div className="success-stories__gallery">
          {REVIEW_IMAGES.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
