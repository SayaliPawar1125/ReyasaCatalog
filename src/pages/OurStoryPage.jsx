import React from 'react';

export default function OurStoryPage() {
  return (
    <section id="our-story" className="container mx-auto">
      {/* Container wrapper aligned to match paragraph layouts */}
      <div className="story-heading text-start">
        <h2 className="story-title">OUR STORY</h2>
      </div>

      <div className="story-content-block">
        <p>
          <strong>A Story of Thoughtful Creation.</strong>{' '}
          Reyasa was born from a simple thought: What if the things
          we create could mean more than what we wear? Rooted in
          Indian artistry and inspired by nature, Reyasa explores
          the relationship between textiles, art, and the world
          around us.
        </p>

        <p>
          We create thoughtfully designed clothing and textile
          products that bring original artwork, meaningful stories,
          and handcrafted details into everyday life. We believe
          in creating less, but creating with purpose.
        </p>

        <p>
          Through limited collections, mindful material choices,
          and distinctive prints, we aim to move beyond
          mass-produced fashion and offer pieces that carry
          individuality, character, and a deeper connection to
          their origins. Reyasa is not just about creating
          products; it is about creating pieces that have
          something to say.
        </p>
        
        <p className="story-tagline">
           Inspire By Nature
        </p>
      </div>
    </section>
  );
}
