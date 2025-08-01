import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BrainCircuit, Pill, ShieldCheck, UserCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EpilepsySpainPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('epilepsySpainPage.title')}</title>
                <meta name="description" content={t('epilepsySpainPage.description')} />
            </Helmet>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-purple-600/10 to-blue-600/10 overflow-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                                <BrainCircuit className="h-12 w-12 text-purple-600" />
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                {t('epilepsySpainPage.header')}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                {t('epilepsySpainPage.subtitle')}
                            </p>
                            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
                                <Link to="/#contact">{t('epilepsySpainPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Why Spain Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('epilepsySpainPage.whySpainTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('epilepsySpainPage.whySpainSubtitle')}</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: ShieldCheck, title: t('epilepsySpainPage.feature1Title'), description: t('epilepsySpainPage.feature1Desc') },
                                { icon: Pill, title: t('epilepsySpainPage.feature2Title'), description: t('epilepsySpainPage.feature2Desc') },
                                { icon: CheckCircle, title: t('epilepsySpainPage.feature3Title'), description: t('epilepsySpainPage.feature3Desc') },
                                { icon: UserCheck, title: t('epilepsySpainPage.feature4Title'), description: t('epilepsySpainPage.feature4Desc') },
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Image & Content Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div 
                                className="relative h-96 md:h-auto rounded-lg overflow-hidden shadow-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img  alt="A compassionate neurologist discussing treatment options with a patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                            </motion.div>
                             <motion.div 
                                className="space-y-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold text-gray-900">{t('epilepsySpainPage.feature4Title')}</h3>
                                <p className="text-gray-700">{t('epilepsySpainPage.feature4Desc')}</p>
                                 <p className="text-gray-700">Spain's commitment to patient-centric care ensures that every individual receives a tailored treatment plan, leveraging the latest advancements in epilepsy management to improve quality of life.</p>
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
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-2xl shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">{t('epilepsySpainPage.ctaTitle')}</h2>
                            <p className="text-lg mb-8 max-w-2xl mx-auto">{t('epilepsySpainPage.ctaSubtitle')}</p>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
                                <Link to="/#contact">{t('epilepsySpainPage.ctaButton')}</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EpilepsySpainPage;