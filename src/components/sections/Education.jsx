import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { education } from '../../data/education';
import './Education.css';

export function Education() {
  return (
    <Section id="education" eyebrow="EDUCATION" title="Where I trained.">
      <ul className="edu-list">
        {education.map((e, i) => (
          <motion.li
            key={e.id}
            className="edu-item"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="edu-item__period">{e.period}</div>
            <div className="edu-item__main">
              <div className="edu-item__degree">
                {e.degree}
                {e.track && <span className="edu-item__track"> · {e.track}</span>}
              </div>
              <div className="edu-item__inst">{e.institution}</div>
            </div>
            <div className="edu-item__meta">
              <div className="edu-item__loc">{e.location}</div>
              {e.gpa && <div className="edu-item__gpa">GPA {e.gpa}</div>}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
