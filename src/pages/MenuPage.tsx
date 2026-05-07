import { useState, useEffect, useCallback, memo, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLang } from '../i18n/LangContext';

import { MenuItem, parseMenuHTML } from '../utils/menuParser';

// ── Drink card — compact list style ──
const DrinkCard = memo(({ item, onClick }: { item: MenuItem; onClick: () => void }) => (
  <div
    className="group flex items-center rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
    onClick={onClick}
    style={{
      background: '#fff',
      border: '1px solid rgba(193,92,61,0.08)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
    }}
  >
    <div className="flex-shrink-0 w-14 h-14 sm:w-[72px] sm:h-[72px] mr-3.5">
      {item.image ? (
        <div className="w-full h-full rounded-lg overflow-hidden" style={{ background: '#F8F5F0' }}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={e => (e.currentTarget.style.opacity = '1')}
            style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
          />
        </div>
      ) : (
        <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ background: 'rgba(58,42,34,0.04)' }}>
          <span className="text-xl">🍹</span>
        </div>
      )}
    </div>
    <div className="flex-grow min-w-0 pr-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-0.5 gap-0.5">
        <h3
          className="truncate"
          style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1rem', color: '#3A2A22', fontWeight: 400 }}
        >
          {item.title}
        </h3>
        <span style={{ fontFamily: '"Inter",sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#C15C3D', whiteSpace: 'nowrap' }}>
          {typeof item.price === 'number' ? item.price.toFixed(1) : item.price} DT
        </span>
      </div>
      {item.description && (
        <p className="line-clamp-2" style={{ fontSize: '0.78rem', color: '#A68A6D', fontFamily: '"Merriweather",serif', fontWeight: 300 }}>
          {item.description}
        </p>
      )}
    </div>
    <div className="flex-shrink-0 ml-auto mr-1 transition-colors" style={{ color: 'rgba(193,92,61,0.2)' }}>
      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    </div>
  </div>
));

// ── Food card — visual card with image ──
const FoodCard = memo(({ item, onClick, trDetails }: { item: MenuItem; onClick: () => void; trDetails: string }) => (
  <div
    className="group overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
    style={{
      background: '#fff',
      borderRadius: '16px',
      border: '1px solid rgba(193,92,61,0.06)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
    }}
    onClick={onClick}
  >
    <div className="relative h-40 sm:h-56 overflow-hidden" style={{ background: '#F8F5F0' }}>
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={e => (e.currentTarget.style.opacity = '1')}
          style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
        />
      )}
      <div
        className="absolute top-3 right-3"
        style={{
          background: 'rgba(58,42,34,0.85)',
          backdropFilter: 'blur(8px)',
          padding: '6px 14px',
          borderRadius: '6px',
        }}
      >
        <span style={{ fontFamily: '"Inter",sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#FFFFFF' }}>
          {typeof item.price === 'number' ? item.price.toFixed(1) : item.price} DT
        </span>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3
        className="mb-1.5 transition-colors duration-300"
        style={{ fontFamily: '"Abril Fatface",serif', fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', color: '#3A2A22', fontWeight: 400 }}
      >
        {item.title}
      </h3>
      <p
        className="line-clamp-2 mb-4"
        style={{ fontSize: '0.8rem', color: '#A68A6D', fontFamily: '"Merriweather",serif', fontWeight: 300, lineHeight: 1.7 }}
      >
        {item.description}
      </p>
      <span
        className="flex items-center gap-1.5 group-hover:gap-3 transition-all"
        style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#2C5E5A', cursor: 'pointer' }}
      >
        {trDetails} <span>→</span>
      </span>
    </div>
  </div>
));

// ── Local / GitHub Pages URL ──
const MENU_RAW_URL = import.meta.env.BASE_URL + 'menu-data.html';

const MenuPage = () => {
  const [plats, setPlats] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [, startTransition] = useTransition();
  const { tr, lang } = useLang();

  // Dynamic category translator using embedded database fields
  const getCategoryLabel = useCallback((cat: string) => {
    if (lang !== 'en') return cat;
    const item = plats.find(p => p.category === cat);
    return item?.category_en || cat;
  }, [lang, plats]);

  // Create a language-aware copy of items
  const displayedPlats = plats.map(p => {
    if (lang === 'en') {
      return {
        ...p,
        title: p.title_en || p.title,
        description: p.description_en || p.description
      };
    }
    return p;
  });

  // Fetch menu-data.html from GitHub Raw API on mount
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Cache-busting: append timestamp to bypass CDN/browser cache
        const res = await fetch(`${MENU_RAW_URL}?t=${Date.now()}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const html = await res.text();
        const items = parseMenuHTML(html);
        setPlats(items);

        // Set initial category
        const cats = Array.from(new Set(items.map(i => i.category))).reverse();
        if (cats.length > 0) {
          setActiveCategory(cats[0]);
          setActiveTab(cats[0]);
        }
      } catch (e) {
        console.error('Failed to load menu:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Compute categories from loaded items
  const categories = Array.from(new Set(plats.map(item => item.category))).reverse() as string[];

  // Prefetch first category eagerly, rest lazily during idle time
  useEffect(() => {
    if (!plats || plats.length === 0) return;
    const prefetch = () => {
      plats.forEach(item => {
        if (item.image) {
          const img = new Image();
          img.src = item.image;
        }
      });
    };
    if ('requestIdleCallback' in window) {
      (window as Window & typeof globalThis & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 1000);
    }
  }, [plats]);

  const handleCategoryChange = useCallback((cat: string) => {
    if (activeTab === cat) return;
    startTransition(() => {
      setActiveTab(cat);
      setActiveCategory(cat);
    });
  }, [activeTab]);

  const openModal = useCallback((item: MenuItem) => setSelectedItem(item), []);
  const closeModal = useCallback(() => setSelectedItem(null), []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: '#F8F5F0' }}>
        <Header />
        <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="flex flex-col items-center animate-fadeIn">
              <div className="w-8 h-8 rounded-full animate-spin mb-4" style={{ border: '3px solid rgba(44,94,90,0.15)', borderTopColor: '#2C5E5A' }} />
              <div style={{ fontFamily: '"Merriweather",serif', color: '#A68A6D', fontSize: '0.9rem' }}>{tr('menu_loading')}</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#F8F5F0' }}>
      <Header />

      <main className="flex-grow pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto relative z-10 px-6">
          {/* Heading */}
          <div className="text-center mb-6 sm:mb-10 md:mb-14">
            <span className="section-label">{tr('menu_label')}</span>
            <h2
              className="mb-4"
              style={{ fontFamily: '"Abril Fatface",serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#5E3A25', lineHeight: 1.1 }}
            >
              {tr('menu_title_prefix')} <span style={{ color: '#C15C3D' }}>{tr('menu_title_suffix')}</span>
            </h2>
            <div className="divider" />
          </div>

          {/* Categories Tab */}
          {categories.length > 0 && (
            <div className="flex overflow-x-auto gap-2 mb-8 sm:mb-12 pb-2 px-2 -mx-2 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center hide-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                  style={{
                    scrollSnapAlign: 'start',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    fontFamily: '"Inter",sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    ...(activeTab === cat
                      ? { background: '#3A2A22', color: '#FFFFFF', borderColor: '#3A2A22' }
                      : { background: 'transparent', color: '#A68A6D', borderColor: 'rgba(193,92,61,0.15)' }
                    ),
                  }}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>
          )}

          {/* Items Grid/List */}
          <div className="min-h-[50vh]">
            <div style={{ animation: 'fadeIn 0.2s ease-out' }}>
              {categories.map((cat) => {
                if (activeCategory !== cat) return null;
                const itemsInCat = displayedPlats.filter(item => item.category === cat);
                // Determine layout from the first item's property, default to false (grid)
                const isList = itemsInCat[0]?.category_is_list ?? false;
                return (
                  <div
                    key={cat}
                    style={{ animation: 'fadeIn 0.2s ease-out' }}
                    className={isList ? "flex flex-col gap-3 max-w-3xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}
                  >
                    {itemsInCat.map((item) =>
                      isList ? (
                        <DrinkCard key={item.id} item={item} onClick={() => openModal(item)} />
                      ) : (
                        <FoodCard key={item.id} item={item} onClick={() => openModal(item)} trDetails={tr('menu_details')} />
                      )
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(58,42,34,0.5)', backdropFilter: 'blur(6px)' }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="overflow-hidden max-w-lg w-full"
              style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.image && (
                <div className="h-64 overflow-hidden" style={{ background: '#F8F5F0' }}>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    onLoad={e => (e.currentTarget.style.opacity = '1')}
                    style={{ opacity: 0, transition: 'opacity 0.25s ease' }}
                  />
                </div>
              )}
              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <h3 style={{ fontFamily: '"Abril Fatface",serif', fontSize: '1.6rem', color: '#3A2A22', fontWeight: 400 }}>{selectedItem.title}</h3>
                  <span
                    style={{
                      background: 'rgba(193,92,61,0.08)',
                      color: '#C15C3D',
                      fontFamily: '"Inter",sans-serif',
                      fontWeight: 700,
                      padding: '6px 16px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      whiteSpace: 'nowrap',
                      marginLeft: '16px',
                    }}
                  >
                    {typeof selectedItem.price === 'number' ? selectedItem.price.toFixed(1) : selectedItem.price} DT
                  </span>
                </div>
                <p style={{ fontFamily: '"Inter",sans-serif', fontSize: '0.72rem', color: '#A68A6D', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '12px' }}>
                  {getCategoryLabel(selectedItem.category)}
                </p>
                {selectedItem.description && (
                  <p style={{ fontFamily: '"Merriweather",serif', fontSize: '0.9rem', color: 'rgba(58,42,34,0.6)', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                    {selectedItem.description}
                  </p>
                )}
                <button
                  onClick={closeModal}
                  className="w-full py-3 cursor-pointer transition-colors duration-300 hover:bg-[#115E5D]"
                  style={{
                    background: '#2C5E5A',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    fontFamily: '"Inter",sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    border: 'none',
                  }}
                >
                  {tr('menu_close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MenuPage;