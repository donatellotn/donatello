import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    stars: 5,
    text: 'Excellent café ! Musique et paix. Un endroit parfait pour se détendre et profiter d\'un moment de tranquillité absolue.',
    author: 'NaNa G.',
  },
  {
    stars: 5,
    text: 'L\'ambiance est incroyable — le décor vintage, la musique, l\'accueil chaleureux. Un vrai coup de cœur à Bizerte.',
    author: 'Moez Z.',
  },
  {
    stars: 5,
    text: 'Le brunch est un festin pour les yeux et le palais. Les mojitos aux fruits sont absolument spectaculaires !',
    author: 'Sarah M.',
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px', color: '#C15C3D' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="testimonials"
      style={{ background: '#F8F5F0', padding: '100px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Big decorative quote */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '16rem',
          fontFamily: '"Abril Fatface",serif',
          color: '#C15C3D',
          opacity: 0.05,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        "
      </div>

      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="section-label">Avis Clients</span>
          <h2 className="section-title">Avis de nos clients</h2>
          <div className="divider" />
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative max-w-[640px] mx-auto"
          style={{ minHeight: '260px' }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-5 transition-all duration-500"
              style={{
                position: i === 0 ? 'relative' : 'absolute',
                inset: i === 0 ? undefined : 0,
                opacity: current === i ? 1 : 0,
                transform: current === i ? 'translateY(0)' : 'translateX(60px)',
                pointerEvents: current === i ? 'all' : 'none',
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(review.stars)].map((_, j) => <StarIcon key={j} />)}
              </div>
              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: '"Merriweather",serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: '#4A3424',
                  lineHeight: 1.9,
                  marginBottom: '24px',
                  fontWeight: 300,
                }}
              >
                «&nbsp;{review.text}&nbsp;»
              </blockquote>
              {/* Author */}
              <div
                style={{
                  fontFamily: '"Inter",sans-serif',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  color: '#A68A6D',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                {review.author}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-9">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Avis ${i + 1}`}
              className="transition-all duration-300 cursor-pointer"
              style={{
                width: current === i ? '24px' : '8px',
                height: '8px',
                borderRadius: current === i ? '4px' : '50%',
                background: '#C15C3D',
                opacity: current === i ? 1 : 0.2,
                border: 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
