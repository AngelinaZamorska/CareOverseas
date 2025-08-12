// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';         // если нет алиаса "@", замени на './App'
import '@/index.css';
import './i18n';                 // инициализация i18n (должна быть до <App/>)

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<LoadingSpinner />}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// ---------------------------------------------------
// Регистрация Service Worker (необязательно)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => console.log('SW registered:', reg.scope))
      .catch((err) => console.error('SW registration failed:', err));
  });
}
