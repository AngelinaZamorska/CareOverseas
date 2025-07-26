import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplets, Dna, TestTube, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const BloodDiseasesPage = () => {
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
    t('bloodDiseasesPage.condition1'),
    t('bloodDiseasesPage.condition2'),
    t('bloodDiseasesPage.condition3'),
    t('bloodDiseasesPage.condition4'),
    t('bloodDiseasesPage.condition5'),
    t('bloodDiseasesPage.condition6'),
  ];

  return (
    <>
      <Helmet>
        <title>{t('bloodDiseasesPage.title')}</title>
        <meta name="description" content={t('bloodDiseasesPage.description')} />
        <meta name="keywords" content="{t('bloodDiseasesPage.keywords')}" />
        <link rel="canonical" href="https://careoverseas.space/blood-diseases-treatment" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t('bloodDiseasesPage.title')} />
        <meta property="og:description" content={t('bloodDiseasesPage.description')} />
        <meta property="og:url" content="https://careoverseas.space/blood-diseases-treatment" />
        <meta property="og:image" content="https://careoverseas.space/og-blood-v2.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('bloodDiseasesPage.title')} />
        <meta name="twitter:description" content={t('bloodDiseasesPage.description')} />
        <meta name="twitter:image" content="https://careoverseas.space/og-blood-v2.jpg" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": t('bloodDiseasesPage.title'),
            "description": t('bloodDiseasesPage.description'),
            "url": "https://careoverseas.space/blood-diseases-treatment",
            "medicalSpecialty": "Hematology",
            "provider": {
              "@type": "MedicalBusiness",
              "name": "Care Overseas Space"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/blood-hero.jpg')" }}>
          <div className="absolute inset-0 bg-red-900 opacity-60"></div>
          <div className="container relative mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
                {t('bloodDiseasesPage.header')}
              </h1>
              <p className="text-xl text-red-200 max-w-2xl mx-auto mb-8">
                {t('bloodDiseasesPage.subtitle')}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-10 py-4 font-bold"
                onClick={handleContactClick}
              >
                {t('bloodDiseasesPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8">
            {[
              { icon: Users, label: t('bloodDiseasesPage.trust1') },
              { icon: Droplets, label: t('bloodDiseasesPage.trust2') },
              { icon: Dna, label: t('bloodDiseasesPage.trust3') }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <item.icon className="h-6 w-6 text-red-600" />
                <span className="text-gray-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t('bloodDiseasesPage.whyUsTitle')}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: t('bloodDiseasesPage.feature1Title'), description: t('bloodDiseasesPage.feature1Desc') },
                { icon: TestTube, title: t('bloodDiseasesPage.feature2Title'), description: t('bloodDiseasesPage.feature2Desc') },
                { icon: Dna, title: t('bloodDiseasesPage.feature3Title'), description: t('bloodDiseasesPage.feature3Desc') },
                { icon: Droplets, title: t('bloodDiseasesPage.feature4Title'), description: t('bloodDiseasesPage.feature4Desc') }
              ].map((item, idx) => (
                <motion.div key={idx} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div className="inline-flex p-3 bg-red-100 rounded-full mb-4">
                    <item.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div className="rounded-2xl overflow-hidden shadow-lg" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src="/blood.jpg" alt="Microscopic blood analysis" className="w-full h-auto object-cover" />
              </motion.div>
              <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-3xl font-bold text-gray-900">{t('bloodDiseasesPage.conditionsTitle')}</h3>
                <ul className="space-y-3 list-inside list-disc text-gray-800">
                  {conditions.map((cond, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{cond}</span>
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
            <motion.div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-12 rounded-3xl shadow-xl max-w-2xl mx-auto" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">{t('bloodDiseasesPage.ctaTitle')}</h2>
              <p className="text-lg mb-6 leading-relaxed">{t('bloodDiseasesPage.ctaSubtitle')}</p>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-10 py-4" onClick={handleContactClick}>
                {t('bloodDiseasesPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BloodDiseasesPage;
