import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Globe, 
  Shield, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Star,
  ArrowRight,
  Stethoscope,
  Award,
  Clock,
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
                <img  alt="Modern hospital with a professional medical team" className="w-full h-96 object-cover rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1580281657702-257584239a55" />
                
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('homePage.servicesTitle')}</h2>
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
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Globe,
                title: t('homePage.service2Title'),
                description: t('homePage.service2Desc'),
                color: "from-green-500 to-green-600"
              },
              {
                icon: Shield,
                title: t('homePage.service3Title'),
                description: t('homePage.service3Desc'),
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Users,
                title: t('homePage.service4Title'),
                description: t('homePage.service4Desc'),
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: Clock,
                title: t('homePage.service5Title'),
                description: t('homePage.service5Desc'),
                color: "from-red-500 to-red-600"
              },
              {
                icon: Award,
                title: t('homePage.service6Title'),
                description: t('homePage.service6Desc'),
                color: "from-teal-500 to-teal-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CountriesSection />

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('homePage.processTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('homePage.processSubtitle')}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-green-600 hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: t('homePage.step1Title'),
                  description: t('homePage.step1Desc'),
                  icon: Phone
                },
                {
                  step: "02",
                  title: t('homePage.step2Title'),
                  description: t('homePage.step2Desc'),
                  icon: MapPin
                },
                {
                  step: "03",
                  title: t('homePage.step3Title'),
                  description: t('homePage.step3Desc'),
                  icon: Globe
                },
                {
                  step: "04",
                  title: t('homePage.step4Title'),
                  description: t('homePage.step4Desc'),
                  icon: Users
                },
                {
                  step: "05",
                  title: t('homePage.step5Title'),
                  description: t('homePage.step5Desc'),
                  icon: Heart
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-8 lg:mb-0`}>
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
                      <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-full shadow-lg mb-8 lg:mb-0">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('homePage.testimonialsTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('homePage.testimonialsSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('homePage.testimonial1Name'),
                treatment: t('homePage.testimonial1Treatment'),
                rating: 5,
                text: t('homePage.testimonial1Text')
              },
              {
                name: t('homePage.testimonial2Name'),
                treatment: t('homePage.testimonial2Treatment'),
                rating: 5,
                text: t('homePage.testimonial2Text')
              },
              {
                name: t('homePage.testimonial3Name'),
                treatment: t('homePage.testimonial3Treatment'),
                rating: 5,
                text: t('homePage.testimonial3Text')
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.treatment}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default HomePage;