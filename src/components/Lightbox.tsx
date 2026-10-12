import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryPhoto } from '../data/siteData';

interface LightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photo,
  photos,
  onClose,
  onNavigate
}) => {
  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const total = photos.length;

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + total) % total;
    onNavigate(nextIdx);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % total;
    onNavigate(nextIdx);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        backgroundColor: 'rgba(15, 17, 14, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          color: 'var(--text-dark-surface)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ fontSize: '0.85rem', color: 'var(--antique-brass)', letterSpacing: '0.08em' }}>
          Photo {currentIndex + 1} of {total}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          style={{
            background: 'transparent',
            border: '1px solid var(--border-dark)',
            color: 'var(--text-dark-surface)',
            padding: '0.5rem',
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Area with Prev/Next controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          flex: 1,
          width: '100%',
          maxWidth: '1200px',
          margin: '1rem auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photograph"
          style={{
            position: 'absolute',
            left: '0.5rem',
            background: 'rgba(23, 26, 22, 0.75)',
            border: '1px solid var(--border-dark)',
            color: 'var(--text-dark-surface)',
            padding: '0.75rem',
            borderRadius: '2px',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Center Image */}
        <div
          style={{
            maxWidth: '90%',
            maxHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            style={{
              maxWidth: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              borderRadius: '2px',
              border: '1px solid var(--border-dark)'
            }}
          />
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photograph"
          style={{
            position: 'absolute',
            right: '0.5rem',
            background: 'rgba(23, 26, 22, 0.75)',
            border: '1px solid var(--border-dark)',
            color: 'var(--text-dark-surface)',
            padding: '0.75rem',
            borderRadius: '2px',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Caption */}
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          color: 'var(--text-dark-surface)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{photo.title}</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-dark-muted)' }}>{photo.subtitle}</p>
      </div>
    </div>
  );
};
