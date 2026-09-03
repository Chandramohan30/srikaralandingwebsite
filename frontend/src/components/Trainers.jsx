import { useEffect, useRef, useState } from "react";
import { TRAINERS } from "../data.js";
import muthukumar from "../assets/trainers/muthukumar.png";
import sadhana from "../assets/trainers/sadhana.png";
import kumutha from "../assets/trainers/kumutha.png";
import chandramohan from "../assets/trainers/chandramohan.png";
import vaishnavi from "../assets/trainers/vaishnavi.png";
import vidya from "../assets/trainers/vidya.jpeg";

const PHOTOS = { muthukumar,vidya, sadhana, kumutha, chandramohan, vaishnavi };

export default function Trainers() {
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
    const card = el.querySelector(".trainers__card");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow amber">Connect With Our Experts</span>
          <h2>Learn from experienced IT Professionals</h2>
          <p className="center">India's industry practitioners, guiding you through every module of the program.</p>
        </div>
      </div>

      <div className="trainers__carousel container">
        <button
          type="button"
          className="trainers__arrow trainers__arrow--prev"
          onClick={() => scrollByCards(-1)}
          disabled={atStart}
          aria-label="Show previous trainers"
        >
          ‹
        </button>

        <div className="trainers__scroller" ref={trackRef} tabIndex={0} aria-label="Trainer carousel, scroll horizontally">
          <div className="trainers__track">
            {TRAINERS.map((t) => (
              <div className="trainers__card" key={t.name}>
                <div className="trainers__avatar">
                  <img src={PHOTOS[t.photo]} alt={`${t.name}, ${t.role}`} loading="lazy" />
                  <div className="trainers__caption">
                    <h3 className="trainers__name">{t.name}</h3>
                    <p className="trainers__role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="trainers__arrow trainers__arrow--next"
          onClick={() => scrollByCards(1)}
          disabled={atEnd}
          aria-label="Show more trainers"
        >
          ›
        </button>
      </div>
    </section>
  );
}
