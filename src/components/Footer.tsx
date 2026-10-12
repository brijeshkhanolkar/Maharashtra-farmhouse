import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { locationDetails } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer
      style={{
        backgroundColor: isLight ? '#EFE9DC' : '#111310',
        color: isLight ? '#1E231B' : '#F4F0E7',
        borderTop: '1px solid var(--border-dark)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* Decorative Gold Botanical Corner */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '180px',
          opacity: 0.15,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <img
          src="/assets/artwork/gold-branch-vert.png"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem 2.5rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Col 1: Wordmark & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img
                src="/assets/artwork/logo-brand.png"
                alt="Maharashtra Farm House"
                style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    lineHeight: 1.1
                  }}
                >
                  Maharashtra
                </div>
                <div
                  style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'var(--antique-brass)',
                    fontWeight: 600
                  }}
                >
                  Farm House
                </div>
              </div>
            </div>

            <p
              style={{
                color: 'var(--text-dark-muted)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                maxWidth: '320px'
              }}
            >
              An authentic countryside retreat featuring wooden AC rooms, a swimming pool, stone waterfall, and genuine Malwani flavours in rural Maharashtra.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--antique-brass)'
              }}
            >
              <span>Architectural Nature</span>
              <span>•</span>
              <span>Boutique Hospitality</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--antique-brass)',
                marginBottom: '1.25rem'
              }}
            >
              Explore Retreat
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                  AC Rooms & Stay
                </Link>
              </li>
              <li>
                <Link to="/packages" style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                  Day & Night Packages
                </Link>
              </li>
              <li>
                <Link to="/dining" style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                  Authentic Malwani Dining
                </Link>
              </li>
              <li>
                <Link to="/experiences" style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                  Pool & Outdoor Experiences
                </Link>
              </li>
              <li>
                <Link to="/gallery" style={{ color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
                  Property Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit & Timings */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--antique-brass)',
                marginBottom: '1.25rem'
              }}
            >
              Timings & Access
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={16} style={{ color: 'var(--antique-brass)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--text-dark-surface)', fontWeight: 500 }}>Day Outings</div>
                  <div>11:00 AM to 11:00 PM</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={16} style={{ color: 'var(--antique-brass)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--text-dark-surface)', fontWeight: 500 }}>Night Stay</div>
                  <div>7:00 PM to 9:00 AM</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={16} style={{ color: 'var(--antique-brass)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--text-dark-surface)', fontWeight: 500 }}>24-Hour Stay</div>
                  <div>11:00 AM or 7:00 PM check-in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Location & Booking */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--antique-brass)',
                marginBottom: '1.25rem'
              }}
            >
              Location & Enquiries
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-dark-muted)', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={16} style={{ color: 'var(--antique-brass)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <div>{locationDetails.region}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dark-subtle)' }}>
                    Coordinates: {locationDetails.coordinates}
                  </div>
                </div>
              </div>

              <a
                href={locationDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--antique-brass)',
                  fontSize: '0.8125rem',
                  fontWeight: 500
                }}
              >
                <span>Open Google Maps</span>
                <ArrowUpRight size={14} />
              </a>

              <div style={{ marginTop: '0.5rem' }}>
                <Link
                  to="/book"
                  className="btn btn-outline-brass"
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    fontSize: '0.8125rem'
                  }}
                >
                  <MessageSquare size={14} style={{ marginRight: '6px' }} />
                  Send Booking Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider and legal */}
        <div
          style={{
            borderTop: '1px solid var(--border-dark)',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8125rem',
            color: 'var(--text-dark-subtle)'
          }}
          className="footer-bottom"
        >
          <div style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} Maharashtra Farm House. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/location" style={{ color: 'var(--text-dark-subtle)' }}>
              Location & Map
            </Link>
            <Link to="/contact" style={{ color: 'var(--text-dark-subtle)' }}>
              Contact
            </Link>
            <Link to="/privacy-policy" style={{ color: 'var(--text-dark-subtle)' }}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" style={{ color: 'var(--text-dark-subtle)' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};
