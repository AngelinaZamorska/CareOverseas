import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy – Care Overseas Space</title>
        <meta
          name="description"
          content="Privacy Policy for Care Overseas Space. Understand how we collect, use, and protect your data."
        />
      </Helmet>

      {/* Background paper texture */}
      <div
        className="bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/images/paper-texture.jpg')" }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-gray-800 bg-white bg-opacity-90 p-10 shadow-lg"
          >
            {/* Header */}
            <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-600 text-center mb-8">Effective Date: July 13, 2025</p>

            {/* Table of Contents */}
            <nav className="mb-8">
              <ul className="list-decimal list-inside space-y-1">
                <li><a href="#introduction" className="text-blue-600 hover:underline">1. Introduction</a></li>
                <li><a href="#definitions" className="text-blue-600 hover:underline">2. Definitions</a></li>
                <li><a href="#collection" className="text-blue-600 hover:underline">3. Information We Collect</a></li>
                <li><a href="#usage" className="text-blue-600 hover:underline">4. Use of Your Personal Data</a></li>
                <li><a href="#legalbasis" className="text-blue-600 hover:underline">5. Legal Basis</a></li>
                <li><a href="#retention" className="text-blue-600 hover:underline">6. Data Retention</a></li>
                <li><a href="#sharing" className="text-blue-600 hover:underline">7. Sharing Data</a></li>
                <li><a href="#transfers" className="text-blue-600 hover:underline">8. International Transfers</a></li>
                <li><a href="#rights" className="text-blue-600 hover:underline">9. Your Rights</a></li>
                <li><a href="#security" className="text-blue-600 hover:underline">10. Data Security</a></li>
                <li><a href="#cookies" className="text-blue-600 hover:underline">11. Cookies & Tracking</a></li>
                <li><a href="#thirdparty" className="text-blue-600 hover:underline">12. Third-Party Links</a></li>
                <li><a href="#updates" className="text-blue-600 hover:underline">13. Updates</a></li>
                <li><a href="#contact" className="text-blue-600 hover:underline">14. Contact</a></li>
              </ul>
            </nav>

            {/* Sections */}
            <section id="introduction" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p>
                Care Overseas Space Ltd. ("Company") values your privacy. This policy explains how we collect, use, and protect your personal data in
                compliance with GDPR and other laws.
              </p>
            </section>

            <section id="definitions" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Definitions</h2>
              <p><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual.</p>
              <p><strong>Processing:</strong> Any operation performed on Personal Data (collection, storage, transfer).</p>
            </section>

            <section id="collection" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Contact:</strong> Name, email, phone.</li>
                <li><strong>Location:</strong> Country, city.</li>
                <li><strong>Medical:</strong> Diagnosis, treatment history (voluntary).</li>
                <li><strong>Technical:</strong> IP, browser, cookies.</li>
              </ul>
            </section>

            <section id="usage" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Use of Your Personal Data</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide medical consultations and proposals.</li>
                <li>Match you with partner clinics and specialists.</li>
                <li>Send follow-up reminders.</li>
                <li>Improve our services and website.</li>
              </ul>
              <p className="italic">We never sell your data.</p>
            </section>

            <section id="legalbasis" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Legal Basis</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Consent:</strong> When provided voluntarily.</li>
                <li><strong>Contract:</strong> Necessary to deliver services.</li>
                <li><strong>Legitimate Interests:</strong> For business improvement.</li>
              </ul>
            </section>

            <section id="retention" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
              <p>We retain data only as long as necessary, then securely delete or anonymize it.</p>

              {/* Retention Table */}
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">Data Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Retention Period</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Contact Information</td>
                      <td className="border border-gray-300 px-4 py-2">6 months post-service</td>
                      <td className="border border-gray-300 px-4 py-2">Follow-up inquiries, legal compliance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Location Information</td>
                      <td className="border border-gray-300 px-4 py-2">6 months post-service</td>
                      <td className="border border-gray-300 px-4 py-2">Service delivery, analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Medical Information</td>
                      <td className="border border-gray-300 px-4 py-2">6 months or as required by law</td>
                      <td className="border border-gray-300 px-4 py-2">Healthcare provision, legal compliance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Technical Data</td>
                      <td className="border border-gray-300 px-4 py-2">12 months</td>
                      <td className="border border-gray-300 px-4 py-2">Website improvement, analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sharing" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Sharing Data</h2>
              <p>Shared only with authorized partners under confidentiality agreements.</p>
            </section>

            <section id="transfers" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">International Transfers</h2>
              <p>Transfers outside EEA under Standard Contractual Clauses or adequacy decisions.</p>
            </section>

            <section id="rights" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Access, rectify, erase, and port your data.</li>
                <li>Restrict or object to processing.</li>
                <li>Withdraw consent at any time.</li>
                <li>Lodge a complaint with a supervisory authority.</li>
              </ul>
            </section>

            <section id="security" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
              <p>We employ SSL/TLS, access controls, and regular audits to secure your data.</p>
            </section>

            <section id="cookies" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Cookies & Tracking</h2>
              <p>Necessary and analytics cookies. Disable via browser settings if desired.</p>
            </section>

            <section id="thirdparty" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
              <p>Our site may link to external sites; we are not responsible for their policies.</p>
            </section>

            <section id="updates" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Updates</h2>
              <p>Policy revisions posted here with a new Effective Date.</p>
            </section>

            <section id="contact" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>
                For inquiries or data requests, email us at <a href="mailto:info.careoverseas@gmail.com" className="text-blue-600 hover:underline">
                  info.careoverseas@gmail.com
                </a>.
              </p>
            </section>

            {/* Company stamp */}
            <div className="mt-12 text-center">
              <span className="inline-block border-4 border-red-600 rounded-full px-6 py-2 text-red-600 font-bold text-xl">
                Care Overseas Space
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
