// tools/make-sitemap.js
import fs from 'fs';
import path from 'path';

const CANONICAL = 'https://careoverseas.space';
const LANGS = ['en', 'ru', 'pl', 'ar'];
const DEFAULT_LNG = 'en'; // куда вести x-default

// пути БЕЗ языка
const PATHS = [
  '', // главная
  'news',
  'news/anterior-approach',
  'news/duchenne-muscular-dystrophy',
  'news/safe-treatment-abroad',
  'drg-calculator',
  'oncology',
  'lu-177-psma-therapy',
  'neurosurgery',
  'blood-diseases-treatment',
  'rheumatology-israel',
  'epilepsy-treatment-spain',
  'dendritic-cell-therapy-germany',
  'ivf-in-turkey',
  'cardiac-surgery-germany',
  'endometriosis-leomyoma-treatment',
  'joint-replacement',
  'plastic-surgery-turkey',
  'privacy-policy',
];

const today = new Date().toISOString().slice(0, 10);

function norm(url) {
  // убираем двойные слэши, приводим хвост к / (кроме query/hash)
  return url
    .replace(/([^:]\/)\/+/g, '$1')
    .replace(/\/+(?=\?|#|$)/, '/');
}

// Генерируем <url> ДЛЯ КАЖДОГО языка по одному блоку
function urlEntry(basePath) {
  return LANGS.map((lng) => {
    const selfLoc = norm(`${CANONICAL}/${lng}/${basePath}`);

    const alternates = LANGS
      .map((altLng) => {
        const href = norm(`${CANONICAL}/${altLng}/${basePath}`);
        return `    <xhtml:link rel="alternate" hreflang="${altLng}" href="${href}"/>`;
      })
      .join('\n');

    const xDefaultHref = norm(`${CANONICAL}/${DEFAULT_LNG}/${basePath}`);

    return `
  <url>
    <loc>${selfLoc}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultHref}"/>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>`;
  });
}

const urls = PATHS.flatMap((p) => urlEntry(p)).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');

console.log('✅ sitemap.xml generated at public/sitemap.xml');
