import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';

const base = import.meta.env.BASE_URL;

export const Footer = () => {
  const { tr } = useLang();

  const navLinks = [
    { label: tr('nav_about') === 'About' ? 'Home' : 'Accueil', href: '/' },
    { label: tr('nav_about'), href: '/#about' },
    { label: tr('nav_menu'), href: '/menu' },
    { label: tr('nav_reviews'), href: '/#testimonials' },
  ];

  return (
    <>
      <footer
        id="footer"
        style={{ background: '#1F4037', color: 'rgba(253,252,251,0.7)', padding: '80px 0 32px' }}
      >
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Grid */}
          <div
            className="grid gap-12 mb-12"
            style={{ gridTemplateColumns: '2fr 1fr 1fr' }}
          >
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <img
                src={`${base}logos/Logo-donatello.jpg`}
                alt="Donatello"
                className="h-14 w-14 rounded-full object-cover"
              />
              <h3 style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1.4rem', color: '#FFFFFF' }}>
                Donatello
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '300px' }}>
                {tr('footer_desc')}
              </p>
              {/* Social */}
              <div className="flex gap-3 mt-3">
                <a
                  href="https://www.instagram.com/donatello_coffee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center transition-all duration-300 hover:bg-[#4A7C59] hover:-translate-y-1 cursor-pointer"
                  style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(253,252,251,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/p/Donatello-Coffee-61578106934628/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center transition-all duration-300 hover:bg-[#4A7C59] hover:-translate-y-1 cursor-pointer"
                  style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(253,252,251,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="tel:+21655540520"
                  aria-label="Téléphone"
                  className="flex items-center justify-center transition-all duration-300 hover:bg-[#4A7C59] hover:-translate-y-1 cursor-pointer"
                  style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(253,252,251,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 15a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 4.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(253,252,251,0.5)', marginBottom: '20px' }}>
                {tr('footer_nav')}
              </h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    id={`footer-nav-${link.label.toLowerCase().replace(/\W+/g, '-')}`}
                    className="transition-colors duration-300 hover:!text-[#FFFFFF] cursor-pointer"
                    style={{ fontSize: '0.95rem', color: 'rgba(253,252,251,0.7)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(253,252,251,0.5)', marginBottom: '20px' }}>
                {tr('contact_title')}
              </h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+21655540520" className="transition-colors duration-300 hover:!text-[#FFFFFF] cursor-pointer" style={{ fontSize: '0.95rem' }}>
                  +216 55 540 520
                </a>
                <span style={{ fontSize: '0.95rem' }}>{tr('contact_address_val')}</span>
                <span style={{ fontSize: '0.95rem' }}>{tr('footer_hours_val')}</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex justify-between items-center flex-wrap gap-2"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '24px',
              fontFamily: '"Inter",sans-serif',
              fontSize: '0.8rem',
              color: 'rgba(253,252,251,0.4)',
            }}
          >
            <span>{tr('footer_rights')}</span>
            <span>Made with ❤️ in Bizerte</span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          #footer { padding: 60px 0 32px !important; }
          #footer .grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #footer .flex.justify-between { flex-direction: column; text-align: center; }
        }
      `}</style>
    </>
  );
};
