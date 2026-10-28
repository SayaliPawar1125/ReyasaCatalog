
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import brandLogo from '../assets/logo.jpeg';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Active navigation link styling
  const activeClass = (path) =>
    `nav-link ${
      location.pathname === path
        ? 'active fw-bold text-white'
        : 'text-white-50'
    }`;

  // Navigate to Our Story
  const handleScrollTo = () => {
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        document.getElementById('our-story')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300);

      return;
    }

    document.getElementById('our-story')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Close the menu when a navigation link is clicked
  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-3 shadow">
      <div className="container-fluid">

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-controls="reyasaNavbar"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div
          id="reyasaNavbar"
          className={`navbar-collapse ${
            menuOpen ? 'd-flex' : 'd-none'
          } d-lg-flex flex-column flex-lg-row align-items-center justify-content-center`}
        >

          {/* Left Navigation Links */}
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 gap-lg-3 align-items-center">

            <li className="nav-item">
              <Link
                to="/"
                className={activeClass('/')}
                onClick={handleNavigation}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <button
                type="button"
                onClick={handleScrollTo}
                className="nav-link text-white-50 bg-transparent border-0"
              >
                Our Story
              </button>
            </li>

          </ul>

          {/* Center Logo and Brand Name */}
          <div className="mx-lg-4 my-2 my-lg-0 text-center">
            <Link
              to="/"
              onClick={handleNavigation}
              className="navbar-brand d-flex flex-column align-items-center m-0 gap-1"
            >
              <img
                src={brandLogo}
                alt="REYASA Logo"
                className="rounded-circle border border-secondary"
                style={{
                  height: '55px',
                  width: '55px',
                  objectFit: 'cover',
                }}
              />

              <span
                className="text-white fw-semibold"
                style={{
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  fontFamily: 'serif',
                }}
              >
                REYASA
              </span>
            </Link>
          </div>

          {/* Right Navigation Links */}
          <ul className="navbar-nav me-lg-auto mb-2 mb-lg-0 gap-lg-3 align-items-center">

            <li className="nav-item">
              <Link
                to="/shirts"
                className={activeClass('/shirts')}
                onClick={handleNavigation}
              >
                Shirts
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/tshirts"
                className={activeClass('/tshirts')}
                onClick={handleNavigation}
              >
                T-Shirts
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}
