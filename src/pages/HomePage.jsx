import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Heart,
  Globe,
  Shield,
  Users,
  MapPin,
  Star,
  ArrowRight,
  Stethoscope,
  Award,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountriesSection from '@/components/home/CountriesSection';
import ContactSection from '@/components/home/ContactSection';
import DRGCalculator from '@/components/DRGCalculator';
import { useTranslation, Trans } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLearnMoreClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      className="text-base leading-relaxed"
    >
      <Helmet>
        {/* Primary Meta Tags */}
        <title>CareOverseas – Trusted Medical Care Abroad</title>
        <meta name="description" content="Find your trusted doctor and get world-class treatment in top international clinics with CareOverseas." />
        <link rel="canonical" href="https://careoverseas.space/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://careoverseas.space/" />
        <meta property="og:title" content="CareOverseas – Trusted Medical Care Abroad" />
        <meta property="og:description" content="Find your trusted doctor and get world-class treatment in top international clinics with CareOverseas." />
        <meta property="og:image" content="https://careoverseas.space/og-image-v2.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://careoverseas.space/" />
        <meta name="twitter:title" content="CareOverseas – Trusted Medical Care Abroad" />
        <meta name="twitter:description" content="Find your trusted doctor and get world-class treatment in top international clinics with CareOverseas." />
        <meta name="twitter:image" content="https://careoverseas.space/og-image-v2.jpg" />

        {/* Preload & Preconnect */}
        <link rel="preconnect" href="https://careoverseas.space" />
        <link rel="preload" as="image" href="/home-hero.jpg" />

        {/* Structured Data */}
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "CareOverseas",
    url: "https://careoverseas.space",
    logo: "https://careoverseas.space/apple-touch-icon.png",
    description: t('homePage.heroSubtitle'),
    // вместо конкретного адреса указываем зону обслуживания
    areaServed: "Worldwide",
    telephone: "+380984998555",
    sameAs: [
      "https://www.facebook.com/share/1LqwJfEtum/",
      "https://x.com/AngelinaCureDE"
    ]
  })}
</script>
      </Helmet>

      {/* Hero Section */}
      <section id="top" className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <Trans
                  i18nKey="homePage.heroTitle"
                  components={{
                    1: (
                      <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" />
                    ),
                  }}
                />
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('homePage.heroSubtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              >
                {t('homePage.startTreatment')}
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
              <Button
                onClick={handleLearnMoreClick}
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                {t('homePage.learnMore')}
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              {[
                { value: '500+', label: t('homePage.satisfiedPatients'), color: 'text-blue-600' },
                { value: '4', label: t('homePage.partnerCountries'), color: 'text-green-600' },
                { value: '24/7', label: t('homePage.support'), color: 'text-purple-600' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-6 md:p-8 shadow-2xl">
              <img
                src="/home-hero.jpg"
                srcSet="/home-hero-small.jpg 600w, /home-hero.jpg 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Trusted international healthcare illustration"
                loading="eager"
                className="w-full h-auto md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              {/* Icons */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 md:p-4 shadow-lg">
                <Heart className="h-7 w-7 md:h-8 md:w-8 text-red-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-3 md:p-4 shadow-lg">
                <Shield className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('homePage.servicesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('homePage.servicesSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: t('homePage.service1Title'),
                description: t('homePage.service1Desc'),
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: Globe,
                title: t('homePage.service2Title'),
                description: t('homePage.service2Desc'),
                gradient: 'from-green-500 to-green-600',
              },
              {
                icon: Shield,
                title: t('homePage.service3Title'),
                description: t('homePage.service3Desc'),
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                icon: Users,
                title: t('homePage.service4Title'),
                description: t('homePage.service4Desc'),
                gradient: 'from-orange-500 to-orange-600',
              },
              {
                icon: Clock,
                title: t('homePage.service5Title'),
                description: t('homePage.service5Desc'),
                gradient: 'from-red-500 to-red-600',
              },
              {
                icon: Award,
                title: t('homePage.service6Title'),
                description: t('homePage.service6Desc'),
                gradient: 'from-teal-500 to-teal-600',
              },
            ].map((svc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 bg-white"
              >
                <div
                  className={`inline-flex p-4 md:p-5 rounded-xl bg-gradient-to-r ${svc.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svc.icon className="h-8 w-8 md:h-9 md:w-9 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {svc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CountriesSection />
        </div>
      </motion.section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              {t('homePage.processTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('homePage.processSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Stethoscope, title: t('homePage.step1Title'), desc: t('homePage.step1Desc'), color: 'text-blue-600' },
              { icon: Globe, title: t('homePage.step2Title'), desc: t('homePage.step2Desc'), color: 'text-green-600' },
              { icon: MapPin, title: t('homePage.step3Title'), desc: t('homePage.step3Desc'), color: 'text-purple-600' },
              { icon: Users, title: t('homePage.step4Title'), desc: t('homePage.step4Desc'), color: 'text-red-600' },
              { icon: Clock, title: t('homePage.step5Title'), desc: t('homePage.step5Desc'), color: 'text-blue-600' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="flex flex-col items-center	text-center space-y-4 p-6 border rounded-lg"
              >
                <step.icon className={`h-12 w-12 md:h-14 md:w-14 ${step.color}`} />
                <h3 className="text-xl md:text-2xl	font-semibold">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              {t('homePage.testimonialsTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{t('homePage.testimonialsSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex	flex-col items-start	bg-white rounded-2xl	p-6 shadow-lg space-y-4"
              >
                <Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
                <p className="text-gray-700 italic text-sm md:text-base">
                  “{t(`homePage.testimonial${i}Text`)}”
                </p>
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                  {t(`homePage.testimonial${i}Name`)}
                </h4>
                <span className="text-sm text-gray-600">
                  {t(`homePage.testimonial${i}Treatment`)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
