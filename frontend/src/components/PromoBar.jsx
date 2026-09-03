import { useState } from "react";

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="promo-bar">
      <span>
        🔥 Limited seats this batch — <strong>first 20 students get a discount</strong>. Book a free demo today!
      </span>
      <button aria-label="Dismiss" onClick={() => setVisible(false)}>×</button>
    </div>
  );
}
