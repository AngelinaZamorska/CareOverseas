import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://careoverseas.space';
const LANGS = ['en', 'ru', 'pl', 'ar'];

// маршруты без языкового префикса (хвост пути)
const TAILS = [
  '/', // главная
  '/news',
  '/news/anterior-approach',
  '/news/duchenne-muscular-dystrophy',
  '/news/safe-treatment-abroad',
  '/drg-calculator',
  '/oncology',
  '/lu-177-psma-therapy',
  '/neurosurgery',
  '/blood-diseases-treatment',
  '/rheumatology-israel',
  '/epilepsy-treatment-spain',
  '/dendritic-cell-therapy-germany',
  '/ivf-in-turkey',
  '/cardiac-surgery-germany',
  '/endometriosis-leomyoma-treatment',
  '/joint-replacement',
  '/plastic-surgery-turkey',
  '/privacy-policy'
];

const today = new Date().toISOString().split('T')[0];

function urlBlock(tail) {
  const locs = LANGS.map(lng => `${BASE_URL}/${lng}${tail === '/' ? '/' : tail}`);
  const xDefault = `${BASE_URL}/en${tail === '/' ? '/' : tail}`;

  return LANGS.map((lng, i) => {
    const loc = locs[i];
    const alternates = LANGS.map((hl, j) =>
      `    <xhtml:link rel="alternate" hreflang="${hl}" href="${locs[j]}"/>`
    ).join('\n');
    return `
  <url>
    <loc>${loc}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');
}

const body = TAILS.map(urlBlock).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>`;

const outPath = `${__dirname}/../public/sitemap.xml`;
await mkdir(`${__dirname}/../public`, { recursive: true });
await writeFile(outPath, xml, 'utf8');
console.log('✅ sitemap.xml generated at dist/sitemap.xml');
