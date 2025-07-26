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
        <title>{t('dendriticCellPage.title')}</title>
        <meta name="description" content={t('dendriticCellPage.description')} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dendritic Cell Immunotherapy – Cancer Treatment in Germany" />
        <meta property="og:description" content={t('dendriticCellPage.ogDescription')} />
        <meta property="og:image" content="/dendritic-cell-vaccine-germany.jpg" />
        <meta property="og:url" content="https://careoverseas.space/immunotherapy-dendritic-cell" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Dna className="h-12 w-12 text-indigo-500" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('dendriticCellPage.header')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('dendriticCellPage.subtitle')}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg px-8 py-4"
                onClick={handleContactClick}
              >
                {t('dendriticCellPage.inquire')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Germany Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('dendriticCellPage.whyGermanyTitle')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('dendriticCellPage.whyGermanySubtitle')}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Beaker, title: t('dendriticCellPage.feature1Title'), description: t('dendriticCellPage.feature1Desc') },
                { icon: ShieldCheck, title: t('dendriticCellPage.feature2Title'), description: t('dendriticCellPage.feature2Desc') },
                { icon: Microscope, title: t('dendriticCellPage.feature3Title'), description: t('dendriticCellPage.feature3Desc') },
                { icon: CheckCircle, title: t('dendriticCellPage.feature4Title'), description: t('dendriticCellPage.feature4Desc') },
              ].map((item, idx) => (
                <motion.div key={idx} className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('dendriticCellPage.pricingTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('dendriticCellPage.pricingSubtitle')}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-indigo-500" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-2">{t('dendriticCellPage.dcVaccineTitle')}</h3>
                <p className="text-4xl font-bold text-indigo-600 mb-4">{t('dendriticCellPage.dcVaccinePrice')}</p>
                <p className="text-gray-500 mb-4">{t('dendriticCellPage.dcVaccinePer')}</p>
                <p className="text-gray-700">{t('dendriticCellPage.dcVaccineDesc')}</p>
              </motion.div>
              <motion.div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-purple-500" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-2">{t('dendriticCellPage.lpTitle')}</h3>
                <p className="text-4xl font-bold text-purple-600 mb-4">{t('dendriticCellPage.lpPrice')}</p>
                <p className="text-gray-500 mb-4">{t('dendriticCellPage.lpPer')}</p>
                <p className="text-gray-700">{t('dendriticCellPage.lpDesc')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lab Image Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div className="rounded-xl overflow-hidden shadow-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <img src="/dendritic-cell-vaccine-germany.jpg" alt="Scientist preparing dendritic cell cancer vaccine in lab" className="rounded-xl shadow-lg w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]" />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-2xl shadow-xl" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-4">{t('dendriticCellPage.ctaTitle')}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">{t('dendriticCellPage.ctaSubtitle')}</p>
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('dendriticCellPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DendriticCellPage;
