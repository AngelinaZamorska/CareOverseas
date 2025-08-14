// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

export const SUPPORTED_LANGS = ['en', 'ru', 'pl', 'ar'];
export const RTL_LANGS = ['ar'];

// Привяжем dir/lang к <html>
const applyDir = (lng) => {
  const dir = RTL_LANGS.includes(lng) ? 'rtl' : 'ltr';
  if (typeof document !== 'undefined') {
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  }
};

i18n
  .use(HttpBackend)        // грузим JSON с /locales/{{lng}}/{{ns}}.json
  .use(LanguageDetector)   // cookie/localStorage/navigator/html
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGS,

    // Разбей переводы на неймспейсы (файлы). Минимальный набор:
    ns: [
      'common',
      'pages/home',
      'pages/cardiac',
      'pages/epilepsy',
      'pages/neurosurgery',
      'pages/blood',
      'pages/rheumatology',
      'pages/dendritic',
      'pages/ivf',
      'pages/endometriosis',
      'pages/joint',
      'pages/plastic',
      'pages/oncology',
      'pages/lu177',
      'pages/news/index',
      'drgCalculator',
    ],
    defaultNS: 'common',

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // при желании: addPath для postMissing, если нужно
    },

    // грузим только «текущий» язык (без регионов типа en-US)
    load: 'currentOnly',

    interpolation: { escapeValue: false },

    detection: {
      // Язык ты меняешь через URL в роутере — это не мешает:
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },

    // без suspense, чтобы не трогать существующий код
    react: { useSuspense: false },

    // мгновенная инициализация (чуть быстрее на SPA)
    initImmediate: false,

    // чтобы пустые строки не считались валидным переводом
    returnEmptyString: false,

    cleanCode: true, // нормализует коды языков
  });

applyDir(i18n.language);
i18n.on('languageChanged', applyDir);

export default i18n;
