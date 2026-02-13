
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1590333746438-281f69638659?auto=format&fit=crop&q=80&w=2000" 
        alt="Korean Traditional Ceramics and Warm Light" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-6 drop-shadow-xl">
            A Warm Encounter
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase drop-shadow-lg">
            KYUNG HEE SA : Seoul's Hidden Sanctuary
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
