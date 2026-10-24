import React from 'react';
import { Link } from 'react-router-dom';

// Import image assets directly from your assets folder structure
import bgImage from '../assets/reyasa-background.png';
import shirt1 from '../assets/Shirt1.jpg';
import shirt5 from '../assets/shirt5.jpg';
import shirt8 from '../assets/shirt8.jpg';

export default function HomePage() {
  return (
    <div className="w-100">
      
      {/* Hero Jumbotron Section with custom local backdrop */}
      <div 
        className="d-flex align-items-center justify-content-center text-center text-white px-3"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh'
        }}
      >
        <div>
          <h1 className="font-serif tracking-widest-lg text-white mb-2 display-3 fw-normal">REYASA</h1>
          <p className="fst-italic tracking-wider-md text-white-50 mb-4 small">Style for every season.</p>
          <a href="#collections" className="btn btn-outline-light rounded-0 px-4 py-2 text-uppercase tracking-wider-md btn-sm">Explore Collection</a>
        </div>
      </div>

      {/* Grid Collections Segment */}
      <section id="collections" className="container py-5 my-4">
        <div className="text-center mb-5">
          <h2 className="font-serif text-dark display-6">Our Collection</h2>
          <p className="text-muted small fst-italic">Timeless pieces for the modern you.</p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* Collection Grid Entry 1: Shirts */}
          <div className="col-md-4">
            <div className="product-card p-0">
              <div className="img-wrapper-3-4">
                <img src={shirt1} alt="Shirts Portfolio" />
              </div>
              <div className="p-4 text-start">
                <h3 className="font-serif h5 text-dark mb-3">Shirts</h3>
                <Link to="/shirts" className="btn btn-dark btn-sm rounded-0 text-uppercase tracking-wider-md py-2 px-3" style={{ fontSize: '11px' }}>Shop Now &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Collection Grid Entry 2: T-Shirts */}
          <div className="col-md-4">
            <div className="product-card p-0">
              <div className="img-wrapper-3-4">
                <img src={shirt5} alt="T-Shirts Portfolio" />
              </div>
              <div className="p-4 text-start">
                <h3 className="font-serif h5 text-dark mb-3">T-Shirts</h3>
                <Link to="/tshirts" className="btn btn-dark btn-sm rounded-0 text-uppercase tracking-wider-md py-2 px-3" style={{ fontSize: '11px' }}>Shop Now &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Collection Grid Entry 3: Kurtas */}
          <div className="col-md-4">
            <div className="product-card p-0">
              <div className="img-wrapper-3-4">
                <img src={shirt8} alt="Kurtas Portfolio" />
              </div>
              <div className="p-4 text-start">
                <h3 className="font-serif h5 text-dark mb-3">Kurtas</h3>
                <Link to="/kurtas" className="btn btn-dark btn-sm rounded-0 text-uppercase tracking-wider-md py-2 px-3" style={{ fontSize: '11px' }}>Shop Now &rarr;</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Statement Row Callout block */}
      <section className="bg-dark text-white text-center py-5 px-3">
        <div className="container py-3 max-w-2xl" style={{ maxWidth: '650px' }}>
          <h2 className="font-serif mb-4 tracking-wider-md h3">More Than Just Clothes</h2>
          <p className="text-white-50 fw-light mb-4 small lh-lg">
            At REYASA, we believe in clothing that tells a story. Our collection blends comfort, style, and individuality — designed for every occasion, every season.
          </p>
          <Link to="/story" className="btn btn-outline-light rounded-0 px-4 py-2 text-uppercase tracking-wider-md btn-sm">Our Story</Link>
        </div>
      </section>

    </div>
  );
}
