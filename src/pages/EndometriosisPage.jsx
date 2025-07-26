import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HeartPulse, UserX as UserMd, FlaskConical, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const EndometriosisPage = () => {
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

  const features = [
    { icon: UserMd, title: t('endometriosisPage.feature1Title'), desc: t('endometriosisPage.feature1Desc') },
    { icon: FlaskConical, title: t('endometriosisPage.feature2Title'), desc: t('endometriosisPage.feature2Desc') },
    { icon: HeartPulse, title: t('endometriosisPage.feature3Title'), desc: t('endometriosisPage.feature3Desc') },
    { icon: CheckCircle, title: t('endometriosisPage.feature4Title'), desc: t('endometriosisPage.feature4Desc') },
  ];

  const modalities = [1,2,3,4,5];

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{t('endometriosisPage.title')}</title>
        <meta name="description" content={t('endometriosisPage.description')} />
        <meta property="og:title" content={t('endometriosisPage.title')} />
        <meta property="og:description" content={t('endometriosisPage.description')} />
        <meta property="og:image" content="/images/endometriosis-treatment-microscopic.jpg" />
        <meta property="og:url" content="https://careoverseas.space/endometriosis-leomyoma-treatment" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
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
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('endometriosisPage.modalitiesTitle')}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {modalities.map(i => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <Trans i18nKey={`endometriosisPage.modality${i}`} components={{ strong: <strong /> }} />
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
                src="/endometriosis-treatment-microscopic.jpg"
                alt="Endometriosis cells under microscope"
                className="rounded-xl shadow-md w-full h-auto md:h-96 object-cover"
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
