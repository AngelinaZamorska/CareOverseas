import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Microscope, Dna, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const OncologyPage = () => {
    const { t } = useTranslation();
    const conditionsObj = t('oncologyPage.conditions', { returnObjects: true });

    // Извлекаем только уникальные ключи состояний без `_desc`
    const conditionKeys = Object.keys(conditionsObj)
        .filter((key) => !key.endsWith('_desc'));

    return (
        <>
            <Helmet>
                <title>{t('oncologyPage.meta.title')}</title>
                <meta name="description" content={t('oncologyPage.meta.description')} />
                <meta name="keywords" content={t('oncologyPage.meta.keywords')} />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content={t('oncologyPage.meta.title')} />
                <meta property="og:description" content={t('oncologyPage.meta.description')} />
                <meta property="og:image" content="/oncology-cover.jpg" />
                <meta property="og:url" content="https://careoverseas.space/oncology-treatment" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('oncologyPage.meta.title')} />
                <meta name="twitter:description" content={t('oncologyPage.meta.description')} />
                <meta name="twitter:image" content="/oncology-cover.jpg" />
            </Helmet>

            <div className="bg-white">
                {/* Hero */}
                <section className="relative py-24 bg-gradient-to-br from-blue-600/10 to-teal-600/10 overflow-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                                <Microscope className="h-12 w-12 text-blue-500" />
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">{t('oncologyPage.header')}</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t('oncologyPage.subtitle')}</p>
                            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-lg px-8 py-4">
                                <Link to="/#contact">{t('oncologyPage.getQuote')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Diagnostics */}
                <section className="py-20">
    <div className="container mx-auto px-6">
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Image Left */}
            <div className="flex justify-center">
                <img
                    src="/oncology-diagnostics.jpg"
                    alt="Cancer diagnostics process"
                    className="rounded-xl shadow-lg w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"
                />
            </div>

            {/* Text Right */}
            <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('oncologyPage.diagnosticsTitle')}</h2>
                <p className="text-lg text-gray-600">{t('oncologyPage.diagnosticsSubtitle')}</p>
            </div>
        </motion.div>
    </div>
</section>

                {/* Conditions */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('oncologyPage.conditionsTitle')}</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {conditionKeys.map((key, index) => (
                                <motion.div
                                    key={key}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="flex items-center mb-3">
                                        <Dna className="h-6 w-6 text-teal-500 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-800">{t(`oncologyPage.conditions.${key}`)}</h3>
                                    </div>
                                    <p className="text-gray-600">{t(`oncologyPage.conditions.${key}_desc`)}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-12 rounded-2xl shadow-xl"
                        >
                            <h2 className="text-3xl font-bold mb-4">{t('oncologyPage.ctaTitle')}</h2>
                            <p className="text-lg mb-8 max-w-2xl mx-auto">{t('oncologyPage.ctaSubtitle')}</p>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                                <Link to="/#contact">{t('oncologyPage.ctaButton')}</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OncologyPage;
