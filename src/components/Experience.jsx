import { motion } from 'framer-motion';
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="bg-dark-50/50 dark:bg-dark-900/50">
            <h2 className="section-heading">
                Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subheading">
                My professional journey and the impact I've made along the way
            </p>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2" />

                {experienceData.map((exp, idx) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 z-10 ring-4 ring-white dark:ring-dark-950 shadow-lg shadow-primary-500/30" />

                        {/* Content Card */}
                        <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                            }`}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-6 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg">
                                            <HiBriefcase size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-display font-bold text-dark-900 dark:text-white">
                                                {exp.role}
                                            </h3>
                                            <p onClick={() => window.open(exp.link, '_blank')} className="cursor-pointer text-primary-600 dark:text-primary-400 font-semibold text-sm">
                                                {exp.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 dark:text-dark-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <HiCalendar size={16} className="text-primary-500" />
                                        {exp.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <HiLocationMarker size={16} className="text-accent-500" />
                                        {exp.location}
                                    </span>
                                </div>

                                <ul className="space-y-2 mb-4">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
