// src/components/home/Footer.jsx
import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, X } from 'lucide-react';
import { FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { langLink } from '@/lib/lang';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const { t } = useTranslation();
  const go = (p) => langLink(p);
  const home = () => langLink('/');

  const [isAboutOpen, setAboutOpen] = useState(false);

  const onAnchorClick = (e, hash) => {
    const isHome = /^\/(en|ru|pl|ar)\/?$/.test(window.location.pathname);
    if (!isHome) return;
    const id = (hash || '').replace('#', '');
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 py-16 relative">
      <div className="container mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-full animate-pulse flex-shrink-0">
                <img src="/android-chrome-192x192.png" alt="CareOverseasSpace" className="h-8 w-8 object-cover" />
              </div>
              <div className="flex flex-col justify-center h-12 leading-4 text-white font-extrabold text-xs md:text-sm">
                <span>Care</span><span>Overseas</span><span>Space</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <a href="https://t.me/ZamorskaAngelina" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition"><FaTelegramPlane size={24} /></a>
              <a href="viber://chat?number=%2B380984998555" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition"><FaViber size={24} /></a>
              <a href="https://wa.me/380984998555" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition"><FaWhatsapp size={24} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-xl mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><Link to={home()} className="hover:text-white transition">{t('footer.home')}</Link></li>
              <li><Link to={go('oncology')} className="hover:text-white transition">{t('treatments.oncology')}</Link></li>
              <li><Link to={go('lu-177-psma-therapy')} className="hover:text-white transition">{t('treatments.lu177')}</Link></li>
              <li><Link to={go('dendritic-cell-therapy-germany')} className="hover:text-white transition">{t('treatments.dendritic')}</Link></li>
              <li><Link to={go('ivf-in-turkey')} className="hover:text-white transition">{t('treatments.ivf')}</Link></li>
              <li><Link to={go('cardiac-surgery-germany')} className="hover:text-white transition">{t('treatments.cardiac')}</Link></li>
              <li><Link to={go('endometriosis-leomyoma-treatment')} className="hover:text-white transition">{t('treatments.endometriosis')}</Link></li>
              <li><Link to={go('joint-replacement')} className="hover:text-white transition">{t('treatments.joint')}</Link></li>
              <li><Link to={go('news')} className="hover:text-white transition">{t('header.news')}</Link></li>
              <li>
                <a href={`${home()}#contact`} onClick={(e) => onAnchorClick(e, '#contact')} className="hover:text-white transition">
                  {t('header.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="font-semibold text-xl mb-4">{t('footer.partnerCountries')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.germany')}</li>
              <li>{t('footer.turkey')}</li>
              <li>{t('footer.spain')}</li>
              <li>{t('footer.israel')}</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-xl mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3"><User className="h-6 w-6 text-green-400 mt-1" /><span>Zamorska Angelina</span></li>
              <li className="flex items-start space-x-3"><Phone className="h-6 w-6 text-blue-400 mt-1" /><span>+380 98 499 8555</span></li>
              <li className="flex items-start space-x-3"><Mail className="h-6 w-6 text-pink-400 mt-1" /><span>info.careoverseas@gmail.com</span></li>
              <li className="flex items-start space-x-3"><MapPin className="h-6 w-6 text-yellow-400 mt-1" /><span>Kiev, 01001, Ukraine</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom row: Privacy + About Me button */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 space-y-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} CareOverseasSpace. {t('footer.rights')}</p>
          <div className="flex items-center justify-center gap-6">
            <Link to={go('privacy-policy')} className="text-sm hover:text-white underline transition">
              {t('footer.privacyPolicy')}
            </Link>
            <button
              onClick={() => setAboutOpen(true)}
              className="text-sm hover:text-white underline transition"
            >
              {t('footer.aboutMe')}
            </button>
          </div>
        </div>
      </div>

      {/* About Me Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
            >
              <button
                onClick={() => setAboutOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {t('about.title')}
                  </h2>
                  <p className="text-sm text-gray-500">
                    CareOverseasSpace
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {t('about.story')}
                </p>

                {/* Trust badges */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-gray-200 p-4 text-center">
                    <div className="text-2xl font-extrabold text-blue-600">3+ yrs</div>
                    <div className="text-xs text-gray-500 mt-1">Coordinator Experience</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-4 text-center">
                    <div className="text-2xl font-extrabold text-green-600">4</div>
                    <div className="text-xs text-gray-500 mt-1">Partner Countries</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-4 text-center">
                    <div className="text-2xl font-extrabold text-purple-600">MD</div>
                    <div className="text-xs text-gray-500 mt-1">Medical Background</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setAboutOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold shadow hover:shadow-lg transition"
                >
                  {t('about.cta')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
