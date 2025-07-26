import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Atom, Target, ShieldCheck, CheckCircle, ArrowRight, Microscope, Hotel as Hospital, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Lu177PsmaPage = () => {
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

  const benefits = t('lu177Page.benefits.list', { returnObjects: true }) || [];
  const processSteps = t('lu177Page.process.steps', { returnObjects: true }) || [];
  const leadingClinics = t('lu177Page.clinics.list', { returnObjects: true }) || [];
  const requiredDocs = t('lu177Page.cta.requiredDocs', { returnObjects: true }) || [];

  return (
    <>
      <Helmet>
        <title>{t('lu177Page.meta.title')}</title>
        <meta name="description" content={t('lu177Page.meta.description')} />
        <meta name="keywords" content={t('lu177Page.meta.keywords')} />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600/10 to-green-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Atom className="h-12 w-12 text-blue-500" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">{t('lu177Page.hero.title')}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t('lu177Page.hero.subtitle')}</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg px-8 py-4"
                onClick={handleContactClick}
              >
                {t('lu177Page.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('lu177Page.why.title')}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t('lu177Page.why.points', { returnObjects: true }).map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
                  <p className="text-lg text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('lu177Page.how.title')}</h2>
              <p className="text-lg text-gray-600 mb-4">{t('lu177Page.how.description')}</p>
              <p className="text-lg text-gray-600 font-semibold mb-2">{t('lu177Page.how.effectiveIn')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {t('lu177Page.how.conditions', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <img src="/lu177-treatment.jpg" alt="Lu-177 PSMA treatment" className="rounded-xl shadow-lg w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('lu177Page.benefits.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost & Process & Clinics & CTA Sections same as above but CTA button below */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-2xl shadow-xl text-center"
            >
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">{t('lu177Page.cta.title')}</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">{t('lu177Page.cta.subtitle')}</p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('lu177Page.hero.cta')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Lu177PsmaPage;
