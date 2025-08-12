import React from 'react';
import { Routes, Route, Navigate, useParams, Link } from 'react-router-dom';

function LangLayout() {
  const { lang } = useParams();
  return (
    <div style={{ padding: 24, fontSize: 18 }}>
      <div>App OK • lang: <b>{lang}</b></div>
      <nav style={{ marginTop: 12 }}>
        <Link to="">Home</Link>{' | '}
        <Link to="lu-177-psma-therapy">Lu-177</Link>
      </nav>
      <Routes>
        <Route index element={<div style={{marginTop:16}}>Home page OK</div>} />
        <Route path="lu-177-psma-therapy" element={<div style={{marginTop:16}}>Lu-177 page OK</div>} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang/*" element={<LangLayout />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
