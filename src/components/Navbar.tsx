import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Stay', path: '/rooms' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Dining', path: '/dining' },
    { label: 'Packages', path: '/packages' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Location', path: '/location' },
    { label: 'Contact', path: '/contact' }
  ];

  const headerBg = theme === 'light'
    ? (scrolled ? '#F8F5EE' : 'rgba(248, 245, 238, 0.94)')
    : (scrolled ? '#171A16' : 'rgba(23, 26, 22, 0.92)');

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--header-height)',
          backgroundColor: headerBg,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-dark)',
          boxShadow: scrolled ? (theme === 'light' ? '0 4px 20px rgba(40, 48, 38, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.35)') : 'none',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Typographic Wordmark & Emblem */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'var(--text-dark-surface)',
              flexShrink: 0
            }}
            aria-label="Maharashtra Farm House Home"
          >
            <img
              src="/assets/artwork/logo-brand.png"
              alt="Maharashtra Farm House"
              style={{
                height: '42px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  color: 'var(--text-dark-surface)'
                }}
              >
                Maharashtra
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--antique-brass)',
                  marginTop: '1px',
                  fontWeight: 600
                }}
              >
                Farm House
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.4rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '0.04em',
                    color: isActive ? 'var(--antique-brass)' : 'var(--text-dark-muted)',
                    padding: '0.4rem 0',
                    transition: 'color var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                  className="nav-link"
                >
                  {isActive && (
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--antique-brass)'
                      }}
                    />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions: Theme Toggle + Book CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}
          >
            {/* Dark / Light Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
              aria-label={`Toggle theme (currently ${theme})`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={14} style={{ color: '#FFD700' }} />
                  <span style={{ fontSize: '0.725rem' }}>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={14} style={{ color: '#27372B' }} />
                  <span style={{ fontSize: '0.725rem' }}>Dark Mode</span>
                </>
              )}
            </button>

            {/* Book on WhatsApp / Book Now Desktop Button */}
            <div className="desktop-cta" style={{ display: 'none' }}>
              <Link
                to="/book"
                className="btn btn-whatsapp"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.55rem 1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <Send size={14} />
                <span>Book on WhatsApp</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: 'transparent',
                border: '1px solid var(--border-dark)',
                color: 'var(--text-dark-surface)',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            overflowY: 'auto',
            borderTop: '1px solid var(--border-dark)'
          }}
          className="mobile-drawer"
        >
          {/* Mobile Theme Switcher Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--bg-dark-surface)',
              border: '1px solid var(--border-dark)',
              borderRadius: '2px',
              marginBottom: '1.5rem'
            }}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--text-dark-muted)' }}>Appearance</span>
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{ padding: '0.4rem 0.85rem' }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: isActive ? 'var(--antique-brass)' : 'var(--text-dark-surface)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '0.65rem',
                    borderBottom: '1px solid var(--border-dark)'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {isActive && (
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--antique-brass)'
                        }}
                      />
                    )}
                    <span>{link.label}</span>
                  </span>
                  {isActive && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--antique-brass)', textTransform: 'uppercase' }}>
                      Active
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            to="/book"
            className="btn btn-whatsapp"
            style={{
              width: '100%',
              padding: '0.95rem',
              fontSize: '0.95rem',
              textAlign: 'center',
              justifyContent: 'center',
              borderRadius: '4px'
            }}
          >
            <Send size={16} />
            <span>Book on WhatsApp</span>
          </Link>

          <div
            style={{
              marginTop: 'auto',
              paddingTop: '2rem',
              color: 'var(--text-dark-subtle)',
              fontSize: '0.8125rem',
              textAlign: 'center'
            }}
          >
            Maharashtra Farm House | Authentic Countryside Retreat
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </>
  );
};
