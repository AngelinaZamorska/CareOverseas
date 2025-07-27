import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Закрытие дропдауна по клику вне его
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = ({ scrollTo, to }) => {
    setMenuOpen(false);
    if (scrollTo) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => handleScrollTo(scrollTo), 150);
      } else {
        handleScrollTo(scrollTo);
      }
    } else if (to) {
      navigate(to);
    }
  };

  // Базовые классы для ссылок
  const linkBase = 'block text-center border border-gray-300 px-4 py-2 font-medium rounded-lg transition-colors duration-200';
  const linkHover = 'hover:border-blue-500 hover:text-blue-600';

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center">
        {/* Логотип */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <Link to="/" className="flex items-center space-x-2">
            <img src="/android-chrome-192x192.png" alt="Logo" className="h-12 w-12 rounded-xl" />
            <div className="flex flex-col justify-center h-12">
              {['Care', 'Overseas', 'Space'].map((word) => (
                <span
                  key={word}
                  className="text-sm md:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight"
                >
                  {word}
                </span>
              ))}
            </div>
          </Link>
        </motion.div>

        {/* Десктоп-меню: равные ячейки grid-cols-5 */}
        <div className="hidden md:grid flex-1 grid-cols-5 gap-4">
          {/* Home */}
          <button
            onClick={() => handleNavClick({ scrollTo: 'top' })}
            className={`${linkBase} ${linkHover}`}
          >
            {t('header.home')}
          </button>

          {/* Treatments Abroad */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
          >
            <button
              onClick={() => setTreatmentsOpen((o) => !o)}
              className={`${linkBase} ${linkHover} inline-flex items-center justify-center`}
            >
              {t('header.treatments')}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <AnimatePresence>
              {treatmentsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-2 z-50 max-h-64 overflow-y-auto"
                >
                  {[
                    { to: '/oncology', label: t('treatments.oncology') },
                    { to: '/lu-177-psma-therapy', label: t('treatments.lu177') },
                    { to: '/neurosurgery', label: t('treatments.neurosurgery') },
                    { to: '/blood-diseases-treatment', label: t('treatments.bloodDiseases') },
                    { to: '/rheumatology-israel', label: t('treatments.rheumatology') },
                    { to: '/epilepsy-treatment-spain', label: t('treatments.epilepsy') },
                    { to: '/dendritic-cell-therapy-germany', label: t('treatments.dendritic') },
                    { to: '/ivf-in-turkey', label: t('treatments.ivf') },
                    { to: '/cardiac-surgery-germany', label: t('treatments.cardiac') },
                    { to: '/endometriosis-leomyoma-treatment', label: t('treatments.endometriosis') },
                    { to: '/joint-replacement', label: t('treatments.joint') },
                    { to: '/plastic-surgery-turkey', label: t('treatments.plasticSurgery') },
                  ].map(({ to: linkTo, label }) => (
                    <Link
                      key={linkTo}
                      to={linkTo}
                      className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
                      onClick={() => {
                        setTreatmentsOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* How It Works */}
          <button
            onClick={() => handleNavClick({ scrollTo: 'process' })}
            className={`${linkBase} ${linkHover}`}
          >
            {t('header.process')}
          </button>

          {/* News & Updates */}
          <Link to="/news" className={`${linkBase} ${linkHover}`}>
            {t('header.news')}
          </Link>

          {/* Contact Us */}
          <button
            onClick={() => handleNavClick({ scrollTo: 'contact' })}
            className={`${linkBase} ${linkHover}`}
          >
            {t('header.contact')}
          </button>
        </div>

        {/* Действия и моб. меню */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white whitespace-nowrap shadow-lg hover:shadow-xl transition-transform"
            onClick={() => handleNavClick({ scrollTo: 'contact' })}
          >
            {t('header.freeConsultation')}
          </motion.button>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/90 backdrop-blur p-6 space-y-4 shadow-lg"
          >
            <button
              onClick={() => {
                handleNavClick({ scrollTo: 'top' });
                setMenuOpen(false);
              }}
              className={`${linkBase} ${linkHover} w-full`}
            >
              {t('header.home')}
            </button>

            {/* Моб. дропдаун Treatments */}
            <div className="relative">
              <button
                onClick={() => setTreatmentsOpen((o) => !o)}
                className={`${linkBase} ${linkHover} inline-flex items-center justify-center w-full`}
              >
                {t('header.treatments')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {treatmentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-2 bg-white rounded-lg shadow p-2 max-h-60 overflow-y-auto"
                  >
                    {[
                      { to: '/oncology', label: t('treatments.oncology') },
                      /* …остальные пункты… */
                    ].map(({ to: linkTo, label }) => (
                      <Link
                        key={linkTo}
                        to={linkTo}
                        className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
                        onClick={() => {
                          setTreatmentsOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => {
                handleNavClick({ scrollTo: 'process' });
                setMenuOpen(false);
              }}
              className={`${linkBase} ${linkHover} w-full`}
            >
              {t('header.process')}
            </button>
            <Link to="/news" className={`${linkBase} ${linkHover} w-full`} onClick={() => setMenuOpen(false)}>
              {t('header.news')}
            </Link>
            <button
              onClick={() => {
                handleNavClick({ scrollTo: 'contact' });
                setMenuOpen(false);
              }}
              className={`${linkBase} ${linkHover} w-full`}
            >
              {t('header.contact')}
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white whitespace-nowrap shadow-lg hover:shadow-xl w-full text-center"
              onClick={() => {
                handleNavClick({ scrollTo: 'contact' });
                setMenuOpen(false);
              }}
            >
              {t('header.freeConsultation')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;