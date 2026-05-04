import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollY } = useScroll();
  const bgY     = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#FFFAF5' }}
      aria-label="Donatello — Salon de Thé à Bizerte"
    >
      {/* ── SEO h1 (visible to Google, visually styled as tagline) ── */}
      <h1 style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}>
        Donatello — Salon de Thé à Bizerte, Tunisie
      </h1>
      {/* ── Parallax hero image ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src="/hero_donatello.png"
          alt="L'intérieur de Donatello — Salon de Thé rétro-vintage"
          className="w-full h-full object-cover scale-110"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(255,250,245,0.97) 0%, rgba(255,250,245,0.82) 50%, rgba(255,250,245,0.10) 100%)',
          }}
        />
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16 sm:pt-28 pb-20 flex items-center justify-between">

        {/* Left — text */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[0.3em] text-[#1A6B6A] font-medium"
          >
            <span className="w-6 h-px bg-[#1A6B6A]" />
            Salon de Thé à Bizerte
            <span className="w-6 h-px bg-[#1A6B6A]" />
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-allenoire mb-8 leading-[0.92] whitespace-nowrap"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', color: '#1C1C1C' }}
          >
            Un café{' '}
            <span style={{ color: '#1A6B6A' }}>
              d'exception
            </span>
            <br />
            Une ambiance{' '}
            <span style={{ color: '#E8833A' }}>
              unique
            </span>
            <br />
            Un moment{' '}
            <span style={{ color: '#F2C94C' }}>
              à vous
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="text-lg leading-relaxed mb-12 text-balance"
            style={{ color: '#6B5E50', maxWidth: '36rem' }}
          >
            Un salon de thé rétro-vintage où chaque détail est pensé pour vous offrir un moment d&rsquo;évasion. Café, brunchs et douceurs dans une ambiance chaleureuse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/menu" id="hero-menu-btn" className="btn-primary">
              Découvrir le Menu
            </Link>
            <Link to="/#contact" id="hero-reserve-btn" className="btn-outline">
              Nous Trouver
            </Link>
          </motion.div>
        </div>

        {/* Right — real logo badge */}
        <div className="hidden lg:flex flex-col items-center gap-8 pr-8">
          {/* Floating logo badge */}
          <motion.div
            className="select-none relative animate-float"
          >
            <div className="absolute inset-0 rounded-full border border-[#1A6B6A]/20 scale-105" />
            <img
              src="/logos/Logo-donatello.jpg"
              alt="Donatello — Salon de Thé"
              className="w-56 h-56 object-cover rounded-full shadow-[0_16px_40px_rgba(26,107,106,0.25)] border-[6px] border-white/60 bg-black"
            />
          </motion.div>

          {/* Glass rating card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4"
          >
            <span style={{ fontFamily: '"Playfair Display",serif', fontSize: '2rem', color: '#1A6B6A', lineHeight: 1 }}>3.4</span>
            <div>
              <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6B5E50' }}>Google Rating</p>
              <p style={{ fontFamily: '"Playfair Display",serif', fontSize: '0.875rem', color: '#1C1C1C' }}>19 avis</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer animate-bounce"
        onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(28,28,28,0.35)' }}>
          Découvrir
        </span>
        <ArrowDown size={14} color="#1A6B6A" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};
