import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import './Resume.css';

const resumePath = `${process.env.PUBLIC_URL || ''}/resumefin.pdf`;

export function Resume() {
  return (
    <Section id="resume" eyebrow="RESUME" title="One page. The greatest hits.">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="resume-card__meta">
          <div className="resume-card__doc">
            <span className="resume-card__doc-icon" aria-hidden="true">PDF</span>
            <div>
              <div className="resume-card__name">Vivek Yellanti — Resume</div>
              <div className="resume-card__date">Updated April 2026</div>
            </div>
          </div>
        </div>

        <p className="resume-card__summary">
          5 years at Amazon — B2B Payments → Amazon Publisher Services. SDE-II.
          Event-driven systems, micro-batch ETL, OpenSearch sharding, deal-management
          infra. UAB MS Data Science (4.00). Westcliff MBA in progress.
        </p>

        <div className="resume-card__cta">
          <a
            className="btn btn--primary"
            href={resumePath}
            download="vivek-yellanti-resume.pdf"
          >
            Download PDF
            <span aria-hidden="true">↓</span>
          </a>
          <a
            className="btn"
            href={resumePath}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
