import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Dna, Beaker, ShieldCheck, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const LANGS = ['en', 'ru', 'pl', 'ar'];
const SITE = 'https://careoverseas.space';
const TAIL = 'dendritic-cell-therapy-germany';

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

const DendriticCellPage = () => {
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

  // плавный переход к #contact с любой страницы/языка
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

  const features = [
    { icon: Beaker,     title: t('dendriticCellPage.feature1Title'), desc: t('dendriticCellPage.feature1Desc') },
    { icon: ShieldCheck,title: t('dendriticCellPage.feature2Title'), desc: t('dendriticCellPage.feature2Desc') },
    { icon: Microscope, title: t('dendriticCellPage.feature3Title'), desc: t('dendriticCellPage.feature3Desc') },
    { icon: CheckCircle,title: t('dendriticCellPage.feature4Title'), desc: t('dendriticCellPage.feature4Desc') },
  ];

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('dendriticCellPage.title'),
    description: t('dendriticCellPage.description'),
    url: canonicalUrl,
    inLanguage: lang,
    primaryImageOfPage: `${SITE}/dendritic-cell-vaccine-germany.jpg`,
    about: { '@type': 'MedicalTherapy', name: 'Dendritic cell vaccine' }
  };

  return (
    <div className="text-base leading-relaxed">
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('dendriticCellPage.title')}</title>
        <meta name="description" content={t('dendriticCellPage.description')} />
        <meta name="robots" content="index, follow" />

        {/* canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        {LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={`${SITE}/${hl}/${TAIL}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/en/${TAIL}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t('dendriticCellPage.title')} />
        <meta property="og:description" content={t('dendriticCellPage.ogDescription')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${SITE}/dendritic-cell-vaccine-germany.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('dendriticCellPage.title')} />
        <meta name="twitter:description" content={t('dendriticCellPage.ogDescription')} />
        <meta name="twitter:image" content={`${SITE}/dendritic-cell-vaccine-germany.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <Dna className="h-12 w-12 text-indigo-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('dendriticCellPage.header')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('dendriticCellPage.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('dendriticCellPage.inquire')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Germany Section */}
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
              {t('dendriticCellPage.whyGermanyTitle')}
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('dendriticCellPage.whyGermanySubtitle')}
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

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('dendriticCellPage.pricingTitle')}
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('dendriticCellPage.pricingSubtitle')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-t-4 border-indigo-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">
                {t('dendriticCellPage.dcVaccineTitle')}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4">
                {t('dendriticCellPage.dcVaccinePrice')}
              </p>
              <p className="text-gray-500 mb-4">
                {t('dendriticCellPage.dcVaccinePer')}
              </p>
              <p className="text-gray-700">
                {t('dendriticCellPage.dcVaccineDesc')}
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-t-4 border-purple-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">
                {t('dendriticCellPage.lpTitle')}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
                {t('dendriticCellPage.lpPrice')}
              </p>
              <p className="text-gray-500 mb-4">
                {t('dendriticCellPage.lpPer')}
              </p>
              <p className="text-gray-700">
                {t('dendriticCellPage.lpDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden shadow-xl w-full max-w-4xl"
          >
            <img
              src="/dendritic-cell-vaccine-germany.jpg"
              alt="Scientist preparing dendritic cell vaccine in lab"
              className="w-full h-auto object-cover"
              loading="lazy"
              width="1200"
              height="800"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-2xl shadow-xl inline-block max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('dendriticCellPage.ctaTitle')}
            </h2>
            <p className="text-lg mb-8">
              {t('dendriticCellPage.ctaSubtitle')}
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('dendriticCellPage.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      <div id="contact" />
    </div>
  );
};

export default DendriticCellPage;
