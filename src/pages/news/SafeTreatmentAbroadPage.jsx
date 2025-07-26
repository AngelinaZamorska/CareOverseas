import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Map,
  HeartPulse,
  Brain,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SafeTreatmentAbroadPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const content = t('safeTreatmentAbroad', { returnObjects: true });

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

  const summaryPoints = [
    { text: content.summary.conflictGrowth, icon: <ShieldCheck className="h-6 w-6 text-red-500" /> },
    { text: content.summary.safeDestinations, icon: <Map className="h-6 w-6 text-green-500" /> },
    { text: content.summary.stressImpact, icon: <HeartPulse className="h-6 w-6 text-yellow-500" /> },
    { text: content.summary.optimizedSolution, icon: <Brain className="h-6 w-6 text-blue-500" /> },
  ];

  const destinations = [
    {
      text: content.section2.germany,
      image: 'https://images.unsplash.com/photo-1556817643-9b9d1f182599',
      alt: 'Modern hospital building in Germany'
    },
    {
      text: content.section2.turkey,
      image: 'https://images.unsplash.com/photo-1583237925560-9a6bdaa24895',
      alt: 'Surgical room in a Turkish clinic'
    },
    {
      text: content.section2.spain,
      image: 'https://images.unsplash.com/photo-1583237925560-9a6bdaa24895',
      alt: 'Rehabilitation center in Spain'
    }
  ];

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
          alt="Patient looking out a window"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </motion.h1>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {summaryPoints.map((point, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-gray-100 p-3 rounded-full">{point.icon}</div>
                <p className="text-gray-700">{point.text}</p>
              </motion.div>
            ))}
          </div>

          <article className="prose prose-lg max-w-none text-gray-800">
            <h2>{content.section1.title}</h2>
            <p>{content.section1.paragraph}</p>

            <h2 className="mt-12">{content.section2.title}</h2>
          </article>

          <div className="grid md:grid-cols-3 gap-8 my-8">
            {destinations.map((d, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <img
                  src={d.image}
                  alt={d.alt}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="font-semibold">{d.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-700">{content.section2.paragraph}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            {content.cta.title}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            {content.cta.paragraph}
          </p>
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
            <ArrowLeft className="mr-2 h-4 w-4" />
            {content.backToNews}
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default SafeTreatmentAbroadPage;