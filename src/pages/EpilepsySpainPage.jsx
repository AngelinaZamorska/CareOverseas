import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BrainCircuit, Pill, ShieldCheck, UserCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const LANGS = ['en', 'ru', 'pl', 'ar'];
const SITE = 'https://careoverseas.space';
const TAIL = 'epilepsy-treatment-spain';

// ждём появления элемента, затем скроллим (исправляет «двойной клик»)
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

const EpilepsySpainPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // язык и генераторы ссылок
  const lang = getCurrentLangFromPath();   // en|ru|pl|ar
  const go = (p) => langLink(p);
  const home = () => langLink('/');

  // SEO URLs
  const origin = typeof window !== 'undefined' ? window.location.origin : SITE;
  const canonicalUrl = `${SITE}/${lang}/${TAIL}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;

  async function handleContactClick(e) {
    e?.preventDefault?.();
    const isHome = /^\/(en|ru|pl|ar)\/?$/.test(window.location.pathname);
    const id = 'contact';
    if (isHome) {
      const el = await waitForEl(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`${home()}#${id}`);
      const el = await waitForEl(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const features = [
    { icon: ShieldCheck, title: t('epilepsySpainPage.feature1Title'), desc: t('epilepsySpainPage.feature1Desc') },
    { icon: Pill,        title: t('epilepsySpainPage.feature2Title'), desc: t('epilepsySpainPage.feature2Desc') },
    { icon: CheckCircle, title: t('epilepsySpainPage.feature3Title'), desc: t('epilepsySpainPage.feature3Desc') },
    { icon: UserCheck,   title: t('epilepsySpainPage.feature4Title'), desc: t('epilepsySpainPage.feature4Desc') },
  ];

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('epilepsySpainPage.title'),
    description: t('epilepsySpainPage.description'),
    url: canonicalUrl,
    inLanguage: lang,
    primaryImageOfPage: `${SITE}/epilepsy-spain-hero.jpg`,
    about: { '@type': 'MedicalSpecialty', name: 'Neurology' }
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('epilepsySpainPage.title')}</title>
        <meta name="description" content={t('epilepsySpainPage.description')} />
        <meta name="robots" content="index, follow" />

        {/* canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang */}
        {LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={`${SITE}/${hl}/${TAIL}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/en/${TAIL}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t('epilepsySpainPage.title')} />
        <meta property="og:description" content={t('epilepsySpainPage.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${SITE}/epilepsy-spain-hero.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('epilepsySpainPage.title')} />
        <meta name="twitter:description" content={t('epilepsySpainPage.description')} />
        <meta name="twitter:image" content={`${SITE}/epilepsy-spain-hero.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="text-base leading-relaxed">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <BrainCircuit className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {t('epilepsySpainPage.header')}
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('epilepsySpainPage.subtitle')}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
                onClick={handleContactClick}
              >
                {t('epilepsySpainPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Spain */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('epilepsySpainPage.whySpainTitle')}
              </h2>
              <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {t('epilepsySpainPage.whySpainSubtitle')}
              </p>
            </motion.div>
            <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <feat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image & Details */}
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/epilepsy-spain-hero.jpg"
                  alt="Modern epilepsy diagnostic in Spain"
                  className="rounded-lg overflow-hidden shadow-md w-full h-auto md:h-96 object-cover"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {t('epilepsySpainPage.feature4Title')}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {t('epilepsySpainPage.feature4Desc')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-2xl shadow-xl"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                {t('epilepsySpainPage.ctaTitle')}
              </h2>
              <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">
                {t('epilepsySpainPage.ctaSubtitle')}
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg"
                onClick={handleContactClick}
              >
                {t('epilepsySpainPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>

        <div id="contact" />
      </div>
    </>
  );
};

export default EpilepsySpainPage;
