import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HeartPulse, UserX as UserMd, FlaskConical, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const EndometriosisPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to #contact on home
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 150);
    } else {
      scrollToContact();
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('endometriosisPage.title')}</title>
        <meta name="description" content={t('endometriosisPage.description')} />
        <meta property="og:title" content={t('endometriosisPage.title')} />
        <meta property="og:description" content={t('endometriosisPage.description')} />
        <meta property="og:image" content="/images/endometriosis-treatment-microscopic.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://careoverseas.space/endometriosis-leomyoma-treatment" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <HeartPulse className="h-12 w-12 text-pink-500" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('endometriosisPage.header')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('endometriosisPage.subtitle')}
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-4" onClick={handleContactClick}>
                {t('endometriosisPage.requestConsultation')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('endometriosisPage.whyUsTitle')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('endometriosisPage.whyUsSubtitle')}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[UserMd, FlaskConical, HeartPulse, CheckCircle].map((Icon, index) => (
                <motion.div key={index} className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="inline-flex p-4 rounded-full bg-pink-100 text-pink-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`endometriosisPage.feature${index + 1}Title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`endometriosisPage.feature${index + 1}Desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('endometriosisPage.treatmentsTitle')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('endometriosisPage.treatmentsSubtitle')}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg order-last md:order-first" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img alt="Endometriosis cells illustration under microscope" className="w-full h-full object-cover" src="/images/endometriosis-treatment-microscopic.jpg" />
              </motion.div>
              <motion.div className="bg-white p-8 rounded-lg shadow-lg" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-4">{t('endometriosisPage.modalitiesTitle')}</h3>
                <ul className="space-y-3 text-gray-700">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        <Trans i18nKey={`endometriosisPage.modality${i}`} components={{ strong: <strong /> }} />
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                {t('endometriosisPage.ctaTitle')}
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                {t('endometriosisPage.ctaSubtitle')}
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('endometriosisPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EndometriosisPage;
