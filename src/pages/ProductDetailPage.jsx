
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/Products';

export default function ProductDetailPage() {
  const { id } = useParams();

  // Find the selected product
  const product = productsData.find(
    (item) => item.id === id
  );

  // Get product images and remove empty or duplicate values
  const productImages = product
    ? [
        ...(Array.isArray(product.images)
          ? product.images
          : product.images
            ? Object.values(product.images)
            : []),
        product.img,
      ].filter(
        (image, index, array) =>
          typeof image === 'string' &&
          image.trim() !== '' &&
          array.indexOf(image) === index
      )
    : [];

  // Selected main image
  const [selectedImage, setSelectedImage] = useState(null);

  // Update image when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(productImages[0] || null);
  }, [id]);

  // Product not found
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-3">Product not found</h2>

        <Link
          to="/shirts"
          className="btn btn-dark rounded-0"
        >
          Back to Shirts
        </Link>
      </div>
    );
  }

  // =====================================================
  // WHATSAPP ENQUIRY
  // =====================================================

  // REYASA WhatsApp number with India country code
  const supportContact = '918010507300';

  // Automatically include the selected product name
  const rawText = `Hello REYASA team, I am interested in the product "${product.name}". Could you please provide more details about its availability?`;

  const whatsappUrl =
    `https://wa.me/${supportContact}?text=${encodeURIComponent(rawText)}`;

  // =====================================================
  // RECOMMENDED PRODUCTS
  // =====================================================

  const recommendations = productsData
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  // =====================================================
  // CATEGORY NAVIGATION: SHIRTS AND T-SHIRTS ONLY
  // =====================================================

  const categoryPath =
    product.type === 'tshirt' ? '/tshirts' : '/shirts';

  const categoryName =
    product.type === 'tshirt' ? 'T-Shirts' : 'Shirts';

  return (
    <div className="container py-4 py-md-5">

      {/* =====================================================
          MAIN PRODUCT LAYOUT
      ===================================================== */}

      <div className="row g-4 g-lg-5 align-items-start mb-5">

        {/* LEFT SIDE: PRODUCT GALLERY */}

        <div className="col-12 col-md-7">
          <div className="row g-2">

            {/* Vertical Thumbnail Images */}

            <div className="col-2">
              <div className="d-flex flex-column gap-2">

                {productImages.map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(src)}
                    className={`p-1 bg-white ${
                      selectedImage === src
                        ? 'border border-dark'
                        : 'border border-light-subtle'
                    }`}
                    style={{
                      width: '100%',
                      aspectRatio: '3 / 4',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    aria-label={`View product image ${index + 1}`}
                    aria-pressed={selectedImage === src}
                  >
                    <img
                      src={src}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </button>
                ))}

              </div>
            </div>

            {/* Large Main Product Image */}

            <div className="col-10">
              <div className="bg-white border p-2 shadow-sm">

                <div
                  className="position-relative w-100 overflow-hidden"
                  style={{ aspectRatio: '3 / 4' }}
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt={product.name}
                      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    />
                  ) : (
                    <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                      <span className="text-secondary">
                        Product image coming soon
                      </span>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: PRODUCT INFORMATION */}

        <div className="col-12 col-md-5 text-start">

          {/* Breadcrumb Navigation */}

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase mb-2 small">

              <li className="breadcrumb-item">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="breadcrumb-item">
                <Link
                  to={categoryPath}
                  className="text-secondary text-decoration-none"
                >
                  {categoryName}
                </Link>
              </li>

              <li
                className="breadcrumb-item active text-dark"
                aria-current="page"
              >
                {product.name}
              </li>

            </ol>
          </nav>

          {/* Product Name */}

          <h1 className="font-serif text-dark mb-3 fw-normal h2">
            {product.name}
          </h1>

          {/* Product Description */}

          <div className="border-top border-bottom border-light-subtle py-3 my-4">
            <p className="text-muted small fw-light lh-lg mb-0">
              {product.description ||
                `Discover the REYASA ${product.type}, designed for comfortable everyday styling.`}
            </p>
          </div>

          {/* Product Image Count */}

          <p className="text-secondary small mb-3">
            {productImages.length} product image
            {productImages.length === 1 ? '' : 's'}
          </p>

          {/* WhatsApp Enquiry Button */}

          <div className="d-flex flex-column gap-2 mt-4">

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-white rounded-0 text-uppercase py-3 small fw-semibold d-flex align-items-center justify-content-center gap-2"
              style={{
                backgroundColor: '#25D366',
                border: 'none',
              }}
            >
              <i className="bi bi-whatsapp"></i>
              WhatsApp Enquiry
            </a>

          </div>

        </div>
      </div>

      {/* =====================================================
          YOU MAY ALSO LIKE
      ===================================================== */}

      <section className="border-top border-light-subtle pt-5 mt-5">

        <h2 className="font-serif text-start h4 text-dark mb-4 fw-normal">
          You may also like
        </h2>

        <div className="row g-3">

          {recommendations.map((item) => (
            <div
              key={item.id}
              className="col-6 col-md-3"
            >
              <Link
                to={`/product/${item.id}`}
                className="text-decoration-none"
              >
                <div className="product-card p-0 shadow-sm border-0">

                  {/* Recommended Product Image */}

                  <div
                    className="overflow-hidden"
                    style={{ aspectRatio: '3 / 4' }}
                  >
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.name}
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

                  {/* Recommended Product Name */}

                  <div className="p-2 text-start">
                    <h3
                      className="text-secondary small fw-normal mb-0"
                      style={{ fontSize: '0.8rem' }}
                    >
                      {item.name}
                    </h3>
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
