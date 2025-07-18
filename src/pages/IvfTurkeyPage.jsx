import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Baby, TestTube, Gem, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const IvfTurkeyPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('ivfTurkeyPage.title')}</title>
                <meta name="description" content={t('ivfTurkeyPage.description')} />
            </Helmet>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-rose-600/10 to-amber-600/10 overflow-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                                <Baby className="h-12 w-12 text-rose-500" />
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                {t('ivfTurkeyPage.header')}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                {t('ivfTurkeyPage.subtitle')}
                            </p>
                            <Button asChild size="lg" className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white text-lg px-8 py-4">
                                <Link to="/#contact">{t('ivfTurkeyPage.startJourney')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Why Turkey Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ivfTurkeyPage.whyTurkeyTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('ivfTurkeyPage.whyTurkeySubtitle')}</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: TestTube, title: t('ivfTurkeyPage.feature1Title'), description: t('ivfTurkeyPage.feature1Desc') },
                                { icon: DollarSign, title: t('ivfTurkeyPage.feature2Title'), description: t('ivfTurkeyPage.feature2Desc') },
                                { icon: Gem, title: t('ivfTurkeyPage.feature3Title'), description: t('ivfTurkeyPage.feature3Desc') },
                                { icon: CheckCircle, title: t('ivfTurkeyPage.feature4Title'), description: t('ivfTurkeyPage.feature4Desc') },
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="inline-flex p-4 rounded-full bg-amber-100 text-amber-600 mb-4">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Pricing Section */}
                <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
                    <div className="container mx-auto px-6">
                         <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ivfTurkeyPage.pricingTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('ivfTurkeyPage.pricingSubtitle')}</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <motion.div 
                                className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-rose-500"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-2">{t('ivfTurkeyPage.ivfPackageTitle')}</h3>
                                <p className="text-4xl font-bold text-rose-600 mb-4">{t('ivfTurkeyPage.ivfPackagePrice')}</p>
                                <p className="text-gray-500 mb-4">{t('ivfTurkeyPage.ivfPackagePer')}</p>
                                <p className="text-gray-700">{t('ivfTurkeyPage.ivfPackageDesc')}</p>
                            </motion.div>
                            <motion.div 
                                className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-amber-500"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-2">{t('ivfTurkeyPage.microTeseTitle')}</h3>
                                <p className="text-4xl font-bold text-amber-600 mb-4">{t('ivfTurkeyPage.microTesePrice')}</p>
                                <p className="text-gray-500 mb-4">{t('ivfTurkeyPage.microTesePer')}</p>
                                <p className="text-gray-700">{t('ivfTurkeyPage.microTeseDesc')}</p>
                            </motion.div>
                        </div>
                        <p className="text-center text-gray-600 mt-8">{t('ivfTurkeyPage.note')}</p>
                    </div>
                </section>
                
                 {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-rose-600 to-amber-600 text-white p-12 rounded-2xl shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">{t('ivfTurkeyPage.ctaTitle')}</h2>
                            <p className="text-lg mb-8 max-w-2xl mx-auto">{t('ivfTurkeyPage.ctaSubtitle')}</p>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4">
                                <Link to="/#contact">{t('ivfTurkeyPage.ctaButton')}</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default IvfTurkeyPage;