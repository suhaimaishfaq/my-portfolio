import { FaHeart } from "react-icons/fa";
import SocialLinks from "./SocialLinks.jsx";
import { profile } from "../data/profile.js";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-info">
          <h3>{profile.name}</h3>
          <p>BS Computer Science Student</p>
          <p>University of Management and Technology, Lahore</p>
        </div>

        <SocialLinks size="small" />
      </div>

      <p className="footer-bottom">
        © {currentYear} {profile.name} · Made with <FaHeart className="heart" /> using React
      </p>
    </footer>
  );
}

export default Footer;
