import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DRGCalculator from '@/components/DRGCalculator';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function DRGCalculatorPage() {
  const { t } = useTranslation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Данные для блока «регионов»
  const infoItems = [
    { emoji: '🇩🇪', label: 'Germany', textKey: 'homePage.calculatorInfo1' },
    { emoji: '🇹🇷', label: 'Turkey',  textKey: 'homePage.calculatorInfo2' },
    { emoji: '🇮🇱', label: 'Israel',  textKey: 'homePage.calculatorInfo3' },
    { emoji: '🇪🇺', label: 'Europe',  textKey: 'homePage.calculatorInfo4' },
    { emoji: '🌍', label: 'Global',  textKey: 'homePage.calculatorInfo5' },
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          {t('drgCalculator.seoTitle', 'DRG Cost Calculator for Treatment in Germany')}
        </title>
        <meta
          name="description"
          content={t(
            'drgCalculator.seoDesc',
            'Use our DRG Cost Calculator to estimate your medical treatment expenses in Germany based on Diagnosis Related Groups, including stay, nursing, and specialist fees.'
          )}
        />
        <link rel="canonical" href="https://careoverseas.space/drg-calculator" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://careoverseas.space/" },
              { "@type": "ListItem", position: 2, name: t('drgCalculator.pageTitle', 'DRG Cost Calculator'), item: "https://careoverseas.space/drg-calculator" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t('drgCalculator.pageTitle', 'DRG Cost Calculator'),
            description: t(
              'drgCalculator.seoDesc',
              'Use our DRG Cost Calculator to estimate your medical treatment expenses in Germany based on Diagnosis Related Groups, including stay, nursing, and specialist fees.'
            ),
            url: "https://careoverseas.space/drg-calculator"
          })}
        </script>
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

            {/* Блок регионов с emoji-флагами */}
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <ul className="space-y-4">
                {infoItems.map(({ emoji, label, textKey }) => (
                  <li key={textKey} className="flex items-start">
                    <span
                      role="img"
                      aria-label={label}
                      className="flag-emoji mr-3 text-2xl"
                    >
                      {emoji}
                    </span>
                    <span
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: t(textKey) }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Инструкции и сам калькулятор */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <p className="text-lg font-semibold text-blue-600 mb-3">
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