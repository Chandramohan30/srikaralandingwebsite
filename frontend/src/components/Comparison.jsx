import { INCLUDED_MATRIX } from "../data.js";

function Cell({ value }) {
  if (value === true) return <span className="compare__yes">✓</span>;
  if (value === false) return <span className="compare__no">—</span>;
  return <span className="compare__partial">{value}</span>;
}

export default function Comparison() {
  return (
    <section id="compare" className="section compare">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Included At No Extra Cost</span>
          <h2>What's included in each offline combo</h2>
          <p>A side-by-side look at IGNITE and ASCEND, so you can see exactly what changes as you go further.</p>
        </div>

        <div className="compare__table">
          <div className="compare__row compare__row--head">
            <span>Inclusion</span>
            <span className="compare__col-ignite">Ignite</span>
            <span className="compare__col-ascend">Ascend</span>
          </div>
          {INCLUDED_MATRIX.map((row) => (
            <div className="compare__row" key={row.label}>
              <span className="compare__label">{row.label}</span>
              <span className="compare__col-ignite"><Cell value={row.ignite} /></span>
              <span className="compare__col-ascend"><Cell value={row.ascend} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
