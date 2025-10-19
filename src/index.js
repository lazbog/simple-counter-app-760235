import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root DOM element
const container = document.getElementById('root');

// Ensure the container exists before rendering
if (!container) {
  throw new Error('Root element not found. Please ensure there is a div with id="root" in your HTML.');
}

// Create a React root
const root = createRoot(container);

// Enable Strict Mode for development to highlight potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hot Module Replacement (HMR) for development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>
    );
  });
}

// Performance monitoring in production
if (process.env.NODE_ENV === 'production') {
  // Report web vitals if needed
  if (window.gtag) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
}