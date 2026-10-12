import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Packages } from './pages/Packages';
import { Rooms } from './pages/Rooms';
import { Dining } from './pages/Dining';
import { Experiences } from './pages/Experiences';
import { Gallery } from './pages/Gallery';
import { Location } from './pages/Location';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

import { ThemeProvider } from './context/ThemeContext';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/location" element={<Location />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
