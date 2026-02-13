
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-orange-800 mb-4">Finding Us</h2>
          <h3 className="text-4xl font-serif italic mb-6">Path to KYUNG HEE SA</h3>
          <p className="text-stone-600 leading-relaxed mb-8 font-light">
            We are nestled within the historic alleys of Namdaemun Market. 
            Look for the warm wooden door and the soft glow of our lanterns. 
            A quiet sanctuary awaits just around the corner from the Great South Gate.
          </p>
          <div className="space-y-4 text-stone-800 font-medium">
            <p className="flex items-center">
              <span className="w-8">📍</span>
              12-3, Namdaemunsijang 4-gil, Jung-gu, Seoul
            </p>
            <p className="flex items-center">
              <span className="w-8">🚇</span>
              Hoehyeon Station (Line 4), Exit 5
            </p>
            <p className="flex items-center">
              <span className="w-8">🕒</span>
              Daily 11:00 AM — 08:00 PM
            </p>
          </div>
        </div>
        <div className="bg-stone-200 aspect-video rounded-sm overflow-hidden shadow-inner flex items-center justify-center grayscale">
           <div className="text-center p-8 border border-stone-300">
              <p className="text-stone-500 italic font-serif">Interactive map loading...</p>
              <p className="text-xs uppercase tracking-widest mt-2">Namdaemun Historic District</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
