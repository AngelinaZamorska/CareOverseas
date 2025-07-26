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
    t('rheumatologyIsraelPage.condition1'),
    t('rheumatologyIsraelPage.condition2'),
    t('rheumatologyIsraelPage.condition3'),
    t('rheumatologyIsraelPage.condition4'),
    t('rheumatologyIsraelPage.condition5'),
    t('rheumatologyIsraelPage.condition6'),
  ];

  return (
    <>
      <Helmet>
        <title>{t('rheumatologyIsraelPage.title')}</title>
        <meta name="description" content={t('rheumatologyIsraelPage.description')} />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-cyan-600/10 to-sky-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Bone className="h-12 w-12 text-cyan-600" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('rheumatologyIsraelPage.header')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('rheumatologyIsraelPage.subtitle')}
              </p>
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('rheumatologyIsraelPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Israel Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('rheumatologyIsraelPage.whyIsraelTitle')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('rheumatologyIsraelPage.whyIsraelSubtitle')}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: UserCheck, title: t('rheumatologyIsraelPage.feature1Title'), description: t('rheumatologyIsraelPage.feature1Desc') },
                { icon: Dna, title: t('rheumatologyIsraelPage.feature2Title'), description: t('rheumatologyIsraelPage.feature2Desc') },
                { icon: Microscope, title: t('rheumatologyIsraelPage.feature3Title'), description: t('rheumatologyIsraelPage.feature3Desc') },
                { icon: Bone, title: t('rheumatologyIsraelPage.feature4Title'), description: t('rheumatologyIsraelPage.feature4Desc') },
              ].map((item, idx) => (
                <motion.div key={idx} className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div className="inline-flex p-4 rounded-full bg-cyan-100 text-cyan-600 mb-4">
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
            className="rounded-lg overflow-hidden shadow-md max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/joint-pain.jpg"
              alt="Joint pain"
              className="w-full h-auto object-cover"
            />
          </motion.div>
              <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-3xl font-bold text-gray-900">{t('rheumatologyIsraelPage.conditionsTitle')}</h3>
                <ul className="space-y-3">
                  {conditions.map((cond, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                      <span className="text-lg text-gray-700">{cond}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white p-12 rounded-2xl shadow-xl" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-4">{t('rheumatologyIsraelPage.ctaTitle')}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">{t('rheumatologyIsraelPage.ctaSubtitle')}</p>
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('rheumatologyIsraelPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RheumatologyIsraelPage;