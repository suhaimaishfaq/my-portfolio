import { socialLinks } from "../data/profile.js";

// Reusable list of social icons. Used on the Home page and in the Footer.
// The "size" prop changes the style: "large" (Home) or "small" (Footer).
function SocialLinks({ size = "large" }) {
  return (
    <div className={`social-links social-${size}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon; // component stored in the data file
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
