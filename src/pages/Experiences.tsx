import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export const Experiences: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Retreat Activities"
        title="Experiences & Property Amenities"
        subtitle="Relax by the pool, enjoy the stone waterfall, play floodlit cricket, or gather under the pergola for evening conversation."
        bgImage="/assets/photos/pool-night.jpg"
      />

      {/* Balanced Grid with Varying Sizes */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '750px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line"></span>
              <span>Recreation & Leisure</span>
              <span className="eyebrow-line"></span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>Moments Made for Everyone</h2>
            <p style={{ color: 'var(--text-dark-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginTop: '0.85rem' }}>
              From daytime pool dips to starlit cricket under floodlights, Maharashtra Farm House provides ample recreation across private grounds.
            </p>
          </div>

          {/* Asymmetric / Balanced Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2rem',
              alignItems: 'stretch'
            }}
          >
            {/* 1. Swimming Pool (Large 7 cols) */}
            <div
              className="card-dark"
              style={{
                gridColumn: 'span 12',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              className-lg="grid-col-7"
            >
              <div style={{ height: '360px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/assets/photos/pool-night.jpg"
                  alt="Swimming pool illuminated at night"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    backgroundColor: 'rgba(23, 26, 22, 0.85)',
                    border: '1px solid var(--border-brass)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '2px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--antique-brass)'
                  }}
                >
                  Featured Amenity
                </div>
              </div>
              <div style={{ padding: '2.25rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--antique-brass)', marginBottom: '0.35rem' }}>
                  Water & Relaxation
                </div>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>Swimming Pool</h3>
                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Clean, well-maintained pool waters right beside the wooden cottages. Suitable for refreshing daytime swims under blue skies or relaxed evening dips by the glowing poolside illumination.
                </p>
              </div>
            </div>

            {/* 2. Stone Waterfall Feature (6 cols) */}
            <div
              className="card-dark"
              style={{
                gridColumn: 'span 12',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              className-md="grid-col-6"
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/assets/photos/waterfall.jpg"
                  alt="Stone waterfall feature illuminated with ambient light"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--antique-brass)', marginBottom: '0.35rem' }}>
                  Natural Architecture
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.65rem' }}>Stone Waterfall Feature</h3>
                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  An authentic dark stone waterfall with cascading water flowing smoothly over natural rock tiers, illuminated by ambient evening spotlights.
                </p>
              </div>
            </div>

            {/* 3. Cricket Setup (6 cols) */}
            <div
              className="card-dark"
              style={{
                gridColumn: 'span 12',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              className-md="grid-col-6"
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/assets/photos/cricket-turf.jpg"
                  alt="Floodlit cricket pitch setup on green lawn"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--antique-brass)', marginBottom: '0.35rem' }}>
                  Sports & Play
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.65rem' }}>Outdoor Cricket Setup</h3>
                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Pitch prepared on green grass with wooden wickets and dedicated night floodlights, ideal for friendly family matches and group games after sunset.
                </p>
              </div>
            </div>

            {/* 4. Outdoor Lawn (6 cols) */}
            <div
              className="card-dark"
              style={{
                gridColumn: 'span 12',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              className-md="grid-col-6"
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/assets/photos/lawn-garden.jpg"
                  alt="Manicured lawn with garden spike lighting"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--antique-brass)', marginBottom: '0.35rem' }}>
                  Open Grounds
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.65rem' }}>Spacious Landscaped Lawn</h3>
                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Expansive manicured open lawn area bordered by countryside trees. Great for morning walks, yoga, children playing, or evening stargazing.
                </p>
              </div>
            </div>

            {/* 5. Pergola & Outdoor Dining (6 cols) */}
            <div
              className="card-dark"
              style={{
                gridColumn: 'span 12',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              className-md="grid-col-6"
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/assets/photos/pergola-dining.jpg"
                  alt="Outdoor pergola pavilion with dining seating at night"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--antique-brass)', marginBottom: '0.35rem' }}>
                  Gathering Pavilion
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.65rem' }}>Pergola & Outdoor Seating</h3>
                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Covered timber dining pavilion with ambient hanging lanterns and red dining chairs, perfect for shared meals, chai breaks, and group bonding.
                </p>
              </div>
            </div>

            {/* 6. Indoor Living Space (12 cols) */}
            <div
              className="card-dark"
              style={{
                gridColumn: 'span 12',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              className-lg="grid-col-12"
            >
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img
                  src="/assets/photos/living-room.jpg"
                  alt="Indoor living area lounge with comfortable sofas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2.25rem' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--antique-brass)', marginBottom: '0.35rem' }}>
                  Indoor Relaxation
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.65rem' }}>Indoor Living Lounge</h3>
                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Comfortable air-conditioned indoor living space with tasteful sofa seating and wooden accents, providing a sheltered place to unwind, converse, or read.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Activity Inclusion Note */}
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--brand-green)', justifyContent: 'center' }}>
            <span className="eyebrow-line" style={{ backgroundColor: 'var(--brand-green)' }}></span>
            <span>Package Inclusions</span>
            <span className="eyebrow-line" style={{ backgroundColor: 'var(--brand-green)' }}></span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--text-light-surface)', marginBottom: '1.25rem' }}>
            Two Activities Included in 24-Hour Stay
          </h2>

          <p style={{ color: 'var(--text-light-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Guests selecting the 24-Hour Package receive: Two activities included. Facility availability is coordinated upon arrival with property staff.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/book?package=24hr" className="btn btn-brand" style={{ padding: '0.95rem 2.25rem' }}>
              <Calendar size={16} style={{ marginRight: '6px' }} />
              <span>Book 24-Hour Package</span>
            </Link>
            <Link to="/packages" className="btn btn-secondary-dark" style={{ padding: '0.95rem 2.25rem' }}>
              <span>View Packages</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .grid-col-6 { grid-column: span 6 !important; }
        }
      `}</style>
    </div>
  );
};
