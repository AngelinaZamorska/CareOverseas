import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, HeartPulse, Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Framer Motion variants for section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const SafeTreatmentAbroadPage = () => {
  const { t } = useTranslation();
  const content = t('safeTreatmentAbroad', { returnObjects: true });
 // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">

          {/* Header Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={sectionVariants}
            className="bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl p-10 text-center shadow-xl"
          >
            <ShieldCheck className="mx-auto mb-4 w-12 h-12 text-white" />
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
              {content.title}
            </h1>
            <p className="text-lg lg:text-xl text-white mb-8">
              {content.subtitle}
            </p>
            <Link to="/#contact">
              <Button className="bg-gradient-to-r from-white to-white text-blue-600 hover:text-teal-600" size="lg">
                {t('header.freeConsultation')}
              </Button>
            </Link>
          </motion.div>

          {/* Section 1 */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={1}
            variants={sectionVariants}
            className="mt-12 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center text-teal-600">
              <Map className="mr-2" /> {content.sections['1'].heading}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {content.sections['1'].points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={2}
            variants={sectionVariants}
            className="mt-12 bg-gray-100 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600">
              <HeartPulse className="mr-2" /> {content.sections['2'].heading}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {content.sections['2'].points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={3}
            variants={sectionVariants}
            className="mt-12 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center text-teal-600">
              <Brain className="mr-2" /> {content.sections['3'].heading}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto bg-white rounded-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-teal-200 to-blue-200">
                  <tr>
                    {content.sections['3'].table.headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-6 py-3 text-left text-gray-800 uppercase tracking-wider font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.sections['3'].table.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={
                        rIdx % 2 !== 0 ? 'bg-gray-50 transition-colors duration-200 hover:bg-teal-50' : 'transition-colors duration-200 hover:bg-teal-50'
                      }
                    >
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-6 py-4 text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={4}
            variants={sectionVariants}
            className="mt-12 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600">
              <Map className="mr-2" /> {content.sections['4'].heading}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {content.sections['4'].points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>
          </motion.section>

           {/* Conclusion & CTA */}
          <motion.section initial="hidden" animate="visible" custom={5} variants={sectionVariants} className="mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center text-teal-600">
              <ShieldCheck className="mr-2" /> {content.sections.conclusion.heading}
            </h2>
            <p className="text-gray-700 mb-6">{content.sections.conclusion.text}</p>
            <div className="flex flex-col items-center">
              <Link to="/#contact">
                <Button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-teal-500 hover:to-blue-600 px-10 py-5 text-2xl" size="xl">
                  {t('header.freeConsultation')}
                </Button>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="mt-2 inline-flex items-center text-xs text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="mr-2 w-4 h-4" /> {content.backToNews}
              </button>
            </div>
          </motion.section>

        </div>
      </div>
    </>
  );
};

export default SafeTreatmentAbroadPage;
