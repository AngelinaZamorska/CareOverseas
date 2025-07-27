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

const DuchennePage = () => {
  const { t } = useTranslation();
  const content = t('Duchenne', { returnObjects: true });

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
            variants={sectionVariants}
            custom={0}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold">{content.title}</h1>
            <p className="mt-4 text-lg text-gray-700">{content.subtitle}</p>
          </motion.div>

          {/* Что такое МДД? */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={1}
            className="mt-16"
          >
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-6 h-6 text-blue-500 mr-2" />
              <h2 className="text-2xl font-semibold">{content.sections.about.title}</h2>
            </div>
            {content.sections.about.paragraphs.map((p, idx) => (
              <p key={idx} className="mb-3 text-gray-600">{p}</p>
            ))}
          </motion.section>

          {/* Основные характеристики */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={2}
            className="mt-12"
          >
            <div className="flex items-center mb-4">
              <Map className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-2xl font-semibold">{content.sections.characteristics.title}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    {content.sections.characteristics.table.headers.map((h, i) => (
                      <th key={i} className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.sections.characteristics.table.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 text-gray-800">{row.Characteristic}</td>
                      <td className="px-4 py-2 text-gray-800">{row.Description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Новейшие методы лечения и реабилитации */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={3}
            className="mt-16"
          >
            <div className="flex items-center mb-4">
              <HeartPulse className="w-6 h-6 text-red-500 mr-2" />
              <h2 className="text-2xl font-semibold">{content.sections.treatments.title}</h2>
            </div>

            {/* Генная терапия */}
            <h3 className="text-xl font-semibold mt-6">{content.sections.treatments.geneTherapy.title}</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {content.sections.treatments.geneTherapy.items.map((item, i) => (
                <li key={i} className="text-gray-700">
                  <strong>{item.name}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {/* Медикаментозное лечение */}
            <h3 className="text-xl font-semibold mt-6">{content.sections.treatments.medications.title}</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {content.sections.treatments.medications.items.map((item, i) => (
                <li key={i} className="text-gray-700">
                  <strong>{item.name}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {/* Реабилитация и физиотерапия */}
            <h3 className="text-xl font-semibold mt-6">{content.sections.treatments.rehabilitation.title}</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {content.sections.treatments.rehabilitation.items.map((item, i) => (
                <li key={i} className="text-gray-700">
                  <strong>{item.name}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {/* Экспериментальные подходы */}
            <h3 className="text-xl font-semibold mt-6">{content.sections.treatments.experimental.title}</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {content.sections.treatments.experimental.items.map((item, i) => (
                <li key={i} className="text-gray-700">{item.description}</li>
              ))}
            </ul>

            {/* Таблица сравнения методов */}
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full bg-white shadow rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    {content.sections.treatments.comparisonTable.headers.map((h, i) => (
                      <th key={i} className="px-4 py-2 text-left text-sm font-medium text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.sections.treatments.comparisonTable.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 text-gray-800">{row["Метод лечения"]}</td>
                      <td className="px-4 py-2 text-gray-800">{row["Описание"]}</td>
                      <td className="px-4 py-2 text-gray-800">{row["Преимущества"]}</td>
                      <td className="px-4 py-2 text-gray-800">{row["Ограничения"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Влияние на качество жизни */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={4}
            className="mt-16"
          >
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-2xl font-semibold">{content.sections.impact.title}</h2>
            </div>
            {content.sections.impact.paragraphs.map((p, i) => (
              <p key={i} className="mb-3 text-gray-600">{p}</p>
            ))}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full bg-white shadow rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    {content.sections.impact.table.headers.map((h, i) => (
                      <th key={i} className="px-4 py-2 text-left text-sm font-medium text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.sections.impact.table.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 text-gray-800">{row.Аспект}</td>
                      <td className="px-4 py-2 text-gray-800">{row["Воздействие на детей"]}</td>
                      <td className="px-4 py-2 text-gray-800">{row["Воздействие на семьи"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Медицинский туризм */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={5}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-4">{content.sections.tourism.title}</h2>
            {content.sections.tourism.paragraphs.map((p, i) => (
              <p key={i} className="mb-3 text-gray-600">{p}</p>
            ))}
          </motion.section>

          {/* Примечание */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={6}
            className="mt-12 text-center"
          >
            <p className="italic text-gray-600">{content.sections.note.text}</p>
            <Button as={Link} to="/contact" className="mt-6">
              Связаться с нами
            </Button>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default DuchennePage;