
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Heartfelt Curation",
      desc: "Each item is handpicked with love, focusing on craftsmanship and the emotions it evokes. We seek beauty in the overlooked."
    },
    {
      title: "Warm Sanctuary",
      desc: "Our space is designed to be a refuge where you can breathe slowly and find peace. A soft light in the heart of Namdaemun."
    },
    {
      title: "A Sense of Place",
      desc: "Deeply rooted in the market's history, we blend traditional Korean aesthetics with modern poetic sensibilities."
    }
  ];

  return (
    <section className="py-32 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-900 mb-6">Our Specialty</h2>
          <h3 className="text-5xl md:text-6xl font-serif italic text-stone-800">The KYUNG HEE SA Essence</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-16">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col relative">
                <div className="flex items-center mb-6">
                   <span className="text-orange-900/10 text-7xl font-serif absolute -left-8 -top-8 pointer-events-none">0{i+1}</span>
                   <h4 className="text-2xl font-serif text-stone-900 relative z-10">{f.title}</h4>
                </div>
                <p className="text-stone-500 leading-relaxed font-light pl-6 border-l border-stone-200">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 group overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1563630423918-b58f07336ac9?auto=format&fit=crop&q=80&w=1200" 
                alt="Atmospheric Korean Tea Set" 
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100/50 -z-0 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-stone-200/50 -z-0 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block max-w-[280px] z-20 border border-stone-100">
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">Today's Curation</p>
              <p className="font-serif italic text-stone-800 text-lg leading-snug">"The warmth of tea reflected in the glaze of a bowl."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
