// App.jsx (временная версия для проверки)
import React, { useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
// import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import HomePage from '@/pages/HomePage';
// остальные импорты страниц можешь оставить как есть
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const SUPPORTED_LANGS = ['en', 'ru', 'pl', 'ar'];
const RTL_LANGS = ['ar'];

function LangLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = useMemo(() => SUPPORTED_LANGS.includes(lang) ? lang : 'en', [lang]);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <Toaster />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route index element={<HomePage />} />
            <Route path="cardiac-surgery-germany" element={<CardiacSurgeryPage />} />
            <Route path="endometriosis-leomyoma-treatment" element={<EndometriosisPage />} />
            <Route path="joint-replacement" element={<JointReplacementPage />} />
            <Route path="dendritic-cell-therapy-germany" element={<DendriticCellPage />} />
            <Route path="ivf-in-turkey" element={<IvfTurkeyPage />} />
            <Route path="epilepsy-treatment-spain" element={<EpilepsySpainPage />} />
            <Route path="neurosurgery" element={<BrainCancerPage />} />
            <Route path="blood-diseases-treatment" element={<BloodDiseasesPage />} />
            <Route path="rheumatology-israel" element={<RheumatologyIsraelPage />} />
            <Route path="plastic-surgery-turkey" element={<PlasticSurgeryTurkeyPage />} />
            <Route path="oncology" element={<OncologyPage />} />
            <Route path="lu-177-psma-therapy" element={<Lu177PsmaPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

            {/* новости */}
            <Route path="news" element={<NewsPage />} />
            <Route path="news/safe-treatment-abroad" element={<SafeTreatmentAbroadPage />} />
            <Route path="news/duchenne-muscular-dystrophy" element={<DuchennePage />} />
            <Route path="news/anterior-approach" element={<AnteriorApproachPage />} />

            {/* калькулятор */}
            <Route path="calculator" element={<DRGCalculator />} />
            <Route path="drg-calculator" element={<DRGCalculatorPage />} />

            {/* 404 внутри языка → на главную текущего языка */}
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </main>
      <Footer />
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
