import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplets, Dna, TestTube, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BloodDiseasesPage = () => {
  const { t } = useTranslation();

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
        <meta name="keywords" content="hematology, blood cancer treatment, leukemia, anemia, hemophilia, stem cell transplant, CareOverseas" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={t('bloodDiseasesPage.title')} />
        <meta property="og:description" content={t('bloodDiseasesPage.description')} />
        <meta property="og:image" content="https://careoverseas.space/og-blood-v2.jpg" />
        <meta property="og:url" content="https://careoverseas.space/#/blood-diseases" />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('bloodDiseasesPage.title')} />
        <meta name="twitter:description" content={t('bloodDiseasesPage.description')} />
        <meta name="twitter:image" content="https://careoverseas.space/og-blood-v2.jpg" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-red-600/10 to-rose-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Droplets className="h-12 w-12 text-red-600" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('bloodDiseasesPage.header')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('bloodDiseasesPage.subtitle')}
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-lg px-8 py-4">
                <Link to="/#contact">
                  {t('bloodDiseasesPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('bloodDiseasesPage.whyUsTitle')}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('bloodDiseasesPage.whyUsSubtitle')}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: t('bloodDiseasesPage.feature1Title'), description: t('bloodDiseasesPage.feature1Desc') },
                { icon: TestTube, title: t('bloodDiseasesPage.feature2Title'), description: t('bloodDiseasesPage.feature2Desc') },
                { icon: Dna, title: t('bloodDiseasesPage.feature3Title'), description: t('bloodDiseasesPage.feature3Desc') },
                { icon: Droplets, title: t('bloodDiseasesPage.feature4Title'), description: t('bloodDiseasesPage.feature4Desc') },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex p-4 rounded-full bg-red-100 text-red-600 mb-4">
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
  className="relative h-96 md:h-auto rounded-lg overflow-hidden shadow-lg"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <img 
    alt="Blood analysis and cancer diagnostics" 
    className="w-full h-full object-cover" 
    src="https://careoverseas.space/og-blood-v2.jpg" 
  />
</motion.div>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900">{t('bloodDiseasesPage.conditionsTitle')}</h3>
                <ul className="space-y-3">
                  {conditions.map((condition, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                      <span className="text-lg text-gray-700">{condition}</span>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-12 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4">{t('bloodDiseasesPage.ctaTitle')}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">{t('bloodDiseasesPage.ctaSubtitle')}</p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Link to="/#contact">{t('bloodDiseasesPage.ctaButton')}</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BloodDiseasesPage;
