import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento root en el DOM');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio"> {/* Envuelve App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);