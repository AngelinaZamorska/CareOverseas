import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Activity, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
};

export default function AnteriorApproachPage() {
  const { t } = useTranslation();
  const content = t('anteriorApproach', { returnObjects: true });
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.subtitle} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.subtitle} />
        <meta property="og:image" content={content.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.subtitle} />
        <meta name="twitter:image" content={content.ogImage} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={sectionVariants}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.subtitle}
            </p>
            <Button asChild size="lg" className="bg-blue-600 text-white">
              <Link to="/#contact">{t('header.freeConsultation')}</Link>
            </Button>
          </motion.div>

          {/* Definition */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={1}
            variants={sectionVariants}
            className="mt-16 bg-gray-50 p-8 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Activity className="mr-2 text-blue-600" /> {content.definition.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {content.definition.text}
            </p>
          </motion.section>

          {/* Benefits */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={2}
            variants={sectionVariants}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              {content.benefits.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.benefits.items.map((item, i) => {
                const Icon = { CheckCircle, Clock, Activity, Globe }[item.icon];
                return (
                  <Card key={i} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="flex items-center space-x-3">
                      {Icon && <Icon className="w-6 h-6 text-blue-500" />}
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-snug">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>

          {/* Medical Tourism */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={3}
            variants={sectionVariants}
            className="mt-16 bg-gray-50 p-8 rounded-xl shadow"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="mr-2 text-green-600" /> {content.tourism.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {content.tourism.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.section>

          {/* Journey Steps */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={4}
            variants={sectionVariants}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              {content.journey.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.journey.steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  <div className="text-blue-600 text-xl font-bold">{step.step}</div>
                  <p className="text-gray-700 leading-snug">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={5}
            variants={sectionVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              {content.cta.text}
            </p>
            <Button size="lg" className="bg-blue-600 text-white">
              <Link to="/#contact">{content.cta.button}</Link>
            </Button>
          </motion.section>

          {/* Back to News */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={6}
            variants={sectionVariants}
            className="mt-12 text-center"
          >
            <Button asChild variant="link" className="text-gray-600 hover:text-gray-900">
              <Link to="/news">
                <ArrowLeft className="mr-2" /> {t('header.backToNews')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
