// App.tsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import MenuPage from './pages/MenuPage';
import { LangProvider } from './i18n/LangContext';
import { ScrollToTop } from './components/ScrollToTop';


// Scroll to #hash after navigation
function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small delay so the DOM renders first
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <LangProvider>
      <Router basename="/donatello/">
        <ScrollToHash />
        <div className="min-h-screen flex flex-col" style={{ background: '#FDFCFB' }}>
          <Routes>
            <Route path="/" element={<><Header /><Home /><Footer /></>} />
            <Route path="/menu" element={<MenuPage />} />

            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <ScrollToTop />
        </div>
      </Router>
    </LangProvider>
  );
}