import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../ui/Section';
import { TimelineCard } from '../ui/TimelineCard';
import { experience } from '../../data/experience';
import './Experience.css';

export function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 35%'],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section
      id="experience"
      eyebrow="EXPERIENCE"
      title="A 5-year trajectory."
    >
      <p className="experience__lede">
        From ramp-up in B2B Payments to senior IC in Amazon Publisher Services —
        same engineer, deeper systems, broader scope.
      </p>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline__line" aria-hidden="true" />
        <motion.div
          className="timeline__line-fill"
          style={{ height: fillHeight }}
          aria-hidden="true"
        />

        {experience.map((exp, i) => (
          <TimelineCard key={exp.id} exp={exp} index={i} />
        ))}

        <div className="timeline__future" aria-hidden="true">
          <span className="timeline__future-dot" />
          <span className="timeline__future-label">NEXT CHAPTER</span>
        </div>
      </div>
    </Section>
  );
}
