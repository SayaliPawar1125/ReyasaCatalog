import React from 'react';

export default function OurStoryPage() {
  return (
    <div className="container py-5 my-3">
      
      {/* Brand Ethos Text Description Paragraph Section */}
      <section className="text-center mx-auto mb-5 pb-4" style={{ maxWidth: '700px' }}>
        <span className="text-uppercase tracking-wider-md text-muted small fw-semibold d-block mb-2">Our Philosophy</span>
        <h1 className="font-serif text-dark display-5 mb-4">Our Story</h1>
        <div className="text-muted small fw-light lh-lg text-start space-y-4" style={{ textAlign: 'justify' }}>
          <p className="mb-3">
            <strong>README — A Story of Thoughtful Creation.</strong> Reyasa was born from a simple thought: What if the things we create could mean more than what we wear? Rooted in Indian artistry and inspired by nature, Reyasa explores the relationship between textiles, art, and the world around us.
          </p>
          <p className="mb-3">
            We create thoughtfully designed clothing and textile products that bring original artwork, meaningful stories, and handcrafted details into everyday life. We believe in creating less, but creating with purpose.
          </p>
          <p className="mb-4">
            Through limited collections, mindful material choices, and distinctive prints, we aim to move beyond mass-produced fashion and offer pieces that carry individuality, character, and a deeper connection to their origins. Reyasa is not just about creating products; it is about creating pieces that have something to say.
          </p>
          <p className="text-center text-dark font-serif h5 fst-italic mt-4 fw-normal">
            Designed in India. Inspired by nature. Created with purpose.
          </p>
        </div>
      </section>

      {/* Founders Contact Profiles Layout Index Cards */}
      <section className="border-top border-light-subtle pt-5 mt-4">
        <h2 className="font-serif text-center h3 text-dark mb-5">Two Founders, One Shared Vision</h2>
        <div className="row g-4 justify-content-center">
          
          {/* Card Component 1: Pranjali Babar */}
          <div className="col-md-5">
            <div className="card border-light-subtle rounded-0 shadow-sm p-4 text-center bg-white">
              <div className="rounded-circle bg-light border text-muted d-flex align-items-center justify-content-center mx-auto mb-3 font-serif h3" style={{ width: '80px', height: '80px' }}>PB</div>
              <h3 className="font-serif h5 text-dark fw-semibold mb-1">Pranjali Babar</h3>
              <p className="text-muted uppercase small tracking-wider-md mb-4" style={{ fontSize: '11px' }}>Co-Founder</p>
              <div className="d-flex gap-2">
                <a href="tel:9158370032" className="btn btn-light border btn-sm flex-fill rounded-0 text-uppercase small py-2"><i className="bi bi-telephone me-1"></i> Call</a>
                <a href="https://wa.me" target="_blank" rel="noreferrer" className="btn btn-success btn-sm flex-fill rounded-0 text-uppercase small py-2"><i className="bi bi-whatsapp me-1"></i> WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Card Component 2: Darshan Deshmukh */}
          <div className="col-md-5">
            <div className="card border-light-subtle rounded-0 shadow-sm p-4 text-center bg-white">
              <div className="rounded-circle bg-light border text-muted d-flex align-items-center justify-content-center mx-auto mb-3 font-serif h3" style={{ width: '80px', height: '80px' }}>DD</div>
              <h3 className="font-serif h5 text-dark fw-semibold mb-1">Darshan Deshmukh</h3>
              <p className="text-muted uppercase small tracking-wider-md mb-4" style={{ fontSize: '11px' }}>Co-Founder</p>
              <div className="d-flex gap-2">
                <a href="tel:+918010507300" className="btn btn-light border btn-sm flex-fill rounded-0 text-uppercase small py-2"><i className="bi bi-telephone me-1"></i> Call</a>
                <a href="https://wa.me" target="_blank" rel="noreferrer" className="btn btn-success btn-sm flex-fill rounded-0 text-uppercase small py-2"><i className="bi bi-whatsapp me-1"></i> WhatsApp</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
