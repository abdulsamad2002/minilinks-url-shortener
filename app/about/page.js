import React from "react";
import { Link2, Zap, Shield, Code } from "lucide-react";

const About = () => {
  return (
    <div className="bg-zinc-950 min-h-screen w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none"></div>

      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Link2 className="text-zinc-400" size={40} strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight mb-6">
            About MiniLinks
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The most straightforward URL shortener you'll ever use. No
            unnecessary features, no distractions—just pure functionality.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 mb-16 sm:mb-20 md:mb-24">
          <div className="bg-zinc-900/50 border-2 border-zinc-800 p-8 sm:p-10 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-6">
              Why MiniLinks?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              In a world cluttered with overcomplicated tools, MiniLinks stands
              apart. We believe that a URL shortener should do one thing
              exceptionally well: shorten URLs. No analytics dashboards, no
              premium tiers, no bloated features you'll never use.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Simply paste your long URL, click generate, and receive a clean,
              shareable mini link. That's it. That's the entire product. And
              that's exactly how it should be.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-zinc-900/30 border-2 border-zinc-800 p-6 sm:p-8 hover:border-zinc-700 transition-all duration-500 group">
              <div className="mb-6">
                <Zap
                  className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500"
                  size={32}
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight mb-3 uppercase">
                Lightning Fast
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Generate shortened links in milliseconds. No loading screens, no
                waiting—just instant results.
              </p>
            </div>

            <div className="bg-zinc-900/30 border-2 border-zinc-800 p-6 sm:p-8 hover:border-zinc-700 transition-all duration-500 group">
              <div className="mb-6">
                <Shield
                  className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500"
                  size={32}
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight mb-3 uppercase">
                Secure & Reliable
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Your links are stored securely and remain active indefinitely.
                Built with modern security practices.
              </p>
            </div>

            <div className="bg-zinc-900/30 border-2 border-zinc-800 p-6 sm:p-8 hover:border-zinc-700 transition-all duration-500 group sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Code
                  className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500"
                  size={32}
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight mb-3 uppercase">
                Open Source
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                Built transparently with modern technologies. Check out our code
                on GitHub and see how it works.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 border-2 border-zinc-800 p-8 sm:p-10 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-6">
              The Philosophy
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                MiniLinks was created out of frustration with existing URL
                shorteners that prioritize monetization over user experience. We
                wanted something different—something honest.
              </p>
              <p>
                No tracking pixels. No unnecessary redirects. No premium
                features hidden behind paywalls. Just a simple, elegant tool
                that respects your time and privacy.
              </p>
              <p>
                This is URL shortening in its purest form. Minimalist by design,
                powerful by nature.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/shorten"
            className="inline-flex items-center justify-center gap-3 px-10 sm:px-12 md:px-14 py-4 sm:py-5 bg-zinc-100 text-zinc-950 font-semibold text-sm sm:text-base tracking-wide uppercase border-2 border-zinc-100 hover:bg-zinc-950 hover:text-zinc-100 transition-all duration-500 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Shortening Now</span>
            <div className="absolute inset-0 bg-zinc-950 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
    </div>
  );
};

export default About;
