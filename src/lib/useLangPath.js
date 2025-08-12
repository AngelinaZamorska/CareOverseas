import { useParams } from 'react-router-dom';

export default function useLangPath() {
  const { lang } = useParams();
  const current = ['en','ru','pl','ar'].includes(lang) ? lang : 'en';
  return function l(path = '/') {
    const p = String(path).startsWith('/') ? path : `/${path}`;
    return `/${current}${p}`.replace(/\/{2,}/g, '/');
  };
}
