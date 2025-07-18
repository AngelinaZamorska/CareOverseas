import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PersonStanding, Bone, Scan, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const JointReplacementPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('jointReplacementPage.title')}</title>
                <meta name="description" content={t('jointReplacementPage.description')} />
            </Helmet>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-teal-600/10 to-cyan-600/10 overflow-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                                <PersonStanding className="h-12 w-12 text-teal-500" />
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                {t('jointReplacementPage.header')}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                {t('jointReplacementPage.subtitle')}
                            </p>
                            <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-4">
                                <Link to="/#contact">{t('jointReplacementPage.regainMobility')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('jointReplacementPage.whyUsTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('jointReplacementPage.whyUsSubtitle')}</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Bone, title: t('jointReplacementPage.feature1Title'), description: t('jointReplacementPage.feature1Desc') },
                                { icon: PersonStanding, title: t('jointReplacementPage.feature2Title'), description: t('jointReplacementPage.feature2Desc') },
                                { icon: Scan, title: t('jointReplacementPage.feature3Title'), description: t('jointReplacementPage.feature3Desc') },
                                { icon: CheckCircle, title: t('jointReplacementPage.feature4Title'), description: t('jointReplacementPage.feature4Desc') },
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="inline-flex p-4 rounded-full bg-cyan-100 text-cyan-600 mb-4">
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
                <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
                    <div className="container mx-auto px-6">
                         <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('jointReplacementPage.typesTitle')}</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('jointReplacementPage.typesSubtitle')}</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                             <motion.div 
                                className="bg-white p-8 rounded-lg shadow-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-4">{t('jointReplacementPage.proceduresTitle')}</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><Trans i18nKey="jointReplacementPage.procedure1" components={{ strong: <strong /> }} /></span></li>
                                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><Trans i18nKey="jointReplacementPage.procedure2" components={{ strong: <strong /> }} /></span></li>
                                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><Trans i18nKey="jointReplacementPage.procedure3" components={{ strong: <strong /> }} /></span></li>
                                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><Trans i18nKey="jointReplacementPage.procedure4" components={{ strong: <strong /> }} /></span></li>
                                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><Trans i18nKey="jointReplacementPage.procedure5" components={{ strong: <strong /> }} /></span></li>
                                </ul>
                            </motion.div>
                            <motion.div 
                                className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img  alt="An X-ray showing a successful knee joint replacement" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1696118528136-7ce44673d87d" />
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
                            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-12 rounded-2xl shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">{t('jointReplacementPage.ctaTitle')}</h2>
                            <p className="text-lg mb-8 max-w-2xl mx-auto">{t('jointReplacementPage.ctaSubtitle')}</p>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
                                <Link to="/#contact">{t('jointReplacementPage.ctaButton')}</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default JointReplacementPage;