"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link2, Copy, Check } from "lucide-react";

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [genLink, setGenLink] = useState("");
  const [display, setDisplay] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);
  const divRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      const code = res.code;
      setGenLink(
        `${process.env.NEXT_PUBLIC_URL || window.location.origin}/ln/${code}`
      );

      setTimeout(() => {
        setDisplay(true);
      }, 500);

      reset();
    } catch (err) {
      console.error("Failed to generate link:", err);
    }
  };

  const handleCopyClick = async () => {
    if (divRef.current) {
      try {
        await navigator.clipboard.writeText(divRef.current.innerText);
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-950 min-h-screen w-full px-4 sm:px-6 md:px-8 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none"></div>

      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Link2 className="text-zinc-400" size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            Generate your mini links now
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base tracking-wide">
            Transform long URLs into clean, shareable links
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="https://example.com/your-long-url"
              {...register("url", {
                required: "URL is required",
                pattern: {
                  value: /^https:\/\/.*/i,
                  message: "URL must start with https://",
                },
              })}
              className="w-full px-6 py-4 sm:py-5 bg-zinc-900 border-2 border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:border-zinc-600 focus:outline-none transition-all duration-500 text-sm sm:text-base tracking-wide"
              disabled={isSubmitting}
            />

            {errors.url && (
              <p className="text-red-400 text-xs sm:text-sm tracking-wide px-2">
                {errors.url.message}
              </p>
            )}
          </div>

          {display && genLink && (
            <div className="bg-zinc-900 border-2 border-zinc-800 p-6 space-y-4">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
                Your Shortened URL
              </p>
              <div className="flex items-center justify-between gap-4">
                <div
                  ref={divRef}
                  className="text-zinc-100 text-sm sm:text-base font-mono break-all flex-1"
                >
                  {genLink}
                </div>
                <button
                  type="button"
                  onClick={handleCopyClick}
                  className="flex-shrink-0 p-3 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-700 hover:border-zinc-600 transition-all duration-500 group"
                  aria-label="Copy link"
                >
                  {copyStatus ? (
                    <Check size={20} className="text-zinc-100" />
                  ) : (
                    <Copy
                      size={20}
                      className="text-zinc-400 group-hover:text-zinc-100 transition-colors duration-500"
                    />
                  )}
                </button>
              </div>
              {copyStatus && (
                <p className="text-zinc-400 text-xs tracking-wide">
                  Copied to clipboard!
                </p>
              )}
            </div>
          )}

          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="w-full px-8 py-4 sm:py-5 bg-zinc-100 text-zinc-950 font-semibold text-sm sm:text-base tracking-wide uppercase border-2 border-zinc-100 hover:bg-zinc-950 hover:text-zinc-100 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            <span className="relative z-10">
              {isSubmitting ? "Generating..." : "Generate Mini Link"}
            </span>
            <div className="absolute inset-0 bg-zinc-950 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
