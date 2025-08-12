// src/App.jsx
import React, { useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// ⚠️ оставляем только Header и одну страницу для теста
import Header from '@/components/layout/Header';
import HomePage from '@/pages/HomePage';
import Lu177PsmaPage from '@/pages/Lu177PsmaPage';

// ----- ErrorBoundary, чтобы увидеть ошибку, если компонент падает при рендере
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(err, info) { console.error('Render error:', err, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 16, background: '#fee', color: '#900' }}>
          <b>Component render error:</b> {String(this.state.error)}
        </div>
      );
    }
    return this.props.children;
  }
}
// -----

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
    <div style={{ minHeight: '100vh', background: '#fff', color: '#111' }}>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main style={{ padding: 24 }}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="lu-177-psma-therapy" element={<Lu177PsmaPage />} />
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang/*" element={<LangLayout />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </I18nextProvider>
  );
}
