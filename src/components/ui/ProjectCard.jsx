import { motion } from 'framer-motion';
import { TechChip } from './TechChip';

export function ProjectCard({ project, index }) {
  const isLink = Boolean(project.href);
  const Wrapper = isLink ? motion.a : motion.article;
  const wrapperProps = isLink
    ? { href: project.href, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`project-card ${isLink ? 'project-card--link' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <div className="project-card__top">
        <span className="project-card__year">{project.year}</span>
        {project.private && (
          <span className="project-card__tag">INTERNAL</span>
        )}
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <div className="project-card__subtitle">{project.subtitle}</div>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tech">
        {project.tech.map(t => (
          <TechChip key={t}>{t}</TechChip>
        ))}
      </div>

      {isLink && (
        <span className="project-card__cta">
          View
          <span aria-hidden="true">→</span>
        </span>
      )}
    </Wrapper>
  );
}
