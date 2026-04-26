import { motion } from 'framer-motion';
import './Hero.css';

const NAME_FIRST = 'Vivek';
const NAME_LAST = 'Yellanti.';

const portraitSrc = `${process.env.PUBLIC_URL || ''}/portrait.jpg`;

export function Hero() {
  const letters = (str, delayBase) =>
    str.split('').map((ch, i) => (
      <motion.span
        key={`${ch}-${i}`}
        className="hero__char"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: delayBase + i * 0.04,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {ch === ' ' ? ' ' : ch}
      </motion.span>
    ));

  return (
    <header id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__eyebrow-bar" />
            AUSTIN, TX · 2026
          </motion.div>

          <h1 className="hero__name">
            <span className="hero__name-row">{letters(NAME_FIRST, 0.25)}</span>
            <span className="hero__name-row">
              {letters(NAME_LAST, 0.25 + NAME_FIRST.length * 0.04 + 0.1)}
            </span>
          </h1>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            SDE-II at Amazon Publisher Services. Building event-driven systems at scale.
            Currently exploring agentic ad infrastructure.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#experience" className="btn btn--primary">
              View Experience
              <span aria-hidden="true">→</span>
            </a>
            <a href="#resume" className="btn">Resume</a>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__portrait-frame">
            <img
              src={portraitSrc}
              alt="Vivek Yellanti"
              className="hero__portrait-img"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#now"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        aria-label="Scroll to next section"
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">SCROLL</span>
      </motion.a>
    </header>
  );
}
