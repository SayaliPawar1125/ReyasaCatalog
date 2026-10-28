
import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/Products';
import shirtsBanner from '../assets/Shirt/HomeShirt.jpg';

export default function ShirtsPage() {
  const shirts = productsData.filter(
    (product) => product.type === 'shirt'
  );

  return (
    <div className="w-100">
      {/* Responsive Horizontal Banner */}
      <div
        className="w-100 mb-5 overflow-hidden position-relative"
        style={{
          height: '40vh',
          maxHeight: '450px',
          minHeight: '250px'
        }}
      >
        <img
          src={shirtsBanner}
          alt="REYASA Shirts Collection"
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: 'center 30%' }}
        />

        {/* Banner Text */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
        >
          <h1 className="font-serif text-uppercase m-0 display-4 fw-normal">
            SHIRTS
          </h1>

          <p className="fst-italic mt-2 mb-0 text-white-50 small text-center px-3">
            Classic. Versatile. Always in style.
          </p>
        </div>
      </div>

      {/* Shirts Grid */}
      <div className="container pb-5">
        <div className="row g-4">
          {shirts.map((product) => (
            <div key={product.id} className="col-6 col-md-3">
              <div className="product-card h-100 d-flex flex-column">
                <Link
                  to={`/product/${product.id}`}
                  className="text-decoration-none text-dark d-flex flex-column h-100"
                >
                  {/* Product Image */}
                  <div
                    className="overflow-hidden mb-2 shadow-sm"
                    style={{ aspectRatio: '3 / 4' }}
                  >
                    {product.img ? (
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-100 h-100 object-fit-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                        <span className="text-secondary small text-center px-2">
                          Image coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Name */}
                  <div className="text-start ps-1 mt-auto">
                    <h3
                      className="fw-normal text-secondary m-0"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {shirts.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="text-muted mb-0">
                No shirts are available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
