import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const infoItems = [
  {
    icon: <MapPin size={18} strokeWidth={1.5} />,
    label: 'Adresse',
    value: 'Bizerte, Tunisie',
  },
  {
    icon: <Phone size={18} strokeWidth={1.5} />,
    label: 'Téléphone',
    value: '55 540 520',
    href: 'tel:55540520',
  },
  {
    icon: <Clock size={18} strokeWidth={1.5} />,
    label: 'Horaires',
    value: '07:00 — 23:00 · Mar—Dim',
  },
];

export const ContactForm = () => (
  <section
    id="contact"
    style={{ background: '#FDF6EE', paddingTop: '4rem', paddingBottom: '7rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', position: 'relative', overflow: 'hidden' }}
  >
    {/* background circle accent */}
    <div
      style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate3d(-50%,-50%,0)',
        willChange: 'transform',
        width: '56rem', height: '56rem',
        background: 'rgba(26,107,106,0.04)',
        borderRadius: '9999px',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }}
    />

    <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── Left: info ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1A6B6A', fontWeight: 500 }}>
            Nous Trouver
          </span>

          <h2 style={{ fontFamily: '"Allenoire",serif', fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#1C1C1C', marginTop: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Venez nous
            <br />
            <span style={{ color: '#1A6B6A' }}>Rendre Visite</span>
          </h2>

          {/* divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ height: '1px', width: '3rem', background: '#1A6B6A', opacity: 0.25 }} />
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="32" cy="32" r="20" stroke="#1A6B6A" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M16 38 Q32 12 48 38" stroke="#F2C94C" strokeWidth="2" fill="none"/>
            </svg>
            <span style={{ height: '1px', flex: 1, background: '#1A6B6A', opacity: 0.25 }} />
          </div>

          <p style={{ fontFamily: '"Inter",sans-serif', color: '#6B5E50', fontSize: '1.0625rem', lineHeight: 1.8, maxWidth: '30rem', marginBottom: '2.5rem' }}>
            Envie d&rsquo;un café d&rsquo;exception dans une ambiance rétro-vintage unique ? Passez nous voir ou appelez-nous. Donatello vous accueille du mardi au dimanche.
          </p>

          {/* Info cards */}
          <div className="space-y-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                id={`contact-${item.label.toLowerCase()}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  background: '#FFFAF5',
                  borderRadius: '1rem',
                  border: '1px solid rgba(26,107,106,0.1)',
                }}
              >
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(26,107,106,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1A6B6A', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(28,28,28,0.4)', marginBottom: '0.2rem' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.9375rem', color: '#1C1C1C', fontWeight: 500 }}>{item.value}</a>
                    : <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.9375rem', color: '#1C1C1C', fontWeight: 500 }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Plus code */}
          <div style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', background: '#FFFAF5', borderRadius: '1rem', border: '1px solid rgba(26,107,106,0.1)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(26,107,106,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1A6B6A', flexShrink: 0, fontSize: '0.8rem' }}>
              📍
            </div>
            <div>
              <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(28,28,28,0.4)', marginBottom: '0.2rem' }}>Plus Code</p>
              <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.9375rem', color: '#1C1C1C', fontWeight: 500 }}>7VGH+52 Bizerte</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '2.5rem' }}>
            <a
              href="tel:55540520"
              id="contact-call-btn"
              className="btn-primary inline-flex"
            >
              <Phone size={16} strokeWidth={1.5} />
              Appeler Maintenant
            </a>
          </div>
        </motion.div>

        {/* ── Right: Google Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: '2rem',
            overflow: 'hidden',
            height: '520px',
            boxShadow: '0 24px 80px rgba(28,28,28,0.12)',
            border: '6px solid #FFFAF5',
            transform: 'translateZ(0)',
            willChange: 'transform, opacity'
          }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-[#1C1C1C]/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184!2d9.87!3d37.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDonatello%20salon%20de%20th%C3%A9!5e0!3m2!1sfr!2stn!4v1711910452000!5m2!1sfr!2stn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Donatello — Bizerte"
            className="transition-transform duration-700"
          />
        </motion.div>

      </div>
    </div>
  </section>
);
