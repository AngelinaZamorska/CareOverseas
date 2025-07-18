import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './locales/en/common.json';
import icd10EN from './locales/en/icd10.json';
import homeEN from './locales/en/pages/home.json';
import diseasesEN from './locales/en/pages/diseases.json';
import cardiacEN from './locales/en/pages/cardiac.json';
import epilepsyEN from './locales/en/pages/epilepsy.json';
import neurosurgeryEN from './locales/en/pages/neurosurgery.json';
import bloodEN from './locales/en/pages/blood.json';
import rheumatologyEN from './locales/en/pages/rheumatology.json';
import dendriticEN from './locales/en/pages/dendritic.json';
import ivfEN from './locales/en/pages/ivf.json';
import endometriosisEN from './locales/en/pages/endometriosis.json';
import jointEN from './locales/en/pages/joint.json';
import plasticEN from './locales/en/pages/plastic.json';
import oncologyEN from './locales/en/pages/oncology.json';
import lu177EN from './locales/en/pages/lu177.json';
import newsEN from './locales/en/pages/news.json';
import safeTreatmentAbroadEN from './locales/en/pages/news/safe-treatment-abroad.json';

import translationRU from './locales/ru/common.json';
import icd10RU from './locales/ru/icd10.json';
import homeRU from './locales/ru/pages/home.json';
import diseasesRU from './locales/ru/pages/diseases.json';
import cardiacRU from './locales/ru/pages/cardiac.json';
import epilepsyRU from './locales/ru/pages/epilepsy.json';
import neurosurgeryRU from './locales/ru/pages/neurosurgery.json';
import bloodRU from './locales/ru/pages/blood.json';
import rheumatologyRU from './locales/ru/pages/rheumatology.json';
import dendriticRU from './locales/ru/pages/dendritic.json';
import ivfRU from './locales/ru/pages/ivf.json';
import endometriosisRU from './locales/ru/pages/endometriosis.json';
import jointRU from './locales/ru/pages/joint.json';
import plasticRU from './locales/ru/pages/plastic.json';
import oncologyRU from './locales/ru/pages/oncology.json';
import lu177RU from './locales/ru/pages/lu177.json';
import newsRU from './locales/ru/pages/news.json';
import safeTreatmentAbroadRU from './locales/ru/pages/news/safe-treatment-abroad.json';

import translationPL from './locales/pl/common.json';
import icd10PL from './locales/pl/icd10.json';
import homePL from './locales/pl/pages/home.json';
import diseasesPL from './locales/pl/pages/diseases.json';
import cardiacPL from './locales/pl/pages/cardiac.json';
import epilepsyPL from './locales/pl/pages/epilepsy.json';
import neurosurgeryPL from './locales/pl/pages/neurosurgery.json';
import bloodPL from './locales/pl/pages/blood.json';
import rheumatologyPL from './locales/pl/pages/rheumatology.json';
import dendriticPL from './locales/pl/pages/dendritic.json';
import ivfPL from './locales/pl/pages/ivf.json';
import endometriosisPL from './locales/pl/pages/endometriosis.json';
import jointPL from './locales/pl/pages/joint.json';
import plasticPL from './locales/pl/pages/plastic.json';
import oncologyPL from './locales/pl/pages/oncology.json';
import lu177PL from './locales/pl/pages/lu177.json';
import newsPL from './locales/pl/pages/news.json';
import safeTreatmentAbroadPL from './locales/pl/pages/news/safe-treatment-abroad.json';

import translationAR from './locales/ar/common.json';
import homeAR from './locales/ar/pages/home.json';
import cardiacAR from './locales/ar/pages/cardiac.json';
import epilepsyAR from './locales/ar/pages/epilepsy.json';
import neurosurgeryAR from './locales/ar/pages/neurosurgery.json';
import bloodAR from './locales/ar/pages/blood.json';
import rheumatologyAR from './locales/ar/pages/rheumatology.json';
import dendriticAR from './locales/ar/pages/dendritic.json';
import ivfAR from './locales/ar/pages/ivf.json';
import endometriosisAR from './locales/ar/pages/endometriosis.json';
import jointAR from './locales/ar/pages/joint.json';
import plasticAR from './locales/ar/pages/plastic.json';
import oncologyAR from './locales/ar/pages/oncology.json';
import lu177AR from './locales/ar/pages/lu177.json';
import newsAR from './locales/ar/pages/news.json';
import safeTreatmentAbroadAR from './locales/ar/pages/news/safe-treatment-abroad.json';

const resources = {
  en: {
    translation: {
      ...translationEN,
      ...icd10EN,
      ...homeEN,
      ...diseasesEN,
      ...cardiacEN,
      ...epilepsyEN,
      ...neurosurgeryEN,
      ...bloodEN,
      ...rheumatologyEN,
      ...dendriticEN,
      ...ivfEN,
      ...endometriosisEN,
      ...jointEN,
      ...plasticEN,
      ...oncologyEN,
      ...lu177EN,
      ...newsEN,
      ...safeTreatmentAbroadEN,
    },
  },
  ru: {
    translation: {
      ...translationRU,
      ...homeRU,
      ...cardiacRU,
      ...epilepsyRU,
      ...neurosurgeryRU,
      ...bloodRU,
      ...rheumatologyRU,
      ...dendriticRU,
      ...ivfRU,
      ...endometriosisRU,
      ...jointRU,
      ...plasticRU,
      ...oncologyRU,
      ...lu177RU,
      ...newsRU,
      ...safeTreatmentAbroadRU,
    },
  },
  pl: {
    translation: {
      ...translationPL,
      ...homePL,
      ...cardiacPL,
      ...epilepsyPL,
      ...neurosurgeryPL,
      ...bloodPL,
      ...rheumatologyPL,
      ...dendriticPL,
      ...ivfPL,
      ...endometriosisPL,
      ...jointPL,
      ...plasticPL,
      ...oncologyPL,
      ...lu177PL,
      ...newsPL,
      ...safeTreatmentAbroadPL,
    },
  },
  ar: {
    translation: {
      ...translationAR,
      ...homeAR,
      ...cardiacAR,
      ...epilepsyAR,
      ...neurosurgeryAR,
      ...bloodAR,
      ...rheumatologyAR,
      ...dendriticAR,
      ...ivfAR,
      ...endometriosisAR,
      ...jointAR,
      ...plasticAR,
      ...oncologyAR,
      ...lu177AR,
      ...newsAR,
      ...safeTreatmentAbroadAR,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
  });

export default i18n;