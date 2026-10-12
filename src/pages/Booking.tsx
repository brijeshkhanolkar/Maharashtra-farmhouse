import React from 'react';
import { PageHero } from '../components/PageHero';
import { EnquiryForm } from '../components/EnquiryForm';
import { ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export const Booking: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Reservations & Enquiries"
        title="Plan Your Farmhouse Visit"
        subtitle="Fill in your preferred dates, party size, and food preferences to receive verified booking availability and package rates."
        bgImage="/assets/photos/pool-daytime.jpg"
      />

      {/* Booking Form Section */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1.25rem',
                backgroundColor: 'var(--bg-dark-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px'
              }}
            >
              <ShieldCheck size={24} style={{ color: 'var(--antique-brass)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark-surface)' }}>Direct Enquiry</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dark-muted)' }}>No advance automated credit card charges</p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1.25rem',
                backgroundColor: 'var(--bg-dark-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px'
              }}
            >
              <Clock size={24} style={{ color: 'var(--antique-brass)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark-surface)' }}>Fast WhatsApp Verification</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dark-muted)' }}>Instant message formatting with all details</p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1.25rem',
                backgroundColor: 'var(--bg-dark-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px'
              }}
            >
              <MessageSquare size={24} style={{ color: 'var(--antique-brass)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark-surface)' }}>Transparent Inclusions</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dark-muted)' }}>Stated meals, tea, and confirmed activities</p>
              </div>
            </div>
          </div>

          {/* Complete Booking Form Component */}
          <EnquiryForm isDarkTheme={true} />
        </div>
      </section>
    </div>
  );
};
