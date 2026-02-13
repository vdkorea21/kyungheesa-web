
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import GalleryPreview from './components/GalleryPreview';
import Features from './components/Features';
import MapSection from './components/MapSection';
import PropStoriesDetail from './components/PropStoriesDetail';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === Page.Home ? (
          <>
            <Hero />
            <About />
            <GalleryPreview onSeeStories={() => setCurrentPage(Page.PropStories)} />
            <Features />
            <MapSection />
          </>
        ) : (
          <PropStoriesDetail onBack={() => setCurrentPage(Page.Home)} />
        )}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-stone-100 mb-4 italic">KYUNG HEE SA</h2>
          <p className="text-sm uppercase tracking-widest mb-8">Namdaemun Market, Seoul</p>
          <div className="flex justify-center space-x-6 mb-8 text-sm">
            <a href="#" className="hover:text-stone-100 transition-colors">Instagram</a>
            <a href="#" className="hover:text-stone-100 transition-colors">Contact</a>
            <a href="#" className="hover:text-stone-100 transition-colors">Terms</a>
          </div>
          <p className="text-xs">&copy; 2024 KYUNG HEE SA. All Rights Reserved. English Version.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
