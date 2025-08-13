import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PersonStanding, Bone, Scan, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const LANGS = ['en', 'ru', 'pl', 'ar'];
const TAIL = 'joint-replacement';
const SITE = 'https://careoverseas.space';

// ждём появления элемента и только потом скроллим (исключает «двойной клик»)
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

export default function JointReplacementPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // язык и генераторы ссылок
  const lang = getCurrentLangFromPath();       // en|ru|pl|ar
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
    { icon: Bone,            title: t('jointReplacementPage.feature1Title'), desc: t('jointReplacementPage.feature1Desc') },
    { icon: PersonStanding,  title: t('jointReplacementPage.feature2Title'), desc: t('jointReplacementPage.feature2Desc') },
    { icon: Scan,            title: t('jointReplacementPage.feature3Title'), desc: t('jointReplacementPage.feature3Desc') },
    { icon: CheckCircle,     title: t('jointReplacementPage.feature4Title'), desc: t('jointReplacementPage.feature4Desc') },
  ];

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('jointReplacementPage.title'),
    description: t('jointReplacementPage.description'),
    url: canonicalUrl,
    inLanguage: lang,
    primaryImageOfPage: `${SITE}/joint-replacement-cover.jpg`,
    about: {
      '@type': 'MedicalProcedure',
      name: 'Joint Replacement (Arthroplasty)',
      bodyLocation: 'Hip/Knee',
      procedureType: 'Surgery'
    }
  };

  return (
    <div className="text-base leading-relaxed">
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('jointReplacementPage.title')}</title>
        <meta name="description" content={t('jointReplacementPage.description')} />
        <meta name="robots" content="index, follow" />

        {/* canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang */}
        {LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={`${SITE}/${hl}/${TAIL}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/en/${TAIL}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t('jointReplacementPage.title')} />
        <meta property="og:description" content={t('jointReplacementPage.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${SITE}/joint-replacement-cover.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('jointReplacementPage.title')} />
        <meta name="twitter:description" content={t('jointReplacementPage.description')} />
        <meta name="twitter:image" content={`${SITE}/joint-replacement-cover.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <PersonStanding className="h-12 w-12 text-teal-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('jointReplacementPage.header')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('jointReplacementPage.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('jointReplacementPage.regainMobility')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('jointReplacementPage.whyUsTitle')}
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('jointReplacementPage.whyUsSubtitle')}
            </p>
          </motion.div>
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
                <div className="inline-flex p-4 rounded-full bg-cyan-100 text-cyan-600 mb-4">
                  <feat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('jointReplacementPage.typesTitle')}
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('jointReplacementPage.typesSubtitle')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('jointReplacementPage.proceduresTitle')}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <Trans i18nKey={`jointReplacementPage.procedure${i}`} components={{ strong: <strong /> }} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/joint-replacement-cover.jpg"
                alt={t('jointReplacementPage.proceduresTitle')}
                className="rounded-xl shadow-md w-full h-auto md:h-96 object-cover"
                loading="lazy"
                width="1200"
                height="800"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="p-10 rounded-2xl shadow-xl"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              {t('jointReplacementPage.ctaTitle')}
            </h2>
            <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">
              {t('jointReplacementPage.ctaSubtitle')}
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('jointReplacementPage.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      <div id="contact" />
    </div>
  );
}
