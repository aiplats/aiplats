import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// ✅ Combined load listener
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Service worker
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => console.log('Service Worker registered:', registration))
      .catch(error => console.log('Service Worker registration failed:', error));

    // Hide splash/loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => loadingScreen.remove(), 500);
    }
  });
}
