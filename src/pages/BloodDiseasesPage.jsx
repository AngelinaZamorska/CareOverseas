import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplet, Droplets, Dna, TestTube, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const LANGS = ['en', 'ru', 'pl', 'ar'];
const SITE = 'https://careoverseas.space';
const TAIL = 'blood-diseases-treatment';

// ждать появления элемента в DOM (после перехода на главную)
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

const BloodDiseasesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lang = getCurrentLangFromPath(); // en|ru|pl|ar
  const home = () => langLink('/');
  const canonicalUrl = `${SITE}/${lang}/${TAIL}`;
  const currentUrl =
    typeof window !== 'undefined' ? window.location.href : canonicalUrl;

  async function handleContactClick(e) {
    e?.preventDefault?.();
    const isHome = /^\/(en|ru|pl|ar)\/?$/.test(
      typeof window !== 'undefined' ? window.location.pathname : `/${lang}/`
    );
    const id = 'contact';
    if (!isHome) navigate(`${home()}#${id}`);
    const el = await waitForEl(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const conditions = [
    t('bloodDiseasesPage.condition1'),
    t('bloodDiseasesPage.condition2'),
    t('bloodDiseasesPage.condition3'),
    t('bloodDiseasesPage.condition4'),
    t('bloodDiseasesPage.condition5'),
    t('bloodDiseasesPage.condition6'),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('bloodDiseasesPage.title'),
    description: t('bloodDiseasesPage.description'),
    url: canonicalUrl,
    inLanguage: lang,
    about: { '@type': 'MedicalSpecialty', name: 'Hematology' },
    primaryImageOfPage: `${SITE}/blood.jpg`
  };

  return (
    <div className="text-base leading-relaxed">
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('bloodDiseasesPage.title')}</title>
        <meta name="description" content={t('bloodDiseasesPage.description')} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="hematology, blood disorders, leukemia, lymphoma, anemia, thrombosis, bone marrow transplant" />

        {/* canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        {LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={`${SITE}/${hl}/${TAIL}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/en/${TAIL}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t('bloodDiseasesPage.title')} />
        <meta property="og:description" content={t('bloodDiseasesPage.description')} />
        <meta property="og:image" content={`${SITE}/blood.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('bloodDiseasesPage.title')} />
        <meta name="twitter:description" content={t('bloodDiseasesPage.description')} />
        <meta name="twitter:image" content={`${SITE}/blood.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-red-50 py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <Droplet className="h-12 w-12 text-red-500" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
              {t('bloodDiseasesPage.header')}
            </h1>

            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('bloodDiseasesPage.subtitle')}
            </p>

            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('bloodDiseasesPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            {t('bloodDiseasesPage.whyUsTitle')}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t('bloodDiseasesPage.whyUsSubtitle')}
          </p>
          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[Users, TestTube, Dna, Droplets].map((Icon, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Icon className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t(`bloodDiseasesPage.feature${i + 1}Title`)}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t(`bloodDiseasesPage.feature${i + 1}Desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 md:py-20 lg:py-24 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            {t('bloodDiseasesPage.conditionsTitle')}
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              {conditions.map((cond, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-base sm:text-lg">{cond}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-md max-w-md mx-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/blood.jpg"
                alt="Microscopic blood analysis"
                className="w-full h-auto object-cover"
                loading="lazy"
                width="1200"
                height="800"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            {t('bloodDiseasesPage.ctaTitle')}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            {t('bloodDiseasesPage.ctaSubtitle')}
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 px-6 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg"
            onClick={handleContactClick}
          >
            {t('bloodDiseasesPage.ctaButton')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BloodDiseasesPage;
