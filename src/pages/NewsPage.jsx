import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const NewsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
    slug: '/news/anterior-approach',
    titleKey: 'newsPage.anteriorApproachTitle',
    descriptionKey: 'newsPage.anteriorApproachDescription',
    imageAlt: 'Illustration of anterior hip replacement approach',
    image: 'https://careoverseas.space/og-image-anterior-hip.jpg',
    date: '01.08.2025'
  },

    {
      slug: '/news/duchenne-muscular-dystrophy',
      titleKey: 'newsPage.duchenneTitle',
      descriptionKey: 'newsPage.duchenneDescription',
      imageAlt: 'Boy in wheelchair with supportive family',
      image: 'https://careoverseas.space/news-duchenne.jpg',
      date: '27.07.2025'
    },
    {
      slug: '/news/safe-treatment-abroad',
      titleKey: 'newsPage.articlePreviewTitle',
      descriptionKey: 'newsPage.articlePreviewDescription',
      imageAlt: 'Patient fleeing war',
      image: 'https://careoverseas.space/news-war.jpg',
      date: '16.07.2025'
    }
    
  ];

  return (
    <>
      <Helmet>
        <title>{t('newsPage.metaTitle')} - CareOverseasSpace</title>
        <meta name="description" content={t('newsPage.metaDescription')} />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full mb-6">
            <Newspaper className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t('newsPage.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('newsPage.subtitle')}
          </p>
        </motion.header>

        <section className="mt-16 grid gap-12 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="md:w-1/3">
                <img
                  className="h-64 w-full object-cover"
                  src={article.image}
                  alt={article.imageAlt}
                />
              </div>

              <div className="p-8 flex flex-col justify-between md:w-2/3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link to={article.slug}>
                      {t(article.titleKey)}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {t(article.descriptionKey)}
                  </p>
                </div>
                <Button asChild className="self-start">
                  <Link to={article.slug}>
                    {t('newsPage.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </>
  );
};

export default NewsPage;