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
      <div className="bg-white">
        <div className="relative h-96">
          <img  className="absolute inset-0 w-full h-full object-cover" alt="Patient looking out a window towards a peaceful landscape" src="https://images.unsplash.com/photo-1671194763322-01e489e6f674" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-white text-center max-w-4xl px-4"
            >
              {content.title}
            </motion.h1>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {summaryPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
                    {point.icon}
                  </div>
                  <p className="text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>

            <article className="prose prose-lg max-w-none text-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.section1.title}</h2>
              <p>{content.section1.paragraph}</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{content.section2.title}</h2>
              <div className="grid md:grid-cols-3 gap-8 my-8 not-prose">
                <div className="flex flex-col items-center text-center">
                  <img  className="w-full h-48 object-cover rounded-lg mb-4" alt={destinations[0].alt} src="https://images.unsplash.com/photo-1556817643-9b9d1f182599" />
                  <p className="font-semibold">{destinations[0].text}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img  className="w-full h-48 object-cover rounded-lg mb-4" alt={destinations[1].alt} src="https://images.unsplash.com/photo-1583237925560-9a6bdaa24895" />
                  <p className="font-semibold">{destinations[1].text}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img  className="w-full h-48 object-cover rounded-lg mb-4" alt={destinations[2].alt} src="https://images.unsplash.com/photo-1583237925560-9a6bdaa24895" />
                  <p className="font-semibold">{destinations[2].text}</p>
                </div>
              </div>
              <p>{content.section2.paragraph}</p>
            </article>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white p-10 rounded-2xl text-center"
            >
              <h3 className="text-3xl font-bold mb-4">{content.cta.title}</h3>
              <p className="mb-6 max-w-2xl mx-auto">{content.cta.paragraph}</p>
              <Button asChild variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/#contact">{t('header.freeConsultation')}</Link>
              </Button>
            </motion.div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link to="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {content.backToNews}
                </Link>
              </Button>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SafeTreatmentAbroadPage;