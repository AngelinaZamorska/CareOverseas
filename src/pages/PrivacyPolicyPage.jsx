import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Care Overseas Space</title>
        <meta name="description" content="Privacy Policy for Care Overseas Space. Learn how we collect, use, and protect your personal data." />
      </Helmet>
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
            <div className="prose lg:prose-xl max-w-none text-gray-700 space-y-6">
              <p className="text-sm text-gray-500">Effective Date: 13.07.2025</p>
              
              <p><strong>Company Name:</strong> Care Overseas Space</p>
              <p><strong>Website:</strong> https://careoverseas.space</p>
              <p><strong>Email:</strong> info.careoverseas@gmail.com</p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">1. Introduction</h2>
              <p>At Care Overseas Space, we are committed to protecting your personal data and your right to privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website or our services related to international medical treatment.</p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">2. What Information We Collect</h2>
              <p>We may collect the following information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your full name</li>
                <li>Email address and phone number</li>
                <li>Country and city of residence</li>
                <li>Medical information you choose to share (e.g. diagnosis, scans)</li>
                <li>Any information provided via contact forms or online consultation requests</li>
                <li>Technical data: IP address, browser type, cookies</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Respond to your inquiry</li>
                <li>Match you with the best medical clinics and doctors abroad</li>
                <li>Prepare offers and treatment proposals</li>
                <li>Contact you via email or phone regarding your request</li>
                <li>Improve our services and website performance</li>
              </ul>
              <p>We will never sell your data. We only share your information with partner clinics and doctors with your explicit consent.</p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">4. Data Storage & Security</h2>
              <p>Your data is stored securely and only accessed by authorized team members. We use encryption (SSL) and secure systems to protect your information.</p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">5. Your Rights</h2>
              <p>According to the GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your data</li>
                <li>Correct or delete your data</li>
                <li>Withdraw consent</li>
                <li>File a complaint with a supervisory authority</li>
              </ul>
              <p>To exercise any of these rights, please contact us at <a href="mailto:info.careoverseas@gmail.com" className="text-blue-600 hover:underline">info.careoverseas@gmail.com</a>.</p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">6. Cookies</h2>
              <p>We use cookies to improve your browsing experience and analyze website traffic. You can disable cookies in your browser settings at any time.</p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">7. Third-Party Links</h2>
              <p>Our site may contain links to third-party websites (such as partner clinics). We are not responsible for their privacy policies.</p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">8. Changes to This Policy</h2>
              <p>We may update this policy from time to time. The updated version will be posted on this page with the updated effective date.</p>

              <p>If you have any questions or concerns, please contact us at <a href="mailto:info.careoverseas@gmail.com" className="text-blue-600 hover:underline">info.careoverseas@gmail.com</a>.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;