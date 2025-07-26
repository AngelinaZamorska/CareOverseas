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
        <meta name="keywords" content="нейрохирургия, опухоль головного мозга, глиобластома, менингиома, микрохирургия, протонная терапия, лечение в Германии, CareOverseas" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-600/10 to-gray-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Brain className="h-12 w-12 text-slate-800" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('neurosurgeryPage.header')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('neurosurgeryPage.subtitle')}
              </p>
              <Button size="lg" className="bg-gradient-to-r from-slate-800 to-gray-700 hover:from-slate-900 hover:to-gray-800 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('neurosurgeryPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('neurosurgeryPage.whyUsTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('neurosurgeryPage.whyUsSubtitle')}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: UserCheck, title: t('neurosurgeryPage.feature1Title'), description: t('neurosurgeryPage.feature1Desc') },
                { icon: Brain, title: t('neurosurgeryPage.feature2Title'), description: t('neurosurgeryPage.feature2Desc') },
                { icon: Zap, title: t('neurosurgeryPage.feature3Title'), description: t('neurosurgeryPage.feature3Desc') },
                { icon: Microscope, title: t('neurosurgeryPage.feature4Title'), description: t('neurosurgeryPage.feature4Desc') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex p-4 rounded-full bg-slate-100 text-slate-600 mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  alt="Patient with MRI of the brain"
                  className="rounded-xl shadow-lg w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"
                  src="/brain-surgery.jpg"
                />
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900">{t('neurosurgeryPage.conditionsTitle')}</h3>
                <ul className="space-y-3">
                  {conditions.map((condition, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                      <span className="text-lg text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800 to-gray-700 text-white p-12 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4">{t('neurosurgeryPage.ctaTitle')}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">{t('neurosurgeryPage.ctaSubtitle')}</p>
              <Button size="lg" variant="secondary" className="bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('neurosurgeryPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrainCancerPage;
