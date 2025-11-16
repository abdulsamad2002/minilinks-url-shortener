"use client"

import React from "react";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-zinc-950 min-h-screen w-full px-4 sm:px-6 md:px-8 py-12 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 sm:space-y-10">
        <div className="inline-flex items-center justify-center mb-6">
          <AlertCircle className="text-zinc-600" size={64} strokeWidth={1.5} />
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-zinc-800 tracking-tighter leading-none">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Page Not Found
          </h2>
          
          <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed px-4">
            The page you're looking for doesn't exist or has been moved. Perhaps the link has expired or was mistyped.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 pt-6">
          <a 
            href="/"
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-zinc-100 text-zinc-950 font-semibold text-sm sm:text-base tracking-wide uppercase border-2 border-zinc-100 hover:bg-zinc-950 hover:text-zinc-100 transition-all duration-500 relative overflow-hidden w-full sm:w-auto"
          >
            <Home size={20} className="relative z-10" />
            <span className="relative z-10">Go Home</span>
            <div className="absolute inset-0 bg-zinc-950 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
          
          <button 
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-transparent text-zinc-400 font-semibold text-sm sm:text-base tracking-wide uppercase border-2 border-zinc-800 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-500 w-full sm:w-auto"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        <div className="pt-8 sm:pt-12">
          <div className="bg-zinc-900/30 border-2 border-zinc-800 p-6 sm:p-8 text-left">
            <h3 className="text-zinc-400 text-xs uppercase tracking-widest font-semibold mb-4">
              Common Causes
            </h3>
            <ul className="space-y-3 text-zinc-500 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 mt-1">•</span>
                <span>The shortened link may have been typed incorrectly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 mt-1">•</span>
                <span>The link code is invalid or doesn't exist in our system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 mt-1">•</span>
                <span>The page you're trying to access has been removed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
    </div>
  );
}