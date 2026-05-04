import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer
      id="footer"
      style={{ background: '#1C1C1C', color: '#FDF6EE', paddingTop: '5rem', paddingBottom: '2.5rem' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* ── Top: emblem centred ── */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative p-0.5 md:p-1 rounded-full bg-black transition-transform duration-500 hover:scale-105 border border-[#1A6B6A]/10 shadow-md overflow-hidden">
            <img
              src="/logos/Logo-donatello.jpg"
              alt="Donatello — Salon de Thé"
              className="h-24 md:h-32 w-auto object-contain rounded-full"
            />
          </div>
          <p style={{ fontFamily: '"Playfair Display",serif', fontSize: '1.05rem', fontStyle: 'italic', color: 'rgba(253,246,238,0.7)', marginTop: '1.75rem', letterSpacing: '0.06em' }}>
            Votre oasis rétro-vintage à Bizerte.
          </p>
          {/* Elegant line */}
          <div className="flex items-center gap-4 mt-8 w-full max-w-md">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1A6B6A]/40 to-transparent" />
            <span style={{ color: '#F2C94C', fontSize: '0.65rem', opacity: 0.8 }}>☀</span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1A6B6A]/40 to-transparent" />
          </div>
        </div>

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <h4 style={{ fontFamily: '"Allenoire",serif', fontSize: '1.5rem', color: '#FDF6EE', marginBottom: '1rem', letterSpacing: '0.05em' }}>Donatello</h4>
            <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: 'rgba(253,246,238,0.55)', lineHeight: 1.75 }}>
              Votre salon de thé rétro-vintage à Bizerte. Café d'exception, ambiance unique et moments inoubliables.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(253,246,238,0.4)', marginBottom: '1.25rem' }}>Navigation</h4>
            <ul className="space-y-3" style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem' }}>
              {[
                { label: 'Accueil',   href: '/'        },
                { label: 'Le Menu',   href: '/menu'    },
                { label: "L'Espace",  href: '/#our-story' },
                { label: 'Contact',   href: '/#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    id={`footer-nav-${link.label.toLowerCase().replace(/\W+/g, '-')}`}
                    style={{ color: 'rgba(253,246,238,0.55)', transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#1A6B6A')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,246,238,0.55)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(253,246,238,0.4)', marginBottom: '1.25rem' }}>Contact</h4>
            <ul className="space-y-4" style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: 'rgba(253,246,238,0.55)' }}>
              <li className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={1.5} style={{ color: '#1A6B6A', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Bizerte, Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} style={{ color: '#1A6B6A', flexShrink: 0 }} />
                <a href="tel:55540520" id="footer-phone" style={{ transition: 'color 0.3s' }}
                   onMouseEnter={e => (e.currentTarget.style.color = '#1A6B6A')}
                   onMouseLeave={e => (e.currentTarget.style.color = 'rgba(253,246,238,0.55)')}>
                  55 540 520
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(253,246,238,0.4)', marginBottom: '1.25rem' }}>Horaires</h4>
            <ul className="space-y-3" style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.875rem', color: 'rgba(253,246,238,0.55)' }}>
              <li className="flex justify-between">
                <span>Mar — Dim</span>
                <span style={{ color: '#FDF6EE', fontWeight: 500 }}>07:00 — 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lundi</span>
                <span style={{ color: '#C0392B', fontWeight: 500 }}>Fermé</span>
              </li>
            </ul>
            <div style={{ marginTop: '1rem', padding: '0.5rem 0.75rem', background: 'rgba(26,107,106,0.08)', borderRadius: '0.5rem', fontSize: '0.75rem', color: 'rgba(253,246,238,0.4)' }}>
              TND 10–20 par personne
            </div>
          </div>
        </div>

        {/* Menu highlights */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div className="flex flex-wrap justify-center gap-3">
            {['Cheesecake', 'Cappuccino', "Jus d'Orange"].map((item) => (
              <span key={item} style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.75rem', padding: '0.5rem 1.25rem', borderRadius: '9999px', border: '1px solid rgba(26,107,106,0.2)', color: 'rgba(253,246,238,0.6)', letterSpacing: '0.05em' }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(26,107,106,0.15)', paddingTop: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.75rem', color: 'rgba(253,246,238,0.3)', textAlign: 'center' }}>
            © {new Date().getFullYear()} Donatello — Salon de Thé. Tous droits réservés.
          </p>
          <p style={{ fontFamily: '"Playfair Display",serif', fontSize: '0.7rem', color: 'rgba(26,107,106,0.5)', letterSpacing: '0.08em', textAlign: 'center' }}>
            Votre oasis rétro-vintage à Bizerte.
          </p>
        </div>
      </div>
    </footer>
  );
};
