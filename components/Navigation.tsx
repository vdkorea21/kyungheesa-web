
import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => onNavigate(Page.Home)}
          className="text-2xl font-serif tracking-tighter hover:opacity-70 transition-opacity"
        >
          KYUNG HEE SA
        </button>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-stone-600">
          <button 
            onClick={() => onNavigate(Page.Home)}
            className={`hover:text-orange-800 transition-colors ${currentPage === Page.Home ? 'text-orange-800' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate(Page.PropStories)}
            className={`hover:text-orange-800 transition-colors ${currentPage === Page.PropStories ? 'text-orange-800' : ''}`}
          >
            Prop Stories
          </button>
          <button className="hover:text-orange-800 transition-colors">Visit</button>
        </div>

        <button className="md:hidden text-stone-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
