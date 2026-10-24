import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  
  // Find product by id string or use fallback if undefined
  const product = productsData.find(p => p.id === id) || productsData[0];
  
  // Custom pre-configured WhatsApp chat message setup
  const supportContact = "919158370032";
  const rawText = `Hello REYASA team, I am looking to buy the "${product.name}" in Size: [${selectedSize}]. Please verify if this item is in stock!`;
  const whatsappUrl = `https://wa.me{supportContact}?text=${encodeURIComponent(rawText)}`;

  // Find other items to show in the "You may also like" grid section
  const recommendations = productsData.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container py-5">
      {/* Main Product Layout Split Container */}
      <div className="row g-4 g-lg-5 align-items-start mb-5">
        
        {/* Left Aspect Side: Thumbnails + Main Photo Preview */}
        <div className="col-12 col-md-7">
          <div className="row g-2">
            {/* Vertically Tracked Small Extra Thumbnails Panel Column */}
            <div className="col-2 d-flex flex-column gap-2">
              {[product.img, product.img, product.img, product.img].map((src, idx) => (
                <div key={idx} className="border border-light-subtle p-1 bg-white cursor-pointer" style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                  <img src={src} alt="preview asset" className="w-100 h-100 object-fit-cover opacity-75 hover-opacity-100" />
                </div>
              ))}
            </div>
            
            {/* Primary Main Visual Zoom Box Display */}
            <div className="col-10">
              <div className="bg-white border p-2 shadow-sm">
                <div className="position-relative w-100" style={{ paddingBottom: '133.33%', overflow: 'hidden' }}>
                  <img src={product.img} alt={product.name} className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Aspect Side: Transactional Buying Operations Panel */}
        <div className="col-12 col-md-5 text-start">
          <nav aria-label="breadcrumb" style={{ fontSize: '11px' }}>
            <ol className="breadcrumb text-uppercase tracking-wider-md mb-2">
              <li className="breadcrumb-item"><Link to="/" className="text-secondary text-decoration-none">Home</Link></li>
              <li className="breadcrumb-item"><Link to={`/${product.type}s`} className="text-secondary text-decoration-none">{product.type}s</Link></li>
              <li className="breadcrumb-item active text-dark" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          <h1 className="font-serif text-dark mb-2 fw-normal h2">{product.name}</h1>
          <p className="h4 text-dark fw-semibold mb-4">₹{product.price}</p>
          
          <div className="border-top border-bottom border-light-subtle py-3 my-4">
            <p className="text-muted small fw-light lh-lg mb-0">
              A timeless classic. This custom {product.type} is crafted mindfully from premium organic textiles. Features a relaxed tailored drape, comfortable clean necklines, and handcrafted details perfect for effortless styling.
            </p>
          </div>

          {/* Size Select Utility Component Matrix */}
          <div className="mb-4">
            <span className="small fw-semibold text-uppercase tracking-wider-md d-block mb-3 text-secondary" style={{ fontSize: '11px' }}>Size:</span>
            <div className="d-flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className="btn rounded-0 text-center d-flex align-items-center justify-content-center border fw-medium"
                  style={{ 
                    width: '44px', 
                    height: '44px', 
                    fontSize: '11px',
                    backgroundColor: selectedSize === size ? '#121212' : '#ffffff',
                    color: selectedSize === size ? '#ffffff' : '#121212',
                    borderColor: selectedSize === size ? '#121212' : '#dee2e6'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Click Action Interface Matrix Triggers */}
          <div className="d-flex flex-column gap-2 mt-4">
            <button className="btn btn-dark rounded-0 text-uppercase tracking-wider-md py-3 small fw-semibold text-white">
              Add To Cart
            </button>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn text-white rounded-0 text-uppercase tracking-wider-md py-3 small fw-semibold d-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: '#25D366', border: 'none' }}
            >
              <i className="bi bi-whatsapp"></i> WhatsApp Enquiry
            </a>
          </div>
        </div>

      </div>

      {/* Recommended Items Bottom Row Section Component */}
      <section className="border-top border-light-subtle pt-5 mt-5">
        <h2 className="font-serif text-start h4 text-dark mb-4 fw-normal">You may also like</h2>
        <div className="row g-3">
          {recommendations.map(item => (
            <div key={item.id} className="col-6 col-md-3">
              <Link to={`/product/${item.id}`} className="text-decoration-none group">
                <div className="product-card p-0 shadow-sm border-0 text-center">
                  <div className="img-wrapper-3-4">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="p-2 text-start">
                    <h3 className="text-secondary small fw-normal text-truncate mb-0" style={{ fontSize: '0.8rem' }}>{item.name}</h3>
                    <p className="text-dark fw-medium small mb-0 mt-1">₹{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
