import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Atom, CheckCircle, ArrowRight, Microscope, Target, ShieldCheck, Hospital, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Lu177PsmaPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 200);
    } else scrollToContact();
  };

  const benefits = t('lu177Page.benefits.list', { returnObjects: true }) || [];
  const steps = t('lu177Page.process.steps', { returnObjects: true }) || [];
  const clinics = t('lu177Page.clinics.list', { returnObjects: true }) || [];
  const docs = t('lu177Page.cta.requiredDocs', { returnObjects: true }) || [];

  return (
    <>
      <Helmet>
        <title>{t('lu177Page.meta.title')}</title>
        <meta name="description" content={t('lu177Page.meta.description')} />
        <meta property="og:title" content={t('lu177Page.meta.title')} />
        <meta property="og:description" content={t('lu177Page.meta.description')} />
        <meta property="og:image" content="/images/lu177-cover.jpg" />
        <meta property="og:url" content="https://careoverseas.space/lu177-psma" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('lu177Page.meta.title')} />
        <meta name="twitter:description" content={t('lu177Page.meta.description')} />
        <meta name="twitter:image" content="/images/lu177-cover.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="text-base leading-relaxed">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Atom className="h-12 w-12 text-blue-600" />
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

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {t('lu177Page.benefits.title')}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((b,i)=>(
                <motion.div key={i} className="flex items-start space-x-4" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
                  <ShieldCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600 flex-1">
                    {b}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {t('lu177Page.process.title')}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s,i)=>(
                <motion.div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-shadow" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
                  <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {t('lu177Page.clinics.title')}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinics.map((c,i)=>(
                <motion.div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
                  <Hospital className="h-6 w-6 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">{c.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{c.location}</p>
                  <a href={c.website} className="text-blue-600 hover:underline text-sm">{t('lu177Page.clinics.visit')}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Docs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {t('lu177Page.cta.docsTitle')}
              </h2>
            </motion.div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {docs.map((d,i)=><li key={i}>{d}</li>)}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ scale:0.95 }} whileInView={{ scale:1 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="p-10 rounded-2xl shadow-xl">
              <Phone className="h-12 w-12 mx-auto mb-4 text-white" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                {t('lu177Page.cta.title')}
              </h2>
              <p className="text-sm sm:text-lg mb-6 max-w-2xl mx-auto">
                {t('lu177Page.cta.subtitle')}
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold" onClick={handleContactClick}>
                {t('lu177Page.cta.button')}
              </Button>
            </motion.div>
          </div>
        </section>

        <div id="contact"></div>
      </div>
    </>
  );
};

export default Lu177PsmaPage;
