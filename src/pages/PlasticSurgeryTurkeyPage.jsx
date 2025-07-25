import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Droplet, Smile, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const PlasticSurgeryTurkeyPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

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
      setTimeout(scrollToContact, 150);
    } else {
      scrollToContact();
    }
  };

  const procedures = [
        {
            category: t('plasticSurgeryPage.hairTransplantTitle'),
            icon: <Droplet className="h-6 w-6 text-blue-500" />,
            items: [
                { name: t('plasticSurgeryPage.fue'), price: '$3,550' },
                { name: t('plasticSurgeryPage.standardHair'), price: '$3,700' },
                { name: t('plasticSurgeryPage.beard'), price: '$3,850' },
            ],
        },
        {
            category: t('plasticSurgeryPage.facialSurgeryTitle'),
            icon: <Sparkles className="h-6 w-6 text-pink-500" />,
            items: [
                { name: t('plasticSurgeryPage.facelift'), price: '$8,800' },
                { name: t('plasticSurgeryPage.rhinoplasty'), price: '$5,150' },
                { name: t('plasticSurgeryPage.blepharoplasty'), price: '$3,300' },
            ],
        },
        {
            category: t('plasticSurgeryPage.bodyContouringTitle'),
            icon: <Scissors className="h-6 w-6 text-purple-500" />,
            items: [
                { name: t('plasticSurgeryPage.liposuction'), price: '$4,800' },
                { name: t('plasticSurgeryPage.abdominoplasty'), price: '$6,800' },
                { name: t('plasticSurgeryPage.breastAugmentation'), price: '$6,900' },
            ],
        },
        {
            category: t('plasticSurgeryPage.dentalAestheticsTitle'),
            icon: <Smile className="h-6 w-6 text-teal-500" />,
            items: [
                { name: t('plasticSurgeryPage.whitening'), price: '$400' },
                { name: t('plasticSurgeryPage.braces'), price: '$1,900' },
                { name: t('plasticSurgeryPage.veneers'), price: '$2,450' },
            ],
        },
        {
            category: t('plasticSurgeryPage.skinTreatmentsTitle'),
            icon: <Sparkles className="h-6 w-6 text-yellow-500" />,
            items: [
                { name: t('plasticSurgeryPage.botox'), price: '$400' },
                { name: t('plasticSurgeryPage.laserScar'), price: '$350' },
                { name: t('plasticSurgeryPage.moleRemoval'), price: '$500' },
            ],
        },
    ];


  return (
    <>
      <Helmet>
        <title>{t('plasticSurgeryPage.title')}</title>
        <meta name="description" content={t('plasticSurgeryPage.description')} />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-pink-600/10 to-fuchsia-600/10 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                <Sparkles className="h-12 w-12 text-fuchsia-500" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {t('plasticSurgeryPage.header')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t('plasticSurgeryPage.subtitle')}
              </p>
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-700 hover:to-fuchsia-700 text-white text-lg px-8 py-4" onClick={handleContactClick}>
                {t('plasticSurgeryPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {procedures.map((proc, index) => (
                <motion.div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white rounded-full shadow-md mr-4">{proc.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-800">{proc.category}</h2>
                  </div>
                  <ul className="space-y-4">
                    {proc.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-full text-sm">from {item.price}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4">{t('plasticSurgeryPage.ctaTitle')}</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">{t('plasticSurgeryPage.ctaSubtitle')}</p>
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleContactClick}>
                {t('plasticSurgeryPage.ctaButton')}
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlasticSurgeryTurkeyPage;
