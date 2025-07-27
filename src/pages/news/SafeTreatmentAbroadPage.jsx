import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SafeTreatmentAbroadPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const data = t('safeTreatmentAbroad', { returnObjects: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="prose lg:prose-xl mx-auto py-12">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={data.keywords.join(', ')} />
      </Helmet>

      <h1>{data.title}</h1>
      <p>{data.introduction}</p>

      <h2>{data.growingNeedTitle}</h2>
      <p>{data.growingNeed}</p>

      <h2>{data.stressTitle}</h2>
      {data.stressPoints.map((item, idx) => (
        <blockquote key={idx}>
          <strong>{item.source}:</strong> “{item.quote}”
        </blockquote>
      ))}

      <h2>{data.whyTitle}</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {data.countries.map((c, i) => (
          <motion.div
            key={i}
            className="p-4 border rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="font-semibold">{c.name}</h3>
            <ul className="list-disc list-inside">
              <li><strong>Специализации:</strong> {c.specialties}</li>
              <li><strong>Безопасность:</strong> {c.safety}</li>
              <li><strong>Особенности:</strong> {c.features}</li>
            </ul>
          </motion.div>
        ))}
      </div>

      <h2>{data.howStartTitle}</h2>
      <ul className="list-decimal list-inside">
        {data.howStartPoints.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Заключение</h2>
      <p>{data.conclusion}</p>

      <div className="text-center my-8">
        <Button size="lg" onClick={handleContact}>
          {data.cta.text}
        </Button>
      </div>

      <div className="text-center mt-12">
        <Link to="/news" className="text-blue-600 hover:underline">
          ← Вернуться к новостям
        </Link>
      </div>
    </div>
  );
};

export default SafeTreatmentAbroadPage;