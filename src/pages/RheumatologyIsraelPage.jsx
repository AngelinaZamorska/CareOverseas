import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bone, Dna, UserCheck, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const RheumatologyIsraelPage = () => {
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
    { icon: UserCheck, title: t('rheumatologyIsraelPage.feature1Title'), desc: t('rheumatologyIsraelPage.feature1Desc') },
    { icon: Dna, title: t('rheumatologyIsraelPage.feature2Title'), desc: t('rheumatologyIsraelPage.feature2Desc') },
    { icon: Microscope, title: t('rheumatologyIsraelPage.feature3Title'), desc: t('rheumatologyIsraelPage.feature3Desc') },
    { icon: CheckCircle, title: t('rheumatologyIsraelPage.feature4Title'), desc: t('rheumatologyIsraelPage.feature4Desc') },
  ];

  const conditions = [
    t('rheumatologyIsraelPage.condition1'),
    t('rheumatologyIsraelPage.condition2'),
    t('rheumatologyIsraelPage.condition3'),
    t('rheumatologyIsraelPage.condition4'),
    t('rheumatologyIsraelPage.condition5'),
    t('rheumatologyIsraelPage.condition6'),
  ];

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{t('rheumatologyIsraelPage.title')}</title>
        <meta name="description" content={t('rheumatologyIsraelPage.description')} />
        <meta property="og:title" content={t('rheumatologyIsraelPage.title')} />
        <meta property="og:description" content={t('rheumatologyIsraelPage.description')} />
        <meta property="og:image" content="/images/rheumatology-israel-cover.jpg" />
        <meta property="og:url" content="https://careoverseas.space/rheumatology-israel" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('rheumatologyIsraelPage.title')} />
        <meta name="twitter:description" content={t('rheumatologyIsraelPage.description')} />
        <meta name="twitter:image" content="/images/rheumatology-israel-cover.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cyan-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <Bone className="h-12 w-12 text-cyan-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('rheumatologyIsraelPage.header')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('rheumatologyIsraelPage.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg"
              onClick={handleContactClick}
            >
              {t('rheumatologyIsraelPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('rheumatologyIsraelPage.whyIsraelTitle')}
          </motion.h2>
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
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/rheumatology-israel-clinic.jpg"
                alt="Rheumatology clinic in Israel"
                className="rounded-xl shadow-md w-full h-auto md:h-96 object-cover"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t('rheumatologyIsraelPage.conditionsTitle')}
              </h3>
              <div className="space-y-4">
                {conditions.map((cond, idx) => (
                  <div key={idx} className="flex items-start text-gray-800">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-base sm:text-lg">{cond}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              {t('rheumatologyIsraelPage.ctaTitle')}
            </h2>
            <p className="text-sm sm:text-lg mb-6">
              {t('rheumatologyIsraelPage.ctaSubtitle')}
            </p>
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('rheumatologyIsraelPage.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      <div id="contact" />
    </div>
  );
};

export default RheumatologyIsraelPage;
