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
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t('bloodDiseasesPage.title')}</title>
        <meta name="description" content={t('bloodDiseasesPage.description')} />
        <meta
          name="keywords"
          content="blood diseases, leukemia treatment, lymphoma care, myeloma therapy, bone marrow transplant, CAR-T therapy"
        />
        <link rel="canonical" href="https://careoverseas.space/blood-diseases-treatment" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('bloodDiseasesPage.title')} />
        <meta property="og:description" content={t('bloodDiseasesPage.subtitle')} />
        <meta property="og:url" content="https://careoverseas.space/blood-diseases-treatment" />
        <meta property="og:image" content="https://careoverseas.space/og-blood-v2.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('bloodDiseasesPage.title')} />
        <meta name="twitter:description" content={t('bloodDiseasesPage.subtitle')} />
        <meta name="twitter:image" content="https://careoverseas.space/og-blood-v2.jpg" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: t('bloodDiseasesPage.title'),
            description: t('bloodDiseasesPage.subtitle'),
            url: 'https://careoverseas.space/blood-diseases-treatment',
            medicalSpecialty: 'Hematology',
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Care Overseas Space',
            },
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-red-50 py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-extrabold text-red-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('bloodDiseasesPage.header')}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('bloodDiseasesPage.subtitle')}
          </motion.p>
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold" onClick={handleContactClick}>
              {t('bloodDiseasesPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">{t('bloodDiseasesPage.whyUsTitle')}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t('bloodDiseasesPage.whyUsSubtitle')}
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: t('bloodDiseasesPage.feature1Title'),
                desc: t('bloodDiseasesPage.feature1Desc'),
              },
              {
                icon: TestTube,
                title: t('bloodDiseasesPage.feature2Title'),
                desc: t('bloodDiseasesPage.feature2Desc'),
              },
              {
                icon: Dna,
                title: t('bloodDiseasesPage.feature3Title'),
                desc: t('bloodDiseasesPage.feature3Desc'),
              },
              {
                icon: Droplets,
                title: t('bloodDiseasesPage.feature4Title'),
                desc: t('bloodDiseasesPage.feature4Desc'),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <item.icon className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t('bloodDiseasesPage.conditionsTitle')}</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* List */}
            <div className="space-y-4 flex flex-col justify-between">
              {conditions.map((cond, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-lg">{cond}</span>
                </motion.div>
              ))}
            </div>
            {/* Image */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg h-full"
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4">{t('bloodDiseasesPage.ctaTitle')}</h2>
          <p className="max-w-2xl mx-auto mb-8">{t('bloodDiseasesPage.ctaSubtitle')}</p>
          <Button
            size="lg"
            className="bg-white text-red-600 px-10 py-4 font-bold"
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