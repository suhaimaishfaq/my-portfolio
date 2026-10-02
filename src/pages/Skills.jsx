import { useState } from "react";
import SkillCard from "../components/SkillCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { skills } from "../data/skills.js";

const categories = ["All", "Web", "Programming", "Database", "CS Core", "Tools"];

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Show all skills, or only the skills of the selected category
  const visibleSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          label="Skills"
          title="What I've been learning"
          subtitle="An honest look at the languages, concepts and tools from my degree so far."
        />

        {/* Explains what each level means */}
        <div className="level-legend">
          <p>
            <span className="level-tag level-intermediate">Intermediate</span> Used in several
            course projects
          </p>
          <p>
            <span className="level-tag level-familiar">Familiar</span> Know the basics
          </p>
          <p>
            <span className="level-tag level-learning">Learning</span> Currently practising
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* One reusable SkillCard is created for every skill object */}
        <div className="skills-grid">
          {visibleSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              name={skill.name}
              description={skill.description}
              level={skill.level}
              category={skill.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
