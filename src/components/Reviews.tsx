import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px', color: '#C15C3D' }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const { tr, trArr } = useLang();
  const reviews = trArr('reviews') as { text: string; author: string; stars?: number }[];

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-[100px]"
      style={{ background: '#F8F5F0', position: 'relative', overflow: 'hidden' }}
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
          <span className="section-label">{tr('reviews_label')}</span>
          <h2 className="section-title">{tr('reviews_title')}</h2>
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
                {[...Array(review.stars ?? 5)].map((_, j) => <StarIcon key={j} />)}
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
                }}
              >
                "{review.text}"
              </blockquote>
              {/* Author */}
              <cite
                style={{
                  fontFamily: '"Inter",sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#C15C3D',
                  fontStyle: 'normal',
                }}
              >
                — {review.author}
              </cite>
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Review ${i + 1}`}
              style={{
                width: current === i ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: current === i ? '#C15C3D' : 'rgba(193,92,61,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 300ms',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
