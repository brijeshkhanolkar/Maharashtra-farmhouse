import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  bgImage
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--header-height) + 3.5rem)',
        paddingBottom: '4.5rem',
        backgroundColor: isLight ? 'var(--bg-secondary)' : 'var(--bg-primary)',
        color: 'var(--text-dark-surface)',
        borderBottom: '1px solid var(--border-dark)',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* Background Image with restrained dark overlay */}
      {bgImage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.22,
            filter: 'saturate(0.85)',
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Subtle Botanical corner decoration */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10px',
          right: '5%',
          width: '140px',
          opacity: 0.12,
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

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-dark-subtle)',
            marginBottom: '1.25rem'
          }}
        >
          <Link to="/" style={{ color: 'var(--text-dark-muted)' }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--antique-brass)' }}>{eyebrow}</span>
        </div>

        {/* Eyebrow */}
        <div className="eyebrow">
          <span className="eyebrow-line"></span>
          <span>{eyebrow}</span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            maxWidth: '850px',
            marginBottom: '1.25rem',
            fontWeight: 400
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            color: 'var(--text-dark-muted)',
            maxWidth: '680px',
            lineHeight: 1.7
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};
