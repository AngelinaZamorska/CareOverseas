// App.jsx
import React, { useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { I18nextProvider } from 'react-i18next';


// поправь путь, если у тебя другой:
import i18n from './i18n';

import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import HomePage from '@/pages/HomePage';
import CardiacSurgeryPage from '@/pages/CardiacSurgeryPage';
import EndometriosisPage from '@/pages/EndometriosisPage';
import JointReplacementPage from '@/pages/JointReplacementPage';
import DendriticCellPage from '@/pages/DendriticCellPage';
import IvfTurkeyPage from '@/pages/IvfTurkeyPage';
import EpilepsySpainPage from '@/pages/EpilepsySpainPage';
import BrainCancerPage from '@/pages/BrainCancerPage';
import BloodDiseasesPage from '@/pages/BloodDiseasesPage';
import RheumatologyIsraelPage from '@/pages/RheumatologyIsraelPage';
import PlasticSurgeryTurkeyPage from '@/pages/PlasticSurgeryTurkeyPage';
import OncologyPage from '@/pages/OncologyPage';
import Lu177PsmaPage from '@/pages/Lu177PsmaPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import NewsPage from '@/pages/NewsPage';
import SafeTreatmentAbroadPage from '@/pages/news/SafeTreatmentAbroadPage';
import DuchennePage from '@/pages/news/DuchennePage';
import AnteriorApproachPage from '@/pages/news/AnteriorApproachPage';
import DRGCalculator from '@/components/DRGCalculator';
import DRGCalculatorPage from '@/pages/DRGCalculatorPage';
import SecondOpinionPage from '@/pages/news/SecondOpinionPage';
import GermanyDoctorsPage from '@/pages/countries/GermanyDoctorsPage';
import TurkeyDoctorsPage from '@/pages/countries/TurkeyDoctorsPage';
import SpainDoctorsPage from '@/pages/countries/SpainDoctorsPage';

// поддерживаемые языки
const SUPPORTED_LANGS = ['en', 'ru', 'pl', 'ar'];
const RTL_LANGS = ['ar'];

function LangLayout() {
  const params = useParams();        // { lang?: string }
  const location = useLocation();
  const lang = params.lang;

  const currentLang = useMemo(() => {
    return SUPPORTED_LANGS.includes(lang) ? lang : 'en';
  }, [lang]);

  // если в URL неизвестный язык — редиректим на en, сохранив хвост пути/квери/хэш
  if (lang && !SUPPORTED_LANGS.includes(lang)) {
    const safePath = location.pathname.replace(/^\/[^/]+/, ''); // срезаем первый сегмент (язык)
    return <Navigate to={`/en${safePath || ''}${location.search}${location.hash}`} replace />;
  }

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
    const dir = RTL_LANGS.includes(currentLang) ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', dir);
  }, [currentLang]);

  const isRTL = RTL_LANGS.includes(currentLang);

  return (
    <>
      <Helmet htmlAttributes={{ lang: currentLang, dir: isRTL ? 'rtl' : 'ltr' }}>
        <title>
          Care Overseas Space - Your Trusted Medical Treatment Coordinator Abroad | Germany, Turkey,
          Spain, Israel
        </title>
        <meta
          name="description"
          content="Care Overseas Space is your trusted coordinator for medical treatment abroad. We help patients from all over the world get access to renowned clinics in Germany, Turkey, Spain, and Israel."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
        <Toaster />
        <Header />
        <main className="flex-grow">
          {/* дочерние маршруты БЕЗ ведущего слеша */}
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
            {/* врачи */}
            <Route path="country/germany" element={<GermanyDoctorsPage />} />
            <Route path="country/turkey" element={<TurkeyDoctorsPage />} />
            <Route path="country/spain" element={<SpainDoctorsPage />} />
            

            {/* новости */}
<Route path="news">
  <Route index element={<NewsPage />} />
  <Route path="anterior-approach" element={<AnteriorApproachPage />} />
  <Route path="duchenne-muscular-dystrophy" element={<DuchennePage />} />
  <Route path="safe-treatment-abroad" element={<SafeTreatmentAbroadPage />} />
  <Route path="second-medical-opinion" element={<SecondOpinionPage />} />
</Route>

            {/* калькулятор */}
            <Route path="calculator" element={<DRGCalculator />} />
            <Route path="drg-calculator" element={<DRGCalculatorPage />} />

            {/* 404 внутри языка → на главную текущего языка */}
            <Route path="*" element={<Navigate to="." replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

// Подбираем язык: сначала сохранённый, потом язык браузера
function detectPreferredLang() {
  try {
    const saved = (localStorage.getItem('i18nextLng') || '').slice(0, 2);
    if (['en','ru','pl','ar'].includes(saved)) return saved;
  } catch {}
  const nav = (navigator.language || 'en').slice(0, 2);
  return ['en','ru','pl','ar'].includes(nav) ? nav : 'en';
}

// /  -> /<lang>
function RootRedirect() {
  const lang = detectPreferredLang();
  return <Navigate to={`/${lang}`} replace />;
}

// /anything (без префикса языка) -> /<lang>/anything
function PathRedirectPreserve() {
  const location = useLocation();
  const lang = detectPreferredLang();
  return (
    <Navigate
      to={`/${lang}${location.pathname}${location.search}${location.hash}`}
      replace
    />
  );
}


export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        {/* корень → на предпочтительный язык */}
        <Route path="/" element={<RootRedirect />} />
        {/* все языковые маршруты */}
        <Route path="/:lang/*" element={<LangLayout />} />
        {/* любые пути без языка → добавить язык, сохранить хвост */}
        <Route path="/*" element={<PathRedirectPreserve />} />
      </Routes>
    </I18nextProvider>
  );
}

