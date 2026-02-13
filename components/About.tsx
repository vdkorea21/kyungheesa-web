
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-orange-800 mb-8">
          Introducing KYUNG HEE SA
        </h2>
        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-stone-800">
          Located in the heart of Namdaemun Market, KYUNG HEE SA is more than just a prop shop. 
          It is a warm space discovered by chance—a quiet whisper amidst the bustling city streets. 
          Every object here carries a story, carefully curated to bring comfort and light 
          into your daily life. We believe that small things can hold great warmth.
        </p>
      </div>
    </section>
  );
};

export default About;
