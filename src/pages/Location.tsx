import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Compass, ExternalLink, AlertCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { locationDetails } from '../data/siteData';

export const Location: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Reach the Retreat"
        title="Location & Route Directions"
        subtitle="Convenient countryside access in Maharashtra. View exact coordinates, satellite overview, and verified map directions."
        bgImage="/assets/photos/cottage-entrance.jpg"
      />

      {/* Main Location Section */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'start'
            }}
          >
            {/* Left Info Column */}
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                <span>Verified Coordinates</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', marginBottom: '1.25rem' }}>
                Find Us on Google Maps
              </h2>

              <p style={{ color: 'var(--text-dark-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Maharashtra Farm House is situated in an open countryside landscape with direct access via motorable roads. Tap the Get Directions button below to launch turn-by-turn navigation on your smartphone or vehicle navigation system.
              </p>

              {/* Coordinates Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-dark-surface)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '2px',
                  padding: '1.75rem',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Compass size={22} style={{ color: 'var(--antique-brass)' }} />
                  <span style={{ fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--antique-brass)', fontWeight: 600 }}>
                    GPS Coordinates
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '1.25rem',
                    color: 'var(--text-dark-surface)',
                    backgroundColor: '#131612',
                    padding: '0.85rem 1rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-dark)',
                    marginBottom: '1rem'
                  }}
                >
                  {locationDetails.coordinates}
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-dark-muted)' }}>
                  Region: {locationDetails.region}
                </div>
              </div>

              {/* Verified Address & Landmark Notice */}
              <div
                style={{
                  backgroundColor: 'rgba(23, 26, 22, 0.6)',
                  border: '1px solid var(--border-brass)',
                  borderRadius: '2px',
                  padding: '1.25rem',
                  marginBottom: '2.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-dark-muted)',
                  lineHeight: 1.6
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <AlertCircle size={16} style={{ color: 'var(--antique-brass)', flexShrink: 0, marginTop: '2px' }} />
                  <strong style={{ color: 'var(--antique-brass)' }}>Address & Landmark Note:</strong>
                </div>
                <p>
                  Exact village postal address, nearby landmark markers, and specific approach roads will be confirmed upon direct inquiry or booking verification.
                </p>
              </div>

              {/* Direct Actions */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={locationDetails.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.95rem 2rem' }}
                >
                  <Navigation size={16} style={{ marginRight: '6px' }} />
                  <span>Get Directions on Google Maps</span>
                </a>

                <Link to="/book" className="btn btn-secondary-light" style={{ padding: '0.95rem 2rem' }}>
                  <span>Book Your Visit</span>
                </Link>
              </div>
            </div>

            {/* Right Map Embed / Graphic & Entrance Photo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Map Container */}
              <div
                style={{
                  border: '1px solid var(--border-dark)',
                  backgroundColor: 'var(--bg-dark-surface)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderBottom: '1px solid var(--border-dark)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-dark-surface)' }}>
                    <MapPin size={16} style={{ color: 'var(--antique-brass)' }} />
                    <span>Interactive Map Preview</span>
                  </div>
                  <a
                    href={locationDetails.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.785rem', color: 'var(--antique-brass)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <span>Full Screen</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Embedded Map iframe */}
                <div style={{ width: '100%', height: '360px', position: 'relative' }}>
                  <iframe
                    title="Maharashtra Farm House Location"
                    src={locationDetails.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.05)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Property Arrival Approach Photo */}
              <div
                className="card-dark"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem'
                }}
              >
                <img
                  src="/assets/photos/cottage-entrance.jpg"
                  alt="Farmhouse arrival walkway"
                  style={{ width: '110px', height: '80px', objectFit: 'cover', borderRadius: '2px' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Property Arrival</h4>
                  <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.825rem', lineHeight: 1.5 }}>
                    Spacious parking space and lighted evening walkway for guest vehicles upon arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
