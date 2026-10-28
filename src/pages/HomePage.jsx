
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import OurStoryPage from './OurStoryPage';

import bgImage from '../assets/reyasa-background.png';
import HomeShirt from '../assets/Shirt/HomeShirt.jpg';
import HomeTshirt from '../assets/Tshirt/HomeTshirt.png';

export default function HomePage() {
  const [showCollections, setShowCollections] = useState(false);
  const collectionsRef = useRef(null);

  const collections = [
    {
      title: 'Shirts',
      image: HomeShirt,
      link: '/shirts',
      alt: 'REYASA Shirts Collection',
    },
    {
      title: 'T-Shirts',
      image: HomeTshirt,
      link: '/tshirts',
      alt: 'REYASA T-Shirts Collection',
    },
  ];

  // Animate collection cards when they enter the viewport.
  useEffect(() => {
    const section = collectionsRef.current;

    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setShowCollections(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCollections(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-100">

      {/* Hero Image: Separate from Navbar */}
      <section
        className="w-100 position-relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '450px',
          height: 'min(65vw, 650px)',
        }}
      >
        {/* Explore Collection Button */}
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <a
            href="#collections"
            className="btn btn-outline-light rounded-0 px-4 py-3 text-uppercase"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-100">
        <OurStoryPage />
      </section>

      {/* Collections */}
      <section
        id="collections"
        ref={collectionsRef}
        className="container py-4 py-md-5 my-3 my-md-4"
      >

        {/* Heading */}
        <div className="text-start ms-md-5 mb-4 mb-md-5">
          <h2 className="display-6 fw-normal text-dark mb-3">
            Our Collection
          </h2>

          <p className="text-muted fst-italic mb-0">
            Timeless pieces for the modern you.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="row g-4 justify-content-center">
          {collections.map((collection, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4"
              key={collection.title}
            >
              <article
                className="card h-100 border-0 rounded-0 shadow-sm"
                style={{
                  opacity: showCollections ? 1 : 0,
                  transform: showCollections
                    ? 'translateY(0) scale(1)'
                    : 'translateY(35px) scale(0.92)',
                  transition: `opacity 700ms ease ${index * 180}ms, transform 700ms ease ${index * 180}ms`,
                }}
              >

                {/* Collection Image */}
                <Link
                  to={collection.link}
                  className="d-block overflow-hidden"
                  aria-label={`Explore ${collection.title}`}
                >
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="img-fluid w-100 object-fit-cover"
                    loading="lazy"
                    style={{
                      height: 'clamp(260px, 65vw, 400px)',
                      transition: 'transform 500ms ease',
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.transform = 'scale(1.06)';
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </Link>

                {/* Collection Details */}
                <div className="card-body p-3 p-md-4 text-start">
                  <h3 className="h5 fw-normal mb-3">
                    <Link
                      to={collection.link}
                      className="text-dark text-decoration-none"
                    >
                      {collection.title}
                    </Link>
                  </h3>

                  <Link
                    to={collection.link}
                    className="btn btn-dark btn-sm rounded-0 text-uppercase px-3 py-2"
                  >
                    View All <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>

              </article>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}
