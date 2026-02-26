import { motion } from 'framer-motion';
import { HiDesktopComputer, HiServer, HiDatabase, HiCog } from 'react-icons/hi';
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiFirebase,
    SiGraphql,
    SiGit,
    SiGithub,
    SiDocker,
    SiAmazonaws,
    SiFigma,
    SiVisualstudiocode,
    SiLinux,
} from 'react-icons/si';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
    Frontend: <HiDesktopComputer size={24} />,
    Backend: <HiServer size={24} />,
    Database: <HiDatabase size={24} />,
    'Tools & Others': <HiCog size={24} />,
};

const categoryGradients = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Database: 'from-orange-500 to-amber-500',
    'Tools & Others': 'from-purple-500 to-pink-500',
};

const skillIcons = {
    'React.js': <SiReact size={18} />,
    JavaScript: <SiJavascript size={18} />,
    TypeScript: <SiTypescript size={18} />,
    'HTML5 / CSS3': (
        <div className="flex items-center gap-0.5">
            <SiHtml5 size={16} />
            <SiCss3 size={16} />
        </div>
    ),
    'Tailwind CSS': <SiTailwindcss size={18} />,
    'Next.js': <SiNextdotjs size={18} />,
    'Node.js': <SiNodedotjs size={18} />,
    'Express.js': <SiExpress size={18} />,
    Python: <SiPython size={18} />,
    'REST APIs': <SiExpress size={18} />,
    GraphQL: <SiGraphql size={18} />,
    MongoDB: <SiMongodb size={18} />,
    MySQL: <SiMysql size={18} />,
    PostgreSQL: <SiPostgresql size={18} />,
    Firebase: <SiFirebase size={18} />,
    'Git & GitHub': (
        <div className="flex items-center gap-0.5">
            <SiGit size={16} />
            <SiGithub size={16} />
        </div>
    ),
    Docker: <SiDocker size={18} />,
    AWS: <SiAmazonaws size={18} />,
    Figma: <SiFigma size={18} />,
    'VS Code': <SiVisualstudiocode size={18} />,
    Linux: <SiLinux size={18} />,
};

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-dark-50/50 dark:bg-dark-900/50">
            <h2 className="section-heading">
                My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subheading">
                Technologies and tools I work with to bring ideas to life
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {skillsData.categories.map((category, catIdx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                        className="glass-card p-6 hover-lift"
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryGradients[category.title] || 'from-primary-500 to-accent-500'} flex items-center justify-center text-white shadow-lg`}>
                                {categoryIcons[category.title] || <HiCog size={24} />}
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold text-dark-900 dark:text-white">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-dark-500 dark:text-dark-400">
                                    {category.skills.length} Technologies
                                </p>
                            </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-4">
                            {category.skills.map((skill, skillIdx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-primary-500 dark:text-primary-400">
                                            {skillIcons[skill.name] || <HiCog size={18} />}
                                        </div>
                                        <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
                                            {skill.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
