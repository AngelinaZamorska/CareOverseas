/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://careoverseas.space',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // Языковые версии сайта:
  alternateRefs: [
    { href: 'https://careoverseas.space/en', hreflang: 'en' },
    { href: 'https://careoverseas.space/ru', hreflang: 'ru' },
    { href: 'https://careoverseas.space/pl', hreflang: 'pl' },
    { href: 'https://careoverseas.space/ar', hreflang: 'ar' },
    // опционально: "дефолт" для Google (если главная для разных стран одинакова)
    { href: 'https://careoverseas.space/', hreflang: 'x-default' },
  ],
};