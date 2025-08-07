import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} / */}
    </BrowserRouter>
  </StrictMode>,
);
