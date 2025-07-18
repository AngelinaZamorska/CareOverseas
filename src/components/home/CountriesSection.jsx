import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const CountriesSection = () => {
  const { t } = useTranslation();

  const countriesData = [
    {
      country: t('homePage.countryGermany'),
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/a37c75ca-3289-43e6-a1b3-17edfced284f/69422b84d1cfcf78d3601d376234bad7.png",
      specialties: [t('homePage.specialtyCardiology'), t('homePage.specialtyOncology'), t('homePage.specialtyNeurology')],
    },
    {
      country: t('homePage.countryTurkey'),
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/a37c75ca-3289-43e6-a1b3-17edfced284f/6f6b44e74839d1250b371ff4001f1763.png",
      specialties: [t('homePage.specialtyPlasticSurgery'), t('homePage.specialtyHairTransplants'), t('homePage.specialtyDentistry')],
    },
    {
      country: t('homePage.countrySpain'),
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/a37c75ca-3289-43e6-a1b3-17edfced284f/ae02324803d3880b7c779269cb2d6355.png",
      specialties: [t('homePage.specialtyOrthopedics'), t('homePage.specialtyRehabilitation'), t('homePage.specialtyAestheticMedicine')],
    },
    {
      country: t('homePage.countryIsrael'),
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/a37c75ca-3289-43e6-a1b3-17edfced284f/56c5fbbd4a0fd8daa1cdee1d157fa676.png",
      specialties: [t('homePage.specialtyOncology'), t('homePage.specialtyInnovativeTherapies'), t('homePage.specialtyClinicalTrials')],
    }
  ];

  return (
    <section id="countries" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('homePage.countriesTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('homePage.countriesSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countriesData.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                {country.image ? (
                  <img src={country.image} alt={country.country} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <div className="text-8xl">{country.flag}</div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{country.country}</h3>
                <div className="space-y-2">
                  {country.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">{specialty}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  {t('homePage.learnMore')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;