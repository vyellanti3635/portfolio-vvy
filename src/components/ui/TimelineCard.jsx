import { motion } from 'framer-motion';
import { TechChip } from './TechChip';

export function TimelineCard({ exp, index }) {
  const cardClass = [
    'timeline-card',
    exp.current && 'timeline-card--current',
    exp.promotion && 'timeline-card--promo',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.article
      className={cardClass}
      style={{ '--accent': `var(--accent-${exp.accent})` }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="timeline-card__marker" aria-hidden="true">
        <span className="timeline-card__dot" />
      </div>

      <div className="timeline-card__period">{exp.period}</div>

      <div className="timeline-card__content">
        <header className="timeline-card__head">
          <h3 className="timeline-card__role">{exp.role}</h3>
          <div className="timeline-card__team">{exp.team}</div>
          <div className="timeline-card__loc-row">
            <span className="timeline-card__location">{exp.location}</span>
            {exp.current && (
              <span className="timeline-card__badge timeline-card__badge--current">
                CURRENT
              </span>
            )}
            {exp.promotion && (
              <span className="timeline-card__badge timeline-card__badge--promo">
                {exp.promotionLabel}
              </span>
            )}
          </div>
        </header>

        <ul className="timeline-card__highlights">
          {exp.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="timeline-card__tech">
          {exp.tech.map(t => (
            <TechChip key={t}>{t}</TechChip>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
