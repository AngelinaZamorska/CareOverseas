import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Microscope, Zap, UserCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const BrainCancerPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 200);
    } else {
      scrollToContact();
    }
  };

  const features = [
    { icon: UserCheck, title: t('neurosurgeryPage.feature1Title'), desc: t('neurosurgeryPage.feature1Desc') },
    { icon: Brain,     title: t('neurosurgeryPage.feature2Title'), desc: t('neurosurgeryPage.feature2Desc') },
    { icon: Zap,       title: t('neurosurgeryPage.feature3Title'), desc: t('neurosurgeryPage.feature3Desc') },
    { icon: Microscope,title: t('neurosurgeryPage.feature4Title'), desc: t('neurosurgeryPage.feature4Desc') },
  ];

  const conditions = [
    t('neurosurgeryPage.condition1'),
    t('neurosurgeryPage.condition2'),
    t('neurosurgeryPage.condition3'),
    t('neurosurgeryPage.condition4'),
    t('neurosurgeryPage.condition5'),
    t('neurosurgeryPage.condition6'),
  ];

  return (
    <>
      <Helmet>
        <title>{t('neurosurgeryPage.title')}</title>
        <meta name="description" content={t('neurosurgeryPage.description')} />
        <meta property="og:title" content={t('neurosurgeryPage.title')} />
        <meta property="og:description" content={t('neurosurgeryPage.description')} />
        <meta property="og:image" content="https://careoverseas.space/brain-surgery.jpg" />
        <meta property="og:url" content="https://careoverseas.space/neurosurgery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('neurosurgeryPage.title')} />
        <meta name="twitter:description" content={t('neurosurgeryPage.description')} />
        <meta name="twitter:image" content="https://careoverseas.space/brain-surgery.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="text-base leading-relaxed">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Brain className="h-12 w-12 text-slate-800" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {t('neurosurgeryPage.header')}
              </h1>
              <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('neurosurgeryPage.subtitle')}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-800 to-gray-700 hover:from-slate-900 hover:to-gray-800 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
                onClick={handleContactClick}
              >
                {t('neurosurgeryPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('neurosurgeryPage.whyUsTitle')}
              </h2>
              <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {t('neurosurgeryPage.whyUsSubtitle')}
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
                  <div className="inline-flex p-4 rounded-full bg-slate-100 text-slate-600 mb-4">
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

        {/* Conditions Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img
                  src="/brain-surgery.jpg"
                  alt="Brain surgery in Germany"
                  className="rounded-lg shadow-md w-full h-auto md:h-96 object-cover"
                />
              </motion.div>
              <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {t('neurosurgeryPage.conditionsTitle')}
                </h3>
                <div className="space-y-4">
                  {conditions.map((cond, i) => (
                    <div key={i} className="flex items-start text-gray-800">
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
        <section className="py-16 bg-gradient-to-r from-slate-800 to-gray-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-10 rounded-2xl shadow-xl bg-gradient-to-r from-slate-800 to-gray-700">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                {t('neurosurgeryPage.ctaTitle')}
              </h2>
              <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">
                {t('neurosurgeryPage.ctaSubtitle')}
              </p>
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
                onClick={handleContactClick}
              >
                {t('neurosurgeryPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Anchor */}
        <div id="contact"></div>
      </div>
    </>
  );
};

export default BrainCancerPage;
