import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  const { tr } = useLang();

  return (
    <section
      id="hero"
      className={`relative min-h-screen grid overflow-hidden ${visible ? 'hero-visible' : ''}`}
      style={{ gridTemplateColumns: '1fr 1fr', background: '#FDFCFB' }}
    >
      {/* Left — Image */}
      <div className="relative overflow-hidden hero-visual max-md:h-[55vh]">
        <img
          src={`https://i.ibb.co/SXv4yBx0/donatello-hero.jpg`}
          alt="Intérieur Donatello"
          className="w-full h-full object-cover transition-transform duration-[12s] ease-out"
          style={{
            filter: 'saturate(1.05) contrast(1.02) brightness(1.05)',
            transform: visible ? 'scale(1)' : 'scale(1.05)',
          }}
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 max-md:hidden"
          style={{ background: 'linear-gradient(to right, transparent 50%, #FDFCFB 100%)' }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to bottom, transparent 60%, #FDFCFB 100%)' }}
        />
      </div>

      {/* Right — Content */}
      <div
        className="flex flex-col justify-center relative z-10 max-md:px-6 max-md:py-8 max-md:pb-16"
        style={{ padding: '120px 64px 80px 48px' }}
      >
        {/* Logo badge */}
        <img
          src={`${import.meta.env.BASE_URL}logos/Logo-donatello.jpg`}
          alt="Donatello"
          className="w-[100px] h-[100px] rounded-full object-cover mb-8 transition-all duration-700 max-md:w-[85px] max-md:h-[85px]"
          style={{
            boxShadow: '0 8px 30px rgba(44, 94, 90, 0.15)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        />

        {/* Eyebrow */}
        <div
          className="mb-4 transition-all duration-600"
          style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#2C5E5A',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '150ms',
          }}
        >
          {tr('hero_label')}
        </div>

        {/* Title */}
        <h1
          className="mb-6 transition-all duration-700"
          style={{
            fontFamily: '"Abril Fatface",serif',
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            color: '#1F4037',
            lineHeight: 1.1,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '250ms',
          }}
        >
          Donatello
        </h1>

        {/* Accent line */}
        <div
          className="mb-6 transition-all duration-500 max-md:mx-auto"
          style={{
            width: '60px',
            height: '3px',
            background: '#4A7C59',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transitionDelay: '400ms',
            borderRadius: '2px',
          }}
        />

        {/* Tagline */}
        <p
          className="mb-10 transition-all duration-600 max-md:text-[0.95rem]"
          style={{
            fontFamily: '"Merriweather",serif',
            fontSize: '1.05rem',
            color: '#7E8D85',
            fontWeight: 300,
            maxWidth: '400px',
            lineHeight: 1.8,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '450ms',
          }}
        >
          {tr('hero_tagline')}
        </p>

        {/* CTAs */}
        <div
          className="flex gap-4 flex-wrap transition-all duration-600 max-md:justify-center max-md:flex-col max-md:w-full"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '550ms',
          }}
        >
          <Link 
            to="/menu" 
            id="hero-menu-btn" 
            className="btn-primary max-md:w-full max-md:py-4"
            style={{ borderRadius: '8px', fontSize: '0.9rem' }}
          >
            {tr('hero_cta_menu')}
          </Link>
          <a 
            href="tel:+21655540520" 
            id="hero-contact-btn" 
            className="btn-outline max-md:w-full max-md:py-4"
            style={{ 
              borderRadius: '8px', 
              fontSize: '0.9rem',
              borderColor: 'rgba(44, 94, 90, 0.25)',
              color: '#1F4037'
            }}
          >
            {tr('hero_cta_contact')}
          </a>
        </div>
      </div>

      {/* Mobile: stack layout override */}
      <style>{`
        @media (max-width: 900px) {
          #hero { grid-template-columns: 1fr !important; min-height: auto !important; }
          #hero > div:last-child { 
            padding: 20px 24px 64px !important; 
            align-items: center !important;
            text-align: center !important;
          }
          #hero > div:last-child > img { margin: -50px auto 24px auto !important; position: relative; z-index: 20; border: 4px solid #FDFCFB; }
          #hero > div:last-child > p { margin: 0 auto 32px auto !important; }
          #hero > div:last-child > div.flex { justify-content: center !important; }
          #hero > div:last-child > div.mb-6 { transform-origin: center !important; }
        }
      `}</style>
    </section>
  );
};
