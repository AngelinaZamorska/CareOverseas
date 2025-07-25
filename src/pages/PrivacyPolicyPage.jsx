import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy – Care Overseas Space</title>
        <meta
          name="description"
          content="Your privacy is our priority. Learn how Care Overseas Space collects, uses, and protects your personal data."
        />
      </Helmet>

      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto prose lg:prose-xl text-gray-700"
          >
            <h1 className="text-center">Privacy Policy</h1>
            <p className="text-sm text-gray-500 text-center">Effective Date: July 13, 2025</p>

            <section>
              <h2>Your Privacy, Our Promise</h2>
              <p>
                At <strong>Care Overseas Space</strong>, we view your privacy as a fundamental right. We handle your personal data with
                the same care and attention we give to our patients’ health: with respect, transparency, and security.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <ul>
                <li><strong>Contact Details:</strong> Name, email, phone number.</li>
                <li><strong>Location:</strong> Country and city of residence.</li>
                <li><strong>Medical Info:</strong> Any details you voluntarily share—diagnosis, scans, treatment history.</li>
                <li><strong>Technical Data:</strong> IP address, cookies, browser type.</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Data</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide personalized medical consultations.</li>
                <li>Match you with top clinics and specialists abroad.</li>
                <li>Send treatment proposals and follow-up reminders.</li>
                <li>Enhance our website, ensuring a smooth user experience.</li>
              </ul>
              <p>
                <em>Rest assured, we never sell your data.</em> We share it only with your explicit consent and solely
                to partner providers involved in your care.
              </p>
            </section>

            <section>
              <h2>Data Protection & Security</h2>
              <p>
                We store your data on secure servers and restrict access to authorized team members only. Our site uses
                SSL/TLS encryption to safeguard your information in transit.
              </p>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>
                Under GDPR, you have the right to <strong>access, correct, delete</strong>, or <strong>export</strong> your data at any
                time. To exercise your rights or withdraw consent, contact us at
                <a href="mailto:info.careoverseas@gmail.com" className="text-blue-600 hover:underline">
                  info.careoverseas@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2>Cookies & Tracking</h2>
              <p>
                We use cookies to personalize content and analyze traffic. You can disable cookies via your browser settings,
                but some site features may be affected.
              </p>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                Our site may link to external partners (e.g., clinics). We are not responsible for their privacy practices.
                Please review their policies directly.
              </p>
            </section>

            <section>
              <h2>Policy Updates</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted here with a revised effective
                date so you’re always informed.
              </p>
            </section>

            <section>
              <p>
                Questions or concerns? Reach out anytime at
                <a href="mailto:info.careoverseas@gmail.com" className="text-blue-600 hover:underline">
                  info.careoverseas@gmail.com
                </a>.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
