import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-zinc-950 flex flex-col justify-center w-full min-h-screen items-center px-4 sm:px-6 md:px-8 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zinc-100 tracking-tight leading-tight px-4">
          The most simple URL shortener in the market
        </h1>
        
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
          Shorten your URL right now!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 pt-4">
          <Link 
            href="/shorten"
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-zinc-100 text-zinc-950 font-semibold text-sm sm:text-base tracking-wide uppercase border-2 border-zinc-100 hover:bg-zinc-950 hover:text-zinc-100 transition-all duration-500 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10">Try Now</span>
            <ArrowRight 
              size={20} 
              className="relative z-10 transition-transform duration-500 group-hover:translate-x-1" 
            />
            <div className="absolute inset-0 bg-zinc-950 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Link>
          
          <Link 
            href="/about"
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-transparent text-zinc-400 font-semibold text-sm sm:text-base tracking-wide uppercase border-2 border-zinc-800 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-500 w-full sm:w-auto"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
    </div>
  );
};

export default Home;