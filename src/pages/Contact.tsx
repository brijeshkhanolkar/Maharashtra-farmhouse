import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageSquare, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { locationDetails } from '../data/siteData';

export const Contact: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim() || !formMessage.trim()) {
      setValidationError('Please complete all required fields.');
      return;
    }
    setValidationError('');

    // Pre-fill WhatsApp message for quick transmission
    const text = `*MAHARASHTRA FARM HOUSE - CONTACT ENQUIRY*\nName: ${formName.trim()}\nPhone: ${formPhone.trim()}\nSubject: ${formSubject || 'General Inquiry'}\nMessage: ${formMessage.trim()}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsSent(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Maharashtra Farm House"
        subtitle="Have questions about group bookings, custom food preferences, or route directions? Reach out to our team."
        bgImage="/assets/photos/cottage-entrance.jpg"
      />

      {/* Contact Content */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)'
            }}
          >
            {/* Contact Information Column */}
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                <span>Direct Channels</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1.5rem' }}>
                We Are Here to Assist You
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                For fastest replies regarding dates and packages, you can reach out via WhatsApp or submit your questions through our form.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                {/* Location */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'var(--bg-dark-surface)',
                      border: '1px solid var(--border-brass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      color: 'var(--antique-brass)',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Property Coordinates</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                      {locationDetails.region} (GPS: {locationDetails.coordinates})
                    </p>
                    <a
                      href={locationDetails.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--antique-brass)',
                        fontSize: '0.8rem',
                        marginTop: '0.35rem',
                        fontWeight: 500
                      }}
                    >
                      <span>Open Google Maps</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'var(--bg-dark-surface)',
                      border: '1px solid var(--border-brass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      color: 'var(--antique-brass)',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Visiting & Enquiry Hours</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                      11:00 AM to 11:00 PM (Daily enquiries and daytime visits)
                    </p>
                  </div>
                </div>

                {/* WhatsApp Support */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'var(--bg-dark-surface)',
                      border: '1px solid var(--border-brass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      color: 'var(--antique-brass)',
                      flexShrink: 0
                    }}
                  >
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>WhatsApp Booking Desk</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                      Direct instant messages with date checks and package details.
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-subtle)', marginTop: '0.25rem' }}>
                      Configurable business number maintained by property management.
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(179, 148, 92, 0.08)',
                  border: '1px solid var(--border-brass)',
                  padding: '1.25rem',
                  borderRadius: '2px',
                  fontSize: '0.85rem',
                  color: 'var(--text-dark-muted)'
                }}
              >
                Ready to book? Use our dedicated <Link to="/book" style={{ color: 'var(--antique-brass)', textDecoration: 'underline' }}>Booking Enquiry Page</Link> to calculate package subtotals based on your guest count.
              </div>
            </div>

            {/* Quick Contact Form */}
            <div
              style={{
                backgroundColor: 'var(--bg-dark-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px',
                padding: 'clamp(1.75rem, 4vw, 2.5rem)'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-dark-surface)' }}>
                Send a Direct Message
              </h3>

              {isSent ? (
                <div
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    backgroundColor: 'rgba(39, 55, 43, 0.3)',
                    border: '1px solid var(--border-brass)',
                    borderRadius: '2px'
                  }}
                >
                  <CheckCircle2 size={36} style={{ color: 'var(--antique-brass)', margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Prepared</h4>
                  <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Your message has been formatted for WhatsApp transmission. Our retreat team looks forward to connecting with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="btn btn-outline-brass"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {validationError && (
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: 'rgba(217, 83, 79, 0.15)',
                        border: '1px solid #D9534F',
                        color: '#FFBABA',
                        fontSize: '0.8125rem',
                        borderRadius: '2px',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {validationError}
                    </div>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', marginBottom: '0.4rem', color: 'var(--text-dark-muted)' }}>
                      Your Name <span style={{ color: 'var(--antique-brass)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Amit Kulkarni"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        backgroundColor: '#161915',
                        border: '1px solid var(--border-dark)',
                        color: 'var(--text-dark-surface)',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', marginBottom: '0.4rem', color: 'var(--text-dark-muted)' }}>
                      Contact Phone <span style={{ color: 'var(--antique-brass)' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9822123456"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        backgroundColor: '#161915',
                        border: '1px solid var(--border-dark)',
                        color: 'var(--text-dark-surface)',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', marginBottom: '0.4rem', color: 'var(--text-dark-muted)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Weekend booking availability, Family celebration"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        backgroundColor: '#161915',
                        border: '1px solid var(--border-dark)',
                        color: 'var(--text-dark-surface)',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', marginBottom: '0.4rem', color: 'var(--text-dark-muted)' }}>
                      Message or Inquiry <span style={{ color: 'var(--antique-brass)' }}>*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please mention your prospective visit dates, group requirements, or questions."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        backgroundColor: '#161915',
                        border: '1px solid var(--border-dark)',
                        color: 'var(--text-dark-surface)',
                        borderRadius: '2px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.95rem' }}
                  >
                    <Send size={16} style={{ marginRight: '6px' }} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
