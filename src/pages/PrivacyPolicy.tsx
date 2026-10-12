import React from 'react';
import { PageHero } from '../components/PageHero';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        subtitle="How Maharashtra Farm House handles information submitted through our website and booking enquiry forms."
      />

      {/* Policy Content */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div
            style={{
              backgroundColor: 'rgba(179, 148, 92, 0.08)',
              border: '1px solid var(--border-brass)',
              padding: '1.25rem 1.5rem',
              borderRadius: '2px',
              marginBottom: '3rem',
              fontSize: '0.85rem',
              color: 'var(--text-dark-muted)'
            }}
          >
            <strong style={{ color: 'var(--antique-brass)' }}>Owner Disclosure Note:</strong> This privacy document reflects the operational data practices for Maharashtra Farm House. Legal business entity registration details, official grievance officer contact, and formal statutory registrations will be updated upon final owner verification.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                1. Information We Collect
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1rem' }}>
                When you interact with Maharashtra Farm House via our online booking enquiry form or contact channels, we collect information necessary to facilitate your visit request:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-dark-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Contact details:</strong> Full name, telephone/mobile number (for phone and WhatsApp communications), and optional email address.</li>
                <li><strong>Enquiry specifications:</strong> Requested check-in and check-out dates, selected package (Day, Night, or 24-Hour), number of guests in your party, and meal preferences (Vegetarian or Non-Vegetarian).</li>
                <li><strong>Special requests:</strong> Voluntary details provided regarding group celebrations, recreation preferences, or timing requirements.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                2. Purpose of Information Use
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1rem' }}>
                The information provided is utilized solely for legitimate hospitality service purposes:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-dark-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Confirming date availability and calculating indicative package charges.</li>
                <li>Responding to your inquiries via WhatsApp or telephone.</li>
                <li>Preparing food ingredients and accommodation arrangements tailored to your specified group size.</li>
                <li>Providing route directions and check-in instructions.</li>
              </ul>
              <p style={{ color: 'var(--text-dark-muted)', marginTop: '1rem' }}>
                We do not sell, lease, or monetize your contact details to third-party advertisers or telemarketers.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                3. Communication Channels & WhatsApp Integration
              </h2>
              <p style={{ color: 'var(--text-dark-muted)' }}>
                Our website provides a WhatsApp enquiry link to make booking discussions convenient. When you choose to initiate a chat through WhatsApp, your communication is processed through WhatsApp's platform under Meta's privacy policies. We encourage guests to review WhatsApp's terms of service for further details on platform-level encryption.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                4. Third-Party Services & Maps
              </h2>
              <p style={{ color: 'var(--text-dark-muted)' }}>
                Our website embeds and links to Google Maps to display the property's geographical coordinates (16.797827, 74.644562) and assist with navigation. Utilizing map links may involve interactions with Google services governed by Google's Privacy Policy.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                5. Data Retention & Security
              </h2>
              <p style={{ color: 'var(--text-dark-muted)' }}>
                Enquiry details are retained only for the duration required to process your booking, manage hospitality logistics, and comply with standard guest register requirements under regional hospitality regulations. Reasonable safeguards are maintained to protect your personal details from unauthorized access.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                6. Guest Rights & Contact
              </h2>
              <p style={{ color: 'var(--text-dark-muted)' }}>
                You have the right to request access to, correction of, or deletion of the contact details you have submitted. To exercise these rights or inquire about data practices, please reach out via our official contact channels.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem', color: 'var(--text-dark-subtle)', fontSize: '0.8125rem' }}>
              Last revised: October 2026. This policy will be reviewed alongside formal property operational updates.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
