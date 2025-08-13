import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope as UserMd, FlaskConical, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const LANGS = ['en', 'ru', 'pl', 'ar'];
const SITE = 'https://careoverseas.space';
const TAIL = 'endometriosis-leomyoma-treatment';

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

const EndometriosisPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lang = getCurrentLangFromPath(); // en|ru|pl|ar
  const go = (p) => langLink(p);
  const home = () => langLink('/');

  const canonicalUrl = `${SITE}/${lang}/${TAIL}`;
  const currentUrl =
    typeof window !== 'undefined' ? window.location.href : canonicalUrl;

  // smooth scroll к #contact с любой страницы
  async function handleContactClick(e) {
    e?.preventDefault?.();
    const isHome = /^\/(en|ru|pl|ar)\/?$/.test(
      typeof window !== 'undefined' ? window.location.pathname : `/${lang}/`
    );
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
    { icon: UserMd,       title: t('endometriosisPage.feature1Title'), desc: t('endometriosisPage.feature1Desc') },
    { icon: FlaskConical, title: t('endometriosisPage.feature2Title'), desc: t('endometriosisPage.feature2Desc') },
    { icon: HeartPulse,   title: t('endometriosisPage.feature3Title'), desc: t('endometriosisPage.feature3Desc') },
    { icon: CheckCircle,  title: t('endometriosisPage.feature4Title'), desc: t('endometriosisPage.feature4Desc') },
  ];

  const modalities = [1, 2, 3, 4, 5];

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('endometriosisPage.title'),
    description: t('endometriosisPage.description'),
    url: canonicalUrl,
    inLanguage: lang,
    primaryImageOfPage: `${SITE}/endometriosis-treatment-microscopic.jpg`,
    about: [
      { '@type': 'MedicalCondition', name: 'Endometriosis' },
      { '@type': 'MedicalCondition', name: 'Uterine leiomyoma' }
    ]
  };

  return (
    <div className="text-base leading-relaxed">
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('endometriosisPage.title')}</title>
        <meta name="description" content={t('endometriosisPage.description')} />
        <meta name="robots" content="index, follow" />

        {/* canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        {LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={`${SITE}/${hl}/${TAIL}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/en/${TAIL}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t('endometriosisPage.title')} />
        <meta property="og:description" content={t('endometriosisPage.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${SITE}/endometriosis-treatment-microscopic.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('endometriosisPage.title')} />
        <meta name="twitter:description" content={t('endometriosisPage.description')} />
        <meta name="twitter:image" content={`${SITE}/endometriosis-treatment-microscopic.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <HeartPulse className="h-12 w-12 text-pink-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('endometriosisPage.header')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('endometriosisPage.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('endometriosisPage.requestConsultation')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('endometriosisPage.whyUsTitle')}
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t('endometriosisPage.whyUsSubtitle')}
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
                <feat.icon className="h-8 w-8 text-pink-600 mb-4 inline-flex p-2 rounded-full bg-pink-100" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Modalities Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('endometriosisPage.treatmentsTitle')}
          </motion.h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            {t('endometriosisPage.treatmentsSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">#</th>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                      {t('endometriosisPage.modalitiesTitle')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {modalities.map((i) => (
                    <tr key={i} className="border-b even:bg-gray-50">
                      <td className="px-6 py-4 text-gray-800 whitespace-nowrap">{i}</td>
                      <td className="px-6 py-4 text-gray-700 whitespace-normal">
                        <Trans
                          i18nKey={`endometriosisPage.modality${i}`}
                          components={{ strong: <strong className="font-semibold text-gray-900" /> }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/endometriosis-treatment-microscopic.jpg"
                alt="Endometriosis and leiomyoma cells under microscope"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              {t('endometriosisPage.ctaTitle')}
            </h2>
            <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">
              {t('endometriosisPage.ctaSubtitle')}
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('endometriosisPage.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      <div id="contact" />
    </div>
  );
};

export default EndometriosisPage;
