import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { diningData } from '../data/siteData';

export const Dining: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'vegetarian' | 'non-vegetarian'>('both');

  const filteredMenus = activeTab === 'both' 
    ? diningData 
    : diningData.filter((m) => m.category === activeTab);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-dark-surface)' }}>
      {/* Page Hero */}
      <PageHero
        eyebrow="Culinary Tradition"
        title="Authentic Malwani Dining"
        subtitle="Savour rich Maharashtrian flavours, aromatic Tambada and Pandhra Rassa, freshly prepared Solkadi, and regional delicacies."
        bgImage="/assets/photos/dining-feast-spread.jpg"
      />

      {/* Menu Introduction & Filter */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <span className="eyebrow-line"></span>
              <span>Farmhouse Kitchen</span>
              <span className="eyebrow-line"></span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', marginBottom: '1.25rem' }}>
              Fresh Regional Preparation
            </h2>
            <p style={{ color: 'var(--text-dark-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Food at Maharashtra Farm House is cooked fresh for our guests using authentic regional recipes. Signature gravies such as Tambada Rassa (fiery red broth) and Pandhra Rassa (soothing coconut and spice broth) are accompanied by cooling Solkadi and warm rotis.
            </p>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'inline-flex',
                gap: '0.5rem',
                padding: '0.4rem',
                backgroundColor: 'var(--bg-dark-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px'
              }}
            >
              {[
                { id: 'both', label: 'All Menus' },
                { id: 'vegetarian', label: 'Vegetarian Menu' },
                { id: 'non-vegetarian', label: 'Non-Vegetarian Menu' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.04em',
                    border: 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    backgroundColor: activeTab === tab.id ? 'var(--antique-brass)' : 'transparent',
                    color: activeTab === tab.id ? '#171A16' : 'var(--text-dark-muted)',
                    fontWeight: activeTab === tab.id ? 600 : 400,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menus Showcase */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '3rem',
              alignItems: 'stretch'
            }}
          >
            {filteredMenus.map((menu) => (
              <div
                key={menu.category}
                className="card-dark"
                style={{
                  padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* Header with Genuine Thali Image */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                  <img
                    src={menu.image}
                    alt={menu.title}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--antique-brass)',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--antique-brass)',
                        fontWeight: 600
                      }}
                    >
                      {menu.category === 'vegetarian' ? 'Plant-Based Speciality' : 'Signature Meat Speciality'}
                    </span>
                    <h3 style={{ fontSize: '1.75rem', color: 'var(--text-dark-surface)', marginTop: '0.25rem' }}>
                      {menu.title}
                    </h3>
                  </div>
                </div>

                <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {menu.description}
                </p>

                {/* Exact Supplied Dish List */}
                <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.75rem', flex: 1 }}>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      color: 'var(--antique-brass)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    Confirmed Menu Dishes:
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {menu.dishes.map((dish, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          padding: '0.5rem 0',
                          borderBottom: i === menu.dishes.length - 1 ? 'none' : '1px dashed rgba(244, 240, 231, 0.08)'
                        }}
                      >
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: 'var(--antique-brass)',
                            borderRadius: '1px',
                            flexShrink: 0
                          }}
                        />
                        <span style={{ fontSize: '1rem', color: 'var(--text-dark-surface)', fontWeight: 400 }}>
                          {dish}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(23, 26, 22, 0.6)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '2px',
                    fontSize: '0.785rem',
                    color: 'var(--text-dark-subtle)',
                    lineHeight: 1.5
                  }}
                >
                  <em>Note:</em> Menu items are served in accordance with the selected package. Main curries and preparations are confirmed upon inquiry.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Pergola Dining Feature */}
      <section className="section section-light">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="eyebrow" style={{ color: 'var(--brand-green)' }}>
                <span className="eyebrow-line" style={{ backgroundColor: 'var(--brand-green)' }}></span>
                <span>Open-Air Dining</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: 'var(--text-light-surface)', marginBottom: '1.25rem' }}>
                Pergola & Garden Pavilion
              </h2>

              <p style={{ color: 'var(--text-light-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Meals at the farmhouse are savoured under our solid wooden pergola pavilion. Fitted with warm hanging pendant lights and rustic group seating, the pavilion allows guests to dine together in the fresh countryside air, surrounded by greenery.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                  color: 'var(--text-light-surface)',
                  fontSize: '0.9rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--brand-green)', borderRadius: '1px' }} />
                  <span>Covered timber pavilion with comfortable group tables</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--brand-green)', borderRadius: '1px' }} />
                  <span>Atmospheric evening hanging lanterns and perimeter lights</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--brand-green)', borderRadius: '1px' }} />
                  <span>Convenient service alongside lawn and swimming pool</span>
                </div>
              </div>

              <Link to="/book" className="btn btn-brand">
                <span>Book Package with Malwani Meals</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div
              style={{
                border: '1px solid var(--border-light)',
                padding: '0.65rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '2px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
              }}
            >
              <img
                src="/assets/photos/pergola-dining.jpg"
                alt="Outdoor wooden dining pergola pavilion with red chairs at night"
                style={{ width: '100%', height: 'auto', borderRadius: '1px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
