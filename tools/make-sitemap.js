// tools/make-sitemap.js
import fs from 'fs';
import path from 'path';

const CANONICAL = 'https://careoverseas.space';
const LANGS = ['en', 'ru', 'pl', 'ar'];

// Список путей БЕЗ ведущего /:lang (язык добавим автоматически)
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

function urlEntry(basePath) {
  // Делаем «группу» URL-ов: <loc> = EN-версия, а внутри — hreflang-альтернативы
  const enLoc = `${CANONICAL}/en/${basePath}`.replace(/\/+$/, '/')   // нормализуем двойные слэши
                                                .replace(/\/+(?=\?|\#|$)/, '/');

  const altLinks = LANGS.map(lng => {
    const href = `${CANONICAL}/${lng}/${basePath}`.replace(/\/+$/, '/')
                                                  .replace(/\/+(?=\?|\#|$)/, '/');
    return `    <xhtml:link rel="alternate" hreflang="${lng}" href="${href}"/>`;
  }).join('\n');

  // x-default укажем на EN-версию
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${enLoc}"/>`;

  return `
  <url>
    <loc>${enLoc}</loc>
${altLinks}
${xDefault}
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>`;
}

const urls = PATHS.map(p => urlEntry(p)).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

// Гарантируем public/, пишем public/sitemap.xml
const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');

console.log('✅ sitemap.xml generated at public/sitemap.xml');
