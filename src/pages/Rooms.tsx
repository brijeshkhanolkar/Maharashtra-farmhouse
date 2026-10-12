import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Wind, Sun, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export const Rooms: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Accommodations"
        title="Wooden AC Rooms & Living Space"
        subtitle="Experience genuine timber architecture, warm ambient lighting, and modern air conditioning surrounded by rural tranquility."
        bgImage="/assets/photos/room-master.jpg"
      />

      {/* Main Large Bedroom Feature */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center',
              marginBottom: '5rem'
            }}
          >
            {/* Large Master Bedroom Image */}
            <div
              style={{
                border: '1px solid var(--border-dark)',
                padding: '0.65rem',
                backgroundColor: 'var(--bg-dark-surface)',
                borderRadius: '2px',
                position: 'relative'
              }}
            >
              <img
                src="/assets/photos/room-master.jpg"
                alt="Wooden AC master bedroom interior with timber ceiling beams and warm lights"
                style={{ width: '100%', height: 'auto', borderRadius: '1px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  backgroundColor: 'rgba(23, 26, 22, 0.88)',
                  border: '1px solid var(--border-brass)',
                  padding: '0.5rem 1rem',
                  borderRadius: '2px',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--antique-brass)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                Wooden Bedroom Suite
              </div>
            </div>

            {/* Narrative & Confirmed Details */}
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                <span>Crafted Interiors</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', marginBottom: '1.5rem' }}>
                Natural Wood Architecture
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Our guest bedrooms are built with rich, handcrafted timber walls and finished ceiling beams that evoke traditional countryside craftsmanship. Warm amber downlights and gentle ambient cove fixtures create an inviting atmosphere for quiet evenings.
              </p>
              <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Every bedroom is fully air-conditioned, ensuring pleasant indoor temperatures year-round, while sliding glass openings welcome natural morning light and rural breeze.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2.5rem'
                }}
              >
                {[
                  { icon: <Wind size={18} />, label: 'Air-Conditioned' },
                  { icon: <Bed size={18} />, label: 'Wooden Paneled Walls' },
                  { icon: <Sparkles size={18} />, label: 'Warm Ceiling Beams' },
                  { icon: <Sun size={18} />, label: 'Balcony & Natural Light' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--bg-dark-surface)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '2px',
                      fontSize: '0.85rem',
                      color: 'var(--text-dark-surface)'
                    }}
                  >
                    <span style={{ color: 'var(--antique-brass)' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/book" className="btn btn-primary" style={{ padding: '0.95rem 2rem' }}>
                <Calendar size={16} style={{ marginRight: '6px' }} />
                <span>Enquire for Stay Dates</span>
              </Link>
            </div>
          </div>

          {/* Supporting Room Photographic Gallery */}
          <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '4.5rem' }}>
            <div style={{ maxWidth: '680px', margin: '0 auto 3rem', textAlign: 'center' }}>
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                <span className="eyebrow-line"></span>
                <span>Interior Perspectives</span>
                <span className="eyebrow-line"></span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>Room Details & Living Lounge</h2>
              <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', marginTop: '0.75rem' }}>
                Genuine photographs illustrating the bedroom suites, custom woodwork, and indoor living space.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {[
                {
                  img: '/assets/photos/room-wide.jpg',
                  title: 'Timber Bedroom Suite',
                  desc: 'Wide view showing the handcrafted wooden beam ceiling and ambient spotlights'
                },
                {
                  img: '/assets/photos/room-bed-detail.jpg',
                  title: 'Bed & Wood Headboard',
                  desc: 'Clean bedding paired with natural wood finishes and reading illumination'
                },
                {
                  img: '/assets/photos/room-balcony-view.jpg',
                  title: 'Balcony & Doorway Aspect',
                  desc: 'Sliding glass opening connecting the air-conditioned room to outside grounds'
                },
                {
                  img: '/assets/photos/living-room.jpg',
                  title: 'Indoor Living Area',
                  desc: 'Comfortable sofa seating in a cozy indoor lounge for group downtime'
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="card-dark"
                  style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-dark-surface)' }}>
                      {card.title}
                    </h3>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.85rem', lineHeight: 1.6, flex: 1 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusion Note */}
      <section className="section section-light">
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--brand-green)', justifyContent: 'center' }}>
            <span className="eyebrow-line" style={{ backgroundColor: 'var(--brand-green)' }}></span>
            <span>Stay Packages</span>
            <span className="eyebrow-line" style={{ backgroundColor: 'var(--brand-green)' }}></span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--text-light-surface)', marginBottom: '1.25rem' }}>
            Included with the 24-Hour Package
          </h2>

          <p style={{ color: 'var(--text-light-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Air-conditioned room accommodation is fully included in the 24-Hour Package (₹2,000 per person), which also features two meals, tea twice, and two retreat activities. For day outing guests seeking resting rooms, availability can be requested upon enquiry.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/book?package=24hr" className="btn btn-brand" style={{ padding: '0.95rem 2.25rem' }}>
              <span>Book 24-Hour Package with AC Room</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/packages" className="btn btn-secondary-dark" style={{ padding: '0.95rem 2.25rem' }}>
              <span>View All Packages</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
