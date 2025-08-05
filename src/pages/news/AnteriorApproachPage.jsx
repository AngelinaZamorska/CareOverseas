import React, { useEffect } from 'react';
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
 // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Structured Data for MedicalProcedure
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: content.title,
    description: content.subtitle,
    url: currentUrl,
    bodyLocation: "Hip",
    howPerformed: "Anterior surgical approach using specialized retractors and Hana® table",
    procedureType: "Minimally invasive surgery",
    preparation: content.definition.text.split('\n').slice(0, 3),
    followup: content.journey.steps.map(s => s.description),
    inLanguage: "en"
  };

  return (
    <>
      <Helmet>
        <title>{content.title} | CareOverseasSpace</title>
        <meta name="description" content={content.subtitle} />
        <meta name="keywords" content="hip replacement, anterior approach, minimally invasive, medical tourism, fast recovery" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.subtitle} />
        <meta property="og:image" content={content.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.subtitle} />
        <meta name="twitter:image" content={content.ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <Button asChild size="lg" className="bg-white text-blue-600 hover:text-teal-600">
              <Link to="/#contact">{t('header.freeConsultation')}</Link>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-24">
        {/* Definition */}
<section
  aria-labelledby="definition-heading"
  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
>
  {/* Текстовая колонка */}
  <motion.div
    initial="hidden"
    animate="visible"
    custom={1}
    variants={sectionVariants}
    className="max-w-xl"
  >
    <h2
      id="definition-heading"
      className="text-2xl font-bold mb-4 flex items-center text-gray-800"
    >
      <Activity className="mr-2 text-blue-600" /> {content.definition.title}
    </h2>
    <p className="text-gray-700 leading-relaxed">{content.definition.text}</p>
  </motion.div>

  {/* Картинка */}
  <motion.div
    initial="hidden"
    animate="visible"
    custom={2}
    variants={sectionVariants}
    className="flex justify-center"
  >
    <img
      src="https://careoverseas.space/og-image-anterior-hip.jpg"
      alt="Schematic of anterior hip replacement approach"
      className="w-full max-w-md rounded-lg shadow-lg"
      loading="lazy"
    />
  </motion.div>
</section>

        {/* Benefits */}
        <section aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-3xl font-bold text-center mb-12">
            {content.benefits.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.benefits.items.map((item, i) => {
              const Icon = { CheckCircle, Clock, Activity, Globe }[item.icon];
              return (
                <motion.article
                  key={i}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                  variants={sectionVariants}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <CardHeader className="flex items-center px-6 py-4 bg-blue-50">
                    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                    <h3 className="ml-3 text-lg font-semibold text-gray-800">{item.title}</h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Medical Tourism */}
<section
  aria-labelledby="tourism-heading"
  className="bg-gradient-to-r from-green-50 to-green-100 p-12 rounded-2xl"
>
  {/* Section Header */}
  <div className="max-w-2xl mx-auto mb-10 text-center">
    <h2
      id="tourism-heading"
      className="inline-flex items-center justify-center text-3xl font-extrabold text-green-800"
    >
      <Globe className="mr-3 w-8 h-8 text-green-600" />
      {content.tourism.title}
    </h2>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {content.tourism.points.map((point, i) => {
      // split "Title: Detail"
      const [title, ...rest] = point.split(':');
      const detail = rest.join(':').trim();

      // pick an icon per index
      const icons = [CheckCircle, Clock, Activity];
      const Icon = icons[i] || Globe;

      return (
        <div
          key={i}
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 h-full transform hover:scale-105 transition-transform duration-300"
        >
          <Icon className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2 text-center">
            {title}
          </h3>
          <p className="text-gray-700 text-center leading-relaxed">
            {detail}
          </p>
        </div>
      );
    })}
  </div>
</section>

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

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
    {content.journey.steps.map((step, i) => {
      const isRecovery = step.id === 'recovery';
      // split lines only for recovery so we can render a multi-line list
      const lines = isRecovery
        ? step.description.split('\n').filter(l => l.trim())
        : [];

      return (
        <motion.div
          key={step.id}
          initial="hidden"
          animate="visible"
          custom={i + 1}
          variants={sectionVariants}
          className={`
            flex flex-col          /* 1: make each card a column-flex box */
            h-full                 /*    so it stretches to fill the grid row */
            bg-white rounded-2xl shadow-lg p-6
            ${isRecovery ? 'lg:col-span-3' : ''}  /* 2: recovery card spans all 3 columns */
          `}
        >
          {/* Card Header */}
          <div className="text-blue-600 text-xl font-semibold mb-4">
            {step.step}
          </div>

          {/* Card Body */}
          <div className="flex-grow text-gray-700">
            {isRecovery ? (
              <ul className="list-disc list-inside space-y-2">
                {lines.map((line, idx) => (
                  <li key={idx}>{line.replace(/^•\s*/, '')}</li>
                ))}
              </ul>
            ) : (
              <p className="whitespace-pre-line">{step.description}</p>
            )}
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.section>

        {/* Final CTA */}
        <aside className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">{content.cta.text}</h3>
          <Button size="lg" className="bg-white text-blue-600 hover:text-teal-500">
            <Link to="/#contact">{content.cta.button}</Link>
          </Button>
        </aside>

        {/* Back to News */}
        <nav className="text-center">
<Button asChild variant="link">
                <Link className="inline-flex items-center text-gray-600 hover:text-gray-900" to="/news">
                  <ArrowLeft className="mr-2 w-4 h-4" /> {t('safeTreatmentAbroad.backToNews')}
                </Link>
              </Button>
        </nav>
      </main>
    </>
  );
}
