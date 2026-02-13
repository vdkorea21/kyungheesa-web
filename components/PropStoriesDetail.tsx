
import React, { useState, useEffect } from 'react';
import { generatePropStories } from '../services/geminiService';

interface PropStoriesDetailProps {
  onBack: () => void;
}

interface Story {
  title: string;
  description: string;
}

const PropStoriesDetail: React.FC<PropStoriesDetailProps> = ({ onBack }) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await generatePropStories();
      setStories(data);
      setLoading(false);
    }
    load();
  }, []);

  const placeholderImages = [
    "https://images.unsplash.com/photo-1578405052959-99426f4327a3?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1618342410313-09794019a589?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1590333746438-281f69638659?auto=format&fit=crop&q=80&w=1000"
  ];

  return (
    <div className="py-32 px-6 min-h-screen bg-warm-beige">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-3 text-stone-400 hover:text-orange-900 mb-20 transition-all uppercase tracking-[0.2em] text-[10px] font-bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Return to Home</span>
        </button>

        <header className="mb-32 text-center">
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 text-stone-900">Prop Stories</h1>
          <div className="w-16 h-[1px] bg-stone-300 mx-auto mb-8"></div>
          <p className="text-stone-500 font-light max-w-2xl mx-auto leading-relaxed text-lg">
            Every object in KYUNG HEE SA holds a silent dialogue between the past and your daily life. 
            Explore the small tales woven into the wood, clay, and fabric of our collection.
          </p>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <div className="w-10 h-10 border-[1px] border-stone-200 border-t-stone-800 rounded-full animate-spin"></div>
            <p className="text-stone-400 font-serif italic tracking-wide">Kyung Hee Sa is gathering stories for you...</p>
          </div>
        ) : (
          <div className="space-y-48">
            {stories.map((story, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                <div className="w-full md:w-1/2 group relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                    <img 
                      src={placeholderImages[idx % placeholderImages.length]} 
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.1] group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-200 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="mb-8 flex items-center space-x-4">
                    <span className="h-[1px] w-8 bg-orange-900"></span>
                    <span className="text-orange-900 text-xs font-bold uppercase tracking-[0.3em]">Story {idx + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif italic mb-8 text-stone-900">{story.title}</h2>
                  <p className="text-stone-500 leading-relaxed font-light text-xl italic border-l-4 border-stone-100 pl-8">
                    "{story.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-64 text-center border-t border-stone-200 pt-32 pb-20">
          <h4 className="font-serif italic text-3xl text-stone-800 mb-10">Visit our warm sanctuary in Namdaemun.</h4>
          <button 
            onClick={onBack}
            className="px-16 py-5 bg-stone-900 text-white uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-orange-900 transition-all duration-500 shadow-2xl"
          >
            Explore More at KYUNG HEE SA
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropStoriesDetail;
