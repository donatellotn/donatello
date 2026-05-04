import { Hero }     from '../components/Hero';
import { OurStory } from '../components/OurStory';
import { Menu }     from '../components/Menu';
import { Reviews }  from '../components/Reviews';
import { ContactForm } from '../components/ContactForm';
import { Link }     from 'react-router-dom';
import { motion }   from 'framer-motion';

export const Home = () => {
  return (
    <main className="flex-grow">
      <Hero />

      {/* ── Our Story ── */}
      <OurStory />

      {/* ── Menu Preview ── */}
      <section
        id="menu"
        style={{ background: '#FFFAF5', padding: '7rem 1.5rem', textAlign: 'center' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.6 }}
          >
            {/* label */}
            <span style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1A6B6A', fontWeight: 500 }}>
              Notre Menu
            </span>

            {/* heading */}
            <h2 style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4.5vw,3.2rem)', color: '#1C1C1C', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.1 }}>
              Découvrez notre Menu
            </h2>

            {/* sunset divider */}
            <div className="flex items-center justify-center gap-5 mb-10">
              <span className="h-px w-16 bg-[#1A6B6A] opacity-20" />
              <svg width="24" height="24" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <circle cx="32" cy="32" r="20" stroke="#1A6B6A" strokeWidth="2" fill="none" opacity="0.3"/>
                <path d="M16 38 Q32 12 48 38" stroke="#F2C94C" strokeWidth="2" fill="none"/>
              </svg>
              <span className="h-px w-16 bg-[#1A6B6A] opacity-20" />
            </div>

            <p style={{ fontFamily: '"Inter",sans-serif', color: '#6B5E50', maxWidth: '36rem', margin: '0 auto 3rem', lineHeight: 1.75, fontSize: '1.0625rem' }}>
              Cheesecake, cappuccino, jus d'orange frais et bien plus encore.
              Consultez notre menu complet en ligne.
            </p>
          </motion.div>

          <Menu isPreview={true} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-14"
          >
            <Link to="/menu" id="home-full-menu-btn" className="btn-primary inline-flex">
              Voir le Menu Complet
            </Link>
          </motion.div>
        </div>
      </section>

      <Reviews />
      <ContactForm />
    </main>
  );
};
