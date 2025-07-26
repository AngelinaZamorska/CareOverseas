// This code refines layout spacing, scaling, and sizing to be responsive and user-friendly.
// Ensure Tailwind CSS is properly configured in your project for this to work.

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplets, Dna, TestTube, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import i18n from '@/i18n';

const BloodDiseasesPage = () => {
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

  const conditions = [
    t('bloodDiseasesPage.condition1'),
    t('bloodDiseasesPage.condition2'),
    t('bloodDiseasesPage.condition3'),
    t('bloodDiseasesPage.condition4'),
    t('bloodDiseasesPage.condition5'),
    t('bloodDiseasesPage.condition6'),
  ];

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="text-base leading-relaxed">
      <Helmet>
        <title>{t('bloodDiseasesPage.title')}</title>
        <meta name="description" content={t('bloodDiseasesPage.description')} />
        {/* Additional SEO tags */}
      </Helmet>

      {/* Hero */}
      <section className="relative bg-red-50 py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('bloodDiseasesPage.header')}
          </motion.h1>
          <motion.p
            className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('bloodDiseasesPage.subtitle')}
          </motion.p>
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('bloodDiseasesPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            {t('bloodDiseasesPage.whyUsTitle')}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t('bloodDiseasesPage.whyUsSubtitle')}
          </p>
          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[Users, TestTube, Dna, Droplets].map((Icon, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Icon className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {t(`bloodDiseasesPage.feature${i + 1}Title`)}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t(`bloodDiseasesPage.feature${i + 1}Desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 md:py-20 lg:py-24 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            {t('bloodDiseasesPage.conditionsTitle')}
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              {conditions.map((cond, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-base sm:text-lg">{cond}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/blood.jpg"
                alt="Microscopic blood analysis"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            {t('bloodDiseasesPage.ctaTitle')}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            {t('bloodDiseasesPage.ctaSubtitle')}
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 px-6 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg"
            onClick={handleContactClick}
          >
            {t('bloodDiseasesPage.ctaButton')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BloodDiseasesPage;
