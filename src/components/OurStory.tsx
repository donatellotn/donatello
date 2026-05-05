import { motion } from 'framer-motion';

const fadeIn = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const fadeLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const base = import.meta.env.BASE_URL;

export const OurStory = () => {
  return (
    <section
      id="about"
      style={{ background: '#F8F5F0', padding: '120px 0', overflow: 'hidden' }}
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-20 items-center">

          {/* Left — Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden relative" style={{ boxShadow: '0 24px 48px rgba(0,0,0,0.12)' }}>
              <img
                src={`https://i.ibb.co/JFz4G42k/donatello-about.jpg`}
                alt="Intérieur vintage de Donatello"
                className="w-full object-cover transition-transform duration-[8s] ease hover:scale-[1.04]"
                style={{ height: '520px' }}
                loading="lazy"
              />
            </div>
            {/* Accent border */}
            <div
              className="absolute -bottom-5 -right-5 w-[120px] h-[120px] rounded-xl -z-10"
              style={{ border: '3px solid #C15C3D' }}
            />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label" style={{ textAlign: 'left' }}>Notre Histoire</span>
            <h2
              className="mb-6"
              style={{
                fontFamily: '"Abril Fatface",serif',
                fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                color: '#5E3A25',
              }}
            >
              Un Oasis Rétro au Cœur de Bizerte
            </h2>
            <p style={{ color: '#A68A6D', fontWeight: 300, lineHeight: 1.9, marginBottom: '20px', fontSize: '0.95rem', fontFamily: '"Merriweather",serif' }}>
              Donatello mêle magistralement une esthétique nostalgique et rétro à une atmosphère fraîche et moderne — une oasis accueillante riche en texture et en couleur.
            </p>
            <p style={{ color: '#A68A6D', fontWeight: 300, lineHeight: 1.9, marginBottom: '20px', fontSize: '0.95rem', fontFamily: '"Merriweather",serif' }}>
              Tables en bois brut massif, fauteuils velours, étagère de curiosités vintage — platine vinyle, téléphone à cadran, appareils photo anciens — chaque détail vous transporte dans le temps.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mt-7">
              {['Café d\'Exception', 'Ouvert dès 7h', 'Musique & Ambiance', 'Décor Vintage', 'Terrasse Ensoleillée'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    padding: '8px 16px',
                    borderRadius: '50px',
                    color: '#5E3A25',
                    background: 'rgba(193,92,61,0.08)',
                    letterSpacing: '0.5px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile image height fix */}
      <style>{`
        @media (max-width: 768px) {
          #about { padding: 80px 0 !important; }
          #about img { height: 340px !important; }
          #about .absolute.-bottom-5 { display: none; }
        }
      `}</style>
    </section>
  );
};
