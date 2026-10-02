import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaCode, FaCloudSun, FaTasks, FaBars, FaTimes } from "react-icons/fa";

// List of navigation links (path, text and icon)
const navLinks = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/skills", label: "Skills", icon: <FaCode /> },
  { path: "/weather", label: "Weather", icon: <FaCloudSun /> },
  { path: "/todo", label: "To-Do", icon: <FaTasks /> },
];

function Navbar() {
  // true = mobile menu is open, false = closed
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-badge">SI</span>
          <span className="logo-text">
            Suhaima<span className="logo-dot">.</span>
          </span>
        </Link>

        {/* Hamburger button (only visible on small screens) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map((link) => (
            // NavLink automatically knows if its page is active
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
