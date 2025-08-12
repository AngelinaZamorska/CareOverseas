// src/App.jsx
import React, { useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import i18n from './i18n';

const SUPPORTED_LANGS = ['en', 'ru', 'pl', 'ar'];
const RTL_LANGS = ['ar'];

function LangLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = useMemo(() => (SUPPORTED_LANGS.includes(lang) ? lang : 'en'), [lang]);

  // защита от неизвестного языка
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

  // НИКАКИХ Header/Footer/Toaster/Helmet
  return (
    <div style={{ padding: 24, background: '#fff', color: '#111', fontSize: 18 }}>
      ✅ Layout OK • lang: <b>{currentLang}</b>
      <Routes>
        <Route index element={<div style={{ marginTop: 16 }}>🏠 Home minimal OK</div>} />
        <Route path="lu-177-psma-therapy" element={<div style={{ marginTop: 16 }}>🧪 Lu-177 minimal OK</div>} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
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
