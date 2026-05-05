import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

export const ContactForm = () => {
  const { tr } = useLang();

  const infoItems = [
    {
      icon: <MapPin size={18} strokeWidth={1.5} />,
      label: tr('contact_address'),
      value: tr('contact_address_val'),
    },
    {
      icon: <Clock size={18} strokeWidth={1.5} />,
      label: tr('contact_hours'),
      value: tr('contact_hours_val'),
    },
    {
      icon: <Phone size={18} strokeWidth={1.5} />,
      label: tr('contact_phone'),
      value: '+216 55 540 520',
      href: 'tel:+21655540520',
    },
  ];

  return (
    <section
      id="info"
      className="py-16 md:py-[100px]"
      style={{ background: '#F8F5F0' }}
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
          <span className="section-label">{tr('contact_label')}</span>
          <h2 className="section-title">{tr('contact_title')}</h2>
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
                id={`info-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex gap-4 mb-6 items-start"
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#3A2A22',
                    color: '#FFFFFF',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: '"Inter",sans-serif', fontWeight: 600, fontSize: '0.88rem', color: '#5E3A25', marginBottom: '2px' }}>
                    {item.label}
                  </h4>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '0.88rem', color: '#2C5E5A', fontWeight: 600, cursor: 'pointer', fontFamily: '"Merriweather",serif' }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.88rem', color: '#A68A6D', fontWeight: 300, fontFamily: '"Merriweather",serif' }}>
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
              src="https://maps.google.com/maps?q=37.2754064,9.877565&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={tr('contact_map_title')}
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
};
