import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Baby, TestTube, Gem, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const LANGS = ['en', 'ru', 'pl', 'ar'];
const TAIL = 'ivf-in-turkey';
const SITE = 'https://careoverseas.space';

// дождаться появления элемента и потом скроллить (убирает необходимость «двойного клика»)
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

export default function IvfTurkeyPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // язык + генераторы ссылок
  const lang = getCurrentLangFromPath();           // en|ru|pl|ar
  const go = (p) => langLink(p);
  const home = () => langLink('/');

  // URL для SEO
  const origin = typeof window !== 'undefined' ? window.location.origin : SITE;
  const canonicalUrl = `${origin}${go(TAIL)}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function smoothScrollToId(id) {
    const el = await waitForEl(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function handleContactClick(e) {
    e?.preventDefault?.();
    const isHome = /^\/(en|ru|pl|ar)\/?$/.test(window.location.pathname);
    const id = 'contact';
    if (isHome) {
      await smoothScrollToId(id);
    } else {
      navigate(`${home()}#${id}`);
      await smoothScrollToId(id);
    }
  }

  const features = [
    { icon: TestTube,   title: t('ivfTurkeyPage.feature1Title'), desc: t('ivfTurkeyPage.feature1Desc') },
    { icon: DollarSign, title: t('ivfTurkeyPage.feature2Title'), desc: t('ivfTurkeyPage.feature2Desc') },
    { icon: Gem,        title: t('ivfTurkeyPage.feature3Title'), desc: t('ivfTurkeyPage.feature3Desc') },
    { icon: CheckCircle,title: t('ivfTurkeyPage.feature4Title'), desc: t('ivfTurkeyPage.feature4Desc') },
  ];

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('ivfTurkeyPage.title'),
    description: t('ivfTurkeyPage.description'),
    url: canonicalUrl,
    inLanguage: lang,
    primaryImageOfPage: `${SITE}/ivf-clinic-cover.jpg`,
    about: { '@type': 'MedicalSpecialty', name: 'Reproductive Medicine' }
  };

  return (
    <div className="text-base leading-relaxed">
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('ivfTurkeyPage.title')}</title>
        <meta name="description" content={t('ivfTurkeyPage.description')} />
        <meta name="robots" content="index, follow" />

        {/* canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang */}
        {LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={`${SITE}/${hl}/${TAIL}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/en/${TAIL}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t('ivfTurkeyPage.title')} />
        <meta property="og:description" content={t('ivfTurkeyPage.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${SITE}/ivf-clinic-cover.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('ivfTurkeyPage.title')} />
        <meta name="twitter:description" content={t('ivfTurkeyPage.description')} />
        <meta name="twitter:image" content={`${SITE}/ivf-clinic-cover.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <Baby className="h-12 w-12 text-rose-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('ivfTurkeyPage.header')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('ivfTurkeyPage.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('ivfTurkeyPage.startJourney')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Turkey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('ivfTurkeyPage.whyTurkeyTitle')}
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t('ivfTurkeyPage.whyTurkeySubtitle')}
          </motion.p>
          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <feat.icon className="h-8 w-8 text-amber-600 mb-4 inline-flex p-2 rounded-full bg-amber-100" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('ivfTurkeyPage.pricingTitle')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-t-4 border-rose-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{t('ivfTurkeyPage.ivfPackageTitle')}</h3>
              <p className="text-3xl sm:text-4xl font-bold text-rose-600 mb-4">{t('ivfTurkeyPage.ivfPackagePrice')}</p>
              <p className="text-gray-500 mb-4">{t('ivfTurkeyPage.ivfPackagePer')}</p>
              <p className="text-gray-700">{t('ivfTurkeyPage.ivfPackageDesc')}</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-t-4 border-amber-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{t('ivfTurkeyPage.microTeseTitle')}</h3>
              <p className="text-3xl sm:text-4xl font-bold text-amber-600 mb-4">{t('ivfTurkeyPage.microTesePrice')}</p>
              <p className="text-gray-500 mb-4">{t('ivfTurkeyPage.microTesePer')}</p>
              <p className="text-gray-700">{t('ivfTurkeyPage.microTeseDesc')}</p>
            </motion.div>
          </div>
          <p className="text-center text-gray-600 mt-8">{t('ivfTurkeyPage.note')}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-rose-600 to-amber-600 text-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{t('ivfTurkeyPage.ctaTitle')}</h2>
            <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">{t('ivfTurkeyPage.ctaSubtitle')}</p>
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('ivfTurkeyPage.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
