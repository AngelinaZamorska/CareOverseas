import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DRGCalculator from '@/components/DRGCalculator';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { getCurrentLangFromPath } from '@/lib/lang';

export default function DRGCalculatorPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Региональные пункты (рендер ниже)
  const infoItems = [
    { emoji: '🇩🇪', label: 'Germany', textKey: 'homePage.calculatorInfo1' },
    { emoji: '🇹🇷', label: 'Turkey',  textKey: 'homePage.calculatorInfo2' },
    { emoji: '🇮🇱', label: 'Israel',  textKey: 'homePage.calculatorInfo3' },
    { emoji: '🇪🇺', label: 'Europe',  textKey: 'homePage.calculatorInfo4' },
    { emoji: '🌍', label: 'Global',   textKey: 'homePage.calculatorInfo5' },
  ];

  // ======== SEO URLs (canonical + hreflang) ========
  const SITE = 'https://careoverseas.space';
  const ALT_LANGS = ['en', 'ru', 'pl', 'ar'];
  const lang = getCurrentLangFromPath(); // 'en' | 'ru' | 'pl' | 'ar'
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : `/${lang || 'en'}/drg-calculator`;
  const origin =
    typeof window !== 'undefined' ? window.location.origin : SITE;

  // если роут без префикса языка — поставим хвост для hreflang
  const tail = pathname.replace(/^\/(en|ru|pl|ar)\/?/, '') || 'drg-calculator';
  const canonicalUrl = `${origin}${pathname}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;
  const altHref = (hl) => `${SITE}/${hl}/${tail}`;

  // ======== JSON-LD ========
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: t('drgCalculator.pageTitle', 'DRG Cost Calculator'), item: `${SITE}/drg-calculator` },
    ],
  };

  const webAppLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('drgCalculator.pageTitle', 'DRG Cost Calculator'),
    description: t(
      'drgCalculator.seoDesc',
      'Use our DRG Cost Calculator to estimate your medical treatment expenses in Germany based on Diagnosis Related Groups, including stay, nursing, and specialist fees.'
    ),
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    url: `${SITE}/drg-calculator`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: lang || 'en' }}>
        {/* Primary Meta */}
        <title>{t('drgCalculator.seoTitle', 'DRG Cost Calculator for Treatment in Germany')}</title>
        <meta
          name="description"
          content={t(
            'drgCalculator.seoDesc',
            'Use our DRG Cost Calculator to estimate your medical treatment expenses in Germany based on Diagnosis Related Groups, including stay, nursing, and specialist fees.'
          )}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="DRG, DRG calculator, German tariffs, hospital costs, medical cost estimate, Diagnosis Related Groups"
        />

        {/* Canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        {ALT_LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={altHref(hl)} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={altHref('en')} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('drgCalculator.seoTitle', 'DRG Cost Calculator for Treatment in Germany')} />
        <meta property="og:description" content={t('drgCalculator.seoDesc')} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://careoverseas.space/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('drgCalculator.seoTitle', 'DRG Cost Calculator for Treatment in Germany')} />
        <meta name="twitter:description" content={t('drgCalculator.seoDesc')} />
        <meta name="twitter:image" content="https://careoverseas.space/og-default.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppLd)}</script>
      </Helmet>

      <section id="calculator" className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок и подзаголовок */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 mb-4">
              {t('homePage.calculatorTitle', 'Калькулятор стоимости по DRG')}
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              {t('homePage.calculatorSubtitle', 'Узнайте ориентировочную стоимость лечения по немецким тарифам DRG')}
            </p>

            {/* Блок регионов */}
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <ul className="space-y-4">
                {infoItems.map(({ emoji, label, textKey }) => (
                  <li key={textKey} className="flex items-start">
                    <div className="flex-shrink-0 w-8">
                      <span role="img" aria-label={label} className="flag-emoji text-3xl leading-none block">
                        {emoji}
                      </span>
                    </div>
                    <div className="ml-4 text-gray-700">
                      <div className="text-base" dangerouslySetInnerHTML={{ __html: t(textKey) }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Инструкции и сам калькулятор */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg" aria-labelledby="drg-howto">
            <div className="mb-6">
              <p id="drg-howto" className="text-lg font-semibold text-blue-600 mb-3">
                {t('homePage.calculatorGuideTitle', 'Как использовать калькулятор DRG:')}
              </p>
              <ul className="list-inside list-disc text-gray-700 space-y-2">
                <li>{t('homePage.calculatorGuide1')}</li>
                <li>{t('homePage.calculatorGuide2')}</li>
                <li>{t('homePage.calculatorGuide3')}</li>
                <li>{t('homePage.calculatorGuide4')}</li>
              </ul>
            </div>
            <DRGCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
