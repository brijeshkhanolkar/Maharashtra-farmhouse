import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, Calendar, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { packagesData } from '../data/siteData';

export const Packages: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Editorial Header */}
      <PageHero
        eyebrow="Packages & Pricing"
        title="Choose Your Perfect Getaway"
        subtitle="Transparent pricing and tailored packages for day outings, overnight stays, and complete 24-hour retreat experiences."
        bgImage="/assets/photos/pool-daytime.jpg"
      />

      {/* Package Cards Grid */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'stretch',
              marginBottom: '5rem'
            }}
          >
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className="card-dark"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {pkg.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      zIndex: 3,
                      backgroundColor: 'var(--antique-brass)',
                      color: '#171A16',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '2px'
                    }}
                  >
                    {pkg.highlight}
                  </div>
                )}

                {/* Package Photo */}
                <div style={{ height: '230px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '70px',
                      background: 'linear-gradient(to top, var(--bg-dark-surface), transparent)'
                    }}
                  />
                </div>

                {/* Package Info */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--text-dark-surface)', marginBottom: '0.35rem' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                    {pkg.subtitle}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--antique-brass)' }}>
                      ₹{pkg.pricePerPerson.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-dark-subtle)' }}>
                      / person
                    </span>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(23, 26, 22, 0.7)',
                      border: '1px solid var(--border-dark)',
                      padding: '1rem',
                      borderRadius: '2px',
                      marginBottom: '1.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--antique-brass-light)' }}>
                      <Clock size={16} />
                      <span style={{ fontWeight: 500 }}>Timing:</span>
                      <span>{pkg.timing}</span>
                    </div>

                    {pkg.timingOptions && (
                      <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-dark-muted)', paddingLeft: '1.6rem' }}>
                        Options: {pkg.timingOptions.join(' or ')}
                      </div>
                    )}
                  </div>

                  <div style={{ flex: 1, marginBottom: '2rem' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--antique-brass)',
                        marginBottom: '0.85rem'
                      }}
                    >
                      Included In Package:
                    </div>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-dark-surface)' }}>
                          <Check size={16} style={{ color: 'var(--antique-brass)', flexShrink: 0, marginTop: '3px' }} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/book?package=${pkg.id}`}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.95rem' }}
                  >
                    <Calendar size={16} style={{ marginRight: '6px' }} />
                    Book {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table Section */}
          <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '4.5rem' }}>
            <div style={{ maxWidth: '720px', margin: '0 auto 3rem', textAlign: 'center' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-line"></span>
                <span>Package Comparison</span>
                <span className="eyebrow-line"></span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>Side-by-Side Overview</h2>
            </div>

            <div
              style={{
                overflowX: 'auto',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-dark-surface)'
              }}
            >
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.9rem',
                  textAlign: 'left'
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-dark)', backgroundColor: '#141713' }}>
                    <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-dark-subtle)', fontWeight: 500 }}>
                      Feature / Inclusion
                    </th>
                    <th style={{ padding: '1.25rem 1.5rem', color: 'var(--antique-brass)', fontWeight: 600 }}>
                      Day Package (₹1,000)
                    </th>
                    <th style={{ padding: '1.25rem 1.5rem', color: 'var(--antique-brass)', fontWeight: 600 }}>
                      Night Package (₹1,000)
                    </th>
                    <th style={{ padding: '1.25rem 1.5rem', color: 'var(--antique-brass)', fontWeight: 600 }}>
                      24-Hour Package (₹2,000)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Price per Person', day: '₹1,000', night: '₹1,000', hr24: '₹2,000' },
                    { feature: 'Timings', day: '11 AM to 11 PM', night: '7 PM to 9 AM', hr24: '11 AM to 11 AM or 7 PM to 7 PM' },
                    { feature: 'Meals Included', day: 'One lunch', night: 'One meal (Dinner) + Breakfast', hr24: 'Two meals' },
                    { feature: 'Tea Service', day: 'Tea (Once)', night: 'Tea (Once)', hr24: 'Tea twice' },
                    { feature: 'AC Room Accommodation', day: 'Optional add-on upon enquiry', night: 'Optional add-on upon enquiry', hr24: 'Included in package' },
                    { feature: 'Activities Included', day: 'Pool & grounds access', night: 'Evening property access', hr24: 'Two activities included' },
                    { feature: 'Booking Link', 
                      day: <Link to="/book?package=day" style={{ color: 'var(--antique-brass)', fontWeight: 500 }}>Book Day Package</Link>,
                      night: <Link to="/book?package=night" style={{ color: 'var(--antique-brass)', fontWeight: 500 }}>Book Night Package</Link>,
                      hr24: <Link to="/book?package=24hr" style={{ color: 'var(--antique-brass)', fontWeight: 500 }}>Book 24-Hr Package</Link>
                    }
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--border-dark)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(23, 26, 22, 0.4)'
                      }}
                    >
                      <td style={{ padding: '1.15rem 1.5rem', color: 'var(--text-dark-surface)', fontWeight: 500 }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '1.15rem 1.5rem', color: 'var(--text-dark-muted)' }}>
                        {row.day}
                      </td>
                      <td style={{ padding: '1.15rem 1.5rem', color: 'var(--text-dark-muted)' }}>
                        {row.night}
                      </td>
                      <td style={{ padding: '1.15rem 1.5rem', color: 'var(--text-dark-muted)' }}>
                        {row.hr24}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Package Booking Enquiry CTA */}
      <section className="section section-light">
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="eyebrow" style={{ color: 'var(--brand-green)', justifyContent: 'center' }}>
            <span className="eyebrow-line" style={{ backgroundColor: 'var(--brand-green)' }}></span>
            <span>Reserve Dates</span>
            <span className="eyebrow-line" style={{ backgroundColor: 'var(--brand-green)' }}></span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--text-light-surface)', marginBottom: '1.25rem' }}>
            Planning a Group or Family Visit?
          </h2>
          <p style={{ color: 'var(--text-light-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            All packages are calculated per person with transparent inclusions. Select your package in our booking enquiry form to calculate indicative totals and send your request via WhatsApp.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/book" className="btn btn-brand" style={{ padding: '0.95rem 2.25rem' }}>
              <span>Open Booking Enquiry Form</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary-dark" style={{ padding: '0.95rem 2.25rem' }}>
              <span>Ask a Question</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
