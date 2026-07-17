import { useState } from 'react';
import useContentData from '../hooks/useContentData';
import { trackEvent } from '../utils/analytics';

const RATE_LIMIT_MS = 30_000;

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactSection() {
  const { data, isLoading, error } = useContentData('/data/site.json', {});
  const contacts = data?.contacts ?? {};
  const [formData, setFormData] = useState({ name: '', email: '', message: '', stayId: '', website: '' });
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError('');
    setSuccessMessage('');

    if (formData.website.trim()) {
      setFormError('Submission blocked.');
      return;
    }

    const lastInquiryAt = Number(localStorage.getItem('lastInquiryAt') || 0);
    if (Date.now() - lastInquiryAt < RATE_LIMIT_MS) {
      setFormError('Please wait before submitting another inquiry.');
      return;
    }

    if (formData.name.trim().length < 2) {
      setFormError('Please enter your name.');
      return;
    }

    if (!isValidEmail(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setFormError('Please enter at least 10 characters in your inquiry.');
      return;
    }

    localStorage.setItem('lastInquiryAt', String(Date.now()));
    setSuccessMessage('Inquiry sent successfully. Our team will reach out soon.');
    trackEvent('inquiry_submitted', { stayId: formData.stayId || 'general' });
    setFormData({ name: '', email: '', message: '', stayId: '', website: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container reveal">
        <h2>Plan & Contact.</h2>
        <p className="subtitle">Talk to the Kalpa travel desk for booking and route assistance.</p>
        {isLoading ? <p className="form-feedback">Loading contact details...</p> : null}
        {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}

        <div className="transport-grid" style={{ marginTop: '2rem' }}>
          <div className="logistics-panel">
            <div className="logistics-item">
              <h3 className="logistics-title">Verified Contacts</h3>
              <p className="logistics-desc"><strong>Phone:</strong> {contacts.phone}</p>
              <p className="logistics-desc"><strong>Email:</strong> {contacts.email}</p>
              <p className="logistics-desc"><strong>Address:</strong> {contacts.address}</p>
              <p className="logistics-desc"><strong>Office Hours:</strong> {contacts.officeHours}</p>
              <a
                className="btn-primary stay-cta"
                href={contacts.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('contact_map_opened')}
              >
                Open Office on Map
              </a>
            </div>
          </div>

          <form className="glass-panel" onSubmit={handleSubmit} noValidate>
            <label className="input-label" htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              className="input-field contact-field"
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            />

            <label className="input-label" htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              className="input-field contact-field"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            />

            <label className="input-label" htmlFor="contact-stay">Stay ID (optional)</label>
            <input
              id="contact-stay"
              className="input-field contact-field"
              value={formData.stayId}
              onChange={(event) => setFormData((prev) => ({ ...prev, stayId: event.target.value }))}
              placeholder="e.g. zostel-kalpa"
            />

            <label className="input-label" htmlFor="contact-message">Inquiry</label>
            <textarea
              id="contact-message"
              className="input-field contact-field contact-textarea"
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              rows={4}
            />

            <input
              type="text"
              aria-hidden="true"
              tabIndex={-1}
              autoComplete="off"
              className="honeypot"
              value={formData.website}
              onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
            />

            {formError ? <p className="form-feedback form-feedback-error">{formError}</p> : null}
            {successMessage ? <p className="form-feedback form-feedback-success">{successMessage}</p> : null}
            <button className="btn-primary btn-full" type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
