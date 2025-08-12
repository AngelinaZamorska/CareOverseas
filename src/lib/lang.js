export const SUPPORTED_LANGS = ['en', 'ru', 'pl', 'ar'];

export function getCurrentLangFromPath(pathname = (typeof window !== 'undefined' ? window.location.pathname : '/en')) {
  const m = pathname.match(/^\/(en|ru|pl|ar)(\/|$)/);
  return m ? m[1] : 'en';
}

export function langLink(path, basePathname) {
  const lang = getCurrentLangFromPath(basePathname);
  const p = String(path).startsWith('/') ? path : `/${path}`;
  return `/${lang}${p}`.replace(/\/{2,}/g, '/');
}
