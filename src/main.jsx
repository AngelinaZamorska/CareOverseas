import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import './i18n'; // i18n конфигурация

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen w-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// ---------------------------------------------------
// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW registration failed:', err));
  });
}