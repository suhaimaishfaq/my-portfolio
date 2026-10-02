// One skill card. All the data comes in through props,
// so the same component can show HTML, C++, SQL or any other skill.
function SkillCard({ icon: Icon, name, description, level, category }) {
  // e.g. "Intermediate" -> "level-intermediate" (used for the tag colour)
  const levelClass = `level-tag level-${level.toLowerCase()}`;

  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <div className="skill-icon">
          <Icon />
        </div>
        <span className={levelClass}>{level}</span>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <span className="skill-category">{category}</span>
    </article>
  );
}

export default SkillCard;
