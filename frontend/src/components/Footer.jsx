import logo from "../assets/logo.jpeg";
import { CONTACT, NAV_LINKS } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Srikara Training and Placement Academy" />
          <p>Live classroom & live online full stack development training — supercharged with AI.</p>
        </div>

        <nav className="footer__links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="footer__contact">
          <a href={CONTACT.phoneHref}>📞 {CONTACT.phone}</a>
          <span>🌐 {CONTACT.website}</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Srikara Training and Placement Academy. All rights reserved.</span>
      </div>
    </footer>
  );
}
