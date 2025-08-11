import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Закрываем десктоп-меню при клике вне его
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // Плавный скролл по якорям, если уже на главной
  const handleAnchorClick = (e, hash) => {
    if (location.pathname === '/') {
      const id = (hash || '').replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    } else {
      // если не на главной — позволяем браузеру перейти по /#hash
      setMenuOpen(false);
      setMobileDropdownOpen(false);
    }
  };

  // Классы
  const baseLink = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const activeLink = 'text-blue-600 border-blue-600';
  const defaultLink = 'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-200';

  // Хэдер
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Primary">
        {/* Лого: ссылка на главную и скролл к top */}
        <a
          href="/#top"
          onClick={(e) => handleAnchorClick(e, '#top')}
          className="flex items-center space-x-2 flex-shrink-0 mr-8 focus:outline-none"
          aria-label="CareOverseasSpace Home"
        >
          <motion.img
            src="/android-chrome-192x192.png"
            alt="CareOverseasSpace"
            className="h-10 w-10 rounded-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              CareOverseasSpace
            </span>
          </div>
        </a>

        {/* Десктоп-меню */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex items-center space-x-2">
            {/* Как мы работаем (якорь) */}
            <li>
              <a
                href="/#process"
                onClick={(e) => handleAnchorClick(e, '#process')}
                className={`${baseLink} border-b-2 ${location.hash === '#process' ? activeLink : defaultLink}`}
              >
                {t('header.process')}
              </a>
            </li>

            {/* Калькулятор DRG (отдельная страница) */}
            <li>
              <Link
                to="/drg-calculator"
                className={`${baseLink} border-b-2 ${location.pathname === '/drg-calculator' ? activeLink : defaultLink}`}
              >
                {t('header.drgCalculator')}
              </Link>
            </li>

            {/* Новости (страница) */}
            <li>
              <Link
                to="/news"
                className={`${baseLink} border-b-2 ${location.pathname === '/news' ? activeLink : defaultLink}`}
              >
                {t('header.news')}
              </Link>
            </li>

            {/* Контакты (якорь) */}
            <li>
              <a
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className={`${baseLink} border-b-2 ${location.hash === '#contact' ? activeLink : defaultLink}`}
              >
                {t('header.contact')}
              </a>
            </li>
          </ul>

          {/* Выпадающее меню направлений лечения */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={`${baseLink} inline-flex items-center border-b-2 ${isDropdownOpen ? activeLink : defaultLink}`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {t('header.treatments')}
              <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-80 overflow-y-auto p-1 ring-1 ring-black/5"
                  role="menu"
                >
                  {[
                    { label: t('treatments.oncology'), path: '/oncology' },
                    { label: t('treatments.lu177'), path: '/lu-177-psma-therapy' },
                    { label: t('treatments.neurosurgery'), path: '/neurosurgery' },
                    { label: t('treatments.bloodDiseases'), path: '/blood-diseases-treatment' },
                    { label: t('treatments.rheumatology'), path: '/rheumatology-israel' },
                    { label: t('treatments.epilepsy'), path: '/epilepsy-treatment-spain' },
                    { label: t('treatments.dendritic'), path: '/dendritic-cell-therapy-germany' },
                    { label: t('treatments.ivf'), path: '/ivf-in-turkey' },
                    { label: t('treatments.cardiac'), path: '/cardiac-surgery-germany' },
                    { label: t('treatments.endometriosis'), path: '/endometriosis-leomyoma-treatment' },
                    { label: t('treatments.joint'), path: '/joint-replacement' },
                    { label: t('treatments.plasticSurgery'), path: '/plastic-surgery-turkey' },
                  ].map(({ label, path }) => (
                    <li key={path} role="none">
                      <Link
                        to={path}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        role="menuitem"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <LanguageSwitcher />

          {/* Кнопка — тоже ссылка на якорь, чтобы бот её «видел» */}
          <a
            href="/#contact"
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition"
          >
            {t('header.freeConsultation')}
          </a>
        </div>

        {/* Мобильная кнопка меню */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-gray-800 dark:text-gray-200" /> : <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />}
        </button>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {/* Пункты навигации — ссылки */}
              <a
                href="/#process"
                onClick={(e) => handleAnchorClick(e, '#process')}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {t('header.process')}
              </a>

              <Link
                to="/drg-calculator"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {t('header.drgCalculator')}
              </Link>

              <Link
                to="/news"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {t('header.news')}
              </Link>

              <a
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {t('header.contact')}
              </a>

              {/* Дропдаун на мобилке */}
              <button
                onClick={() => setMobileDropdownOpen((v) => !v)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-expanded={isMobileDropdownOpen}
              >
                <span>{t('header.treatments')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isMobileDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pl-4 max-h-60 overflow-y-auto space-y-1"
                >
                  {[
                    { label: t('treatments.oncology'), path: '/oncology' },
                    { label: t('treatments.lu177'), path: '/lu-177-psma-therapy' },
                    { label: t('treatments.neurosurgery'), path: '/neurosurgery' },
                    { label: t('treatments.bloodDiseases'), path: '/blood-diseases-treatment' },
                    { label: t('treatments.rheumatology'), path: '/rheumatology-israel' },
                    { label: t('treatments.epilepsy'), path: '/epilepsy-treatment-spain' },
                    { label: t('treatments.dendritic'), path: '/dendritic-cell-therapy-germany' },
                    { label: t('treatments.ivf'), path: '/ivf-in-turkey' },
                    { label: t('treatments.cardiac'), path: '/cardiac-surgery-germany' },
                    { label: t('treatments.endometriosis'), path: '/endometriosis-leomyoma-treatment' },
                    { label: t('treatments.joint'), path: '/joint-replacement' },
                    { label: t('treatments.plasticSurgery'), path: '/plastic-surgery-turkey' },
                  ].map(({ label, path }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                      className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}

              <LanguageSwitcher />

              <a
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="mt-2 w-full px-5 py-2 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition"
              >
                {t('header.freeConsultation')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
