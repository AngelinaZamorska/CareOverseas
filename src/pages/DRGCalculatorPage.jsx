import React, { useEffect, lazy, Suspense, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { getCurrentLangFromPath } from '@/lib/lang';

// ⬇️ Ленивая загрузка калькулятора (с отложенным чанк‑JS)
const DRGCalculator = lazy(() => import('@/components/DRGCalculator'));

// Очень лёгкий скелетон, чтобы быстро отрендерить LCP
function CalculatorSkeleton() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-pulse">
      <div className="h-7 w-2/3 bg-gray-200 rounded mb-3" />
      <div className="h-5 w-full bg-gray-100 rounded mb-2" />
      <div className="h-5 w-5/6 bg-gray-100 rounded mb-6" />
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
            <div className="h-10 w-full bg-gray-100 rounded" />
          </div>
        ))}
      </div>
      <div className="h-12 w-full bg-gray-200 rounded" />
    </div>
  );
}

export default function DRGCalculatorPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ======== SEO URLs (canonical + hreflang) ========
  const SITE = 'https://careoverseas.space';
  const ALT_LANGS = ['en', 'ru', 'pl', 'ar'];
  const lang = getCurrentLangFromPath(); // 'en' | 'ru' | 'pl' | 'ar'
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : `/${lang || 'en'}/drg-calculator`;
  const origin = typeof window !== 'undefined' ? window.location.origin : SITE;
  const tail = pathname.replace(/^\/(en|ru|pl|ar)\/?/, '') || 'drg-calculator';
  const canonicalUrl = `${origin}${pathname}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;
  const altHref = (hl) => `${SITE}/${hl}/${tail}`;

  // ======== JSON-LD (минимизировано) ========
  const breadcrumbLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: t('drgCalculator.pageTitle', 'DRG Cost Calculator'),
          item: `${SITE}/drg-calculator`,
        },
      ],
    }),
    [t]
  );

  const webAppLd = useMemo(
    () => ({
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
    }),
    [t]
  );

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

        {/* Priority Hints / Preconnect */}
        <link rel="preconnect" href={origin} crossOrigin="" />
        <link rel="dns-prefetch" href={origin} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={t('drgCalculator.seoTitle', 'DRG Cost Calculator for Treatment in Germany')}
        />
        <meta property="og:description" content={t('drgCalculator.seoDesc')} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://careoverseas.space/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t('drgCalculator.seoTitle', 'DRG Cost Calculator for Treatment in Germany')}
        />
        <meta name="twitter:description" content={t('drgCalculator.seoDesc')} />
        <meta name="twitter:image" content="https://careoverseas.space/og-default.jpg" />

        {/* Structured Data (минимум запроса, не блокирует LCP контент в body) */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webAppLd)}</script>
      </Helmet>

      {/* Первый экран — лёгкий и быстрый */}
      <section id="calculator" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
              {t('homePage.calculatorTitle', 'Калькулятор стоимости по DRG')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              {t(
                'homePage.calculatorSubtitle',
                'Узнайте ориентировочную стоимость лечения по немецким тарифам DRG'
              )}
            </p>
          </div>

          {/* Инструкции оставляем — легкий контент без тяжёлых списков */}
          <div
            className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6"
            aria-labelledby="drg-howto"
          >
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

          {/* Сам калькулятор — лениво, ради LCP */}
          <Suspense fallback={<CalculatorSkeleton />}>
            <DRGCalculator />
          </Suspense>

          {/* Блок регионов переносим НИЖЕ калькулятора, чтобы не мешать LCP */}
          <div className="text-center max-w-2xl mx-auto mt-10">
            <div className="mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <ul className="space-y-3 text-gray-700">
                {[
                  { emoji: '🇩🇪', key: 'homePage.calculatorInfo1', label: 'Germany' },
                  { emoji: '🇹🇷', key: 'homePage.calculatorInfo2', label: 'Turkey' },
                  { emoji: '🇮🇱', key: 'homePage.calculatorInfo3', label: 'Israel' },
                  { emoji: '🇪🇺', key: 'homePage.calculatorInfo4', label: 'Europe' },
                  { emoji: '🌍', key: 'homePage.calculatorInfo5', label: 'Global' },
                ].map(({ emoji, key, label }) => (
                  <li key={key} className="flex items-start">
                    <div className="w-8 flex-shrink-0">
                      <span role="img" aria-label={label} className="text-2xl leading-none block">
                        {emoji}
                      </span>
                    </div>
                    <div className="ml-3 text-left">
                      <div
                        className="text-base"
                        dangerouslySetInnerHTML={{ __html: t(key) }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
