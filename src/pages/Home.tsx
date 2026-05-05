import { useState, useEffect } from 'react';
import { Hero }        from '../components/Hero';
import { OurStory }    from '../components/OurStory';
import { Reviews }     from '../components/Reviews';
import { ContactForm } from '../components/ContactForm';
import { Link }        from 'react-router-dom';
import { motion }      from 'framer-motion';
import { useLang }     from '../i18n/LangContext';
import { MenuItem, parseMenuHTML } from '../utils/menuParser';

const base = import.meta.env.BASE_URL;
const MENU_RAW_URL = base + 'menu-data.html';

export const Home = () => {
  const { tr, lang } = useLang();
  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch(`${MENU_RAW_URL}?t=${Date.now()}`);
        if (!res.ok) return;
        const html = await res.text();
        const items = parseMenuHTML(html);
        const withImages = items.filter(i => i.image && i.image.trim() !== '');
        setFeaturedItems(withImages.slice(0, 3));
      } catch (e) {
        console.error('Failed to load featured menu:', e);
      }
    };
    fetchFeatured();
  }, []);

  const displayItems = featuredItems.map(p => ({
    ...p,
    title: lang === 'en' ? (p.title_en || p.title) : p.title
  }));

  return (
    <main className="flex-grow">
      <Hero />
      <OurStory />

      {/* ── Menu Teaser — Cinematic ── */}
      <section
        id="menu-teaser"
        style={{ background: '#F8F5F0', padding: '100px 0' }}
      >
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="section-label">{tr('specials_label')}</span>
            <h2 className="section-title">{tr('specials_title')}</h2>
            <p style={{
              fontFamily: '"Merriweather",serif',
              fontSize: '0.95rem',
              color: '#A68A6D',
              maxWidth: '480px',
              fontWeight: 300,
              lineHeight: 1.8,
              margin: '0 auto',
            }}>
              {tr('specials_desc')}
            </p>
            <div className="divider" />
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-[900px] mx-auto"
          >
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: '1fr 1fr' }}
            >
              {displayItems[0] && (
                <Link to="/menu" className="block relative overflow-hidden rounded-xl cursor-pointer group" style={{ gridRow: 'span 2' }}>
                  <img
                    src={displayItems[0].image}
                    alt={displayItems[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: '400px' }}
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 80%)',
                      fontFamily: '"Abril Fatface",serif',
                      fontSize: '1rem',
                      color: '#fff',
                    }}
                  >
                    {displayItems[0].title}
                  </div>
                </Link>
              )}

              {displayItems[1] && (
                <Link to="/menu" className="block relative overflow-hidden rounded-xl cursor-pointer group">
                  <img
                    src={displayItems[1].image}
                    alt={displayItems[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: '190px' }}
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 80%)',
                      fontFamily: '"Abril Fatface",serif',
                      fontSize: '1rem',
                      color: '#fff',
                    }}
                  >
                    {displayItems[1].title}
                  </div>
                </Link>
              )}

              {displayItems[2] && (
                <Link to="/menu" className="block relative overflow-hidden rounded-xl cursor-pointer group">
                  <img
                    src={displayItems[2].image}
                    alt={displayItems[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: '190px' }}
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 80%)',
                      fontFamily: '"Abril Fatface",serif',
                      fontSize: '1rem',
                      color: '#fff',
                    }}
                  >
                    {displayItems[2].title}
                  </div>
                </Link>
              )}
            </div>

            {/* CTA */}
            <div className="text-center mt-9">
              <Link to="/menu" id="home-full-menu-btn" className="btn-primary">
                {tr('specials_cta')}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            #menu-teaser .grid { grid-template-columns: 1fr !important; }
            #menu-teaser .grid > div:first-child { grid-row: span 1 !important; }
            #menu-teaser .grid > div:first-child img { min-height: 240px !important; }
          }
        `}</style>
      </section>

      <Reviews />
      <ContactForm />
    </main>
  );
};
