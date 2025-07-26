import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Microscope, Dna, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const OncologyPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 200);
    } else {
      scrollToContact();
    }
  };

  const conditions = t('oncologyPage.conditions', { returnObjects: true });

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{t('oncologyPage.meta.title')}</title>
        <meta name="description" content={t('oncologyPage.meta.description')} />
        <meta name="keywords" content={t('oncologyPage.meta.keywords')} />
        <meta property="og:title" content={t('oncologyPage.meta.title')} />
        <meta property="og:description" content={t('oncologyPage.meta.description')} />
        <meta property="og:image" content="/images/oncology-cover.jpg" />
        <meta property="og:url" content="https://careoverseas.space/oncology-treatment" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('oncologyPage.meta.title')} />
        <meta name="twitter:description" content={t('oncologyPage.meta.description')} />
        <meta name="twitter:image" content="/images/oncology-cover.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <Microscope className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('oncologyPage.header')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('oncologyPage.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('oncologyPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Diagnostics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="rounded-lg overflow-hidden shadow-md max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/oncology-diagnostics.jpg"
                alt={t('oncologyPage.diagnosticsTitle')}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('oncologyPage.diagnosticsTitle')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('oncologyPage.diagnosticsSubtitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('oncologyPage.conditionsTitle')}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((cond, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <Dna className="h-6 w-6 text-teal-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">{cond.title}</h3>
                </div>
                <p className="text-gray-600">{cond.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              {t('oncologyPage.ctaTitle')}
            </h2>
            <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">
              {t('oncologyPage.ctaSubtitle')}
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('oncologyPage.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      <div id="contact" />
    </div>
  );
};

export default OncologyPage;