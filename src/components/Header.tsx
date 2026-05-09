import { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { lang, setLang, tr } = useLang();

  useEffect(() => {
    return scrollY.on('change', (v) => setIsScrolled(v > 60));
  }, [scrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: tr('nav_about'), href: '/#about' },
    { label: tr('nav_menu'),  href: '/menu' },
    { label: tr('nav_reviews'), href: '/#testimonials' },
    { label: tr('nav_contact'),  href: '/#info' },
  ];

  const LangToggle = ({ className = '' }: { className?: string }) => {
    const baseColor = isScrolled ? '#2C5E5A' : '#FFFFFF';
    const borderColor = isScrolled ? 'rgba(44, 94, 90, 0.35)' : 'rgba(255, 255, 255, 0.4)';
    const hoverBg = isScrolled ? '#2C5E5A' : 'rgba(255, 255, 255, 0.15)';
    const hoverText = isScrolled ? '#fff' : '#FFFFFF';

    return (
      <button
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        aria-label="Switch language"
        className={className}
        style={{
          fontFamily: '"Inter",sans-serif',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase' as const,
          padding: '6px 12px',
          borderRadius: '6px',
          border: `1.5px solid ${borderColor}`,
          background: 'transparent',
          color: baseColor,
          cursor: 'pointer',
          transition: 'all 200ms',
          lineHeight: 1,
        }}
        onMouseEnter={e => {
          (e.target as HTMLButtonElement).style.background = hoverBg;
          (e.target as HTMLButtonElement).style.color = hoverText;
        }}
        onMouseLeave={e => {
          (e.target as HTMLButtonElement).style.background = 'transparent';
          (e.target as HTMLButtonElement).style.color = baseColor;
        }}
      >
        {lang === 'fr' ? 'EN' : 'FR'}
      </button>
    );
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-5'
      }`}
      style={{
        background: (isScrolled && !isMobileMenuOpen) ? 'rgba(253, 252, 251, 0.95)' : 'transparent',
        backdropFilter: (isScrolled && !isMobileMenuOpen) ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: (isScrolled && !isMobileMenuOpen) ? 'blur(20px)' : 'none',
        boxShadow: (isScrolled && !isMobileMenuOpen) ? '0 1px 0 rgba(44, 94, 90, 0.08)' : 'none',
      }}
    >
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          id="nav-logo"
          className="flex items-center gap-3 group"
          aria-label="Donatello — Accueil"
          onClick={(e) => {
            if (window.location.pathname === '/' || window.location.pathname === '/donatello/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logos/Logo-donatello.jpg`}
            alt="Donatello"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1.3rem', color: isScrolled ? '#1F4037' : '#FFFFFF', transition: 'color 300ms' }}>
            Donatello
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              id={`nav-${item.label.toLowerCase().replace(/\\W+/g, '-')}`}
              style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: isScrolled ? '#7E8D85' : 'rgba(255, 255, 255, 0.85)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase' as const,
                transition: 'color 300ms',
                cursor: 'pointer',
                textAlign: 'center',
                minWidth: '85px',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isScrolled ? '#1F4037' : '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? '#7E8D85' : 'rgba(255, 255, 255, 0.85)';
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Lang toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <LangToggle />
          <a
            href="tel:+21655540520"
            id="nav-phone-btn"
            className="flex justify-center items-center gap-2 transition-all duration-300"
            style={{
              background: isScrolled ? '#2C5E5A' : '#FFFFFF',
              color: isScrolled ? '#FFFFFF' : '#2C5E5A',
              padding: '10px 0',
              width: '160px',
              borderRadius: '8px',
              fontFamily: '"Inter",sans-serif',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase' as const,
              cursor: 'pointer',
              boxShadow: isScrolled ? '0 4px 12px rgba(44,94,90,0.15)' : '0 4px 12px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = isScrolled ? '0 6px 16px rgba(44,94,90,0.25)' : '0 6px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = isScrolled ? '0 4px 12px rgba(44,94,90,0.15)' : '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <Phone size={14} strokeWidth={2} />
            {tr('nav_call')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 cursor-pointer flex items-center justify-center z-[1000] relative"
          style={{ background: 'none', border: 'none', color: '#1F4037' }}
          aria-label={isMobileMenuOpen ? tr('nav_close') : tr('nav_open')}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-[990] flex flex-col items-center justify-center gap-8 pt-16"
            style={{
              background: 'rgba(253, 252, 251, 0.98)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  fontFamily: '"Abril Fatface",serif', 
                  fontSize: '2rem', 
                  color: '#1F4037', 
                  cursor: 'pointer', 
                  transition: 'color 300ms' 
                }}
                className="hover:!text-[#2C5E5A]"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col items-center gap-6 mt-4">
              <LangToggle className="scale-110" />
              <a 
                href="tel:+21655540520" 
                className="btn-primary flex items-center gap-2 mt-2 px-8 py-4 text-sm"
                style={{ borderRadius: '12px', boxShadow: '0 8px 24px rgba(44, 94, 90, 0.25)' }}
              >
                <Phone size={16} strokeWidth={2} />
                {tr('nav_call')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

