import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // ⬅️ добавили

const CountriesSection = () => {
  const { t, i18n } = useTranslation(); // ⬅️ берём i18n
  const lang = i18n.language.split('-')[0] || 'en';

  const countriesData = [
    {
      country: t('homePage.countryGermany'),
      image: '/germany.jpg',
      specialties: [
        t('homePage.specialtyCardiology'),
        t('homePage.specialtyOncology'),
        t('homePage.specialtyNeurology'),
      ],
    },
    {
      country: t('homePage.countryTurkey'),
      image: '/turkey.jpg',
      specialties: [
        t('homePage.specialtyPlasticSurgery'),
        t('homePage.specialtyHairTransplants'),
        t('homePage.specialtyDentistry'),
      ],
    },
    {
      country: t('homePage.countrySpain'),
      image: '/spain.jpg',
      specialties: [
        t('homePage.specialtyOrthopedics'),
        t('homePage.specialtyRehabilitation'),
        t('homePage.specialtyAestheticMedicine'),
      ],
    },
    {
      country: t('homePage.countryIsrael'),
      image: '/israel.jpg',
      specialties: [
        t('homePage.specialtyOncology'),
        t('homePage.specialtyInnovativeTherapies'),
        t('homePage.specialtyClinicalTrials'),
      ],
    },
    {
      country: t('homePage.countryUkraine'),
      image: '/ukraine.jpg',
      specialties: [
        t('homePage.specialtyCardiology'),
        t('homePage.specialtyEndocrinology'),
        t('homePage.specialtyRehabilitation'),
      ],
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {countriesData.map((country, index) => {
            const isGermany = country.country === t('homePage.countryGermany');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                  {country.image ? (
                    <img
                      src={country.image}
                      alt={country.country}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="320"
                    />
                  ) : (
                    <div className="text-8xl">{country.flag}</div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{country.country}</h3>
                  <div className="space-y-2">
                    {country.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{specialty}</span>
                      </div>
                    ))}
                  </div>

                  {/* ⬇️ Условная кнопка: Германия → новая страница; остальные → скролл к контакту */}
                  {isGermany ? (
                    <Link
                      to={`/${lang}/country/germany`}
                      className="block text-center w-full mt-6 rounded-md py-2.5
                                 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold
                                 hover:from-blue-700 hover:to-green-700"
                      aria-label={t('homePage.learnMore')}
                    >
                      {t('homePage.learnMore')}
                    </Link>
                  ) : (
                    <Button
                      onClick={() =>
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    >
                      {t('homePage.learnMore')}
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
