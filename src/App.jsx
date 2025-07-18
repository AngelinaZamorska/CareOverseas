import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import CardiacSurgeryPage from '@/pages/CardiacSurgeryPage';
import EndometriosisPage from '@/pages/EndometriosisPage';
import JointReplacementPage from '@/pages/JointReplacementPage';
import DendriticCellPage from '@/pages/DendriticCellPage';
import IvfTurkeyPage from '@/pages/IvfTurkeyPage';
import EpilepsySpainPage from '@/pages/EpilepsySpainPage';
import BrainCancerPage from '@/pages/BrainCancerPage';
import BloodDiseasesPage from '@/pages/BloodDiseasesPage';
import RheumatologyIsraelPage from '@/pages/RheumatologyIsraelPage';
import PlasticSurgeryTurkeyPage from '@/pages/PlasticSurgeryTurkeyPage';
import OncologyPage from '@/pages/OncologyPage';
import Lu177PsmaPage from '@/pages/Lu177PsmaPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import NewsPage from '@/pages/NewsPage';
import SafeTreatmentAbroadPage from '@/pages/news/SafeTreatmentAbroadPage';

function App() {
  return (
    <>
      <Helmet>
        <title>Care Overseas Space - Your Trusted Medical Treatment Coordinator Abroad | Germany, Turkey, Spain, Israel</title>
        <meta name="description" content="Care Overseas Space is your trusted coordinator for medical treatment abroad. We help patients from all over the world get access to renowned clinics in Germany, Turkey, Spain, and Israel." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
        <Toaster />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cardiac-surgery-germany" element={<CardiacSurgeryPage />} />
            <Route path="/endometriosis-leomyoma-treatment" element={<EndometriosisPage />} />
            <Route path="/joint-replacement" element={<JointReplacementPage />} />
            <Route path="/dendritic-cell-therapy-germany" element={<DendriticCellPage />} />
            <Route path="/ivf-in-turkey" element={<IvfTurkeyPage />} />
            <Route path="/epilepsy-treatment-spain" element={<EpilepsySpainPage />} />
            <Route path="/neurosurgery" element={<BrainCancerPage />} />
            <Route path="/blood-diseases-treatment" element={<BloodDiseasesPage />} />
            <Route path="/rheumatology-israel" element={<RheumatologyIsraelPage />} />
            <Route path="/plastic-surgery-turkey" element={<PlasticSurgeryTurkeyPage />} />
            <Route path="/oncology" element={<OncologyPage />} />
            <Route path="/lu-177-psma-therapy" element={<Lu177PsmaPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/safe-treatment-abroad" element={<SafeTreatmentAbroadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;