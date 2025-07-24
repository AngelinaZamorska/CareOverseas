import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Atom, Target, ShieldCheck, CheckCircle, ArrowRight, Microscope, Hotel as Hospital, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Lu177PsmaPage = () => {
    const { t } = useTranslation();

    const benefits = t('lu177Page.benefits.list', { returnObjects: true }) || [];
    const processSteps = t('lu177Page.process.steps', { returnObjects: true }) || [];
    const leadingClinics = t('lu177Page.clinics.list', { returnObjects: true }) || [];
    const requiredDocs = t('lu177Page.cta.requiredDocs', { returnObjects: true }) || [];

    return (
        <>
            <Helmet>
                <title>{t('lu177Page.meta.title')}</title>
                <meta name="description" content={t('lu177Page.meta.description')} />
                <meta name="keywords" content={t('lu177Page.meta.keywords')} />
            </Helmet>

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-blue-600/10 to-green-600/10 overflow-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                                <Atom className="h-12 w-12 text-blue-500" />
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                                {t('lu177Page.hero.title')}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                {t('lu177Page.hero.subtitle')}
                            </p>
                            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg px-8 py-4">
                                <Link to="/#contact">{t('lu177Page.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('lu177Page.why.title')}</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {t('lu177Page.why.points', { returnObjects: true }).map((point, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 p-6 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
                                    <p className="text-lg text-gray-700">{point}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('lu177Page.how.title')}</h2>
                            <p className="text-lg text-gray-600 mb-4">{t('lu177Page.how.description')}</p>
                            <p className="text-lg text-gray-600 font-semibold mb-2">{t('lu177Page.how.effectiveIn')}</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {t('lu177Page.how.conditions', { returnObjects: true }).map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg">
<img
                  src="/lu177-treatment.jpg"
                  alt="Lu-177 PSMA treatment on medical imaging"
                  className="w-full h-auto rounded-lg"
                />                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('lu177Page.benefits.title')}</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Costs Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('lu177Page.costs.title')}</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                                {t('lu177Page.costs.countries', { returnObjects: true }).map((country, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="bg-white p-6 rounded-lg shadow-md"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <p className="text-2xl mb-2">{country.flag}</p>
                                        <h3 className="text-xl font-semibold text-gray-800">{country.name}</h3>
                                        <p className="text-2xl font-bold text-blue-600">{country.price}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="text-center text-gray-600">
                                <p className="font-semibold">{t('lu177Page.costs.dependsOnTitle')}</p>
                                <p>{t('lu177Page.costs.dependsOn', { returnObjects: true }).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('lu177Page.process.title')}</h2>
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                            {processSteps.map((step, index) => (
                                <motion.div 
                                    key={index} 
                                    className="relative flex items-center mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`flex-1 text-right pr-8 ${index % 2 !== 0 ? 'md:hidden' : ''}`}>
                                        {index % 2 === 0 && <p className="text-lg text-gray-700">{step}</p>}
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 bg-white border-4 border-blue-500 rounded-full w-8 h-8 z-10 flex items-center justify-center font-bold text-blue-500">{index + 1}</div>
                                    <div className={`flex-1 pl-8 ${index % 2 === 0 ? 'md:hidden' : ''}`}>
                                        {index % 2 !== 0 && <p className="text-lg text-gray-700">{step}</p>}
                                    </div>
                                    <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                                        <p className="text-lg text-gray-700">{step}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-lg text-gray-600 mt-8">{t('lu177Page.process.support')}</p>
                    </div>
                </section>

                {/* Clinics Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">{t('lu177Page.clinics.title')}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {leadingClinics.map((clinic, index) => (
                                <motion.div 
                                    key={index} 
                                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Hospital className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-800">{clinic.name}</h3>
                                    <p className="text-gray-500">{clinic.location}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-md text-gray-600 mt-8 max-w-3xl mx-auto">{t('lu177Page.clinics.guidelines')}</p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-12 rounded-2xl shadow-xl text-center"
                        >
                            <Phone className="h-12 w-12 mx-auto mb-4" />
                            <h2 className="text-3xl font-bold mb-4">{t('lu177Page.cta.title')}</h2>
                            <p className="text-lg mb-6 max-w-2xl mx-auto">{t('lu177Page.cta.subtitle')}</p>
                            <div className="max-w-md mx-auto bg-white/20 p-4 rounded-lg mb-8">
                                <h4 className="font-semibold mb-2">{t('lu177Page.cta.sendDocs')}</h4>
                                <ul className="space-y-1 text-left">
                                    {requiredDocs.map((doc, index) => (
                                        <li key={index} className="flex items-center">
                                            <FileText className="h-5 w-5 mr-2 flex-shrink-0" />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 mb-6">
                                {t('lu177Page.cta.features', { returnObjects: true }).map((feature, index) => (
                                    <div key={index} className="flex items-center bg-white/20 px-3 py-1 rounded-full text-sm">
                                        <CheckCircle className="h-4 w-4 mr-2 text-green-300" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                                <Link to="/#contact">{t('lu177Page.hero.cta')}</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Lu177PsmaPage;