import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, FileText, Send, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- Data ----------------------------------------------------
const icd10Codes = [
  { code: 'C50', category: 'Neoplasms' },
  { code: 'I21', category: 'Diseases of the circulatory system' },
  { code: 'J45', category: 'Diseases of the respiratory system' },
  { code: 'E11', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'M16', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'G40', category: 'Diseases of the nervous system' },
  { code: 'C34', category: 'Neoplasms' },
  { code: 'K25', category: 'Diseases of the digestive system' },
  { code: 'N18', category: 'Diseases of the genitourinary system' },
  { code: 'F32', category: 'Mental and behavioural disorders' },
  { code: 'A00-A09', category: 'Certain infectious and parasitic diseases' },
  { code: 'A15-A19', category: 'Certain infectious and parasitic diseases' },
  { code: 'A20-A28', category: 'Certain infectious and parasitic diseases' },
  { code: 'A30-A49', category: 'Certain infectious and parasitic diseases' },
  { code: 'A50-A64', category: 'Certain infectious and parasitic diseases' },
  { code: 'A65-A69', category: 'Certain infectious and parasitic diseases' },
  { code: 'A70-A74', category: 'Certain infectious and parasitic diseases' },
  { code: 'A75-A79', category: 'Certain infectious and parasitic diseases' },
  { code: 'A80-A89', category: 'Certain infectious and parasitic diseases' },
  { code: 'A92-A99', category: 'Certain infectious and parasitic diseases' },
  { code: 'B00-B09', category: 'Certain infectious and parasitic diseases' },
  { code: 'B15-B19', category: 'Certain infectious and parasitic diseases' },
  { code: 'B20-B24', category: 'Certain infectious and parasitic diseases' },
  { code: 'B25-B34', category: 'Certain infectious and parasitic diseases' },
  { code: 'B35-B49', category: 'Certain infectious and parasitic diseases' },
  { code: 'B50-B64', category: 'Certain infectious and parasitic diseases' },
  { code: 'B65-B83', category: 'Certain infectious and parasitic diseases' },
  { code: 'B85-B89', category: 'Certain infectious and parasitic diseases' },
  { code: 'B90-B94', category: 'Certain infectious and parasitic diseases' },
  { code: 'B95-B98', category: 'Certain infectious and parasitic diseases' },
  { code: 'B99-B99', category: 'Certain infectious and parasitic diseases' },
  { code: 'C00-C97', category: 'Neoplasms' },
  { code: 'C00-C14', category: 'Neoplasms' },
  { code: 'C15-C26', category: 'Neoplasms' },
  { code: 'C30-C39', category: 'Neoplasms' },
  { code: 'C40-C41', category: 'Neoplasms' },
  { code: 'C43-C44', category: 'Neoplasms' },
  { code: 'C45-C49', category: 'Neoplasms' },
  { code: 'C51-C58', category: 'Neoplasms' },
  { code: 'C60-C63', category: 'Neoplasms' },
  { code: 'C64-C68', category: 'Neoplasms' },
  { code: 'C69-C72', category: 'Neoplasms' },
  { code: 'C73-C75', category: 'Neoplasms' },
  { code: 'C76-C80', category: 'Neoplasms' },
  { code: 'C81-C96', category: 'Neoplasms' },
  { code: 'C97-C97', category: 'Neoplasms' },
  { code: 'D00-D09', category: 'Neoplasms' },
  { code: 'D10-D36', category: 'Neoplasms' },
  { code: 'D37-D48', category: 'Neoplasms' },
  { code: 'D50-D53', category: 'Diseases of the blood and blood-forming organs' },
  { code: 'D55-D59', category: 'Diseases of the blood and blood-forming organs' },
  { code: 'D60-D64', category: 'Diseases of the blood and blood-forming organs' },
  { code: 'D65-D69', category: 'Diseases of the blood and blood-forming organs' },
  { code: 'D70-D77', category: 'Diseases of the blood and blood-forming organs' },
  { code: 'D80-D89', category: 'Diseases of the blood and blood-forming organs' },
  { code: 'E00-E07', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'E10-E14', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'E15-E16', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'E20-E35', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'E40-E46', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'E50-E64', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'E65-E68', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'E70-E90', category: 'Endocrine, nutritional and metabolic diseases' },
  { code: 'F00-F09', category: 'Mental and behavioural disorders' },
  { code: 'F10-F19', category: 'Mental and behavioural disorders' },
  { code: 'F20-F29', category: 'Mental and behavioural disorders' },
  { code: 'F30-F39', category: 'Mental and behavioural disorders' },
  { code: 'F40-F48', category: 'Mental and behavioural disorders' },
  { code: 'F50-F59', category: 'Mental and behavioural disorders' },
  { code: 'F60-F69', category: 'Mental and behavioural disorders' },
  { code: 'F70-F79', category: 'Mental and behavioural disorders' },
  { code: 'F80-F89', category: 'Mental and behavioural disorders' },
  { code: 'F90-F98', category: 'Mental and behavioural disorders' },
  { code: 'F99-F99', category: 'Mental and behavioural disorders' },
  { code: 'G00-G09', category: 'Diseases of the nervous system' },
  { code: 'G10-G14', category: 'Diseases of the nervous system' },
  { code: 'G20-G26', category: 'Diseases of the nervous system' },
  { code: 'G30-G32', category: 'Diseases of the nervous system' },
  { code: 'G35-G37', category: 'Diseases of the nervous system' },
  { code: 'G40-G47', category: 'Diseases of the nervous system' },
  { code: 'G50-G59', category: 'Diseases of the nervous system' },
  { code: 'G60-G64', category: 'Diseases of the nervous system' },
  { code: 'G70-G73', category: 'Diseases of the nervous system' },
  { code: 'G80-G83', category: 'Diseases of the nervous system' },
  { code: 'G90-G99', category: 'Diseases of the nervous system' },
  { code: 'H00-H06', category: 'Diseases of the eye and adnexa' },
  { code: 'H10-H13', category: 'Diseases of the eye and adnexa' },
  { code: 'H15-H22', category: 'Diseases of the eye and adnexa' },
  { code: 'H25-H28', category: 'Diseases of the eye and adnexa' },
  { code: 'H30-H36', category: 'Diseases of the eye and adnexa' },
  { code: 'H40-H42', category: 'Diseases of the eye and adnexa' },
  { code: 'H43-H45', category: 'Diseases of the eye and adnexa' },
  { code: 'H46-H48', category: 'Diseases of the eye and adnexa' },
  { code: 'H49-H52', category: 'Diseases of the eye and adnexa' },
  { code: 'H53-H54', category: 'Diseases of the eye and adnexa' },
  { code: 'H55-H59', category: 'Diseases of the eye and adnexa' },
  { code: 'H60-H62', category: 'Diseases of the ear and mastoid process' },
  { code: 'H65-H75', category: 'Diseases of the ear and mastoid process' },
  { code: 'H80-H83', category: 'Diseases of the ear and mastoid process' },
  { code: 'H90-H95', category: 'Diseases of the ear and mastoid process' },
  { code: 'I00-I02', category: 'Diseases of the circulatory system' },
  { code: 'I05-I09', category: 'Diseases of the circulatory system' },
  { code: 'I10-I15', category: 'Diseases of the circulatory system' },
  { code: 'I20-I25', category: 'Diseases of the circulatory system' },
  { code: 'I26-I28', category: 'Diseases of the circulatory system' },
  { code: 'I30-I52', category: 'Diseases of the circulatory system' },
  { code: 'I60-I69', category: 'Diseases of the circulatory system' },
  { code: 'I70-I79', category: 'Diseases of the circulatory system' },
  { code: 'I80-I89', category: 'Diseases of the circulatory system' },
  { code: 'I95-I99', category: 'Diseases of the circulatory system' },
  { code: 'J00-J06', category: 'Diseases of the respiratory system' },
  { code: 'J09-J18', category: 'Diseases of the respiratory system' },
  { code: 'J20-J22', category: 'Diseases of the respiratory system' },
  { code: 'J30-J39', category: 'Diseases of the respiratory system' },
  { code: 'J40-J47', category: 'Diseases of the respiratory system' },
  { code: 'J60-J70', category: 'Diseases of the respiratory system' },
  { code: 'J80-J84', category: 'Diseases of the respiratory system' },
  { code: 'J85-J86', category: 'Diseases of the respiratory system' },
  { code: 'J90-J94', category: 'Diseases of the respiratory system' },
  { code: 'J95-J99', category: 'Diseases of the respiratory system' },
  { code: 'K00-K14', category: 'Diseases of the digestive system' },
  { code: 'K20-K31', category: 'Diseases of the digestive system' },
  { code: 'K35-K38', category: 'Diseases of the digestive system' },
  { code: 'K40-K46', category: 'Diseases of the digestive system' },
  { code: 'K50-K52', category: 'Diseases of the digestive system' },
  { code: 'K55-K64', category: 'Diseases of the digestive system' },
  { code: 'K65-K67', category: 'Diseases of the digestive system' },
  { code: 'K70-K77', category: 'Diseases of the digestive system' },
  { code: 'K80-K87', category: 'Diseases of the digestive system' },
  { code: 'K90-K93', category: 'Diseases of the digestive system' },
  { code: 'L00-L08', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'L10-L14', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'L20-L30', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'L40-L45', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'L50-L54', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'L55-L59', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'L60-L75', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'L80-L99', category: 'Diseases of the skin and subcutaneous tissue' },
  { code: 'M00-M25', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M00-M03', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M05-M14', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M15-M19', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M20-M25', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M30-M36', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M40-M54', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M40-M43', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M45-M49', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M50-M54', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M60-M79', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M60-M63', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M65-M68', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M70-M79', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M80-M94', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M80-M85', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M86-M90', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M91-M94', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'M95-M99', category: 'Diseases of the musculoskeletal system and connective tissue' },
  { code: 'N00-N08', category: 'Diseases of the genitourinary system' },
  { code: 'N10-N16', category: 'Diseases of the genitourinary system' },
  { code: 'N17-N19', category: 'Diseases of the genitourinary system' },
  { code: 'N20-N23', category: 'Diseases of the genitourinary system' },
  { code: 'N25-N29', category: 'Diseases of the genitourinary system' },
  { code: 'N30-N39', category: 'Diseases of the genitourinary system' },
  { code: 'N40-N51', category: 'Diseases of the genitourinary system' },
  { code: 'N60-N64', category: 'Diseases of the genitourinary system' },
  { code: 'N70-N77', category: 'Diseases of the genitourinary system' },
  { code: 'N80-N98', category: 'Diseases of the genitourinary system' },
  { code: 'N99-N99', category: 'Diseases of the genitourinary system' },
  { code: 'O00-O08', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'O10-O16', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'O20-O29', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'O30-O48', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'O60-O75', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'O80-O84', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'O85-O92', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'O94-O99', category: 'Pregnancy, childbirth and the puerperium' },
  { code: 'P00-P04', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P05-P08', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P10-P15', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P20-P29', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P35-P39', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P50-P61', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P70-P74', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P75-P78', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P80-P83', category: 'Certain conditions originating in the perinatal period' },
  { code: 'P90-P96', category: 'Certain conditions originating in the perinatal period' },
  { code: 'Q00-Q07', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q10-Q18', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q20-Q28', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q30-Q34', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q35-Q37', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q38-Q45', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q50-Q56', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q60-Q64', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q65-Q79', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q80-Q89', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'Q90-Q99', category: 'Congenital malformations, deformations and chromosomal abnormalities' },
  { code: 'R00-R09', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R10-R19', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R20-R23', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R25-R29', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R30-R39', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R40-R46', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R47-R49', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R50-R69', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R70-R79', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R80-R82', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R83-R89', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R90-R94', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' },
  { code: 'R95-R99', category: 'Symptoms, signs and abnormal clinical and laboratory findings, not elsewhere classified' }
];

// --- Helpers -------------------------------------------------
const isCodeInRange = (singleCode, range) => {
  if (!range.includes('-')) return false;
  const singleCodeMatch = singleCode.match(/^([A-Z])(\d+)/i);
  if (!singleCodeMatch) return false;

  const [, singleLetter, singleNumStr] = singleCodeMatch;
  const [start, end] = range.split('-');
  const s = start.match(/^([A-Z])(\d+)/i);
  const e = end.match(/^([A-Z])(\d+)/i);
  if (!s || !e) return false;
  const [, sL, sN] = s;
  const [, eL, eN] = e;
  if (singleLetter.toUpperCase() !== sL.toUpperCase() || sL.toUpperCase() !== eL.toUpperCase()) return false;
  const n = parseInt(singleNumStr, 10);
  return n >= parseInt(sN, 10) && n <= parseInt(eN, 10);
};

const SITE = 'https://careoverseas.space';
const ALT_LANGS = ['en', 'ru', 'pl', 'ar'];

// ждать появления элемента в DOM после навигации
function waitForEl(id, timeout = 3000) {
  const start = performance.now();
  return new Promise((resolve) => {
    const loop = () => {
      const el = document.getElementById(id);
      if (el) return resolve(el);
      if (performance.now() - start > timeout) return resolve(null);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  });
}

// --- Component ----------------------------------------------
const DiseasesPage = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [openAccordion, setOpenAccordion] = useState(null);
  const navigate = useNavigate();

  // SEO URLs (canonical + hreflang) из текущего пути
  const lang = getCurrentLangFromPath(); // 'en' | 'ru' | 'pl' | 'ar'
  const rawPath = typeof window !== 'undefined' ? window.location.pathname : `/${lang}/diseases`;
  const origin = typeof window !== 'undefined' ? window.location.origin : SITE;
  const canonicalUrl = `${origin}${rawPath}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;

  // хвост пути после языка, чтобы собрать hreflang ссылки
  const tailAfterLang = rawPath.replace(/^\/(en|ru|pl|ar)\/?/, '');
  const safeTail = tailAfterLang || 'diseases';
  const altHref = (hl) => `${SITE}/${hl}/${safeTail}`;

  const icd10Data = useMemo(() => {
    return icd10Codes.map(item => ({
      ...item,
      name: t(`diseasesPage.icd10.${item.code.replace(/-/g, '_')}.name`),
      description: t(`diseasesPage.icd10.${item.code.replace(/-/g, '_')}.description`)
    }));
  }, [i18n.language, t]);

  const handleRequestQuote = async (e) => {
    e.stopPropagation();
    const isHome = /^\/(en|ru|pl|ar)\/?$/.test(
      typeof window !== 'undefined' ? window.location.pathname : `/${lang}/`
    );
    const id = 'contact';
    if (!isHome) navigate(`${langLink('/') }#${id}`);
    const el = await waitForEl(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const groupedAndFilteredDiseases = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    const filtered = q
      ? icd10Data.filter(d => {
          const code = d.code.toLowerCase();
          if (
            (d.name && d.name.toLowerCase().includes(q)) ||
            (d.description && d.description.toLowerCase().includes(q)) ||
            code.includes(q)
          ) return true;

          // Поиск точного кода внутри диапазона
          if (/^[A-Z]\d+$/i.test(q.toUpperCase())) {
            return isCodeInRange(q.toUpperCase(), d.code);
          }
          return false;
        })
      : icd10Data;

    return filtered.reduce((acc, d) => {
      const cat = d.category || 'Other';
      (acc[cat] ||= []).push(d);
      return acc;
    }, {});
  }, [searchTerm, icd10Data]);

  const categories = Object.keys(groupedAndFilteredDiseases).sort();

  // JSON-LD (страница-сборник с частью списка кодов)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('diseasesPage.title'),
    description: t('diseasesPage.description'),
    inLanguage: lang,
    url: canonicalUrl,
    about: { '@type': 'DefinedTermSet', name: 'ICD-10' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: icd10Data.slice(0, 50).map((d, i) => ({
        '@type': 'MedicalCode',
        codeValue: d.code,
        codingSystem: 'ICD-10',
        name: d.name || undefined,
        position: i + 1
      }))
    }
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('diseasesPage.title')}</title>
        <meta name="description" content={t('diseasesPage.description')} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="ICD-10, diseases, diagnosis codes, hospital coding, DRG, medical categories"
        />

        {/* canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        {ALT_LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={altHref(hl)} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={altHref('en')} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('diseasesPage.title')} />
        <meta property="og:description" content={t('diseasesPage.description')} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://careoverseas.space/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('diseasesPage.title')} />
        <meta name="twitter:description" content={t('diseasesPage.description')} />
        <meta name="twitter:image" content="https://careoverseas.space/og-default.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('diseasesPage.header')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('diseasesPage.subtitle')}
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 max-w-2xl mx-auto"
            role="search"
            aria-label={t('diseasesPage.searchAria') || 'Search ICD-10'}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
              <label htmlFor="icd-search" className="sr-only">
                {t('diseasesPage.searchPlaceholder')}
              </label>
              <input
                id="icd-search"
                type="search"
                placeholder={t('diseasesPage.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                autoComplete="off"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <div className="space-y-12">
            {categories.length > 0 ? (
              categories.map(category => (
                <motion.section
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  aria-labelledby={`cat-${category.replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center mb-6">
                    <BookOpen className="h-8 w-8 text-green-600 mr-4" aria-hidden="true" />
                    <h2 id={`cat-${category.replace(/\s+/g, '-')}`} className="text-3xl font-bold text-gray-800">
                      {category}
                    </h2>
                  </div>

                  <Accordion
                    type="single"
                    collapsible
                    value={openAccordion}
                    onValueChange={setOpenAccordion}
                    className="w-full space-y-4"
                  >
                    {groupedAndFilteredDiseases[category].map((disease) => (
                      <AccordionItem
                        key={disease.code}
                        value={disease.code}
                        className="bg-gradient-to-br from-gray-50 to-white p-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                      >
                        <AccordionTrigger className="text-left p-4">
                          <div className="flex items-center">
                            <FileText className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" aria-hidden="true" />
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{disease.name}</h3>
                              <p className="text-sm text-gray-500">
                                ICD-10: <span className="font-semibold text-gray-700">{disease.code}</span>
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="px-4">
                          <div className="border-t border-gray-200 pt-4 mt-2">
                            <p className="text-gray-600 leading-relaxed mb-4">{disease.description}</p>
                            <Button
                              onClick={handleRequestQuote}
                              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                            >
                              <Send className="mr-2 h-4 w-4" />
                              {t('diseasesPage.requestQuote')}
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.section>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 text-lg">{t('diseasesPage.noResults')}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiseasesPage;
