import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Basic profile information used on the Home page and in the Footer
export const profile = {
  name: "Suhaima Ishfaq",
  degree: "BS Computer Science",
  university: "University of Management and Technology (UMT), Lahore",
  semester: "5th Semester",
  location: "Lahore, Pakistan",
};

// Social links shown on the Home page and in the Footer
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/suhaimaishfaq",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/suhaima-ishfaq-735959428",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com", // TODO: replace with your real email address
    icon: FaEnvelope,
  },
];
