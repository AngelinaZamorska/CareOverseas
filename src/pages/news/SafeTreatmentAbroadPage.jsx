import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, HeartPulse, Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SafeTreatmentAbroadPage = () => {
  const { t } = useTranslation();
  const content = t('safeTreatmentAbroad', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <ShieldCheck className="mr-2" /> {content.title}
          </h1>
          <p className="text-lg mb-8">{content.subtitle}</p>
          <Link to="/#contact">
            <Button size="lg">{t('header.freeConsultation')}</Button>
          </Link>
        </motion.div>

        {/* Section 1 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Map className="mr-2" /> {content.sections['1'].heading}
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {content.sections['1'].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ol>
        </section>

        {/* Section 2 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <HeartPulse className="mr-2" /> {content.sections['2'].heading}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {content.sections['2'].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Brain className="mr-2" /> {content.sections['3'].heading}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded-lg">
              <thead>
                <tr>
                  {content.sections['3'].table.headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-2">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.sections['3'].table.rows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 !== 0 ? 'bg-gray-50' : ''}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="border px-4 py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Map className="mr-2" /> {content.sections['4'].heading}
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {content.sections['4'].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ol>
        </section>

        {/* Conclusion */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <ShieldCheck className="mr-2" /> {content.sections.conclusion.heading}
          </h2>
          <p className="mb-6">{content.sections.conclusion.text}</p>
          <Link to="/#contact">
            <Button size="lg">{t('header.freeConsultation')}</Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="mt-4 inline-flex items-center text-sm text-blue-600"
          >
            <ArrowLeft className="mr-1" /> {content.backToNews}
          </button>
        </section>
      </div>
    </>
  );
};

export default SafeTreatmentAbroadPage;
