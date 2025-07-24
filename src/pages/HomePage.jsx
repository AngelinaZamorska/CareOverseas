import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Heart, Globe, Shield, Users, MapPin, Phone, Mail, Star,
  ArrowRight, Stethoscope, Award, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CountriesSection from '@/components/home/CountriesSection';
import ContactSection from '@/components/home/ContactSection';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const handleLearnMoreClick = () => {
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ✅ SEO + OG meta tags */}
      <Helmet>
        <title>CareOverseas – Trusted Medical Care Abroad</title>
        <meta name="description" content="Find your trusted doctor and get world-class treatment in top international clinics with CareOverseas." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="CareOverseas – Trusted Medical Care Abroad" />
        <meta property="og:description" content="Find your trusted doctor and get world-class treatment in top international clinics with CareOverseas." />
        <meta property="og:image" content="/og-image-v2.jpg" />
        <meta property="og:url" content="https://careoverseas.space/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <Trans i18nKey="homePage.heroTitle" components={{ 1: <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent" /> }} />
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('homePage.heroSubtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
                >
                  {t('homePage.startTreatment')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={handleLearnMoreClick}
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
                >
                  {t('homePage.learnMore')}
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">{t('homePage.satisfiedPatients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4</div>
                  <div className="text-sm text-gray-600">{t('homePage.partnerCountries')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">{t('homePage.support')}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl">
                {/* ✅ Custom image here */}
                <img 
                  alt="Trusted international healthcare illustration" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg" 
                  src="/home-hero.jpg" 
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of page sections */}
      <section id="services" className="py-20 bg-white">...{/* service section */}</section>
      <CountriesSection />
      <section id="process" className="py-20 bg-white">...{/* process section */}</section>
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">...{/* testimonials section */}</section>
      <ContactSection />
    </>
  );
};

export default HomePage;
