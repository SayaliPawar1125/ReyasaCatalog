
import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/Products';

import tshirtsBanner from '../assets/Tshirt/HomeTshirt.png';

export default function TShirtsPage() {
  const tshirts = productsData.filter(
    (product) => product.type === 'tshirt'
  );

  return (
    <div className="w-100">

      {/* Responsive Horizontal Banner */}
      <div
        className="w-100 mb-5 overflow-hidden position-relative"
        style={{
          height: '40vh',
          maxHeight: '450px',
          minHeight: '250px',
        }}
      >
        {/* Banner Image */}
        <img
          src={tshirtsBanner}
          alt="REYASA T-Shirts Collection"
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: 'center 30%' }}
        />

        {/* Banner Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white text-center px-3"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
          }}
        >
          {/* Collection Title */}
          <h5 className="font-serif text-uppercase m-0 display-4 fw-normal">
            T-SHIRTS
          </h5>

          {/* Collection Name */}
          <h1 className="font-serif text-uppercase mt-2 mb-0 display-5 display-md-1 fw-normal ">
            ECHOES WE ERASED
          </h1>

          {/* Collection Description */}
          <p className="fst-italic mt-3 mb-0 text-white small mx-auto">
            A collection of small, thoughtfully designed T-shirt patches
            featuring extinct and possibly extinct species, bringing
            forgotten lives back into our everyday conversations.
            Each patch serves as a reminder of the fragile relationship
            between humans and nature, encouraging awareness,
            conservation, and a more responsible coexistence with the
            natural world.
          </p>

          <p className="fst-italic mt-2 mb-0 text-white fw-semibold small">
            A small patch. A lost story. A reminder to protect what remains.
          </p>
        </div>
      </div>

      {/* T-Shirts Grid */}
      <div className="container pb-5">
        <div className="row g-4">

          {tshirts.map((product) => (
            <div
              key={product.id}
              className="col-6 col-md-3"
            >
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
                    {product.exampleImage || product.img ? (
                      <img
                        src={product.exampleImage || product.img}
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

          {/* Empty State */}
          {tshirts.length === 0 && (
            <div className="col-12 text-center py-5">
              <p className="text-muted mb-0">
                No T-shirts are available at the moment.
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
