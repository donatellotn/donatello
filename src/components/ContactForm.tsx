import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const infoItems = [
  {
    icon: <MapPin size={18} strokeWidth={1.5} />,
    label: 'Adresse',
    value: 'Bizerte, Tunisie',
  },
  {
    icon: <Clock size={18} strokeWidth={1.5} />,
    label: 'Horaires',
    value: 'Tous les jours : 7h00 — Tard le soir',
  },
  {
    icon: <Phone size={18} strokeWidth={1.5} />,
    label: 'Téléphone',
    value: '+216 55 540 520',
    href: 'tel:+21655540520',
  },
];

export const ContactForm = () => (
  <section
    id="info"
    style={{ background: '#F5E6D3', padding: '100px 0' }}
  >
    <div className="max-w-[1140px] mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <span className="section-label">Rendez-nous Visite</span>
        <h2 className="section-title">Informations Pratiques</h2>
        <div className="divider" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left — Info items */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {infoItems.map((item) => (
            <div
              key={item.label}
              id={`info-${item.label.toLowerCase()}`}
              className="flex gap-4 mb-6 items-start"
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#1C1917',
                  color: '#FDF8EF',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontFamily: '"Inter",sans-serif', fontWeight: 600, fontSize: '0.88rem', color: '#78350F', marginBottom: '2px' }}>
                  {item.label}
                </h4>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: '0.88rem', color: '#1A6B6A', fontWeight: 600, cursor: 'pointer', fontFamily: '"Merriweather",serif' }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontSize: '0.88rem', color: '#9A7B5A', fontWeight: 300, fontFamily: '"Merriweather",serif' }}>
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right — Map */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
            height: '380px',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12740.!2d9.87!3d37.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd1!2sDonatello!5e0!3m2!1sfr!2stn!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localisation Donatello"
          />
        </motion.div>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        #info iframe { height: 280px !important; }
      }
    `}</style>
  </section>
);
