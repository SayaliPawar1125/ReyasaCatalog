
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pt-md-5 pb-4 mt-auto border-top border-secondary">
      <div className="container px-3 px-md-4">
        <div className="row g-4 justify-content-between">

          {/* Column 1: Core Customer appreciation segment */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h4 className="font-serif tracking-wider-md text-uppercase mb-3" style={{ color: '#f8f9fa', fontSize: '1.25rem' }}>
              REYASA
            </h4>

            <p className="small text-white-50 lh-lg mb-0 mx-auto mx-md-0" style={{ maxWidth: '320px', textAlign: 'inherit' }}>
              Thank you for supporting mindful creation, slower consumption cycles, and original hand-detailed Indian textiles. Every piece carries an individual design narrative crafted with complete purpose.
            </p>
          </div>

          {/* Column 2: Management Contacts */}
          <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
            <h5 className="small text-uppercase tracking-wider-md text-secondary mb-3">
              Connect With Our Team
            </h5>

            <div className="small lh-lg text-white-50">
              <div className="mb-2">
                <strong className="text-white d-block">Pranjali Babar</strong>

                <a
                  href="tel:9158370032"
                  className="text-decoration-none text-white-50 opacity-75 hover-white"
                  style={{ transition: 'opacity 0.2s' }}
                >
                  +91 91583 70032
                </a>
              </div>

              <div className="mb-3">
                <strong className="text-white d-block">Darshan Deshmukh</strong>

                <a
                  href="tel:+918010507300"
                  className="text-decoration-none text-white-50 opacity-75 hover-white"
                  style={{ transition: 'opacity 0.2s' }}
                >
                  +91 80105 07300
                </a>
              </div>

              <div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-white-50 opacity-75 hover-white d-inline-flex align-items-center gap-1"
                  style={{ transition: 'opacity 0.2s' }}
                >
                  <i className="bi bi-instagram"></i> @reyasa__
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Store Guidelines & Order Constraints */}
          <div className="col-12 col-sm-6 col-md-4 text-center text-md-start">
            <h5 className="small text-uppercase tracking-wider-md text-secondary mb-3">
              Store & Return Policies
            </h5>

            <ul className="list-unstyled small text-white-50 lh-base ps-0 mb-0">

              <li className="mb-3 d-flex flex-column flex-md-row align-items-center align-items-md-start gap-1 gap-md-2">
                <span className="text-danger d-none d-md-inline">•</span>

                <span>
                  Because our items are handmade and limited, <strong>we do not accept returns or exchanges once a shirt is purchased</strong>.
                </span>
              </li>

              <li className="mb-2 d-flex flex-column flex-md-row align-items-center align-items-md-start gap-1 gap-md-2">
                <span className="text-white-50 d-none d-md-inline">•</span>

                <span>
                  Dry clean or gentle hand wash recommended for pure cotton fabric to maintain original color integrity.
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Brand Mission Statement Segment */}
        <div className="row mt-4 mt-md-5 justify-content-center text-center">
          <div className="col-12 col-md-8">
            <h2 className="font-serif mb-3 tracking-wider-md h4">
              More Than Just Clothes
            </h2>

            <p className="text-white-50 fw-light mb-0 small lh-lg mx-auto" style={{ maxWidth: '650px' }}>
              At REYASA, we believe in clothing that tells a story. Our collection blends comfort, style, and purposeful design seamlessly.
            </p>
          </div>
        </div>

        {/* Bottom Horizontal License Panel */}
        <div className="row mt-4 pt-3 border-top border-secondary-subtle align-items-center">
          <div className="col-12 text-center">
            <p className="m-0 small text-white-50" style={{ fontSize: '11px', opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} REYASA All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
