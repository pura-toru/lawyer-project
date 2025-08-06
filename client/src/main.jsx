import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import Home from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} / */}
    </BrowserRouter>
  </StrictMode>,
);
