import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export function Section({ id, eyebrow, title, children, accent, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.12 });

  const accentStyle = accent ? { '--accent': `var(--accent-${accent})` } : undefined;

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${className}`}
      style={accentStyle}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow && <div className="section__eyebrow">{eyebrow}</div>}
          {title && <h2 className="section__title">{title}</h2>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
