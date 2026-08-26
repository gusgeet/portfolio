import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import TranslateProvider from './context/Translate';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TranslateProvider>
      <App />
    </TranslateProvider>
  </StrictMode>
);
