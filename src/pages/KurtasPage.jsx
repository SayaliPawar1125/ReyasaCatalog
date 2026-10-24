import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';

export default function KurtasPage() {
  const kurtas = productsData.filter(p => p.type === 'kurta');

  return (
    <div className="w-100">
      {/* Premium Dark Header Strip Panel */}
      <div className="catalog-header-banner text-center">
        <h1 className="font-serif uppercase m-0">KURTAS</h1>
        <p className="fst-italic mt-2 mb-0">Tradition in every thread.</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">
          {kurtas.map(product => (
            <div key={product.id} className="col-6 col-md-3">
              <div className="product-card">
                <div className="favorite-heart">
                  <i className="bi bi-heart"></i>
                </div>
                
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <div className="img-wrapper-3-4 shadow-sm">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="text-start ps-1">
                    <h3 className="small fw-normal text-secondary m-0 text-truncate" style={{ fontSize: '0.85rem' }}>{product.name}</h3>
                    <p className="fw-semibold small mt-1 text-dark">₹{product.price}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Panel */}
        <nav className="mt-5 d-flex justify-content-center">
          <ul className="pagination reyasa-pagination align-items-center">
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">&gt;</span></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
