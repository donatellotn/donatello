import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="hero"
      className={`relative min-h-screen grid overflow-hidden ${visible ? 'hero-visible' : ''}`}
      style={{ gridTemplateColumns: '1fr 1fr', background: '#3A2A22' }}
    >
      {/* Left — Image */}
      <div className="relative overflow-hidden hero-visual max-md:h-[50vh]">
        <img
          src={`https://i.ibb.co/SXv4yBx0/donatello-hero.jpg`}
          alt="Intérieur Donatello"
          className="w-full h-full object-cover transition-transform duration-[12s] ease-out"
          style={{
            filter: 'saturate(1.1) contrast(1.05)',
            transform: visible ? 'scale(1)' : 'scale(1.08)',
          }}
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 max-md:hidden"
          style={{ background: 'linear-gradient(to right, transparent 60%, #3A2A22)' }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, #3A2A22)' }}
        />
      </div>

      {/* Right — Content */}
      <div
        className="flex flex-col justify-center relative z-10 max-md:px-6 max-md:py-12 max-md:pb-16"
        style={{ padding: '120px 64px 80px 48px' }}
      >
        {/* Logo badge */}
        <img
          src={`https://i.ibb.co/XfZJNgWQ/donatello-logo.jpg`}
          alt="Donatello"
          className="w-[100px] h-[100px] rounded-full object-cover mb-8 transition-all duration-700"
          style={{
            boxShadow: '0 0 40px rgba(193,92,61,0.3)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        />

        {/* Eyebrow */}
        <div
          className="mb-4 transition-all duration-600"
          style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#C15C3D',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '150ms',
          }}
        >
          Salon de Thé · Bizerte
        </div>

        {/* Title */}
        <h1
          className="mb-5 transition-all duration-700"
          style={{
            fontFamily: '"Abril Fatface",serif',
            fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
            color: '#FFFFFF',
            lineHeight: 1.05,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '250ms',
          }}
        >
          Donatello
        </h1>

        {/* Accent line */}
        <div
          className="mb-5 transition-all duration-500"
          style={{
            width: '48px',
            height: '2px',
            background: '#C15C3D',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transitionDelay: '400ms',
          }}
        />

        {/* Tagline */}
        <p
          className="mb-9 transition-all duration-600"
          style={{
            fontFamily: '"Merriweather",serif',
            fontSize: '1rem',
            color: 'rgba(253,248,239,0.6)',
            fontWeight: 300,
            maxWidth: '380px',
            lineHeight: 1.8,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '450ms',
          }}
        >
          Un bel endroit pour boire un bon café et passer un moment agréable.
        </p>

        {/* CTAs */}
        <div
          className="flex gap-3.5 flex-wrap transition-all duration-600"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '550ms',
          }}
        >
          <Link to="/menu" id="hero-menu-btn" className="btn-primary">
            Découvrir le Menu
          </Link>
          <a href="tel:+21655540520" id="hero-contact-btn" className="btn-outline">
            Nous Contacter
          </a>
        </div>
      </div>

      {/* Mobile: stack layout override */}
      <style>{`
        @media (max-width: 900px) {
          #hero { grid-template-columns: 1fr !important; min-height: auto !important; }
          #hero > div:last-child { padding: 48px 24px 64px !important; }
        }
      `}</style>
    </section>
  );
};
