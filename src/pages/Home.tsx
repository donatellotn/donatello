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
        className="py-16 md:py-[100px]"
        style={{ background: '#F8F5F0' }}
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

          {/* Category Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {displayItems.map((item, idx) => (
              <Link 
                key={idx} 
                to="/menu" 
                className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-[#EAE3D9] transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
                style={{ backgroundColor: '#FCFAF8' }}
              >
                {/* Image Section */}
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Price Pill */}
                  <div 
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm"
                    style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.85rem', fontWeight: 600, color: '#3A2A22' }}
                  >
                    {item.price.toFixed(1)} DT
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 
                    style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1.35rem', color: '#3A2A22', lineHeight: 1.2 }}
                    className="mb-3 line-clamp-1"
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    style={{ fontFamily: '"Merriweather",serif', fontSize: '0.85rem', color: '#A68A6D', lineHeight: 1.6, fontWeight: 300 }}
                    className="mb-6 line-clamp-2 flex-grow"
                  >
                    {item.description || "Découvrez cette délicieuse création dans notre menu."}
                  </p>

                  <div 
                    className="flex items-center gap-2 group-hover:gap-4 transition-all mt-auto"
                    style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2C5E5A' }}
                  >
                    <span>Détails</span>
                    <span className="text-[1.1rem]">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link to="/menu" id="home-full-menu-btn" className="btn-primary" style={{ padding: '16px 36px', borderRadius: '40px' }}>
              {tr('specials_cta')}
            </Link>
          </div>
        </div>

        <style>{`
          /* Ensure grid breaks nicely on small screens */
          @media (max-width: 768px) {
            #menu-teaser .grid { gap: 1.5rem !important; }
          }
        `}</style>
      </section>

      <Reviews />
      <ContactForm />
    </main>
  );
};
