import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PrivacyPage from './Pages/PrivacyPage';
import TermsPage from './Pages/TermsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy policy" element={<PrivacyPage/>} />
        <Route path="/terms&conditions" element={<TermsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
