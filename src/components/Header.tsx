import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';


export const Header = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (v) => setIsScrolled(v > 60));
  }, [scrollY]);

  const navItems = [
    { label: 'Le Menu',   href: '/menu',      external: true  },
    { label: "L'Espace",  href: '/#our-story',  external: false },
    { label: 'Contact',   href: '/#contact',  external: false },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FFFAF5]/90 backdrop-blur-xl py-3 border-b border-[#1A6B6A]/10 shadow-[0_2px_24px_rgba(26,107,106,0.06)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link 
          to="/" 
          id="nav-logo" 
          className="flex items-center group" 
          aria-label="Donatello — Accueil"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="relative transition-transform duration-500 group-hover:scale-105 h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden bg-black shadow-sm border border-[#1A6B6A]/20 flex items-center justify-center">
            <img
              src="/logos/Logo-donatello.jpg"
              alt="Donatello — Salon de Thé"
              className="w-full h-full object-cover scale-[1.1]"
            />
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Navigation principale">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                to={item.href}
                id={`nav-${item.label.toLowerCase().replace(/\W+/g, '-')}`}
                className="relative text-[11px] uppercase tracking-[0.2em] font-medium text-[#1C1C1C] hover:text-[#1A6B6A] transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#1A6B6A] transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="tel:55540520"
            id="nav-phone-btn"
            className="btn-primary flex items-center gap-2 text-[12px] px-5 py-2.5"
          >
            <Phone size={14} strokeWidth={1.5} />
            55 540 520
          </motion.a>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#1C1C1C] hover:text-[#1A6B6A] transition-colors"
          aria-label="Ouvrir le menu"
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <MenuIcon size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFFAF5] border-b border-[#1A6B6A]/10 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#1C1C1C] hover:text-[#1A6B6A] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-[#1A6B6A]/10 my-2" />
              <a href="tel:55540520" className="flex items-center gap-2 text-[#1A6B6A] font-medium">
                <Phone size={16} strokeWidth={1.5} />
                55 540 520
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
