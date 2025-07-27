import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Dna, Beaker, ShieldCheck, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const DendriticCellPage = () => {
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
    { icon: Beaker, title: t('dendriticCellPage.feature1Title'), desc: t('dendriticCellPage.feature1Desc') },
    { icon: ShieldCheck, title: t('dendriticCellPage.feature2Title'), desc: t('dendriticCellPage.feature2Desc') },
    { icon: Microscope, title: t('dendriticCellPage.feature3Title'), desc: t('dendriticCellPage.feature3Desc') },
    { icon: CheckCircle, title: t('dendriticCellPage.feature4Title'), desc: t('dendriticCellPage.feature4Desc') },
  ];

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{t('dendriticCellPage.title')}</title>
        <meta name="description" content={t('dendriticCellPage.description')} />
        <meta property="og:title" content={t('dendriticCellPage.title')} />
        <meta property="og:description" content={t('dendriticCellPage.ogDescription')} />
        <meta property="og:image" content="https://careoverseas.space/dendritic-cell-vaccine-germany.jpg" />
        <meta property="og:url" content="https://careoverseas.space/dendritic-cell-therapy-germany" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('dendriticCellPage.title')} />
        <meta name="twitter:description" content={t('dendriticCellPage.ogDescription')} />
        <meta name="twitter:image" content="https://careoverseas.space/dendritic-cell-vaccine-germany.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
              <Dna className="h-12 w-12 text-indigo-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t('dendriticCellPage.header')}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('dendriticCellPage.subtitle')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('dendriticCellPage.inquire')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Germany Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('dendriticCellPage.whyGermanyTitle')}
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('dendriticCellPage.whyGermanySubtitle')}
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
                <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
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

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('dendriticCellPage.pricingTitle')}
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('dendriticCellPage.pricingSubtitle')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-t-4 border-indigo-500" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold mb-2">
                {t('dendriticCellPage.dcVaccineTitle')}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4">
                {t('dendriticCellPage.dcVaccinePrice')}
              </p>
              <p className="text-gray-500 mb-4">
                {t('dendriticCellPage.dcVaccinePer')}
              </p>
              <p className="text-gray-700">
                {t('dendriticCellPage.dcVaccineDesc')}
              </p>
            </motion.div>
            <motion.div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-t-4 border-purple-500" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold mb-2">
                {t('dendriticCellPage.lpTitle')}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
                {t('dendriticCellPage.lpPrice')}
              </p>
              <p className="text-gray-500 mb-4">
                {t('dendriticCellPage.lpPer')}
              </p>
              <p className="text-gray-700">
                {t('dendriticCellPage.lpDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-xl w-full max-w-4xl"
    >
      <img
        src="/dendritic-cell-vaccine-germany.jpg"
        alt="Scientist preparing dendritic cell vaccine in lab"
        className="w-full h-auto object-cover"
      />
    </motion.div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-2xl shadow-xl inline-block max-w-2xl mx-auto" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">
              {t('dendriticCellPage.ctaTitle')}
            </h2>
            <p className="text-lg mb-8">
              {t('dendriticCellPage.ctaSubtitle')}
            </p>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold" onClick={handleContactClick}>
              {t('dendriticCellPage.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      <div id="contact"></div>
    </div>
  );
};

export default DendriticCellPage;

