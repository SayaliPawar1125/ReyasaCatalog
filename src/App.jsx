
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import ShirtsPage from './pages/ShirtsPage';
import TShirtsPage from './pages/TShirtsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Footer from './pages/Footer';

import './App.css';

export default function App() {
  return (
    <div className="global-app-container d-flex flex-column min-vh-100">

      <Navbar />

      {/* Page Content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<HomePage />} />
          <Route path="/shirts" element={<ShirtsPage />} />
          <Route path="/tshirts" element={<TShirtsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>

      {/* Main Footer: render only once */}
      <Footer />

    </div>
  );
}
