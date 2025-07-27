import React, { useEffect } from 'react';
import { User, Phone, Mail, MapPin } from 'lucide-react';
import { FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 150);
    } else {
      scrollToContact();
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 flex-wrap">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-full animate-pulse">
                <img
                  src="/android-chrome-192x192.png"
                  alt="CareOverseasSpace"
                  className="h-8 w-8 object-cover"
                />
              </div>
              <span className="text-xl md:text-2xl font-extrabold tracking-wide break-words">
                CareOverseasSpace
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/ZamorskaAngelina" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <FaTelegramPlane size={24} />
              </a>
              <a href="viber://chat?number=%2B380984998555" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <FaViber size={24} />
              </a>
              <a href="https://wa.me/380984998555" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-xl mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-white transition"
                >
                  {t('footer.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/oncology')}
                  className="hover:text-white transition"
                >
                  {t('treatments.oncology')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/lu-177-psma-therapy')}
                  className="hover:text-white transition"
                >
                  {t('treatments.lu177')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/dendritic-cell-therapy-germany')}
                  className="hover:text-white transition"
                >
                  {t('treatments.dendritic')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/ivf-in-turkey')}
                  className="hover:text-white transition"
                >
                  {t('treatments.ivf')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/cardiac-surgery-germany')}
                  className="hover:text-white transition"
                >
                  {t('treatments.cardiac')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/endometriosis-leomyoma-treatment')}
                  className="hover:text-white transition"
                >
                  {t('treatments.endometriosis')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/joint-replacement')}
                  className="hover:text-white transition"
                >
                  {t('treatments.joint')}
                </button>
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
              <li className="flex items-start space-x-3">
                <User className="h-6 w-6 text-green-400 mt-1" />
                <span>Zamorska Angelina</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-blue-400 mt-1" />
                <span>+380 98 499 8555</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-pink-400 mt-1" />
                <span>info.careoverseas@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-yellow-400 mt-1" />
                <span>Kiev, 01001, Ukraine</span>
              </li>
            </ul>
          </div>
        </div>

         {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 space-y-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} CareOverseasSpace. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="text-sm hover:text-white underline transition"
            >
              {t('footer.privacyPolicy')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
