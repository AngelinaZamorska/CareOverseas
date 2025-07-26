import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Atom, Target, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Lu177PsmaPage = () => {
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

  const benefits = t('lu177Page.benefits.list', { returnObjects: true }) || [];
  const steps = t('lu177Page.process.steps', { returnObjects: true }) || [];
  const clinics = t('lu177Page.clinics.list', { returnObjects: true }) || [];
  const docs = t('lu177Page.cta.requiredDocs', { returnObjects: true }) || [];

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{t('lu177Page.meta.title')}</title>
        <meta name="description" content={t('lu177Page.meta.description')} />
        <meta name="keywords" content={t('lu177Page.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <Atom className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('lu177Page.hero.title')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('lu177Page.hero.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('lu177Page.hero.cta')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('lu177Page.why.title')}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t('lu177Page.why.points', { returnObjects: true }).map((point, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <p className="text-gray-700 text-base sm:text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('lu177Page.process.title')}
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              {steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
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
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('lu177Page.benefits.title')}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{b.title}</h3>
                  <p className="text-gray-600">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{t('lu177Page.cta.title')}</h2>
            <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">{t('lu177Page.cta.subtitle')}</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('lu177Page.cta.button')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      <div id="contact" />
    </div>
  );
};

export default Lu177PsmaPage;
