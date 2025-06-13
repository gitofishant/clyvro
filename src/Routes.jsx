import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ShopifyExpertsLandingPage from './pages/ShopifyExpertsLanding/index';
import Contact from './pages/ShopifyExpertsLanding/Contact';
import ShowcaseThemes from './pages/ShopifyExpertsLanding/ShowcaseThemes';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopifyExpertsLandingPage />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/showcasethemes" element={<ShowcaseThemes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;