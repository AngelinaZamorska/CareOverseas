import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Atom,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';
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

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 200);
    } else {
      scrollToContact();
    }
  };

  const benefits = t('lu177Page.benefits.list', { returnObjects: true }) || [];
  const whyPoints = t('lu177Page.why.points', { returnObjects: true }) || [];
  const conditions = t('lu177Page.how.conditions', { returnObjects: true }) || [];
  const docs = t('lu177Page.cta.requiredDocs', { returnObjects: true }) || [];

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{t('lu177Page.meta.title')}</title>
        <meta name="description" content={t('lu177Page.meta.description')} />
        <meta name="keywords" content={t('lu177Page.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('lu177Page.hero.title')}
          </motion.h1>
          <motion.p
            className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('lu177Page.hero.subtitle')}
          </motion.p>
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white"
              onClick={handleContactClick}
            >
              {t('lu177Page.hero.cta')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            {t('lu177Page.why.title')}
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {whyPoints.map((point, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('lu177Page.how.title')}</h2>
            <p className="text-gray-700 mb-4">{t('lu177Page.how.description')}</p>
            <p className="text-gray-700 font-semibold mb-2">{t('lu177Page.how.effectiveIn')}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {conditions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img
              src="/lu177-treatment.jpg"
              alt="Lu-177 PSMA treatment"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            {t('lu177Page.benefits.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-10 w-10 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            {t('lu177Page.cta.title')}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            {t('lu177Page.cta.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg"
            onClick={handleContactClick}
          >
            {t('lu177Page.hero.cta')} <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Lu177PsmaPage;