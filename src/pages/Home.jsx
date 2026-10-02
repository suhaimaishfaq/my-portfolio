import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCloudSun,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaUniversity,
  FaBookOpen,
  FaLaptopCode,
  FaReact,
  FaJs,
  FaCode,
  FaDatabase,
  FaPuzzlePiece,
  FaPaintBrush,
} from "react-icons/fa";

import SocialLinks from "../components/SocialLinks.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile } from "../data/profile.js";

// PROFILE PICTURE: to change it, replace src/assets/profile.jpg
// with a new square photo that has the same file name.
import profileImage from "../assets/profile.jpg";

// Courses shown in the Education section
const academicAreas = [
  "Programming Fundamentals",
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Database Systems",
  "Operating Systems",
  "Software / Project Management",
];

// Topics shown in the "Currently Learning" section
const interests = [
  { name: "Web Development", icon: FaLaptopCode },
  { name: "React JS", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "Software Development", icon: FaCode },
  { name: "Database Systems", icon: FaDatabase },
  { name: "Problem Solving", icon: FaPuzzlePiece },
  { name: "UI Development", icon: FaPaintBrush },
];

function Home() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text fade-in">
            <span className="hero-badge">
              <FaMapMarkerAlt /> {profile.location}
            </span>

            <h1>
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            <h2 className="hero-role">BS Computer Science Student</h2>

            <p className="hero-intro">
              I am a 5th-semester Computer Science student at the University of Management and
              Technology, Lahore, interested in software development, web technologies and problem
              solving.
            </p>

            <div className="hero-buttons">
              <Link to="/skills" className="btn btn-primary">
                View My Skills <FaArrowRight />
              </Link>
              <Link to="/weather" className="btn btn-outline">
                <FaCloudSun /> Try Weather App
              </Link>
            </div>

            <SocialLinks size="large" />
          </div>

          <div className="hero-image fade-in">
            <div className="profile-frame">
              <img src={profileImage} alt={`${profile.name} profile`} />
            </div>
            <span className="floating-chip chip-one">&lt;React /&gt;</span>
            <span className="floating-chip chip-two">{"{ C++ }"}</span>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ME ---------- */}
      <section className="section">
        <div className="container">
          <SectionTitle label="About Me" title="Getting to know me" />

          <div className="about-card card">
            <p>
              I'm Suhaima Ishfaq, currently in the 5th semester of my BS Computer Science degree at
              the University of Management and Technology (UMT), Lahore. Through my coursework I
              have built a base in programming, object-oriented design, data structures, databases
              and operating systems.
            </p>
            <p>
              Lately I have been spending more time on web development. I enjoy turning ideas into
              small working projects, like this portfolio with its weather and to-do apps, and I am
              trying to get better at writing clean code and solving problems step by step.
            </p>

            <div className="about-facts">
              <div className="fact">
                <FaGraduationCap />
                <div>
                  <span>Degree</span>
                  <strong>{profile.degree}</strong>
                </div>
              </div>
              <div className="fact">
                <FaUniversity />
                <div>
                  <span>University</span>
                  <strong>UMT, Lahore</strong>
                </div>
              </div>
              <div className="fact">
                <FaBookOpen />
                <div>
                  <span>Current Status</span>
                  <strong>{profile.semester}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EDUCATION ---------- */}
      <section className="section section-tinted">
        <div className="container">
          <SectionTitle label="Education" title="Where I'm studying" />

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot">
                <FaGraduationCap />
              </div>

              <div className="timeline-card card">
                <span className="timeline-status">Currently enrolled · {profile.semester}</span>
                <h3>{profile.degree}</h3>
                <p className="timeline-uni">
                  <FaUniversity /> {profile.university}
                </p>

                <h4>Relevant academic areas</h4>
                <div className="chip-list">
                  {academicAreas.map((area) => (
                    <span key={area} className="chip">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CURRENT LEARNING / INTERESTS ---------- */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Interests"
            title="What I'm currently learning"
            subtitle="Areas I'm exploring alongside my university courses."
          />

          <div className="interest-grid">
            {interests.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="interest-card">
                  <Icon />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
