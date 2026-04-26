import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Section } from '../ui/Section';
import './Contact.css';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const directLinks = [
  { id: 'email', label: 'Email', value: 'vvivek@live.com', href: 'mailto:vvivek@live.com' },
  { id: 'github', label: 'GitHub', value: 'vivekvyellanti', href: 'https://github.com/vivekvyellanti' },
  { id: 'linkedin', label: 'LinkedIn', value: 'vivekvyellanti', href: 'https://www.linkedin.com/in/vivekvyellanti/' },
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Name and message are required.');
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:vvivek@live.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('[EmailJS] send failed:', err);
      const detail =
        err?.text ||
        err?.message ||
        (typeof err === 'string' ? err : JSON.stringify(err));
      setStatus('error');
      setErrorMsg(`EmailJS: ${detail || 'unknown error'} (status ${err?.status ?? 'n/a'})`);
    }
  };

  const isSubmitting = status === 'submitting';
  const isSent = status === 'sent';

  return (
    <Section id="contact" eyebrow="CONTACT" title="Let's talk.">
      <p className="contact__intro">
        Open to founder conversations, deep-tech consulting, and cross-org infra
        problems that need a calm hand.
      </p>

      <div className="contact__layout">
        <AnimatePresence mode="wait">
          {isSent ? (
            <motion.div
              key="sent"
              className="contact__success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="contact__success-mark" aria-hidden="true">✓</div>
              <h3>Message sent.</h3>
              <p>Thanks — I&apos;ll be in touch shortly.</p>
              <button
                type="button"
                className="btn"
                onClick={() => setStatus('idle')}
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="contact__row">
                <label className="contact__field">
                  <span className="contact__label">NAME</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    disabled={isSubmitting}
                    required
                  />
                </label>
                <label className="contact__field">
                  <span className="contact__label">EMAIL</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    autoComplete="email"
                    disabled={isSubmitting}
                    required
                  />
                </label>
              </div>

              <label className="contact__field">
                <span className="contact__label">MESSAGE</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows={5}
                  disabled={isSubmitting}
                  required
                />
              </label>

              {status === 'error' && errorMsg && (
                <motion.div
                  className="contact__error"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errorMsg}
                </motion.div>
              )}

              <div className="contact__actions">
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send message'}
                  {!isSubmitting && <span aria-hidden="true">→</span>}
                </button>
                <span className="contact__hint">
                  Replies usually within 24h.
                </span>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="contact__direct">
          <div className="contact__direct-label">Or reach me directly</div>
          <ul className="contact__direct-list">
            {directLinks.map((l) => (
              <li key={l.id}>
                <a
                  className="contact__direct-link"
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={l.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                >
                  <span className="contact__direct-platform">{l.label}</span>
                  <span className="contact__direct-value">{l.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
