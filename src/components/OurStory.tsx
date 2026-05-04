import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Palm tree sunset divider (matches logo) ─────────────────── */
const SunsetDivider = () => (
  <div className="flex items-center justify-center gap-6 my-4">
    <span className="h-px flex-1 bg-[#1A6B6A] opacity-20" />
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="28" stroke="#1A6B6A" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M10 40 Q32 8 54 40" stroke="#F2C94C" strokeWidth="2" fill="none"/>
      <path d="M10 44 Q32 14 54 44" stroke="#E8833A" strokeWidth="1.5" fill="none"/>
      <path d="M10 48 Q32 20 54 48" stroke="#C0392B" strokeWidth="1" fill="none"/>
    </svg>
    <span className="h-px flex-1 bg-[#1A6B6A] opacity-20" />
  </div>
);

/* ─── Stat pill ─────────────────────────────────────────────── */
const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center flex-1 sm:flex-none">
    <p style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#1A6B6A', lineHeight: 1 }}>{number}</p>
    <p className="text-[9px] sm:text-[10px]" style={{ fontFamily: '"Inter",sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B5E50', marginTop: '0.4rem' }}>{label}</p>
  </div>
);

export const OurStory = () => {
  return (
    <section
      id="our-story"
      style={{ background: '#FDF6EE', padding: '7rem 0', overflow: 'hidden' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* ── Section label + heading ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1A6B6A', fontWeight: 500 }}>
            Notre Espace
          </span>
          <h2 style={{ fontFamily: '"Allenoire",Georgia,serif', fontSize: 'clamp(1.75rem, 6vw, 3.8rem)', color: '#1C1C1C', marginTop: '1rem', lineHeight: 1.25 }}>
            Plus qu'un Café,
            <br className="hidden sm:block" />
            <span style={{ color: '#1A6B6A' }}> Un Voyage dans le Temps</span>
          </h2>
          <SunsetDivider />
        </motion.div>

        {/* ── Two-column content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — image with floating elements */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative p-2 md:p-3 bg-white rounded-[2.5rem] shadow-[0_24px_80px_rgba(28,28,28,0.08)] border border-[#1A6B6A]/10">
              <div className="img-hover rounded-[2rem] overflow-hidden">
                <img
                  src="/story_donatello.png"
                  alt="Donatello — brunch et café d'exception"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating badge top-right */}
            <motion.div
              className="absolute -top-3 right-0 sm:-top-6 sm:-right-6 w-[6.5rem] h-[6.5rem] sm:w-[8rem] sm:h-[8rem] flex flex-col items-center justify-center bg-[#1A6B6A] text-[#FDF6EE] rounded-full border-[3px] border-[#FFFAF5] shadow-[0_8px_32px_rgba(26,107,106,0.35)] z-10 p-3 animate-float"
            >
              <span style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.4, textAlign: 'center' }}>
                Rétro<br />& Unique
              </span>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-8 w-[94%] left-[3%] sm:w-auto sm:left-1/2 sm:-translate-x-1/2 bg-[#FFFAF5] rounded-[1.25rem] p-4 sm:p-5 flex items-center justify-around sm:justify-center sm:gap-8 shadow-[0_12px_48px_rgba(28,28,28,0.10)] z-10 whitespace-nowrap"
            >
              <Stat number="☕" label="Café d'exception" />
              <div className="w-px h-8 bg-[#1A6B6A]/15 hidden sm:block" />
              <Stat number="🎶" label="Musique & Paix" />
              <div className="w-px h-8 bg-[#1A6B6A]/15 hidden sm:block" />
              <Stat number="✨" label="Ambiance Unique" />
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ paddingTop: '3rem' }}
          >
            <p style={{ fontFamily: '"Inter",sans-serif', color: '#6B5E50', fontSize: '1.0625rem', lineHeight: 1.85, marginBottom: '1.75rem' }}>
              Donatello est un salon de thé qui allie avec brio une esthétique rétro-vintage et une atmosphère moderne et chaleureuse, créant une oasis riche en textures et en couleurs au cœur de Bizerte.
            </p>
            <p style={{ fontFamily: '"Inter",sans-serif', color: '#6B5E50', fontSize: '1.0625rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Des murs bleu-teal aux tables en bois brut, des fauteuils vintage colorés aux étagères garnies de trésors d'époque — chaque détail invite à la découverte et au partage d'un moment exceptionnel.
            </p>
            {/* Pillars list */}
            <div className="space-y-5">
              {[
                { icon: '✦', title: 'Un décor captivant',         desc: 'Murs teal, fauteuils rétro, tables en bois brut et objets vintage soigneusement choisis.' },
                { icon: '✦', title: 'Des saveurs qui émerveillent', desc: 'Cheesecake, cappuccino, jus frais et brunchs généreux préparés avec passion.' },
                { icon: '✦', title: 'Une ambiance qui vous transporte', desc: 'Musique apaisante, lumière dorée et paix intérieure — l\'endroit parfait pour se ressourcer.' },
              ].map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <span style={{ color: '#1A6B6A', fontSize: '0.75rem', marginTop: '0.3rem', flexShrink: 0 }}>{p.icon}</span>
                  <div>
                    <p style={{ fontFamily: '"Playfair Display",serif', fontSize: '1rem', color: '#1C1C1C', marginBottom: '0.2rem' }}>{p.title}</p>
                    <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: '#6B5E50', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 relative z-20 flex flex-wrap gap-3 sm:justify-start lg:justify-end">
              <a
                href="/#contact"
                id="story-contact-btn"
                className="btn-primary inline-flex"
              >
                Nous Trouver
              </a>
              <Link
                to="/menu"
                id="story-menu-btn"
                className="btn-outline inline-flex items-center gap-2"
              >
                <span>Menu</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
