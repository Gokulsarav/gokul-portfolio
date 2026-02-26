import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-6xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
