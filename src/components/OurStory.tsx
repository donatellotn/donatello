import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

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

export const OurStory = () => {
  const { tr, trArr } = useLang();

  return (
    <section
      id="about"
      className="py-16 md:py-[120px] overflow-hidden"
      style={{ background: '#F7F9F7' }}
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-12 md:gap-20 items-center">

          {/* Left — Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden relative" style={{ boxShadow: '0 24px 48px rgba(31, 64, 55, 0.08)' }}>
              <img
                src={`https://i.ibb.co/JFz4G42k/donatello-about.jpg`}
                alt="Intérieur vintage de Donatello"
                className="w-full object-cover transition-transform duration-[8s] ease hover:scale-[1.04]"
                style={{ height: '520px' }}
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Accent border */}
            <div
              className="absolute -bottom-5 -right-5 w-[120px] h-[120px] rounded-xl -z-10"
              style={{ border: '3px solid #4A7C59' }}
            />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label" style={{ textAlign: 'left', color: '#2C5E5A' }}>{tr('story_label')}</span>
            <h2
              className="mb-6"
              style={{
                fontFamily: '"Abril Fatface",serif',
                fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                color: '#1F4037',
              }}
            >
              {tr('story_title')}
            </h2>
            <p style={{ color: '#7E8D85', fontWeight: 300, lineHeight: 1.9, marginBottom: '20px', fontSize: '0.95rem', fontFamily: '"Merriweather",serif' }}>
              {tr('story_p1')}
            </p>
            <p style={{ color: '#7E8D85', fontWeight: 300, lineHeight: 1.9, marginBottom: '20px', fontSize: '0.95rem', fontFamily: '"Merriweather",serif' }}>
              {tr('story_p2')}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mt-7">
              {trArr('story_tags').map((tag: string) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: '"Inter",sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '8px 16px',
                    borderRadius: '50px',
                    color: '#1F4037',
                    background: 'rgba(74, 124, 89, 0.08)',
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
          #about { padding: 60px 0 !important; }
          #about img { height: 340px !important; }
          #about .absolute.-bottom-5 { display: none; }
        }
      `}</style>
    </section>
  );
};
