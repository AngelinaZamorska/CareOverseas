import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NewsPage = () => {
  const { t } = useTranslation();

  // Прокрутка наверх при открытии страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const articles = [
  {
    slug: '/news/safe-treatment-abroad',
    titleKey: 'newsPage.articlePreviewTitle',
    descriptionKey: 'newsPage.articlePreviewDescription',
    imageAlt: 'Patient fleeing war',
    imageText: 'Doctor and patient discussing treatment options',
    date: '16.07.2025',
    image: 'https://careoverseas.space/news-war.jpg'
  },
  {
    slug: '/duchenne-muscular-dystrophy',
    titleKey: 'newsPage.duchenneTitle',
    descriptionKey: 'newsPage.duchenneDescription',
    imageAlt: 'Boy in wheelchair with supportive family',
    imageText: 'Hope for Duchenne patients',
    date: '27.07.2025',
    image: 'https://careoverseas.space/news-duchenne.jpg'
  }
];

  return (
    <>
      <Helmet>
        <title>{t('newsPage.metaTitle')} - CareOverseasSpace</title>
        <meta name="description" content={t('newsPage.metaDescription')} />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
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
        </motion.div>

        <div className="mt-16 grid gap-12 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="md:w-1/3">
                <img 
                  className="h-64 w-full object-cover" 
                  alt={article.imageAlt}
                  src="https://careoverseas.space/news-war.jpg"
                />
              </div>
              <div className="p-8 flex flex-col justify-between md:w-2/3">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link to={article.slug}>{t(article.titleKey)}</Link>
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
            </motion.div>
          ))}
          {articles.map((article, index) => (
  <motion.div
    key={article.slug}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row group"
  >
    <div className="md:w-1/3">
      <img 
        className="h-64 w-full object-cover" 
        alt={article.imageAlt}
        src="https://careoverseas.space/news-duchenne.jpg"
      />
    </div>
    <div className="p-8 flex flex-col justify-between md:w-2/3">
      <div>
        <p className="text-sm text-gray-500 mb-1">{article.date}</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          <Link to={article.slug}>{t(article.titleKey)}</Link>
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
  </motion.div>
))}
        </div>
      </div>
    </>
  );
};

export default NewsPage;