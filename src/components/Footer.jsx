import { motion } from "framer-motion";
import { HiHeart, HiArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    link: personalInfo.socialLinks.github,
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    link: personalInfo.socialLinks.linkedin,
    label: "LinkedIn",
  },
  // { icon: <FaTwitter size={18} />, link: personalInfo.socialLinks.twitter, label: 'Twitter' },
  // { icon: <FaInstagram size={18} />, link: personalInfo.socialLinks.instagram, label: 'Instagram' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-900 dark:bg-dark-950 text-white overflow-hidden">
      {/* Gradient Top Border */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-300% animate-gradient" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#home"
              className="inline-block text-2xl font-display font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              &lt;{personalInfo.name} /&gt;
            </motion.a>
            <p className="text-dark-400 leading-relaxed text-sm max-w-xs">
              {personalInfo.tagline}. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-dark-800 text-dark-400 
                                     hover:bg-primary-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              target="_blank"
              className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-dark-500 dark:text-dark-400">
          {/* Left */}
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Center Tagline */}
          <p className="hidden sm:block opacity-70">
            Building clean interfaces & scalable systems.
          </p>

          {/* Right - Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full border border-dark-700 
               hover:border-primary-500 hover:text-primary-500 
               transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
