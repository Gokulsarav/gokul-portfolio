import { motion } from "framer-motion";
import { HiCode, HiLightningBolt, HiGlobe, HiHeart } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";
import { aboutData, personalInfo } from "../data/portfolioData";
import profileImage from "../assets/image.jpeg";

const highlights = [
  {
    icon: <HiCode size={24} />,
    title: "Clean Code",
    desc: "Writing maintainable solutions",
  },
  {
    icon: <HiLightningBolt size={24} />,
    title: "Fast Learner",
    desc: "Quick to adopt new tech",
  },
  {
    icon: <HiGlobe size={24} />,
    title: "Web Expert",
    desc: "Full stack capabilities",
  },
  { icon: <HiHeart size={24} />, title: "Passionate", desc: "Love what I do" },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="section-heading">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="section-subheading">
        Get to know me better — my journey, my passion, and what drives me
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 animate-spin-slow opacity-20 blur-xl" />
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 border border-primary-200 dark:border-primary-800/50 flex items-center justify-center overflow-hidden">
              <img
                src={profileImage}
                alt={`${personalInfo.name} profile`}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl bg-white/80 dark:bg-dark-900/70 backdrop-blur-sm px-4 py-2 text-center text-dark-700 dark:text-dark-200 font-medium border border-white/60 dark:border-dark-700/60">
                {personalInfo.location}
              </div>
              {/* Floating decorations */}
              <div className="absolute top-6 right-6 z-10 w-12 h-12 rounded-xl bg-primary-500/20 dark:bg-primary-500/10 animate-float" />
              <div
                className="absolute bottom-20 left-6 z-10 w-8 h-8 rounded-lg bg-accent-500/20 dark:bg-accent-500/10 animate-float"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute top-1/2 right-10 z-10 w-6 h-6 rounded-full bg-primary-400/30 dark:bg-primary-400/10 animate-float"
                style={{ animationDelay: "4s" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {aboutData.description.map((para, idx) => (
            <p
              key={idx}
              className="text-dark-600 dark:text-dark-300 leading-relaxed text-lg"
            >
              {para}
            </p>
          ))}

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 text-center group cursor-default"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center mb-2 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-sm text-dark-800 dark:text-dark-200">
                  {item.title}
                </h4>
                <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-dark-200 dark:border-dark-700">
            {aboutData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
