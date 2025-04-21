import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import DiscountBanner from './components/DiscountBanner';
import CategoryCloud from './components/CategoryCloud';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import ContactsPage from './components/ContactsPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Routes>
      {/* Главная */}
      <Route
        path="/"
        element={
          <>
            <Header isDark={true} />
            <Hero />
            <IntroSection />
            <DiscountBanner />
            <CategoryCloud />
            <AboutSection />
            <FAQSection />
            <Footer />
          </>
        }
      />

      {/* Вся коллекция */}
      <Route
        path="/shop"
        element={
          <>
            <Header isDark={false} />
            <Shop />
            <Footer />
          </>
        }
      />

      {/* Категории */}
      <Route
        path="/shop/:category"
        element={
          <>
            <Header isDark={false} />
            <Shop />
            <Footer />
          </>
        }
      />

      {/* Карточка товара */}
      <Route
        path="/product/:id"
        element={
          <>
            <Header isDark={false} />
            <ProductPage />
            <Footer />
          </>
        }
      />

      {/* Контакты */}
      <Route
        path="/contacts"
        element={
          <>
            <Header isDark={false} />
            <ContactsPage />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
