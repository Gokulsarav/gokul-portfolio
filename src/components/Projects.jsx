import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    return (
        <SectionWrapper id="projects">
            <h2 className="section-heading">
                Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading">
                A collection of projects that showcase my skills and passion
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {categories.map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                                : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            {/* Featured badge */}
                            {project.featured && (
                                <div className="absolute -top-2 -right-2 z-20 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full shadow-lg">
                                    Featured
                                </div>
                            )}

                            <div className="glass-card overflow-hidden h-full flex flex-col hover-lift">
                                {/* Project Image / Emoji Hero */}
                                <div className="relative h-48 bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50 dark:from-primary-900/20 dark:via-accent-900/10 dark:to-primary-900/20 flex items-center justify-center overflow-hidden">
                                    <span className="text-7xl group-hover:scale-125 transition-transform duration-500">
                                        {project.image}
                                    </span>
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                                        <div className="flex gap-3">
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <HiExternalLink size={20} />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <HiCode className="text-primary-500" size={18} />
                                        <span className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-dark-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed flex-1 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
};

export default Projects;
