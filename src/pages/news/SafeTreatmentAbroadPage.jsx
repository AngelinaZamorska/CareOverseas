import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, HeartPulse, Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SafeTreatmentAbroadPage = () => {
  const { t } = useTranslation();

  const content = t('safeTreatmentAbroad', { returnObjects: true });

  const summaryPoints = [
    { text: content.summary.conflictGrowth, icon: <ShieldCheck className="h-6 w-6 text-red-500" /> },
    { text: content.summary.safeDestinations, icon: <Map className="h-6 w-6 text-green-500" /> },
    { text: content.summary.stressImpact, icon: <HeartPulse className="h-6 w-6 text-yellow-500" /> },
    { text: content.summary.optimizedSolution, icon: <Brain className="h-6 w-6 text-blue-500" /> },
  ];
  
  const destinations = [
    { text: content.section2.germany, alt: "Modern hospital building in Germany", description: "A modern hospital in Germany with a glass facade" },
    { text: content.section2.turkey, alt: "Surgical room in a Turkish clinic", description: "A state-of-the-art surgical room in Turkey" },
    { text: content.section2.spain, alt: "Rehabilitation center with a pool in Spain", description: "A sunny rehabilitation center in Spain with a swimming pool" },
  ];

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.keywords} />
      </Helmet>
      return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.keywords} />
      </Helmet>

        {/* Hero */}
        <section className="relative h-[24rem] md:h-[28rem] lg:h-[32rem]">
          <img
            src="https://images.unsplash.com/photo-1671194763322-01e489e6f674"
            alt="Patient in serene hospital setting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {content.title}
            </motion.h1>
          </div>
        </section>
  
        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <p className="text-gray-700">{content.introduction}</p>
          </div>
        </section>
  
        {/* Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl grid md:grid-cols-2 gap-8">
            {content.highlights.map(({ icon, text }, i) => {
              const Icon = iconMap[icon];
              return (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="bg-white shadow p-3 rounded-full">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-800">{text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
  
        {/* Benefits Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">{content.benefits.title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    {content.benefits.table.headers.map((h, idx) => (
                      <th key={idx} className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.benefits.table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {content.benefits.table.headers.map((key, cIdx) => (
                        <td key={cIdx} className="px-6 py-4 text-gray-800 text-sm">
                          {row[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
  
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">{content.howItWorks.title}</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-800">
              {content.howItWorks.steps.map((step, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{step.title}</span>: {step.description}
                </li>
              ))}
            </ol>
          </div>
        </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">{content.cta.title}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">{content.cta.paragraph}</p>
          <Button
            size="lg"
            className="bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg"
            onClick={handleContactClick}
          >
            {t('header.freeConsultation')} <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Button>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-12 bg-white text-center">
        <Button asChild variant="outline">
          <Link to="/news">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content.backToNews}
          </Link>
        </Button>
      </section>
    </div>
  );
    </>
  );
};

export default SafeTreatmentAbroadPage;