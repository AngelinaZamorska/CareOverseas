import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Заменили BrowserRouter на HashRouter
import App from '@/App';
import '@/index.css';
import './i18n'; // Import i18n configuration

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen w-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);