import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Bed, 
  Waves, 
  Utensils, 
  Activity, 
  Trees, 
  Users, 
  Check, 
  Clock, 
  Sun, 
  Moon, 
  Send, 
  Phone, 
  Camera, 
  ChevronRight, 
  ChevronLeft,
  X
} from 'lucide-react';
import { diningData, locationDetails } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const [galleryScrollIndex, setGalleryScrollIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isLight = theme === 'light';

  const galleryItems = [
    { src: '/assets/photos/gal_clean_1.jpg', title: 'Illuminated Cottages', sub: 'Timber cottages reflecting over night grounds' },
    { src: '/assets/photos/gal_clean_2.jpg', title: 'Swimming Pool & Gazebo', sub: 'Cool azure water and poolside seating' },
    { src: '/assets/photos/gal_clean_3.jpg', title: 'Wooden AC Bedroom', sub: 'Warm natural wood and ambient ceiling lighting' },
    { src: '/assets/photos/gal_clean_4.jpg', title: 'Stone Waterfall', sub: 'Artisanal stone cascade into the pool' },
    { src: '/assets/photos/gal_clean_5.jpg', title: 'Cricket Pitch & Lawn', sub: 'Spacious turf and pitch under floodlights' },
    { src: '/assets/photos/gal_clean_6.jpg', title: 'Pergola Dining', sub: 'Covered timber dining pavilion with ambient lamps' },
  ];

  const handleNextGal = () => {
    setGalleryScrollIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrevGal = () => {
    setGalleryScrollIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  // Compute displayed gallery photos
  const displayedGallery = [
    ...galleryItems.slice(galleryScrollIndex),
    ...galleryItems.slice(0, galleryScrollIndex)
  ].slice(0, 6);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* ============================================================== */}
      {/* 1. HERO SECTION                                                */}
      {/* ============================================================== */}
      {isLight ? (
        /* LIGHT THEME HERO (Directly matching 1.png) */
        <section
          style={{
            position: 'relative',
            paddingTop: 'calc(var(--header-height) + 2.5rem)',
            paddingBottom: '4rem',
            backgroundColor: 'var(--bg-primary)',
            overflow: 'hidden'
          }}
        >
          {/* Left Side Framing: Top & Bottom Botanical Clusters (Matches 1.png, fills vertical gap) */}
          <div
            className="hero-foliage-top-left"
            style={{
              position: 'absolute',
              top: '-15px',
              left: '-25px',
              width: '235px',
              maxWidth: '16vw',
              opacity: 0.88,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 1,
              transition: 'opacity 0.3s ease'
            }}
          >
            <img
              src="/assets/artwork/palm-top-left.png"
              alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div
            className="hero-foliage-bottom-left"
            style={{
              position: 'absolute',
              top: '320px',
              left: '-30px',
              width: '215px',
              maxWidth: '15vw',
              opacity: 0.88,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 1,
              transition: 'opacity 0.3s ease'
            }}
          >
            <img
              src="/assets/artwork/palm-bottom-left.png"
              alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Right Side Framing: Top & Bottom Botanical Clusters (Fills vertical gap on right side) */}
          <div
            className="hero-foliage-top-right"
            style={{
              position: 'absolute',
              top: '-15px',
              right: '-25px',
              width: '235px',
              maxWidth: '16vw',
              opacity: 0.88,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 1,
              transition: 'opacity 0.3s ease'
            }}
          >
            <img
              src="/assets/artwork/palm-top-right.png"
              alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div
            className="hero-foliage-bottom-right"
            style={{
              position: 'absolute',
              top: '320px',
              right: '-30px',
              width: '215px',
              maxWidth: '15vw',
              opacity: 0.88,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 1,
              transition: 'opacity 0.3s ease'
            }}
          >
            <img
              src="/assets/artwork/palm-bottom-right.png"
              alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(2rem, 4vw, 4rem)',
                alignItems: 'center',
                marginBottom: '3.5rem'
              }}
            >
              {/* Left Column: Editorial Branding & Text */}
              <div>
                {/* Sun sketch icon & badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <img src="/assets/artwork/golden-sun-doodle.png" alt="" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--antique-brass)'
                    }}
                  >
                    Escape • Relax • Celebrate
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: 'clamp(2.75rem, 5.2vw, 4.5rem)',
                    fontWeight: 500,
                    lineHeight: 1.08,
                    marginBottom: '0.75rem',
                    color: '#1E231B'
                  }}
                >
                  Maharashtra
                  <br />
                  <span style={{ color: '#27372B' }}>Farm House</span>
                </h1>

                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                    fontStyle: 'italic',
                    color: 'var(--antique-brass)',
                    marginBottom: '1.25rem',
                    fontWeight: 600
                  }}
                >
                  Escape the routine. Live the farmhouse life.
                </div>

                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-dark-muted)',
                    lineHeight: 1.75,
                    marginBottom: '2rem',
                    maxWidth: '520px'
                  }}
                >
                  Relax, celebrate and create unforgettable memories with your family and friends at Maharashtra Farm House. Private cottages, spacious lawns, swimming pool, great food and fun activities - all in one place.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    to="/packages"
                    className="btn btn-brand"
                    style={{
                      padding: '0.9rem 2.2rem',
                      borderRadius: '9999px',
                      fontSize: '0.9rem',
                      boxShadow: '0 4px 16px rgba(39, 55, 43, 0.25)'
                    }}
                  >
                    <span>Explore Packages</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    to="/gallery"
                    className="btn btn-secondary-light"
                    style={{
                      padding: '0.9rem 2rem',
                      borderRadius: '9999px',
                      fontSize: '0.9rem',
                      borderColor: 'rgba(35, 45, 33, 0.2)',
                      color: '#1E231B'
                    }}
                  >
                    <span>View Property</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Card with Clean Photo & Overlay Badges */}
              <div style={{ position: 'relative' }}>
                {/* Handwritten Floating Stickers */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '-15px',
                    zIndex: 5,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-brass)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '0.875rem',
                    color: 'var(--antique-brass)',
                    fontWeight: 600,
                    transform: 'rotate(-4deg)'
                  }}
                >
                  More than just a Stay
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '-18px',
                    right: '-10px',
                    zIndex: 5,
                    backgroundColor: 'rgba(39, 55, 43, 0.95)',
                    color: '#F4F0E7',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.12)',
                    fontSize: '0.785rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    transform: 'rotate(3deg)'
                  }}
                >
                  Good Food • Great Company
                </div>

                {/* Main Hero Card Container */}
                <div
                  className="hero-main-card"
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(35, 45, 33, 0.16)',
                    border: '2px solid rgba(255, 255, 255, 0.9)',
                    position: 'relative',
                    height: '440px',
                    backgroundColor: '#1E231D'
                  }}
                >
                  {/* PURE, UNALTERED HERO PHOTOGRAPH WITH ZERO BAKED-IN TEXT */}
                  <img
                    src="/assets/photos/pure_hero_cottages_pool.jpg"
                    alt="Illuminated Maharashtra Farm House cottages and swimming pool at dusk"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  {/* Clean Bottom Overlay Pill inside Card */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      padding: '0.75rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={18} style={{ color: 'var(--brand-green)' }} />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1E231B', lineHeight: 1.2 }}>
                          A perfect getaway
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted-olive)' }}>
                          near nature
                        </div>
                      </div>
                    </div>

                    <div className="hero-pill-previews" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <img
                        src="/assets/photos/pool-night.jpg"
                        alt="pool preview"
                        style={{ width: '38px', height: '28px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <img
                        src="/assets/photos/waterfall.jpg"
                        alt="waterfall preview"
                        style={{ width: '38px', height: '28px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <img
                        src="/assets/photos/cricket-turf.jpg"
                        alt="cricket preview"
                        style={{ width: '38px', height: '28px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <Link
                        to="/gallery"
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--brand-green)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.2s ease'
                        }}
                        aria-label="View Gallery"
                      >
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Facilities Bar from 1.png */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(35, 45, 33, 0.1)',
                padding: '1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {[
                { title: 'Private Cottages', sub: 'With AC & Modern Comforts', icon: <Bed size={22} /> },
                { title: 'Swimming Pool', sub: 'Relax & Unwind', icon: <Waves size={22} /> },
                { title: 'Delicious Food', sub: 'Authentic Malwani Taste', icon: <Utensils size={22} /> },
                { title: 'Outdoor Activities', sub: 'Cricket, Sports & More', icon: <Activity size={22} /> },
                { title: 'Spacious Lawn', sub: 'For Gatherings', icon: <Trees size={22} /> },
                { title: 'Perfect for Groups', sub: 'Family, Friends & Events', icon: <Users size={22} /> }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <div style={{ color: 'var(--antique-brass)', marginBottom: '0.25rem' }}>{item.icon}</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1E231B' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-subtle)' }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* DARK THEME HERO (Architectural Deep Charcoal) */
        <section
          style={{
            position: 'relative',
            minHeight: '92vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'calc(var(--header-height) + 2rem)',
            paddingBottom: '5rem',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/assets/photos/pure_hero_cottages_pool.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              zIndex: 1
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(23, 26, 22, 0.75) 0%, rgba(23, 26, 22, 0.58) 45%, rgba(23, 26, 22, 0.94) 100%)',
              zIndex: 2
            }}
          />

          <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--antique-brass)',
                backgroundColor: 'rgba(23, 26, 22, 0.65)',
                padding: '0.5rem 1.25rem',
                borderRadius: '2px',
                border: '1px solid var(--border-brass)',
                marginBottom: '1.75rem',
                backdropFilter: 'blur(4px)'
              }}
            >
              <span>FARMHOUSE STAYS AND EXPERIENCES</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 5rem)',
                fontWeight: 400,
                letterSpacing: '-0.015em',
                lineHeight: 1.1,
                maxWidth: '920px',
                margin: '0 auto 1.5rem',
                color: '#F4F0E7',
                textShadow: '0 2px 18px rgba(0, 0, 0, 0.45)'
              }}
            >
              A Countryside Escape, Made for You.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                color: 'rgba(244, 240, 231, 0.88)',
                maxWidth: '680px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7,
                fontWeight: 300
              }}
            >
              Comfortable AC rooms, a swimming pool, outdoor activities, and authentic Malwani flavours at Maharashtra Farm House.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap'
              }}
            >
              <Link to="/packages" className="btn btn-primary" style={{ padding: '0.95rem 2.25rem', fontSize: '0.95rem' }}>
                <span>Explore Packages</span>
                <ArrowRight size={16} />
              </Link>

              <Link to="/gallery" className="btn btn-secondary-light" style={{ padding: '0.95rem 2.25rem', fontSize: '0.95rem' }}>
                <span>View the Property</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 2. EXPERIENCES SECTION (Fixed 2x2 grid, zero orphan cards)     */}
      {/* ============================================================== */}
      <section
        className={`section ${isLight ? 'section-light' : 'section-dark-elevated'}`}
        style={{
          borderTop: '1px solid var(--border-dark)',
          borderBottom: '1px solid var(--border-dark)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Heading and Story */}
            <div>
              <div className="eyebrow" style={{ color: isLight ? 'var(--brand-green)' : 'var(--antique-brass)' }}>
                <span className="eyebrow-line" style={{ backgroundColor: isLight ? 'var(--brand-green)' : 'var(--antique-brass)' }}></span>
                <span>EXPERIENCES</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 4.2vw, 3.25rem)',
                  color: isLight ? '#1E231B' : '#F4F0E7',
                  marginBottom: '1rem'
                }}
              >
                Fun Times, Unforgettable Memories
              </h2>

              <p
                style={{
                  color: 'var(--text-dark-muted)',
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  maxWidth: '520px',
                  marginBottom: '1.75rem'
                }}
              >
                From a refreshing dip in the pool to exciting outdoor games, from cosy cottages to beautiful lawns - every corner is designed for relaxation and fun.
              </p>

              <Link
                to="/experiences"
                className={`btn ${isLight ? 'btn-brand' : 'btn-outline-brass'}`}
                style={{ borderRadius: isLight ? '9999px' : '2px', padding: '0.8rem 2rem' }}
              >
                <span>See All Experiences</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Column: Rock-solid 2x2 Grid (Balanced, no orphans!) */}
            <div
              className="experiences-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem'
              }}
            >
              {[
                { title: 'Swimming Pool', sub: 'Cool. Calm. Unforgettable.', img: '/assets/photos/pool-night.jpg' },
                { title: 'Stone Waterfall', sub: 'A Touch of Nature', img: '/assets/photos/waterfall.jpg' },
                { title: 'Outdoor Lounge', sub: 'Relax Under the Stars', img: '/assets/photos/pergola-dining.jpg' },
                { title: 'Open Lawn', sub: 'Play, Celebrate, Enjoy', img: '/assets/photos/cricket-turf.jpg' }
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: isLight ? '#FFFFFF' : 'var(--bg-dark-surface)',
                    borderRadius: isLight ? '16px' : '4px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-dark)',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div style={{ height: '140px', overflow: 'hidden' }}>
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: isLight ? '#1E231B' : '#F4F0E7', marginBottom: '0.2rem' }}>
                      {card.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-subtle)', marginBottom: '0.75rem', flex: 1 }}>
                      {card.sub}
                    </div>
                    <Link
                      to="/experiences"
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isLight ? 'rgba(39, 55, 43, 0.08)' : 'rgba(179, 148, 92, 0.15)',
                        color: isLight ? 'var(--brand-green)' : 'var(--antique-brass)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                        transition: 'background-color 0.2s ease'
                      }}
                      aria-label={card.title}
                    >
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PACKAGES SECTION (Unified 4-column row on desktop)           */}
      {/* ============================================================== */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                <span>PACKAGES</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                Choose Your Perfect Getaway
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
                Simple and flexible packages for families, friends and groups.
              </p>
            </div>
            <Link
              to="/packages"
              className={`btn ${isLight ? 'btn-brand' : 'btn-outline-brass'}`}
              style={{ borderRadius: isLight ? '9999px' : '2px' }}
            >
              <span>View All Package Details</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 4-Item Row (Day, Night, 24-Hour, and Perfect For side card) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              alignItems: 'stretch'
            }}
          >
            {/* 1. Day Package */}
            <div
              style={{
                backgroundColor: isLight ? '#FCFAF5' : 'var(--bg-dark-surface)',
                borderRadius: isLight ? '20px' : '4px',
                border: isLight ? '1px solid rgba(179, 148, 92, 0.35)' : '1px solid var(--border-dark)',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(179, 148, 92, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--antique-brass)' }}>
                  <Sun size={20} />
                </div>
                <h3 style={{ fontSize: '1.45rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>Day Package</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--antique-brass)' }}>
                  ₹1,000
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dark-subtle)' }}>/ person</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: isLight ? 'var(--brand-green)' : 'var(--antique-brass-light)', fontWeight: 600, marginBottom: '1.5rem' }}>
                11 AM - 11 PM
              </div>

              <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.25rem', marginBottom: '2rem', flex: 1 }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass)' }} />
                    <span>One Lunch (Malwani feast)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass)' }} />
                    <span>One Tea</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/book?package=day"
                className="btn btn-primary"
                style={{ width: '100%', borderRadius: isLight ? '9999px' : '2px', padding: '0.85rem' }}
              >
                <span>Book Day Package</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* 2. Night Package (High-Contrast Dark Green Card as in 1.png) */}
            <div
              style={{
                backgroundColor: isLight ? '#192219' : '#141813',
                color: '#F4F0E7',
                borderRadius: isLight ? '20px' : '4px',
                border: '1px solid rgba(179, 148, 92, 0.45)',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 12px 32px rgba(25, 34, 25, 0.25)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--antique-brass-light)' }}>
                  <Moon size={20} />
                </div>
                <h3 style={{ fontSize: '1.45rem', color: '#F4F0E7' }}>Night Package</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--antique-brass-light)' }}>
                  ₹1,000
                </span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(244, 240, 231, 0.65)' }}>/ person</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--antique-brass-light)', fontWeight: 600, marginBottom: '1.5rem' }}>
                7 PM - 9 AM
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1.25rem', marginBottom: '2rem', flex: 1 }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass-light)' }} />
                    <span>One Lunch / Dinner</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass-light)' }} />
                    <span>Breakfast</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass-light)' }} />
                    <span>One Tea</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/book?package=night"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  borderRadius: isLight ? '9999px' : '2px',
                  padding: '0.85rem',
                  backgroundColor: 'var(--antique-brass-light)'
                }}
              >
                <span>Book Night Package</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* 3. 24-Hour Package */}
            <div
              style={{
                backgroundColor: isLight ? '#FCFAF5' : 'var(--bg-dark-surface)',
                borderRadius: isLight ? '20px' : '4px',
                border: isLight ? '1px solid rgba(179, 148, 92, 0.45)' : '1px solid var(--border-dark)',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(179, 148, 92, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--antique-brass)' }}>
                  <Clock size={20} />
                </div>
                <h3 style={{ fontSize: '1.45rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>24-Hour Package</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--antique-brass)' }}>
                  ₹2,000
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dark-subtle)' }}>/ person</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: isLight ? 'var(--brand-green)' : 'var(--antique-brass-light)', fontWeight: 600, marginBottom: '1.5rem' }}>
                11 AM - 11 AM or 7 PM - 7 PM
              </div>

              <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.25rem', marginBottom: '2rem', flex: 1 }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass)' }} />
                    <span>Two Meals</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass)' }} />
                    <span>Two Teas</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass)' }} />
                    <span>AC Room accommodation</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                    <Check size={16} style={{ color: 'var(--antique-brass)' }} />
                    <span>Two Activities included</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/book?package=24hr"
                className="btn btn-primary"
                style={{ width: '100%', borderRadius: isLight ? '9999px' : '2px', padding: '0.85rem' }}
              >
                <span>Book 24-Hour Package</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* 4. Perfect For Card (Seamless 4th column) */}
            <div
              style={{
                backgroundColor: isLight ? '#FCF7EC' : 'var(--bg-dark-surface)',
                borderRadius: isLight ? '20px' : '4px',
                border: isLight ? '1px dashed rgba(179, 148, 92, 0.5)' : '1px solid var(--border-dark)',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--antique-brass)', fontStyle: 'italic', fontWeight: 600, marginBottom: '1.25rem' }}>
                Perfect For
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>
                {[
                  'Families',
                  'Friends',
                  'Birthday Celebrations',
                  'Group Outings',
                  'Corporate Retreats'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={15} style={{ color: isLight ? 'var(--brand-green)' : 'var(--antique-brass)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. FOOD & DINING SECTION (Clean thali platters)                 */}
      {/* ============================================================== */}
      <section className={`section ${isLight ? 'section-light' : 'section-dark-elevated'}`} style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ color: isLight ? 'var(--brand-green)' : 'var(--antique-brass)' }}>
              <span className="eyebrow-line" style={{ backgroundColor: isLight ? 'var(--brand-green)' : 'var(--antique-brass)' }}></span>
              <span>FOOD</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: isLight ? '#1E231B' : '#F4F0E7' }}>
              Authentic Malwani Flavours
            </h2>
            <p style={{ color: 'var(--text-dark-muted)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Relish delicious home-style Malwani food, prepared with fresh ingredients and rich flavours.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Vegetarian Menu Card */}
            <div
              className="dining-menu-card"
              style={{
                backgroundColor: isLight ? '#FFFFFF' : 'var(--bg-dark-surface)',
                borderRadius: isLight ? '20px' : '4px',
                border: '1px solid var(--border-dark)',
                padding: '2rem',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '1.5rem',
                alignItems: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2E7D32' }} />
                  <h3 style={{ fontSize: '1.3rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>Vegetarian Menu</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.875rem', color: 'var(--text-dark-muted)' }}>
                  {diningData[0].dishes.map((dish, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} style={{ color: 'var(--antique-brass)', flexShrink: 0 }} />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="/assets/photos/thali_veg_clean.jpg"
                  alt="Vegetarian Malwani Thali Feast"
                  style={{
                    width: '180px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: isLight ? '3px solid #EAE3D2' : '3px solid #2B3329',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            </div>

            {/* Non-Vegetarian Menu Card */}
            <div
              className="dining-menu-card"
              style={{
                backgroundColor: isLight ? '#FFFFFF' : 'var(--bg-dark-surface)',
                borderRadius: isLight ? '20px' : '4px',
                border: '1px solid var(--border-dark)',
                padding: '2rem',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '1.5rem',
                alignItems: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D9534F' }} />
                  <h3 style={{ fontSize: '1.3rem', color: isLight ? '#1E231B' : '#F4F0E7' }}>Non-Vegetarian Menu</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.875rem', color: 'var(--text-dark-muted)' }}>
                  {diningData[1].dishes.map((dish, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Check size={14} style={{ color: 'var(--antique-brass)', flexShrink: 0 }} />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="/assets/photos/thali_nonveg_clean.jpg"
                  alt="Non-Vegetarian Malwani Thali Feast"
                  style={{
                    width: '180px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: isLight ? '3px solid #EAE3D2' : '3px solid #2B3329',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. GALLERY SECTION RIBBON (Clean photos, Lightbox interactive) */}
      {/* ============================================================== */}
      <section
        style={{
          backgroundColor: '#121511',
          color: '#F4F0E7',
          padding: '3.5rem 0',
          borderTop: '1px solid var(--border-dark)',
          borderBottom: '1px solid var(--border-dark)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--antique-brass)', fontWeight: 600 }}>
                GALLERY
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', color: '#F4F0E7', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span>Take a Look Around</span>
                <Camera size={22} style={{ color: 'var(--antique-brass)' }} />
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={handlePrevGal}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#F4F0E7',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                aria-label="Previous photos"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNextGal}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#F4F0E7',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                aria-label="Next photos"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* 6 Clean Thumbnail Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem'
            }}
          >
            {displayedGallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '145px',
                  display: 'block',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'transform 0.25s ease, border-color 0.25s ease'
                }}
                title={img.title}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '0.65rem'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#F4F0E7' }}>
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(10, 12, 10, 0.94)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              style={{
                position: 'absolute',
                top: '-3rem',
                right: '0',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#F4F0E7',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem'
              }}
            >
              <span>Close</span>
              <X size={22} />
            </button>
            <img
              src={displayedGallery[lightboxIndex]?.src}
              alt={displayedGallery[lightboxIndex]?.title}
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid var(--border-brass)'
              }}
            />
            <div style={{ marginTop: '1rem', color: '#F4F0E7' }}>
              <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--antique-brass)' }}>
                {displayedGallery[lightboxIndex]?.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(244, 240, 231, 0.7)' }}>
                {displayedGallery[lightboxIndex]?.sub}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 6. LOCATION & FINAL CTA (Matching 1.png)                        */}
      {/* ============================================================== */}
      <section className="section" style={{ backgroundColor: isLight ? '#F8F5EE' : 'var(--bg-primary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'stretch'
            }}
          >
            {/* Left Card: Location & Map from 1.png */}
            <div
              style={{
                backgroundColor: isLight ? '#FFFFFF' : 'var(--bg-dark-surface)',
                borderRadius: isLight ? '20px' : '4px',
                border: '1px solid var(--border-dark)',
                padding: '2.25rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="eyebrow" style={{ color: isLight ? 'var(--brand-green)' : 'var(--antique-brass)' }}>
                <span className="eyebrow-line"></span>
                <span>LOCATION</span>
              </div>
              <h2 style={{ fontSize: '2rem', color: isLight ? '#1E231B' : '#F4F0E7', marginBottom: '0.75rem' }}>
                Easy To Find, Hard To Forget
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Located in a peaceful and easily accessible area, Maharashtra Farm House offers the perfect break from the city.
              </p>

              <div
                style={{
                  borderRadius: isLight ? '14px' : '4px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-dark)',
                  marginBottom: '1.5rem',
                  height: '180px',
                  position: 'relative'
                }}
              >
                <img
                  src="/assets/photos/clean_map.jpg"
                  alt="Maharashtra Farm House Location Satellite Map"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <a
                href={locationDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${isLight ? 'btn-brand' : 'btn-primary'}`}
                style={{
                  borderRadius: isLight ? '9999px' : '2px',
                  padding: '0.85rem',
                  marginTop: 'auto',
                  justifyContent: 'center'
                }}
              >
                <span>Get Directions</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Right Card: Ready for a getaway? Book on WhatsApp from 1.png */}
            <div
              style={{
                backgroundColor: isLight ? '#FFFFFF' : 'var(--bg-dark-surface)',
                borderRadius: isLight ? '20px' : '4px',
                border: '1px solid var(--border-dark)',
                padding: '2.25rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '2.4rem',
                    color: isLight ? '#1E231B' : '#F4F0E7',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}
                >
                  Ready for a getaway?
                </h2>
                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                  Book your stay or get in touch for more details.
                </p>

                <Link
                  to="/book"
                  className="btn btn-whatsapp"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: isLight ? '9999px' : '4px',
                    marginBottom: '2rem'
                  }}
                >
                  <Send size={18} />
                  <span>Book on WhatsApp</span>
                </Link>
              </div>

              {/* Contact Details Grid */}
              <div
                className="location-details-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  borderTop: '1px solid var(--border-dark)',
                  paddingTop: '1.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-dark-muted)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <MapPin size={18} style={{ color: 'var(--brand-green)' }} />
                  <div style={{ fontWeight: 600, color: isLight ? '#1E231B' : '#F4F0E7' }}>16.7978268, 74.6445618</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-dark-subtle)' }}>Coordinates</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <Phone size={18} style={{ color: 'var(--brand-green)' }} />
                  <div style={{ fontWeight: 600, color: isLight ? '#1E231B' : '#F4F0E7' }}>Booking Desk</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-dark-subtle)' }}>Phone / WhatsApp</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <Clock size={18} style={{ color: 'var(--brand-green)' }} />
                  <div style={{ fontWeight: 600, color: isLight ? '#1E231B' : '#F4F0E7' }}>11 AM - 11 PM</div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-dark-subtle)' }}>Open Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-foliage-top-left,
          .hero-foliage-bottom-left,
          .hero-foliage-top-right,
          .hero-foliage-bottom-right {
            opacity: 0.55 !important;
            max-width: 12vw !important;
          }
        }
        @media (max-width: 768px) {
          .hero-foliage-top-left,
          .hero-foliage-bottom-left,
          .hero-foliage-top-right,
          .hero-foliage-bottom-right {
            display: none !important;
          }
          .hero-main-card {
            height: 320px !important;
          }
          .dining-menu-card {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
            text-align: center;
          }
          .dining-menu-card ul {
            align-items: center !important;
          }
          .location-details-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 580px) {
          .experiences-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-pill-previews img {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
