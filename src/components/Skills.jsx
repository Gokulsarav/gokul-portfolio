import { motion } from 'framer-motion';
import {
    HiDesktopComputer,
    HiServer,
    HiDatabase,
    HiCog,
    HiGlobeAlt,
    HiSparkles,
    HiSwitchHorizontal,
    HiWifi,
    HiTranslate,
} from 'react-icons/hi';
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiOpenjdk,
    SiSpringboot,
    SiHibernate,
    SiMysql,
    SiPostgresql,
    SiFirebase,
    SiRedux,
    SiReactquery,
    SiMqtt,
    SiSocketdotio,
    SiGooglemaps,
    SiGit,
    SiLiquibase,
    SiClickup,
    SiJira,
    SiBootstrap,
} from 'react-icons/si';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
    Frontend: <HiDesktopComputer size={24} />,
    Backend: <HiServer size={24} />,
    Database: <HiDatabase size={24} />,
    'State Management': <HiSwitchHorizontal size={24} />,
    'Real-Time & Communication': <HiWifi size={24} />,
    'Version Control & Tools': <HiCog size={24} />,
    'UI Frameworks & Styling': <HiSparkles size={24} />,
    Languages: <HiTranslate size={24} />,
};

const categoryGradients = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Database: 'from-orange-500 to-amber-500',
    'State Management': 'from-indigo-500 to-violet-500',
    'Real-Time & Communication': 'from-teal-500 to-cyan-500',
    'Version Control & Tools': 'from-slate-500 to-zinc-500',
    'UI Frameworks & Styling': 'from-pink-500 to-rose-500',
    Languages: 'from-emerald-500 to-teal-500',
};

const ICON_SIZE = 20;

const skillIcons = {
    HTML: {
        icon: <SiHtml5 size={ICON_SIZE} style={{ color: '#E34F26' }} />,
        bgClass: 'bg-orange-500/15',
    },
    CSS: {
        icon: <SiCss3 size={ICON_SIZE} style={{ color: '#1572B6' }} />,
        bgClass: 'bg-blue-500/15',
    },
    JavaScript: {
        icon: <SiJavascript size={ICON_SIZE} style={{ color: '#F7DF1E' }} />,
        bgClass: 'bg-yellow-500/15',
    },
    'React.js': {
        icon: <SiReact size={ICON_SIZE} style={{ color: '#61DAFB' }} />,
        bgClass: 'bg-cyan-500/15',
    },
    TypeScript: {
        icon: <SiTypescript size={ICON_SIZE} style={{ color: '#3178C6' }} />,
        bgClass: 'bg-blue-600/15',
    },
    'Tailwind CSS': {
        icon: <SiTailwindcss size={ICON_SIZE} style={{ color: '#06B6D4' }} />,
        bgClass: 'bg-cyan-500/15',
    },
    Java: {
        icon: <SiOpenjdk size={ICON_SIZE} style={{ color: '#007396' }} />,
        bgClass: 'bg-sky-600/15',
    },
    'Spring Boot': {
        icon: <SiSpringboot size={ICON_SIZE} style={{ color: '#6DB33F' }} />,
        bgClass: 'bg-green-500/15',
    },
    JPA: {
        icon: <SiHibernate size={ICON_SIZE} style={{ color: '#59666C' }} />,
        bgClass: 'bg-slate-500/15',
    },
    'REST APIs': {
        icon: <HiGlobeAlt size={ICON_SIZE} style={{ color: '#3B82F6' }} />,
        bgClass: 'bg-blue-500/15',
    },
    SQL: {
        icon: <HiDatabase size={ICON_SIZE} style={{ color: '#2563EB' }} />,
        bgClass: 'bg-blue-600/15',
    },
    Firebase: {
        icon: <SiFirebase size={ICON_SIZE} style={{ color: '#FFCA28' }} />,
        bgClass: 'bg-amber-500/15',
    },
    PostgreSQL: {
        icon: <SiPostgresql size={ICON_SIZE} style={{ color: '#4169E1' }} />,
        bgClass: 'bg-indigo-500/15',
    },
    MySQL: {
        icon: <SiMysql size={ICON_SIZE} style={{ color: '#4479A1' }} />,
        bgClass: 'bg-blue-700/15',
    },
    Redux: {
        icon: <SiRedux size={ICON_SIZE} style={{ color: '#764ABC' }} />,
        bgClass: 'bg-violet-500/15',
    },
    'React Query': {
        icon: <SiReactquery size={ICON_SIZE} style={{ color: '#FF4154' }} />,
        bgClass: 'bg-rose-500/15',
    },
    MQTT: {
        icon: <SiMqtt size={ICON_SIZE} style={{ color: '#660066' }} />,
        bgClass: 'bg-fuchsia-500/15',
    },
    WebSocket: {
        icon: <SiSocketdotio size={ICON_SIZE} style={{ color: '#111827' }} />,
        bgClass: 'bg-slate-500/15',
    },
    'Google Maps API': {
        icon: <SiGooglemaps size={ICON_SIZE} style={{ color: '#34A853' }} />,
        bgClass: 'bg-green-500/15',
    },
    Git: {
        icon: <SiGit size={ICON_SIZE} style={{ color: '#F05032' }} />,
        bgClass: 'bg-orange-500/15',
    },
    Liquibase: {
        icon: <SiLiquibase size={ICON_SIZE} style={{ color: '#2962FF' }} />,
        bgClass: 'bg-blue-600/15',
    },
    ClickUp: {
        icon: <SiClickup size={ICON_SIZE} style={{ color: '#7B68EE' }} />,
        bgClass: 'bg-violet-500/15',
    },
    Jira: {
        icon: <SiJira size={ICON_SIZE} style={{ color: '#0052CC' }} />,
        bgClass: 'bg-indigo-600/15',
    },
    Bootstrap: {
        icon: <SiBootstrap size={ICON_SIZE} style={{ color: '#7952B3' }} />,
        bgClass: 'bg-purple-500/15',
    },
    'Tamil (Native)': {
        icon: <HiGlobeAlt size={ICON_SIZE} style={{ color: '#059669' }} />,
        bgClass: 'bg-emerald-500/15',
    },
    English: {
        icon: <HiGlobeAlt size={ICON_SIZE} style={{ color: '#0284C7' }} />,
        bgClass: 'bg-sky-500/15',
    },
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
                                    {category.skills.length} {category.title === 'Languages' ? 'Languages' : 'Technologies'}
                                </p>
                            </div>
                        </div>

                        {/* Skills List */}
                        <div className="grid grid-cols-2 gap-3">
                            {category.skills.map((skill, skillIdx) => {
                                const skillVisual = skillIcons[skill.name];

                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                                    >
                                        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-dark-100/70 dark:bg-dark-800/70 border border-dark-200/60 dark:border-dark-700/60">
                                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${skillVisual?.bgClass || 'bg-dark-100 dark:bg-dark-800'}`}>
                                                {skillVisual?.icon || <HiCog size={ICON_SIZE} />}
                                            </div>
                                            <span className="text-xs sm:text-sm font-medium text-dark-700 dark:text-dark-200 leading-tight">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
