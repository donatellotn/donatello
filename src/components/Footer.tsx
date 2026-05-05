import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

export const Footer = () => {
  return (
    <>
      {/* Sunset gradient bar */}
      <div className="sunset-bar" />

      <footer
        id="footer"
        style={{ background: '#3A2A22', color: 'rgba(253,248,239,0.6)', padding: '56px 0 28px' }}
      >
        <div className="max-w-[1140px] mx-auto px-6">
          {/* Grid */}
          <div
            className="grid gap-12 mb-10"
            style={{ gridTemplateColumns: '2fr 1fr 1fr' }}
          >
            {/* Brand */}
            <div className="flex flex-col gap-3.5">
              <img
                src={`${base}logos/Logo-donatello.jpg`}
                alt="Donatello"
                className="h-12 w-12 rounded-full object-cover"
              />
              <h3 style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1.3rem', color: '#FFFFFF' }}>
                Donatello
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '300px' }}>
                Salon de Thé à Bizerte — Un voyage entre vintage et modernité où chaque visite est une expérience unique.
              </p>
              {/* Social */}
              <div className="flex gap-2.5 mt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex items-center justify-center transition-all duration-300 hover:bg-[#2C5E5A] hover:-translate-y-0.5 cursor-pointer"
                  style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(253,248,239,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex items-center justify-center transition-all duration-300 hover:bg-[#2C5E5A] hover:-translate-y-0.5 cursor-pointer"
                  style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(253,248,239,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="tel:+21655540520"
                  aria-label="Téléphone"
                  className="flex items-center justify-center transition-all duration-300 hover:bg-[#2C5E5A] hover:-translate-y-0.5 cursor-pointer"
                  style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(253,248,239,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(253,248,239,0.4)', marginBottom: '18px' }}>
                Navigation
              </h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Accueil', href: '/' },
                  { label: 'À Propos', href: '/#about' },
                  { label: 'Menu', href: '/menu' },
                  { label: 'Avis', href: '/#testimonials' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    id={`footer-nav-${link.label.toLowerCase().replace(/\W+/g, '-')}`}
                    className="transition-colors duration-300 hover:!text-[#C15C3D] cursor-pointer"
                    style={{ fontSize: '0.85rem', color: 'rgba(253,248,239,0.6)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(253,248,239,0.4)', marginBottom: '18px' }}>
                Contact
              </h4>
              <div className="flex flex-col gap-2.5">
                <a href="tel:+21655540520" className="transition-colors duration-300 hover:!text-[#C15C3D] cursor-pointer" style={{ fontSize: '0.85rem' }}>
                  +216 55 540 520
                </a>
                <span style={{ fontSize: '0.85rem' }}>Bizerte, Tunisie</span>
                <span style={{ fontSize: '0.85rem' }}>Ouvert dès 7h00</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex justify-between items-center flex-wrap gap-1.5"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '20px',
              fontFamily: '"Inter",sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(253,248,239,0.3)',
            }}
          >
            <span>© {new Date().getFullYear()} Donatello Salon de Thé. Tous droits réservés.</span>
            <span>Fait avec passion à Bizerte</span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          #footer .grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          #footer .flex.justify-between { flex-direction: column; text-align: center; }
        }
      `}</style>
    </>
  );
};
