import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Map,
  AlertTriangle,
  HeartPulse,
  Brain,
  Users,
  Star,
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

  // Key benefits & risk mitigation
  const summaryPoints = [
    { icon: <AlertTriangle className="h-6 w-6 text-red-600" />, text: content.summary.avoidScams },
    { icon: <ShieldCheck className="h-6 w-6 text-blue-600" />, text: content.summary.licensedClinics },
    { icon: <Users className="h-6 w-6 text-green-600" />, text: content.summary.localSupport },
    { icon: <Brain className="h-6 w-6 text-purple-600" />, text: content.summary.personalizedPlan }
  ];

  // Customer testimonials
  const testimonials = [
    { name: 'Anna K.', feedback: content.testimonials[0] },
    { name: 'Michael S.', feedback: content.testimonials[1] },
  ];

  const destinations = [
    { text: content.destinations.germany, image: '/images/germany-clinic.jpg', alt: 'Germany clinic exterior' },
    { text: content.destinations.turkey, image: '/images/turkey-operating-room.jpg', alt: 'Turkey operating room' },
    { text: content.destinations.spain, image: '/images/spain-rehab.jpg', alt: 'Spain rehabilitation center' },
  ];

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.keywords.join(', ')} />
        <link rel="canonical" href="https://careoverseas.space/news/safe-treatment-abroad" />
        {/* FAQ Schema for SEO */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": content.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}</script>
      </Helmet>

      {/* Hero with urgent tone */}
      <section className="relative h-96 md:h-[28rem] lg:h-[32rem]">
        <img
          src="/images/hero-safe-treatment.jpg"
          alt={content.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </motion.h1>
        </div>
      </section>

      {/* Summary & Risk Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">{content.summaryTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {summaryPoints.map((pt, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-white p-3 rounded-full shadow-md">{pt.icon}</div>
                <p className="text-gray-700">{pt.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Destinations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{content.section2.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((d, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <img src={d.image} alt={d.alt} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{d.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6">{content.testimonialsTitle}</h2>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Star className="mx-auto mb-4 h-8 w-8 text-yellow-500" />
                <blockquote className="text-gray-800 italic mb-4">“{t.feedback}”</blockquote>
                <cite className="block font-semibold">— {t.name}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">{content.cta.title}</h2>
        <p className="mb-8 max-w-2xl mx-auto">{content.cta.paragraph}</p>
        <Button onClick={handleContactClick} size="lg" className="bg-white text-blue-600 px-8 py-4 font-bold">
          {t('header.freeConsultation')} <ArrowRight className="ml-2 inline h-5 w-5" />
        </Button>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{content.faqTitle}</h2>
          <div className="space-y-4">
            {content.faqs.map((faq, idx) => (
              <details key={idx} className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-12 bg-gray-50 text-center">
        <Button asChild variant="outline">
          <Link to="/news">
            <ArrowLeft className="mr-2 inline h-4 w-4" /> {content.backToNews}
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default SafeTreatmentAbroadPage;
