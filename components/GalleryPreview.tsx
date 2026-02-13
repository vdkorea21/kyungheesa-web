
import React from 'react';

interface GalleryPreviewProps {
  onSeeStories: () => void;
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ onSeeStories }) => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1610452392786-82084606272b?auto=format&fit=crop&q=80&w=800",
      alt: "Traditional Korean Pottery (Onggi)"
    },
    {
      src: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&q=80&w=800",
      alt: "Natural Wood and Hanok Patterns"
    },
    {
      src: "https://images.unsplash.com/photo-1620987309320-94e82be979c1?auto=format&fit=crop&q=80&w=800",
      alt: "Elegant White Porcelain"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {images.map((img, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="overflow-hidden rounded-sm aspect-[4/5] w-full mb-6">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">{img.alt}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={onSeeStories}
            className="group relative inline-block px-12 py-5 overflow-hidden border border-stone-800 text-stone-800 uppercase tracking-widest text-sm transition-all duration-500 hover:text-white"
          >
            <span className="relative z-10">View Prop Stories</span>
            <div className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
