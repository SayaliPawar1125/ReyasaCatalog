import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Remove BrowserRouter / Router from this import

import HomePage from './pages/HomePage';
import ShirtsPage from './pages/ShirtsPage';
import TShirtsPage from './pages/TShirtsPage';
import KurtasPage from './pages/KurtasPage';
import ProductDetailPage from './pages/ProductDetailPage';
import OurStoryPage from './pages/OurStoryPage';

import brandLogo from './assets/logo.jpeg';

export default function App() {
  return (
    // REMOVED <Router> FROM HERE
    <div className="d-flex flex-column min-h-screen">
      
      {/* Bootstrap Dark Navigation Bar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top py-3 px-3">
        <div className="container-fluid max-w-7xl">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={brandLogo} alt="REYASA" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
            <span className="font-serif tracking-wider-md fw-semibold fs-4 text-white">REYASA</span>
          </Link>
          {/* Navigation link listings ... */}
        </div>
      </nav>

      {/* Dynamic Route Pages Display */}
      <main className="flex-grow-1">
        <Routes>
  {/* Add this new route fallback entry line here */}
  <Route path="/catalogue" element={<HomePage />} />

  {/* Keep your existing route pages configuration tags as they are */}
  <Route path="/" element={<HomePage />} />
  <Route path="/shirts" element={<ShirtsPage />} />
  <Route path="/tshirts" element={<TShirtsPage />} />
  <Route path="/kurtas" element={<KurtasPage />} />
  <Route path="/product/:id" element={<ProductDetailPage />} />
  <Route path="/story" element={<OurStoryPage />} />
</Routes>

      </main>

      {/* Footer layout structures ... */}
    </div>
    // REMOVED </Router> FROM HERE
  );
}
