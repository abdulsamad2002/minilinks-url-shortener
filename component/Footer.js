import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative w-full bg-zinc-950 border-t border-zinc-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-zinc-500 text-xs sm:text-sm tracking-wide">
            <span className="font-semibold text-zinc-400">© 2025</span> Abdul Samad
          </div>
          
          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/about" 
              className="text-zinc-500 hover:text-zinc-300 text-xs sm:text-sm tracking-wide transition-colors duration-500 uppercase"
            >
              Privacy
            </Link>
            <Link 
              href="/about" 
              className="text-zinc-500 hover:text-zinc-300 text-xs sm:text-sm tracking-wide transition-colors duration-500 uppercase"
            >
              Terms
            </Link>
            <Link 
              href="/" 
              className="text-zinc-500 hover:text-zinc-300 text-xs sm:text-sm tracking-wide transition-colors duration-500 uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;