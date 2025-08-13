import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://careoverseas.space';
const SUPPORTED = ['en', 'ru', 'pl', 'ar'];
const LOCALES = { en: 'en_US', ru: 'ru_RU', pl: 'pl_PL', ar: 'ar_AR' };

function stripLang(pathname) {
  const m = pathname.match(/^\/(en|ru|pl|ar)(\/.*)?$/);
  return m ? (m[2] || '/') : pathname;
}

export default function Seo({ title, description, image, path }) {
  const { pathname } = useLocation();
  const currentPath = typeof path === 'string' ? path : pathname;

  const m = currentPath.match(/^\/(en|ru|pl|ar)(\/.*)?$/);
  const currentLang = m ? m[1] : 'en';
  const tail = stripLang(currentPath);

  const canonical = `${BASE_URL}/${currentLang}${tail === '/' ? '/' : tail}`;
  const ogLocale = LOCALES[currentLang] || 'en_US';
  const alternates = SUPPORTED.map(lng => ({
    hrefLang: lng,
    href: `${BASE_URL}/${lng}${tail === '/' ? '/' : tail}`,
  }));
  const xDefault = `${BASE_URL}/en${tail === '/' ? '/' : tail}`;
  const ogImage = image || `${BASE_URL}/og-image-v2.jpg`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      <link rel="canonical" href={canonical} />
      {alternates.map(a => (
        <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={a.href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefault} />

      {/* Open Graph / Twitter */}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
