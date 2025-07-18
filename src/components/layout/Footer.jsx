import React from 'react';
import { HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <HeartHandshake className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">CareOverseasSpace</span>
            </div>
            <p className="text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <span className="font-semibold text-lg mb-4 block">{t('footer.navigation')}</span>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">{t('footer.home')}</Link></li>
              <li><Link to="/oncology" className="hover:text-white">{t('treatments.oncology')}</Link></li>
              <li><Link to="/lu-177-psma-therapy" className="hover:text-white">{t('treatments.lu177')}</Link></li>
              <li><Link to="/dendritic-cell-therapy-germany" className="hover:text-white">{t('treatments.dendritic')}</Link></li>
              <li><Link to="/ivf-in-turkey" className="hover:text-white">{t('treatments.ivf')}</Link></li>
              <li><Link to="/cardiac-surgery-germany" className="hover:text-white">{t('treatments.cardiac')}</Link></li>
              <li><Link to="/endometriosis-leomyoma-treatment" className="hover:text-white">{t('treatments.endometriosis')}</Link></li>
              <li><Link to="/joint-replacement" className="hover:text-white">{t('treatments.joint')}</Link></li>
              <li><a href="/#contact" className="hover:text-white">{t('header.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold text-lg mb-4 block">{t('footer.partnerCountries')}</span>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.germany')}</li>
              <li>{t('footer.turkey')}</li>
              <li>{t('footer.spain')}</li>
              <li>{t('footer.israel')}</li>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold text-lg mb-4 block">{t('footer.contactUs')}</span>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>+380984998555</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>info.careoverseas@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Wagnerstraße 13<br />40212 Düsseldorf, Germany
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CareOverseasSpace. {t('footer.rights')}</p>
          <div className="mt-4">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white underline">
              {t('footer.privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;