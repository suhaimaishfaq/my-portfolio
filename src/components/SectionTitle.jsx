// Small reusable heading used at the top of every section/page
function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="section-title">
      {label && <span className="section-label">{label}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
