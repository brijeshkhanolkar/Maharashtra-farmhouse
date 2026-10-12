import React from 'react';
import { PageHero } from '../components/PageHero';
import { AlertCircle } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Guidelines & Rules"
        title="Terms and Conditions"
        subtitle="Operational rules, package timings, enquiry guidelines, and reservation policies for Maharashtra Farm House."
      />

      {/* Terms Content */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <AlertCircle size={16} style={{ color: 'var(--antique-brass)' }} />
              <strong style={{ color: 'var(--antique-brass)' }}>Notice Regarding Owner Approval:</strong>
            </div>
            <p>
              Certain commercial clauses including formal cancellation timelines, refund percentages, security deposits, and specific payment gateways require final written confirmation and approval from property ownership prior to statutory enforcement. The terms below represent the stated property operational guidelines.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                1. Stated Package Timings
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1rem' }}>
                All guest visits are governed by the specific package selected during booking:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-dark-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Day Package:</strong> Entry from 11:00 AM; departure by 11:00 PM on the same date.</li>
                <li><strong>Night Package:</strong> Check-in from 7:00 PM; check-out by 9:00 AM on the following morning.</li>
                <li><strong>24-Hour Package:</strong> Two standard schedule options: 11:00 AM to 11:00 AM (next day), or 7:00 PM to 7:00 PM (next day).</li>
              </ul>
              <p style={{ color: 'var(--text-dark-muted)', marginTop: '0.75rem', fontSize: '0.875rem' }}>
                Requests for early arrival or extended checkout are subject to property availability and must be coordinated in advance.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                2. Confirmed Inclusions
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1rem' }}>
                Package pricing is published per person and includes:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-dark-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Day Package (₹1,000/person):</strong> One Malwani lunch, evening tea, and daytime property access.</li>
                <li><strong>Night Package (₹1,000/person):</strong> One evening meal (dinner), morning breakfast, and morning tea.</li>
                <li><strong>24-Hour Package (₹2,000/person):</strong> Two meals, tea twice, air-conditioned room accommodation, and two activities included.</li>
              </ul>
              <p style={{ color: 'var(--text-dark-muted)', marginTop: '0.75rem', fontSize: '0.875rem' }}>
                Extra food items outside the standard menu or customized beverage requests are arranged separately.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                3. Booking Enquiries & Reservation Confirmation
              </h2>
              <p style={{ color: 'var(--text-dark-muted)' }}>
                Submitting a booking enquiry through the website does not constitute a guaranteed or legally binding reservation. Reservations are finalized only after our management verifies date availability, confirms the final guest count, and receives the required booking advance mutually agreed with the guest.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                4. Payments, Cancellations & Refunds
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1rem' }}>
                Payment arrangements and cancellation policies:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-dark-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Advance payments required to hold reservation dates are communicated directly during inquiry confirmation.</li>
                <li>Because food ingredients and staffing are organized fresh based on your confirmed headcount, cancellation requests must be made in reasonable advance of arrival.</li>
                <li><em>[Requires Owner Approval]:</em> The exact refund percentage schedule (e.g. within 48 or 72 hours) and rescheduling policies will be finalized in writing by the owner during your reservation agreement.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-dark-surface)' }}>
                5. Property Rules & Guest Safety
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1rem' }}>
                To preserve a peaceful and safe retreat environment for all visitors:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-dark-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Swimming Pool & Waterfall:</strong> Guests must follow safety guidelines around wet pool decks. Children must be supervised by adults at all times. Diving in shallow areas is strictly prohibited.</li>
                <li><strong>Cricket Turf & Lawn:</strong> Sports equipment should be handled with care. Night lighting for cricket is managed in accordance with local quiet hours.</li>
                <li><strong>Respect for Countryside Surroundings:</strong> Guests are requested to respect natural surroundings, avoid littering, and adhere to sensible noise levels during late night hours.</li>
                <li><strong>Identity Verification:</strong> Valid government identity documentation (such as Aadhaar or Driving License) must be presented upon check-in in accordance with hospitality norms.</li>
              </ul>
            </div>

            <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem', color: 'var(--text-dark-subtle)', fontSize: '0.8125rem' }}>
              Terms effective: October 2026. For specific clarifications, please contact property management prior to booking.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
