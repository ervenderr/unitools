'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold font-display text-primary-600">UniTools</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/tools" className="text-neutral-600 hover:text-primary-600 transition-colors">Tools</Link>
            <Link href="/about" className="text-neutral-600 hover:text-primary-600 transition-colors">About</Link>
            <Link href="/community" className="text-neutral-600 hover:text-primary-600 transition-colors">Community</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-600 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <Link href="/tools" className="block py-2 text-neutral-600 hover:text-primary-600 transition-colors">Tools</Link>
            <Link href="/about" className="block py-2 text-neutral-600 hover:text-primary-600 transition-colors">About</Link>
            <Link href="/community" className="block py-2 text-neutral-600 hover:text-primary-600 transition-colors">Community</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
