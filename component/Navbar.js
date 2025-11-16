import React from "react";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative bg-zinc-950 border-b border-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 group"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-100 tracking-tight transition-colors duration-300 group-hover:text-zinc-300">
              MiniLinks
            </span>
            <div className="relative">
              <Link2
                className="text-zinc-500 transition-all duration-500 group-hover:text-zinc-400 group-hover:rotate-90"
                size={20}
                strokeWidth={2.5}
              />
            </div>
          </Link>

          <ul className="flex items-center gap-6 sm:gap-8 md:gap-12">
            <li>
              <Link
                href={"/about"}
                className="relative text-zinc-400 hover:text-zinc-100 transition-colors duration-500 text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase group"
              >
                <span className="relative z-10">About</span>
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-zinc-100 group-hover:w-full transition-all duration-700 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/abdulsamad2002"}
                className="relative group block p-1.5 sm:p-2 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
                aria-label="GitHub"
              >
                <Github
                  size={18}
                  className="text-zinc-400 group-hover:text-zinc-100 transition-colors duration-500"
                  strokeWidth={2}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
