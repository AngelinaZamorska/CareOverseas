import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, HeartPulse, Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
  const content = t('duchenne', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">

          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={sectionVariants}
            className="bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl p-10 text-center shadow-xl"
          >
            <Brain className="mx-auto mb-4 w-12 h-12 text-white" />
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
              {content.title}
            </h1>
            <p className="text-lg lg:text-xl text-white mb-8">
              {content.subtitle}
            </p>
            <Link to="/#contact">
              <Button
                className="bg-gradient-to-r from-white to-white text-blue-600 hover:text-teal-600"
                size="lg"
              >
                {t('header.freeConsultation')}
              </Button>
            </Link>
          </motion.div>

          {/* Section 1: Что такое МДД? */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={1}
            variants={sectionVariants}
            className="mt-12 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-600">
              <ShieldCheck className="mr-2" />
              {content.sections.about.title}
            </h2>
            <div className="space-y-3 text-gray-700">
              {content.sections.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.section>

          {/* Section 2: Основные характеристики */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={2}
            variants={sectionVariants}
            className="mt-12 bg-gray-100 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center text-green-600">
              <Map className="mr-2" />
              {content.sections.characteristics.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-green-200">
                  <tr>
                    {content.sections.characteristics.table.headers.map((h, i) => (
                      <th
                        key={i}
                        className="px-6 py-3 text-left text-gray-800 uppercase font-medium"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.sections.characteristics.table.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2
                          ? 'bg-gray-50'
                          : 'bg-white'
                      }
                    >
                      <td className="px-6 py-4 text-gray-700">{row.characteristic}</td>
                      <td className="px-6 py-4 text-gray-700">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 3: Методы лечения и реабилитация */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={3}
            variants={sectionVariants}
            className="mt-12 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center text-red-600">
              <HeartPulse className="mr-2" />
              {content.sections.treatments.title}
            </h2>

            {/* Генная терапия */}
            <h3 className="text-xl font-semibold mt-4">{content.sections.treatments.geneTherapy.title}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              {content.sections.treatments.geneTherapy.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.name}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {/* Медикаментозное лечение */}
            <h3 className="text-xl font-semibold mt-6">{content.sections.treatments.medications.title}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              {content.sections.treatments.medications.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.name}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {/* Реабилитация */}
            <h3 className="text-xl font-semibold mt-6">{content.sections.treatments.rehabilitation.title}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              {content.sections.treatments.rehabilitation.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.name}:</strong> {item.description}
                </li>
              ))}
            </ul>

            {/* Экспериментальные */}
            <h3 className="text-xl font-semibold mt-6">{content.sections.treatments.experimental.title}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              {content.sections.treatments.experimental.items.map((item, i) => (
                <li key={i}>{item.description}</li>
              ))}
            </ul>

            {/* Таблица сравнения */}
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-red-200">
                  <tr>
                    {content.sections.treatments.comparisonTable.headers.map((h, i) => (
                      <th
                        key={i}
                        className="px-6 py-3 text-left text-gray-800 uppercase font-medium"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.sections.treatments.comparisonTable.rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 ? 'bg-gray-50' : 'bg-white'}
                    >
                       <td className="px-6 py-4 text-gray-700">{row.method}</td>
      <td className="px-6 py-4 text-gray-700">{row.description}</td>
      <td className="px-6 py-4 text-gray-700">{row.advantages}</td>
      <td className="px-6 py-4 text-gray-700">{row.limitations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

{/* Section 4: Влияние на качество жизни */}
<motion.section
  initial="hidden"
  animate="visible"
  custom={4}
  variants={sectionVariants}
  className="mt-12 bg-gray-100 p-8 rounded-xl shadow-lg"
>
  <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-600">
    <Brain className="mr-2" />
    {content.sections.impact.title}
  </h2>
  <p className="text-gray-700 mb-6">{content.sections.impact.intro}</p>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg overflow-hidden">
      <thead className="bg-purple-200">
        <tr>
          {content.sections.impact.table.headers.map((h, i) => (
            <th
              key={i}
              className="px-6 py-3 text-left text-gray-800 uppercase font-medium"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.sections.impact.table.rows.map((row, idx) => (
          <tr key={idx} className={idx % 2 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-6 py-4 text-gray-700 font-semibold">{row.aspect}</td>
            <td className="px-6 py-4 text-gray-700">{row.impactOnChildren}</td>
            <td className="px-6 py-4 text-gray-700">{row.impactOnFamilies}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="mt-8 space-y-4 text-gray-700 prose prose-purple max-w-none">
    {content.sections.impact.paragraphs.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </div>
</motion.section>


{/* Section 5: Медицинский туризм */}
<motion.section
  initial="hidden"
  animate="visible"
  custom={5}
  variants={sectionVariants}
  className="mt-12 bg-white p-8 rounded-xl shadow-lg"
>
  <h2 className="text-2xl font-bold mb-8 text-center text-blue-700">
    {content.sections.tourism.title}
  </h2>
  <div className="grid gap-6 md:grid-cols-2">
    {content.sections.tourism.benefits.map((benefit, i) => {
      const Icon = { Brain, ShieldCheck, HeartPulse, Map }[benefit.icon];
      return (
        <Card key={i} className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-3">
            {Icon && <Icon className="text-blue-500 w-6 h-6" />}
            <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{benefit.description}</p>
          </CardContent>
        </Card>
      );
    })}
  </div>
</motion.section>

          {/* Conclusion & CTA */}
          <motion.section
            initial="hidden"
            animate="visible"
            custom={6}
            variants={sectionVariants}
            className="mt-12 text-center"
          >
            <p className="italic text-gray-600 mb-6">{content.sections.note.text}</p>
            <div className="flex flex-col items-center space-y-4">
              <Link to="/#contact">
                <Button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-5 text-lg">
                  {t('header.freeConsultation')}
                </Button>
              </Link>
              <Button asChild variant="link">
                <Link className="inline-flex items-center text-gray-600 hover:text-gray-900" to="/news">
                  <ArrowLeft className="mr-2 w-4 h-4" /> {content.backToNews}
                </Link>
              </Button>
            </div>
          </motion.section>

        </div>
      </div>
    </>
  );
};

export default DuchennePage;