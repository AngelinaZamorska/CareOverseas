import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English',  flag: '🇬🇧' },
  { code: 'ru', name: 'Русский',  flag: '🇷🇺' },
  { code: 'pl', name: 'Polski',   flag: '🇵🇱' },
  { code: 'ar', name: 'العربية',  flag: '🇸🇦' },
];

const SUPPORTED = languages.map(l => l.code);
const RTL = ['ar'];

/**
 * Меняет только первый сегмент пути на новый язык.
 * Примеры:
 *  - /ru/oncology  -> /en/oncology
 *  - /en           -> /ar
 *  - /             -> /en
 *  - /oncology     -> /pl/oncology  (если вдруг зашли без префикса)
 */
function buildPathWithLang(pathname, newLang) {
  const re = /^\/(en|ru|pl|ar)(?=\/|$)/;
  if (re.test(pathname)) {
    return pathname.replace(re, `/${newLang}`);
  }
  // нет языкового префикса — добавляем
  // уберём возможный двойной слэш
  return `/${newLang}${pathname.startsWith('/') ? '' : '/'}${pathname}`.replace(/\/{2,}/g, '/');
}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const params = useParams();           // { lang?: 'en'|'ru'|'pl'|'ar' }
  const location = useLocation();       // pathname, search, hash
  const navigate = useNavigate();

  const currentLang = useMemo(() => {
    const fromUrl = params.lang;
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    // fallback на текущий i18n или en
    return SUPPORTED.includes(i18n.language) ? i18n.language : 'en';
  }, [params.lang, i18n.language]);

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  const changeLanguage = (lng) => {
    // 1) навигируем на новый URL с другим префиксом языка
    const newPath = buildPathWithLang(location.pathname, lng);
    navigate(`${newPath}${location.search}${location.hash}`, { replace: false });

    // 2) синхронизируем i18n сразу (на случай, если App синкнет только по URL)
    if (i18n.language !== lng) i18n.changeLanguage(lng);

    // 3) корректно проставим направление текста для арабского
    const dir = RTL.includes(lng) ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center gap-2"
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
