import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar, HiStar } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { educationData } from '../data/portfolioData';

const Education = () => {
    return (
        <SectionWrapper id="education">
            <h2 className="section-heading">
                My <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subheading">
                My academic background and the foundation of my technical knowledge
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        whileHover={{ y: -8 }}
                        className="group relative"
                    >
                        {/* Gradient Border Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                        <div className="relative glass-card p-6 h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/25 flex-shrink-0">
                                    <HiAcademicCap size={28} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-display font-bold text-dark-900 dark:text-white leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mt-0.5">
                                        {edu.field}
                                    </p>
                                </div>
                            </div>

                            {/* Institution */}
                            <div className="text-base font-medium text-dark-700 dark:text-dark-200 mb-3">
                                {edu.institution}
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-3 text-sm text-dark-500 dark:text-dark-400 mb-4">
                                <span className="flex items-center gap-1">
                                    <HiCalendar size={14} className="text-primary-500" />
                                    {edu.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <HiLocationMarker size={14} className="text-accent-500" />
                                    {edu.location}
                                </span>
                            </div>

                            {/* Grade Badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold border border-primary-200 dark:border-primary-800/50">
                                    <HiStar size={14} className="text-yellow-500" />
                                    {edu.grade}
                                </span>
                            </div>

                            {/* Description */}
                            {/* <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mt-auto">
                                {edu.description}
                            </p> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
