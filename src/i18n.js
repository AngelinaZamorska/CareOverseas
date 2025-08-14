// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

export const SUPPORTED_LANGS = ['en', 'ru', 'pl', 'ar'];
export const RTL_LANGS = ['ar'];

// если вдруг захочешь менять базовый путь через env:
const LOCALES_BASE =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_LOCALES_BASE) ||
  '/s/locales'; // <-- твой префикс

const applyDir = (lng) => {
  const dir = RTL_LANGS.includes(lng) ? 'rtl' : 'ltr';
  if (typeof document !== 'undefined') {
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  }
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGS,
    load: 'currentOnly',          // грузим только en, без en-US
    cleanCode: true,
    returnEmptyString: false,
    initImmediate: false,
    react: { useSuspense: false },

    // разнесено по неймспейсам
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
      // теперь i18next будет ходить в /s/locales/{{lng}}/{{ns}}.json
      loadPath: `${LOCALES_BASE}/{{lng}}/{{ns}}.json`,
      // не включаем allowMultiLoading — статикой common+home.json не отдашь
      // allowMultiLoading: false,
      // можно добавить кэш-ключ: queryStringParams: { v: '1' },
    },

    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },

    interpolation: { escapeValue: false },
  });

applyDir(i18n.language);
i18n.on('languageChanged', applyDir);

export default i18n;
