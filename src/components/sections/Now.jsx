import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { TechChip } from '../ui/TechChip';
import './Now.css';

export function Now() {
  return (
    <Section id="now" eyebrow="NOW" title="Currently building." accent="now">
      <motion.article
        className="now-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="now-card__status">
          <span className="now-card__dot" />
          <span className="now-card__status-label">BUILDING</span>
        </div>

        <h3 className="now-card__title">
          An ad server, tuned for live-event scale.
        </h3>

        <p className="now-card__desc">
          Most ad servers degrade when traffic spikes by 100× in seconds —
          live sports, finals, breaking news. I&apos;m exploring a different
          shape: event-driven core, micro-batch processing, and autoscaling
          tuned for spike-load profiles rather than steady-state throughput.
        </p>

        <div className="now-card__meta">
          <div className="now-card__tech">
            <TechChip>Event-Driven</TechChip>
            <TechChip>Micro-batch</TechChip>
            <TechChip>Distributed Systems</TechChip>
            <TechChip>AWS</TechChip>
          </div>
          <div className="now-card__note">
            Side project · Updates private until launch
          </div>
        </div>
      </motion.article>
    </Section>
  );
}
