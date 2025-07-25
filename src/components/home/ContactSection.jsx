import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const ContactSection = () => {
  const firstInputRef = useRef(null);
  const { t } = useTranslation();

  const handleFormSubmit = (event) => {
    // Остановить стандартную отправку, чтобы успели уйти gtag-события
    event.preventDefault();

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/YYYYYYYYYY' });
      window.gtag('event', 'conversion_event_submit_lead_form', {});
    }

    // Дадим 200 мс на отправку метрик, потом вручную пошлем форму
    setTimeout(() => {
      event.target.submit();
    }, 200);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.infoTitle')}
              </h3>

              <div className="space-y-6">
                {/* Телефон */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t('contact.phoneLabel')}
                    </div>
                    <div className="text-gray-600">+380984998555</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t('contact.emailLabel')}
                    </div>
                    <div className="text-gray-600">
                      info.careoverseas@gmail.com
                    </div>
                  </div>
                </div>

                {/* Адрес */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg mt-1">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t('contact.addressLabel')}
                    </div>
                    <div className="text-gray-600">
                      Kiev<br />01001 Ukraine
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                {t('contact.consultationTitle')}
              </h3>
              <p className="mb-6">{t('contact.consultationSubtitle')}</p>
              <Button
                onClick={() => {
                  firstInputRef.current?.focus();
                }}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                {t('contact.consultationButton')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('contact.formTitle')}
            </h3>

            <form
              action="https://formspree.io/f/mrbknqkl"
              method="POST"
              id="contact-form"
              className="space-y-6"
              onSubmit={handleFormSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.firstNameLabel')}
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    ref={firstInputRef}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.firstNamePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.lastNameLabel')}
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.lastNamePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.emailLabelForm')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.phoneLabelForm')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.phonePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.treatmentTypeLabel')}
                </label>
                <select
                  name="treatment_type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>{t('contact.treatmentTypeSelect')}</option>
                  {/* и т.д. */}
                  <option>{t('contact.other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 py-3"
              >
                {t('contact.sendMessage')}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                <Trans
                  i18nKey="contact.privacyPolicyStatement"
                  components={{
                    policyLink: (
                      <Link to="/privacy-policy" className="underline hover:text-blue-600" />
                    ),
                  }}
                />
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;