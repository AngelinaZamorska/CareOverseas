import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const navItem = 'relative text-gray-800 font-medium transition-colors duration-200';
  const navHover = 'hover:text-blue-600';
  const btnPrimary = 'px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105';

  const NavLink = ({ scrollTo, to, children, isDropdown = false, sublinks = [] }) => {
    const [open, setOpen] = useState(false);
    if (isDropdown) {
      return (
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className={`${navItem} ${navHover} px-3 py-2 inline-flex items-center w-full justify-center`}
            onClick={() => setOpen(prev => !prev)}
          >
            {children}
            <ChevronDown className="ml-1 h-4 w-4" />
          </motion.button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl p-4 z-50 max-h-64 overflow-y-auto"
              >
                {sublinks.map(({ to: linkTo, label }) => (
                  <Link
                    key={linkTo}
                    to={linkTo}
                    className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition"
                    onClick={() => {
                      setOpen(false);
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
      );
    }
    if (scrollTo) {
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`${navItem} ${navHover} px-3 py-2`}
          onClick={() => handleNavClick({ scrollTo })}
        >
          {children}
        </motion.button>
      );
    }
    return (
      <Link
        to={to}
        className={`${navItem} ${navHover} px-3 py-2`}
        onClick={() => setMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="backdrop-blur bg-white/80 sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0 flex items-center space-x-3"
        >
          <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-lg">
            <img src="/android-chrome-192x192.png" alt="Logo" className="h-10 w-10" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold text-gray-800">Care</span>
            <span className="text-lg md:text-xl font-bold text-gray-800">Overseas</span>
            <span className="text-lg md:text-xl font-bold text-gray-800">Space</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full overflow-hidden">
          <div className="flex-1 text-center">
            <NavLink scrollTo="top">{t('header.home')}</NavLink>
          </div>
          <div className="flex-1 text-center">
            <NavLink
              isDropdown
              children={t('header.treatments')}
              sublinks={[
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
              ]}
            />
          </div>
          <div className="flex-1 text-center">
            <NavLink scrollTo="process">{t('header.process')}</NavLink>
          </div>
          <div className="flex-1 text-center">
            <NavLink to="/news">{t('header.news')}</NavLink>
          </div>
          <div className="flex-1 text-center">
            <NavLink scrollTo="contact">{t('header.contact')}</NavLink>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={btnPrimary}
            onClick={() => handleNavClick({ scrollTo: 'contact' })}
          >
            {t('header.freeConsultation')}
          </motion.button>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur p-6 space-y-4 shadow-lg"
          >
            <NavLink scrollTo="top">{t('header.home')}</NavLink>
            <NavLink
              isDropdown
              children={t('header.treatments')}
              sublinks={[
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
              ]}
            />
            <NavLink scrollTo="process">{t('header.process')}</NavLink>
            <NavLink to="/news">{t('header.news')}</NavLink>
            <NavLink scrollTo="contact">{t('header.contact')}</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`${btnPrimary} w-full`}
              onClick={() => handleNavClick({ scrollTo: 'contact' })}
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
