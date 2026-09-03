import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.jpeg";
import { NAV_LINKS, CONTACT } from "../data.js";

// GUVI-style short tab strip — a curated subset of NAV_LINKS shown as the
// sticky "Overview / Syllabus / Certification / Placement&Pricing / FAQ"
// row directly under the main header.
const TAB_LINKS = [
  { label: "Overview", href: "#top" },
  { label: "Syllabus", href: "#syllabus" },
  { label: "Certification", href: "#certification" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(TAB_LINKS[0].href);
  const tabsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever tab's section is currently in view.
  useEffect(() => {
    const sections = TAB_LINKS
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = tabsRef.current?.querySelector(`a[href="${active}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Srikara Training and Placement Academy" />
        </a>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={CONTACT.phoneHref} className="navbar__phone">
            {CONTACT.phone}
          </a>
        </nav>

        <div className="navbar__actions">
          <a href="#demo" className="btn btn-primary navbar__cta">
            Book Free Demo
          </a>
          <button
            className="navbar__burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      
    </header>
  );
}
