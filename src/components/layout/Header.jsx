import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (hash) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const NavLink = ({ to, href, children, isDropdown = false, sublinks = [] }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const commonClasses = "text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center";
  
    if (isDropdown) {
      return (
        <div 
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className={`${commonClasses} cursor-pointer`}>
            {children}
            <ChevronDown className="h-4 w-4 ml-1" />
          </span>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
              >
                {sublinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
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
  
    if (href) {
      return (
        <a 
          href={href} 
          className={commonClasses} 
          onClick={(e) => {
            e.preventDefault();
            handleAnchorClick(href);
            setMenuOpen(false);
          }}
        >
          {children}
        </a>
      );
    }
    
    return <Link to={to} className={commonClasses} onClick={() => setMenuOpen(false)}>{children}</Link>;
  };
  

  const navLinks = (
    <>
      <NavLink to="/">{t('header.home')}</NavLink>
      <NavLink 
        isDropdown 
        children={t('header.treatments')}
        sublinks={[
          { to: "/oncology", label: t('treatments.oncology') },
          { to: "/lu-177-psma-therapy", label: t('treatments.lu177') },
          { to: "/neurosurgery", label: t('treatments.neurosurgery') },
          { to: "/blood-diseases-treatment", label: t('treatments.bloodDiseases') },
          { to: "/rheumatology-israel", label: t('treatments.rheumatology') },
          { to: "/epilepsy-treatment-spain", label: t('treatments.epilepsy') },
          { to: "/dendritic-cell-therapy-germany", label: t('treatments.dendritic') },
          { to: "/ivf-in-turkey", label: t('treatments.ivf') },
          { to: "/cardiac-surgery-germany", label: t('treatments.cardiac') },
          { to: "/endometriosis-leomyoma-treatment", label: t('treatments.endometriosis') },
          { to: "/joint-replacement", label: t('treatments.joint') },
          { to: "/plastic-surgery-turkey", label: t('treatments.plasticSurgery') },
        ]}
      />
      <NavLink href="#process">{t('header.process')}</NavLink>
      <NavLink to="/news">{t('header.news')}</NavLink>
      <NavLink href="#contact">{t('header.contact')}</NavLink>
    </>
  );

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/a37c75ca-3289-43e6-a1b3-17edfced284f/f687617b139e68b935823bd42bb7a0fa.png" alt="CareOverseasSpace Logo" className="h-12 w-12" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  CareOverseasSpace
                </span>
                <p className="text-sm text-gray-600">{t('header.tagline')}</p>
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks}
            <LanguageSwitcher />
            <Button onClick={() => handleAnchorClick('#contact')} className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              {t('header.freeConsultation')}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => setMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 flex flex-col space-y-4"
          >
            {navLinks}
            <Button onClick={() => handleAnchorClick('#contact')} className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              {t('header.freeConsultation')}
            </Button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;