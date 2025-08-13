import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Atom, ShieldCheck, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const LANGS = ['en', 'ru', 'pl', 'ar'];
const TAIL = 'lu-177-psma-therapy';
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

export default function Lu177PsmaPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // язык и генераторы ссылок
  const lang = getCurrentLangFromPath();         // en|ru|pl|ar
  const go = (p) => langLink(p);
  const home = () => langLink('/');

  // SEO URL-ы
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

  const benefits = t('lu177Page.benefits.list', { returnObjects: true }) || [];
  // остальные массивы, если будут нужны позже:
  // const processSteps = t('lu177Page.process.steps', { returnObjects: true }) || [];
  // const leadingClinics = t('lu177Page.clinics.list', { returnObjects: true }) || [];
  // const requiredDocs = t('lu177Page.cta.requiredDocs', { returnObjects: true }) || [];

  // JSON-LD (страница о терапии)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('lu177Page.meta.title'),
    description: t('lu177Page.meta.description'),
    url: canonicalUrl,
    inLanguage: lang,
    primaryImageOfPage: `${SITE}/lu177-treatment.jpg`,
    about: {
      '@type': 'MedicalTherapy',
      name: 'Lutetium-177 PSMA Therapy',
      alternateName: 'Lu-177 PSMA radioligand therapy',
      medicalSpecialty: 'Oncology'
    }
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <title>{t('lu177Page.meta.title')}</title>
        <meta name="description" content={t('lu177Page.meta.description')} />
        <meta name="keywords" content={t('lu177Page.meta.keywords')} />
        <meta name="robots" content="index, follow" />

        {/* canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang */}
        {LANGS.map((hl) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={`${SITE}/${hl}/${TAIL}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE}/en/${TAIL}`} />

        {/* Open Graph */}
        <meta property="og:title" content={t('lu177Page.meta.title')} />
        <meta property="og:description" content={t('lu177Page.meta.description')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${SITE}/lu177-treatment.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('lu177Page.meta.title')} />
        <meta name="twitter:description" content={t('lu177Page.meta.description')} />
        <meta name="twitter:image" content={`${SITE}/lu177-treatment.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600/10 to-green-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Atom className="h-12 w-12 text-blue-500" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('lu177Page.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('lu177Page.hero.subtitle')}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg px-8 py-4"
                onClick={handleContactClick}
              >
                {t('lu177Page.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('lu177Page.why.title')}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t('lu177Page.why.points', { returnObjects: true }).map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
                  <p className="text-lg text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('lu177Page.how.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {t('lu177Page.how.description')}
              </p>
              <p className="text-lg text-gray-600 font-semibold mb-2">
                {t('lu177Page.how.effectiveIn')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {t('lu177Page.how.conditions', { returnObjects: true }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-md max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/lu177-treatment.jpg"
                alt={t('lu177Page.process.title')}
                className="w-full h-auto object-cover"
                loading="lazy"
                width="1200"
                height="800"
              />
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              {t('lu177Page.benefits.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-2xl shadow-xl text-center"
            >
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                {t('lu177Page.cta.title')}
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                {t('lu177Page.cta.subtitle')}
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={handleContactClick}
              >
                {t('lu177Page.hero.cta')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
