import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Lightbox } from '../components/Lightbox';
import { galleryPhotos } from '../data/siteData';
import type { GalleryPhoto } from '../data/siteData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'cottages', label: 'Cottages & Exterior' },
    { id: 'rooms', label: 'AC Rooms' },
    { id: 'pool', label: 'Swimming Pool & Waterfall' },
    { id: 'dining', label: 'Dining & Pergola' },
    { id: 'activities', label: 'Lawn & Cricket' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeCategory);

  const handleNavigate = (newIndex: number) => {
    setActivePhoto(filteredPhotos[newIndex]);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Visual Portfolio"
        title="Moments at Maharashtra Farm House"
        subtitle="Explore genuine property photographs capturing our timber cottages, illuminated pool, AC bedrooms, and authentic dining."
        bgImage="/assets/photos/pure_hero_cottages_pool.jpg"
      />

      {/* Gallery Section */}
      <section className="section section-dark">
        <div className="container">
          {/* Category Filter Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '3.5rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.35rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.04em',
                  borderRadius: '2px',
                  border: `1px solid ${activeCategory === cat.id ? 'var(--antique-brass)' : 'var(--border-dark)'}`,
                  backgroundColor: activeCategory === cat.id ? 'var(--antique-brass)' : 'var(--bg-dark-surface)',
                  color: activeCategory === cat.id ? '#171A16' : 'var(--text-dark-muted)',
                  fontWeight: activeCategory === cat.id ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Editorial Photo Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
              minHeight: '400px'
            }}
          >
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="card-dark"
                onClick={() => setActivePhoto(photo)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: '280px',
                  borderRadius: '2px'
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePhoto(photo);
                  }
                }}
                aria-label={`View larger photograph: ${photo.title}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="gallery-img"
                />

                {/* Hover / Overlay Details */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.25rem',
                    background: 'linear-gradient(to top, rgba(23, 26, 22, 0.95) 0%, rgba(23, 26, 22, 0.4) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', color: '#F4F0E7', marginBottom: '0.2rem' }}>
                        {photo.title}
                      </h3>
                      <p style={{ fontSize: '0.785rem', color: 'var(--antique-brass)' }}>
                        {photo.subtitle}
                      </p>
                    </div>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(23, 26, 22, 0.7)',
                        border: '1px solid var(--border-brass)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--antique-brass)',
                        flexShrink: 0
                      }}
                    >
                      <Eye size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Count & Clarification */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '3.5rem',
              color: 'var(--text-dark-subtle)',
              fontSize: '0.85rem'
            }}
          >
            Showing {filteredPhotos.length} authentic property photographs. All images depict genuine facilities at Maharashtra Farm House.
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        photo={activePhoto}
        photos={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onNavigate={handleNavigate}
      />

      <style>{`
        .gallery-img:hover {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
};
