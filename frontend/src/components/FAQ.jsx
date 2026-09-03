import { useState } from "react";
import { FAQS } from "../data.js";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow violet">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`} key={item.q}>
                <button className="faq__q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <span className="faq__chevron">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="faq__a">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
