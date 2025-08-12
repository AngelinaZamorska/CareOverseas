// src/App.jsx
import React, { useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import i18n from './i18n';

// Оставь только Header
import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import { Toaster } from '@/components/ui/toaster';

// Страницы
import HomePage from '@/pages/HomePage';
import Lu177PsmaPage from '@/pages/Lu177PsmaPage';

const SUPPORTED_LANGS = ['en', 'ru', 'pl', 'ar'];
const RTL_LANGS = ['ar'];

function LangLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = useMemo(() => (SUPPORTED_LANGS.includes(lang) ? lang : 'en'), [lang]);

  if (lang && !SUPPORTED_LANGS.includes(lang)) {
    const safePath = location.pathname.replace(/^\/[^/]+/, '');
    return <Navigate to={`/en${safePath || ''}${location.search}${location.hash}`} replace />;
  }

  useEffect(() => {
    if (i18n.language !== currentLang) i18n.changeLanguage(currentLang);
    const dir = RTL_LANGS.includes(currentLang) ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', dir);
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="p-6">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="lu-177-psma-therapy" element={<Lu177PsmaPage />} />
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </main>
      {/* Footer и Toaster пока НЕ подключаем */}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang/*" element={<LangLayout />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
