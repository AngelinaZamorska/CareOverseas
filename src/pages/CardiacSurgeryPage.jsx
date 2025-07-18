import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Activity, UserCheck, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardiacSurgeryPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('cardiacPage.title')}</title>
                <meta name="description" content={t('cardiacPage.description')} />
            </Helmet>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-blue-600/10 to-red-600/10 overflow-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                                <Heart className="h-12 w-12 text-red-500" />
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                {t('cardiacPage.header')}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                {t('cardiacPage.subtitle')}
                            </p>
                            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4">
                                <Link to="/#contact">{t('cardiacPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Why Germany Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('cardiacPage.whyGermanyTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('cardiacPage.whyGermanySubtitle')}</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Activity, title: t('cardiacPage.feature1Title'), description: t('cardiacPage.feature1Desc') },
                                { icon: UserCheck, title: t('cardiacPage.feature2Title'), description: t('cardiacPage.feature2Desc') },
                                { icon: Microscope, title: t('cardiacPage.feature3Title'), description: t('cardiacPage.feature3Desc') },
                                { icon: CheckCircle, title: t('cardiacPage.feature4Title'), description: t('cardiacPage.feature4Desc') },
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Treatments Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="container mx-auto px-6">
                         <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('cardiacPage.proceduresTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('cardiacPage.proceduresSubtitle')}</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div 
                                className="bg-white p-8 rounded-lg shadow-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-4">{t('cardiacPage.proceduresOffered')}</h3>
                                <ul className="space-y-3 text-gray-700">
                                    {[t('cardiacPage.procedure1'), t('cardiacPage.procedure2'), t('cardiacPage.procedure3'), t('cardiacPage.procedure4'), t('cardiacPage.procedure5'), t('cardiacPage.procedure6')].map(item => (
                                        <li key={item} className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div 
                                className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img  alt="A surgeon performing minimally invasive cardiac surgery" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551601651-124575cf5969" />
                            </motion.div>
                        </div>
                    </div>
                </section>
                
                 {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-2xl shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">{t('cardiacPage.ctaTitle')}</h2>
                            <p className="text-lg mb-8 max-w-2xl mx-auto">{t('cardiacPage.ctaSubtitle')}</p>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                                <Link to="/#contact">{t('cardiacPage.ctaButton')}</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CardiacSurgeryPage;