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

  const linkBase = 'text-gray-800 px-4 py-2 font-semibold rounded-lg transition-all ease-out duration-200';
  const linkHover = 'hover:bg-blue-50 hover:text-blue-600';
  const buttonPrimary = 'bg-gradient-to-r from-blue-500 to-purple-500 text-white';

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
            whileHover={{ scale: 1.05 }}
            className={`${linkBase} ${linkHover} inline-flex items-center`}
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
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-50"
              >
                {sublinks.map(({ to: linkTo, label }) => (
                  <Link
                    key={linkTo}
                    to={linkTo}
                    className="block px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
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
          whileHover={{ scale: 1.05 }}
          className={`${linkBase} ${linkHover}`}
          onClick={() => handleNavClick({ scrollTo })}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <motion.button whileHover={{ scale: 1.05 }}>
        <Link
          to={to}
          className={`${linkBase} ${linkHover}`}
          onClick={() => setMenuOpen(false)}
        >
          {children}
        </Link>
      </motion.button>
    );
  };

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/" className="flex items-center space-x-3">
            <img src="/android-chrome-192x192.png" alt="CareOverseasSpace" className="h-12 w-12 rounded-xl" />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CareOverseasSpace
              </span>
              <p className="text-sm text-gray-500">{t('header.tagline')}</p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-4">
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
            className={`${linkBase} ${buttonPrimary}`}
            onClick={() => handleNavClick({ scrollTo: 'contact' })}
          >
            {t('header.freeConsultation')}
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageSwitcher />
          <button onClick={() => setMenuOpen(prev => !prev)}>
            {menuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/90 backdrop-blur p-6 space-y-3 shadow-xl"
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
              className={`${linkBase} ${buttonPrimary} w-full text-center`}
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
