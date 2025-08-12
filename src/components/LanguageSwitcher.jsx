import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const LANGS = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'pl', name: 'Polski',  flag: '🇵🇱' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const current = LANGS.find(l => l.code === lang) || LANGS[0];

  const changeLanguage = (code) => {
    // заменяем первый сегмент пути на выбранный язык, сохраняя остальное
    const rest = location.pathname.replace(/^\/(en|ru|pl|ar)/, '');
    const next = `/${code}${rest || '/'}`.replace(/\/{2,}/g, '/');
    // сохраняем язык, чтобы при F5 не мигало
    try {
      localStorage.setItem('i18nextLng', code);
      document.cookie = `i18next=${code}; path=/; max-age=31536000`;
    } catch {}
    navigate(`${next}${location.search}${location.hash}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>{current.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGS.map(l => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => changeLanguage(l.code)}
            className="flex items-center gap-2"
          >
            <span className="text-lg">{l.flag}</span>
            <span>{l.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
