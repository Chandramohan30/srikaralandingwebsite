import { CONTACT } from "../data.js";

export default function StickyCTA() {
  return (
    <div className="sticky-cta">
      <a href={CONTACT.phoneHref} className="btn btn-outline sticky-cta__call">
        📞 Call us
      </a>
      <a href="#demo" className="btn btn-primary sticky-cta__demo">
        Book Free Demo
      </a>
    </div>
  );
}
