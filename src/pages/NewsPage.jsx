import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NewsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 200);
    } else {
      scrollToContact();
    }
  };

  const articles = [
    {
      slug: '/news/safe-treatment-abroad',
      titleKey: 'newsPage.articlePreviewTitle',
      descriptionKey: 'newsPage.articlePreviewDescription',
      imageAlt: 'Patient fleeing war',
      imageSrc: '/news-war.jpg',
    },
    // Добавь дополнительные статьи по необходимости
  ];

  return (
    <div className="text-base leading-relaxed">
      <Helmet>
        <title>{t('newsPage.metaTitle')}</title>
        <meta name="description" content={t('newsPage.metaDescription')} />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-blue-50 py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('newsPage.title')}
          </motion.h1>
          <motion.p
            className="text-md sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('newsPage.subtitle')}
          </motion.p>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t('newsPage.ctaButton')} <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            {t('newsPage.articlesTitle')}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t('newsPage.articlesSubtitle')}
          </p>
          <div className="grid gap-12 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                className="bg-gray-50 rounded-xl shadow hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="md:w-1/3">
                  <img
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-700">
                      <Link to={article.slug} className="hover:underline">
                        {t(article.titleKey)}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{t(article.descriptionKey)}</p>
                  </div>
                  <Button asChild className="self-start">
                    <Link to={article.slug}>
                      {t('newsPage.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            {t('newsPage.ctaTitle')}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            {t('newsPage.ctaSubtitle')}
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 font-bold text-base md:text-lg"
            onClick={handleContactClick}
          >
            {t('newsPage.ctaButton')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;