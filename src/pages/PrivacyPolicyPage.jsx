// src/pages/PrivacyPolicyPage.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const SUPPORTED = ['en', 'ru', 'pl', 'ar'];
const LOCALE_MAP = { en: 'en_US', ru: 'ru_RU', pl: 'pl_PL', ar: 'ar_AR' };
const BCP47 = { en: 'en-US', ru: 'ru-RU', pl: 'pl-PL', ar: 'ar' };

export default function PrivacyPolicyPage() {
  const { lang = 'en' } = useParams();
  const current = SUPPORTED.includes(lang) ? lang : 'en';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // === SEO basics ===
  const BASE = 'https://careoverseas.space';
  const PAGE_TAIL = '/privacy-policy';
  const canonical = `${BASE}/${current}${PAGE_TAIL}`;
  const title = 'Privacy Policy – CareOverseasSpace';
  const description = 'Understand how CareOverseasSpace collects, uses, and protects your data (GDPR-ready).';
  const ogLocale = LOCALE_MAP[current] || 'en_US';
  const inLang = BCP47[current] || 'en-US';
  const lastModified = '2025-07-13'; // ISO date

  const hreflangs = ['en', 'ru', 'pl', 'ar'];
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/${current}/` },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: canonical },
    ],
  };
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonical,
    isPartOf: { '@type': 'WebSite', name: 'CareOverseasSpace', url: BASE },
    inLanguage: inLang,
    lastReviewed: lastModified,
    dateModified: lastModified,
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: current }}>
        {/* Canonical & hreflang */}
        <link rel="canonical" href={canonical} />
        {hreflangs.map((hl) => (
          <link key={hl} rel="alternate" href={`${BASE}/${hl}${PAGE_TAIL}`} hreflang={hl} />
        ))}
        <link rel="alternate" href={`${BASE}/en${PAGE_TAIL}`} hreflang="x-default" />

        {/* Primary SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Open Graph / Twitter */}
        <meta property="og:site_name" content="CareOverseasSpace" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${BASE}/og-image-v2.jpg`} />
        <meta property="og:locale" content={ogLocale} />
        {Object.entries(LOCALE_MAP).filter(([k]) => k !== current).map(([k, loc]) => (
          <meta key={k} property="og:locale:alternate" content={loc} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${BASE}/og-image-v2.jpg`} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>
      </Helmet>

      {/* Document-style background with watermark */}
      <div className="relative py-20 bg-gray-50">
        {/* Watermark (decorative) */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <img
            src="/android-chrome-192x192.png"
            alt=""
            className="w-[520px] md:w-[640px] opacity-5 blur-[0.3px]"
          />
        </div>

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-gray-800 bg-white/95 p-10 md:p-12 shadow-2xl rounded-2xl border border-gray-100 backdrop-blur-sm"
          >
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-center mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-600 text-center mb-8">Effective Date: July 13, 2025</p>

            {/* Table of Contents */}
            <nav className="mb-8" aria-label="Table of contents">
              <ul className="list-decimal list-inside space-y-1 text-blue-700">
                <li><a href="#introduction" className="hover:underline">Introduction</a></li>
                <li><a href="#definitions" className="hover:underline">Definitions</a></li>
                <li><a href="#collection" className="hover:underline">Information We Collect</a></li>
                <li><a href="#usage" className="hover:underline">Use of Your Personal Data</a></li>
                <li><a href="#legalbasis" className="hover:underline">Legal Basis</a></li>
                <li><a href="#retention" className="hover:underline">Data Retention</a></li>
                <li><a href="#sharing" className="hover:underline">Sharing Data</a></li>
                <li><a href="#transfers" className="hover:underline">International Transfers</a></li>
                <li><a href="#rights" className="hover:underline">Your Rights</a></li>
                <li><a href="#security" className="hover:underline">Data Security</a></li>
                <li><a href="#cookies" className="hover:underline">Cookies & Tracking</a></li>
                <li><a href="#thirdparty" className="hover:underline">Third-Party Links</a></li>
                <li><a href="#updates" className="hover:underline">Updates</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </nav>

            {/* Sections */}
            <section id="introduction" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p>
                Care Overseas Space Ltd. (“Company”) values your privacy. This policy explains how we
                collect, use, and protect your personal data in compliance with GDPR and other laws.
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
                <li><strong>Contact:</strong> name, email, phone.</li>
                <li><strong>Location:</strong> country, city.</li>
                <li><strong>Medical:</strong> diagnosis, treatment history (voluntary).</li>
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
                <li><strong>Consent:</strong> when provided voluntarily.</li>
                <li><strong>Contract:</strong> necessary to deliver services.</li>
                <li><strong>Legitimate Interests:</strong> service improvement & security.</li>
              </ul>
            </section>

            <section id="retention" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
              <p>We retain data only as long as necessary, then securely delete or anonymize it.</p>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2 text-left">Data Type</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Retention Period</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Contact Information</td>
                      <td className="border border-gray-200 px-4 py-2">6 months post-service</td>
                      <td className="border border-gray-200 px-4 py-2">Follow-ups, legal compliance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Location Information</td>
                      <td className="border border-gray-200 px-4 py-2">6 months post-service</td>
                      <td className="border border-gray-200 px-4 py-2">Service delivery, analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Medical Information</td>
                      <td className="border border-gray-200 px-4 py-2">6 months or as required by law</td>
                      <td className="border border-gray-200 px-4 py-2">Healthcare provision, compliance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Technical Data</td>
                      <td className="border border-gray-200 px-4 py-2">12 months</td>
                      <td className="border border-gray-200 px-4 py-2">Site improvement, security</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sharing" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Sharing Data</h2>
              <p>Shared only with authorized partners under confidentiality and data processing agreements.</p>
            </section>

            <section id="transfers" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">International Transfers</h2>
              <p>Transfers outside the EEA are protected by Standard Contractual Clauses or adequacy decisions.</p>
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
              <p>We use necessary and analytics cookies. You can disable cookies in your browser settings.</p>
            </section>

            <section id="thirdparty" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
              <p>Our site may link to external sites; we are not responsible for their privacy practices.</p>
            </section>

            <section id="updates" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Updates</h2>
              <p>Policy revisions will be posted here with a new Effective Date.</p>
            </section>

            <section id="contact" className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>
                For inquiries or data requests, email us at{' '}
                <a href="mailto:info.careoverseas@gmail.com" className="text-blue-700 underline underline-offset-2">
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
}
