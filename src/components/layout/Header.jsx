import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
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

  const commonLinkClasses =
    'relative text-gray-700 px-3 py-1 font-medium transition-colors duration-300';
  const activeLinkClasses = 'text-blue-600 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500';

  const NavLink = ({ scrollTo, to, children, isDropdown = false, sublinks = [] }) => {
    const [open, setOpen] = useState(false);

    if (isDropdown) {
      return (
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className={`${commonLinkClasses} cursor-pointer inline-flex items-center`}
          >
            {children}
            <ChevronDown className="h-4 w-4 ml-1" />
          </motion.span>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50"
              >
                {sublinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
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
          type="button"
          whileHover={{ scale: 1.05 }}
          className={`${commonLinkClasses}`}
          onClick={() => handleNavClick({ scrollTo })}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to={to}
          className={commonLinkClasses}
          onClick={() => setMenuOpen(false)}
        >
          {children}
        </Link>
      </motion.div>
    );
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Лого */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/android-chrome-192x192.png"
              alt="CareOverseasSpace"
              className="h-12 w-12 rounded-xl"
            />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CareOverseasSpace
              </span>
              <p className="text-sm text-gray-600">{t('header.tagline')}</p>
            </div>
          </Link>
        </motion.div>

        {/* Десктоп-меню */}
        <div className="hidden md:flex items-center space-x-6">
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

          <LanguageSwitcher />

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg transition-transform duration-300"
            onClick={() => handleNavClick({ scrollTo: 'contact' })}
          >
            {t('header.freeConsultation')}
          </motion.button>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <button onClick={() => setMenuOpen(prev => !prev)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur p-6 space-y-4 shadow-lg"
          >
            <NavLink scrollTo="top">{t('header.home')}</NavLink>
            <NavLink scrollTo="process">{t('header.process')}</NavLink>
            <NavLink to="/news">{t('header.news')}</NavLink>
            <NavLink scrollTo="contact">{t('header.contact')}</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full shadow-lg transition-transform duration-300"
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