import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BrainCircuit, Pill, ShieldCheck, UserCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const EpilepsySpainPage = () => {
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
      {/* ✅ SEO + Meta */}
      <Helmet>
        <title>{t('epilepsySpainPage.title')}</title>
        <meta name="description" content={t('epilepsySpainPage.description')} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Epilepsy Treatment in Spain – CareOverseas" />
        <meta property="og:description" content="Access advanced epilepsy care and top neurologists in Spain. Personalized treatment plans and compassionate support for adults and children." />
        <meta property="og:image" content="https://careoverseas.space/images/epilepsy-clinic-cover.jpg" />
        <meta property="og:url" content="https://careoverseas.space/epilepsy-spain" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Epilepsy Treatment in Spain – CareOverseas" />
        <meta name="twitter:description" content="Connect with leading epilepsy centers in Spain. Get expert diagnostics and treatment options for a better quality of life." />
        <meta name="twitter:image" content="https://careoverseas.space/images/epilepsy-clinic-cover.jpg" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-purple-600/10 to-blue-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <BrainCircuit className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('epilepsySpainPage.header')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('epilepsySpainPage.subtitle')}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4"
                onClick={handleContactClick}
              >
                {t('epilepsySpainPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Spain Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('epilepsySpainPage.whySpainTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('epilepsySpainPage.whySpainSubtitle')}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: t('epilepsySpainPage.feature1Title'), description: t('epilepsySpainPage.feature1Desc') },
                { icon: Pill, title: t('epilepsySpainPage.feature2Title'), description: t('epilepsySpainPage.feature2Desc') },
                { icon: CheckCircle, title: t('epilepsySpainPage.feature3Title'), description: t('epilepsySpainPage.feature3Desc') },
                { icon: UserCheck, title: t('epilepsySpainPage.feature4Title'), description: t('epilepsySpainPage.feature4Desc') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
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

        {/* Image & Content Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div >
                <img alt="Modern epilepsy diagnosic in Spain" className="rounded-xl shadow-lg w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]" src="/epilepsy-spain-hero.jpg" />
              </motion.div>
              <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-3xl font-bold text-gray-900">{t('epilepsySpainPage.feature4Title')}</h3>
                <p className="text-gray-700">{t('epilepsySpainPage.feature4Desc')}</p>
                <p className="text-gray-700">
                  Spain's commitment to patient-centric care ensures that every individual receives a tailored treatment plan,
                  leveraging the latest advancements in epilepsy management to improve quality of life.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4">{t('epilepsySpainPage.ctaTitle')}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">{t('epilepsySpainPage.ctaSubtitle')}</p>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('epilepsySpainPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EpilepsySpainPage;
