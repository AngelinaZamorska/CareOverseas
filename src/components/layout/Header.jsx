import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // Smooth scroll or navigate
  const handleNavigation = ({ scrollTo, path }) => {
    setMenuOpen(false);
    if (scrollTo) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' }), 200);
      } else {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path) {
      navigate(path);
    }
  };

  const navItems = [
    { label: t('header.home'), scrollTo: 'top' },
    { label: t('header.process'), scrollTo: 'process' },
    { label: t('header.news'), path: '/news' },
    { label: t('header.contact'), scrollTo: 'contact' }
  ];

  const treatments = [
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
    { label: t('treatments.plasticSurgery'), path: '/plastic-surgery-turkey' }
  ];

  // Link styles
  const baseLink = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const activeLink = 'text-blue-600 border-blue-600';
  const defaultLink = 'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-200';

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src="/android-chrome-192x192.png"
            alt="Care Overseas Space"
            className="h-10 w-10 rounded-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {t('brand.name')}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {navItems.map(({ label, scrollTo, path }) => (
            <button
              key={label}
              onClick={() => handleNavigation({ scrollTo, path })}
              className={`${baseLink} border-b-2 ${location.pathname === path ? activeLink : defaultLink}`}
            >
              {label}
            </button>
          ))}

          {/* Treatments Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className={`${baseLink} inline-flex items-center border-b-2 ${isDropdownOpen ? activeLink : defaultLink}`}
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
                  className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  {treatments.map(({ label, path }) => (
                    <li key={path}>
                      <Link
                        to={path}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
          <button
            onClick={() => handleNavigation({ scrollTo: 'contact' })}
            className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition"
          >
            {t('header.freeConsultation')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-gray-800 dark:text-gray-200" /> : <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map(({ label, scrollTo, path }) => (
                <button
                  key={label}
                  onClick={() => handleNavigation({ scrollTo, path })}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <span>{t('header.treatments')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pl-4 space-y-1"
                >
                  {treatments.map(({ label, path }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}
                      className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
              <LanguageSwitcher />
              <button
                onClick={() => handleNavigation({ scrollTo: 'contact' })}
                className="mt-2 w-full px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition"
              >
                {t('header.freeConsultation')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}