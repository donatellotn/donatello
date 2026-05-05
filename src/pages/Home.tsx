import { Hero }        from '../components/Hero';
import { OurStory }    from '../components/OurStory';
import { Reviews }     from '../components/Reviews';
import { ContactForm } from '../components/ContactForm';
import { Link }        from 'react-router-dom';
import { motion }      from 'framer-motion';

const base = import.meta.env.BASE_URL;

export const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <OurStory />

      {/* ── Menu Teaser — Cinematic ── */}
      <section
        id="menu-teaser"
        style={{ background: '#F5E6D3', padding: '100px 0' }}
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
            <span className="section-label">Nos Spécialités</span>
            <h2 className="section-title">Un Festin pour les Sens</h2>
            <p style={{
              fontFamily: '"Merriweather",serif',
              fontSize: '0.95rem',
              color: '#9A7B5A',
              maxWidth: '480px',
              fontWeight: 300,
              lineHeight: 1.8,
              margin: '0 auto',
            }}>
              Du café d'exception aux créations gourmandes — chaque saveur est une œuvre d'art.
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
              {/* Large — Brunch */}
              <div className="relative overflow-hidden rounded-xl cursor-pointer group" style={{ gridRow: 'span 2' }}>
                <img
                  src={`https://i.ibb.co/d0G5cVfP/donatello-brunch.jpg`}
                  alt="Brunch Donatello"
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
                  Brunch Gourmand
                </div>
              </div>

              {/* Cappuccino */}
              <div className="relative overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src={`https://i.ibb.co/7tZtzyw6/donatello-cappuccino.jpg`}
                  alt="Cappuccino"
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
                  Cappuccino
                </div>
              </div>

              {/* Mojito */}
              <div className="relative overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src={`https://i.ibb.co/VWcK9Rcx/donatello-mojito.jpg`}
                  alt="Mojito"
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
                  Mojito Fruits
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-9">
              <Link to="/menu" id="home-full-menu-btn" className="btn-primary">
                Voir le Menu Complet
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
