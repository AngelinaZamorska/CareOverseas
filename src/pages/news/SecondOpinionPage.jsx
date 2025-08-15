// src/pages/news/SecondOpinionPage.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileSearch, Globe2, ShieldCheck, Stethoscope, ArrowLeft, HelpCircle, ClipboardList } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

const section = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function SecondOpinionPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const content = t('secondOpinion', { returnObjects: true });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const BASE = 'https://careoverseas.space';
  const PAGE_TAIL = '/news/second-medical-opinion';
  const currentLang = getCurrentLangFromPath(); // en | ru | pl | ar
  const canonicalUrl = `${BASE}/${currentLang}${PAGE_TAIL}`;
  const hreflangs = ['en', 'ru', 'pl', 'ar'];
  const ogLocaleMap = { en: 'en_US', ru: 'ru_RU', pl: 'pl_PL', ar: 'ar_AR' };
  const ogLocale = ogLocaleMap[currentLang] || 'en_US';
  const bcp47 = { en: 'en-US', ru: 'ru-RU', pl: 'pl-PL', ar: 'ar' }[currentLang] || 'en-US';

  const go = (p) => langLink(p);
  const home = () => langLink('/');

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function handleAnchorClick(e, hash = '#contact') {
    e.preventDefault();
    const id = (hash || '').replace('#', '');
    const isHome = /^\/(en|ru|pl|ar)\/?$/.test(window.location.pathname);
    if (isHome) { scrollToId(id); }
    else {
      navigate(`${home()}#${id}`);
      setTimeout(() => scrollToId(id), 120);
    }
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('footer.home') || 'Home', item: `${BASE}/${currentLang}/` },
      { '@type': 'ListItem', position: 2, name: t('newsPage.title') || 'News', item: `${BASE}/${currentLang}/news` },
      { '@type': 'ListItem', position: 3, name: content.title, item: canonicalUrl },
    ],
  };

  const pageLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: content.title,
    description: content.subtitle,
    url: canonicalUrl,
    inLanguage: bcp47,
    image: ['https://careoverseas.space/news-second-opinion.jpg'],
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        {hreflangs.map((hl) => (
          <link key={hl} rel="alternate" href={`${BASE}/${hl}${PAGE_TAIL}`} hreflang={hl} />
        ))}
        <link rel="alternate" href={`${BASE}/en${PAGE_TAIL}`} hreflang="x-default" />

        <title>{content.title} | CareOverseasSpace</title>
        <meta name="description" content={content.subtitle} />
        <meta name="robots" content="index, follow" />

        <meta property="og:site_name" content="CareOverseasSpace" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.subtitle} />
        <meta property="og:image" content="https://careoverseas.space/news-second-opinion.jpg" />
        <meta property="og:locale" content={ogLocale} />
        {Object.entries(ogLocaleMap).filter(([lng]) => lng !== currentLang).map(([lng, loc]) => (
          <meta key={lng} property="og:locale:alternate" content={loc} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.subtitle} />
        <meta name="twitter:image" content="https://careoverseas.space/news-second-opinion.jpg" />

        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(pageLd)}</script>
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Hero */}
          <motion.header
            initial="hidden" animate="visible" custom={0} variants={section}
            className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-10 text-center shadow-xl"
          >
            <Globe2 className="mx-auto mb-4 w-12 h-12 text-white" />
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-white">{content.title}</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">{content.subtitle}</p>

            <Button className="mt-6 bg-white text-blue-600 hover:text-green-600" size="lg" asChild>
              <Link to={`${home()}#contact`} onClick={(e) => handleAnchorClick(e, '#contact')}>
                {t('header.freeConsultation')}
              </Link>
            </Button>
          </motion.header>

          {/* Why popular now */}
          <motion.section initial="hidden" animate="visible" custom={1} variants={section} className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-700">
              <FileSearch className="mr-2" /> {content.sections.why.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {content.sections.why.points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">{content.sections.why.footnote}</p>
          </motion.section>

          {/* Stats table */}
          <motion.section initial="hidden" animate="visible" custom={2} variants={section} className="mt-12 bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-green-700">
              <ClipboardList className="mr-2" /> {content.sections.stats.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-green-200">
                  <tr>
                    {content.sections.stats.table.headers.map((h, i) => (
                      <th key={i} className="px-6 py-3 text-left text-gray-800 uppercase font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.sections.stats.table.rows.map((row, i) => (
                    <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-gray-800 font-semibold">{row.metric}</td>
                      <td className="px-6 py-4 text-gray-700">{row.value}</td>
                      <td className="px-6 py-4 text-gray-700">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* How it works */}
          <motion.section initial="hidden" animate="visible" custom={3} variants={section} className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
              <Stethoscope className="mr-2" /> {content.sections.how.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.sections.how.steps.map((s, i) => (
                <Card key={i} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                  </CardHeader>
                  <CardContent><p className="text-gray-700">{s.desc}</p></CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section initial="hidden" animate="visible" custom={4} variants={section} className="mt-12 bg-gray-100 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-orange-700">
              <HelpCircle className="mr-2" /> {content.sections.faq.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.sections.faq.items.map((f, i) => (
                <Card key={i}>
                  <CardHeader><h3 className="font-semibold">{f.q}</h3></CardHeader>
                  <CardContent><p className="text-gray-700">{f.a}</p></CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section initial="hidden" animate="visible" custom={5} variants={section} className="mt-12 text-center">
            <p className="italic text-gray-600 mb-6">{content.sections.conclusion.text}</p>
            <div className="flex flex-col items-center space-y-4">
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-5 text-lg" asChild>
                <Link to={`${home()}#contact`} onClick={(e) => handleAnchorClick(e, '#contact')}>
                  {content.sections.conclusion.cta}
                </Link>
              </Button>
              <Button asChild variant="link">
                <Link className="inline-flex items-center text-gray-600 hover:text-gray-900" to={go('news')}>
                  <ArrowLeft className="mr-2 w-4 h-4" /> {content.backToNews}
                </Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}