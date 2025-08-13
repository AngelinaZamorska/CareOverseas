import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { langLink, getCurrentLangFromPath } from '@/lib/lang';

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // закрывать дропдаун по клику вне
  useEffect(() => {
    const onDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  const lang = getCurrentLangFromPath();
  const isHome = /^\/(en|ru|pl|ar)\/?$/.test(
    typeof window !== 'undefined' ? window.location.pathname : '/en'
  );

  const go = (p) => langLink(p);
  const home = () => langLink('/');

  // ждём, пока элемент появится в DOM, затем скроллим
  function waitForEl(id, timeout = 3000) {
    const start = performance.now();
    return new Promise((resolve) => {
      const loop = () => {
        const el = document.getElementById(id);
        if (el) return resolve(el);
        if (performance.now() - start > timeout) return resolve(null);
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    });
  }

  async function smoothScrollToId(id) {
    const el = await waitForEl(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // единый обработчик для ссылок-якорей
  async function handleAnchorClick(e, hash = '#top') {
    e.preventDefault();
    const id = (hash || '').replace('#', '') || 'top';

    if (isHome) {
      // уже на главной — просто плавный скролл
      await smoothScrollToId(id);
    } else {
      // не на главной — сначала навигируем на /:lang/, сразу с hash
      navigate(`${home()}#${id}`);
      // затем дожидаемся появления секции и скроллим
      await smoothScrollToId(id);
    }

    setMenuOpen(false);
    setMobileDropdownOpen(false);
  }

  const baseLink =
    'inline-flex items-center h-10 px-4 rounded-lg font-medium leading-none whitespace-nowrap transition-colors';
  const defaultLink =
    'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-200';

  // список направлений (для десктопа и мобилки)
  const treatmentLinks = [
    ['oncology', 'treatments.oncology'],
    ['lu-177-psma-therapy', 'treatments.lu177'],
    ['neurosurgery', 'treatments.neurosurgery'],
    ['blood-diseases-treatment', 'treatments.bloodDiseases'],
    ['rheumatology-israel', 'treatments.rheumatology'],
    ['epilepsy-treatment-spain', 'treatments.epilepsy'],
    ['dendritic-cell-therapy-germany', 'treatments.dendritic'],
    ['ivf-in-turkey', 'treatments.ivf'],
    ['cardiac-surgery-germany', 'treatments.cardiac'],
    ['endometriosis-leomyoma-treatment', 'treatments.endometriosis'],
    ['joint-replacement', 'treatments.joint'],
    ['plastic-surgery-turkey', 'treatments.plasticSurgery'],
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Primary"
      >
        {/* Лого → главная + #top */}
        <Link
          to={`${home()}#top`}
          onClick={(e) => handleAnchorClick(e, '#top')}
          className="flex items-center space-x-2 flex-shrink-0 mr-8"
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
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            CareOverseasSpace
          </span>
        </Link>

        {/* Десктоп-меню */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex items-center space-x-2">
            <li>
              <Link
                to={`${home()}#process`}
                onClick={(e) => handleAnchorClick(e, '#process')}
                className={`${baseLink} border-b-2 ${defaultLink}`}
              >
                {t('header.process')}
              </Link>
            </li>
            <li>
              <Link
                to={go('drg-calculator')}
                className={`${baseLink} border-b-2 ${defaultLink}`}
              >
                {t('header.drgCalculator')}
              </Link>
            </li>
            <li>
              <Link to={go('news')} className={`${baseLink} border-b-2 ${defaultLink}`}>
                {t('header.news')}
              </Link>
            </li>
            <li>
              <Link
                to={`${home()}#contact`}
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className={`${baseLink} border-b-2 ${defaultLink}`}
              >
                {t('header.contact')}
              </Link>
            </li>
          </ul>

          {/* Treatments dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={`${baseLink} inline-flex items-center border-b-2 ${defaultLink}`}
              aria-expanded={isDropdownOpen}
            >
              {t('header.treatments')}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-80 overflow-y-auto p-1 ring-1 ring-black/5"
                >
                  {treatmentLinks.map(([path, key]) => (
                    <li key={path}>
                      <Link
                        to={go(path)}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {t(key)}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <LanguageSwitcher />

          {/* CTA */}
          <Link
  to={`${home()}#contact`}
  onClick={(e) => handleAnchorClick(e, '#contact')}
  className="ml-4 inline-flex flex-wrap items-center justify-center px-5 py-2.5 text-center whitespace-normal leading-tight bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition max-w-[14rem] md:max-w-none"
>
  {t('header.freeConsultation')}
</Link>
        </div>

        {/* Мобильная кнопка */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <Link
                to={`${home()}#process`}
                onClick={(e) => handleAnchorClick(e, '#process')}
                className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t('header.process')}
              </Link>

              <Link
                to={go('drg-calculator')}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t('header.drgCalculator')}
              </Link>

              <Link
                to={go('news')}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t('header.news')}
              </Link>

              <Link
                to={`${home()}#contact`}
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {t('header.contact')}
              </Link>

              <button
                onClick={() => setMobileDropdownOpen((v) => !v)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span>{t('header.treatments')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isMobileDropdownOpen && (
                <div className="pl-4 max-h-60 overflow-y-auto space-y-1">
                  {treatmentLinks.map(([path, key]) => (
                    <Link
                      key={path}
                      to={go(path)}
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {t(key)}
                    </Link>
                  ))}
                </div>
              )}

              <LanguageSwitcher />

              <Link
  to={`${home()}#contact`}
  onClick={(e) => handleAnchorClick(e, '#contact')}
  className="mt-2 w-full px-5 py-3 inline-flex flex-wrap items-center justify-center text-center whitespace-normal leading-tight bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full"
>
  {t('header.freeConsultation')}
</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
