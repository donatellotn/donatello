import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (v) => setIsScrolled(v > 60));
  }, [scrollY]);

  const navItems = [
    { label: 'À Propos', href: '/#about' },
    { label: 'Menu',     href: '/menu' },
    { label: 'Avis',     href: '/#testimonials' },
    { label: 'Contact',  href: '/#info' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'py-5'
      }`}
      style={{
        background: isScrolled ? 'rgba(253,248,239,0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        boxShadow: isScrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
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
            }
          }}
        >
          <img
            src={'https://i.ibb.co/XfZJNgWQ/donatello-logo.jpg'}
            alt="Donatello"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1.3rem', color: '#78350F' }}>
            Donatello
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              id={`nav-${item.label.toLowerCase().replace(/\W+/g, '-')}`}
              style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: '0.82rem',
                fontWeight: 500,
                color: '#9A7B5A',
                letterSpacing: '1.5px',
                textTransform: 'uppercase' as const,
                transition: 'color 300ms',
                cursor: 'pointer',
              }}
              className="hover:!text-[#78350F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+21655540520"
            id="nav-phone-btn"
            className="flex items-center gap-2 transition-all duration-300 hover:bg-[#1A6B6A]"
            style={{
              background: '#1C1917',
              color: '#FDF8EF',
              padding: '10px 22px',
              borderRadius: '6px',
              fontFamily: '"Inter",sans-serif',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase' as const,
              cursor: 'pointer',
            }}
          >
            <Phone size={14} strokeWidth={1.5} />
            Appelez-nous
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 cursor-pointer"
          style={{ background: 'none', border: 'none', color: '#78350F' }}
          aria-label="Ouvrir le menu"
        >
          {isMobileMenuOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[999] flex flex-col items-center justify-center gap-7"
          style={{
            background: 'rgba(253,248,239,0.98)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-6 cursor-pointer"
            style={{ background: 'none', border: 'none', color: '#78350F' }}
            aria-label="Fermer"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1.6rem', color: '#78350F', cursor: 'pointer', transition: 'color 300ms' }}
              className="hover:!text-[#B45309]"
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+21655540520" className="btn-primary mt-4">Appelez-nous</a>
        </div>
      )}
    </header>
  );
};
