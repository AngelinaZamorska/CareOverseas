import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import content from '@/locales/en/pages/news/safe-treatment-abroad.json';

export default function SafeTreatmentAbroadPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-lg mb-8">
          {t('subtitle')}
        </p>
        <Button size="lg">{t('cta_primary')}</Button>
      </motion.div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">1. {t('sections.1.heading')}</h2>
        <ol className="list-decimal list-inside space-y-2">
          {t('sections.1.points', { returnObjects: true }).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">2. {t('sections.2.heading')}</h2>
        <ul className="list-disc list-inside space-y-2">
          {t('sections.2.points', { returnObjects: true }).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">3. {t('sections.3.heading')}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead>
              <tr>
                {t('sections.3.table.headers', { returnObjects: true }).map((header, idx) => (
                  <th key={idx} className="px-4 py-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t('sections.3.table.rows', { returnObjects: true }).map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-gray-50' : ''}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="border px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">4. {t('sections.4.heading')}</h2>
        <ol className="list-decimal list-inside space-y-2">
          {t('sections.4.points', { returnObjects: true }).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">{t('sections.conclusion.heading')}</h2>
        <p className="mb-6">{t('sections.conclusion.text')}</p>
        <Link to="/#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">
          {t('header.freeConsultation')}
        </Link>
        <button onClick={() => window.history.back()} className="block mt-4 text-sm text-blue-600">
          {content.backToNews}
        </button>
      </section>
    </div>
  );
}
