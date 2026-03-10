'use client';

import { useState, useRef, useEffect } from 'react';
import { slides } from '@/data/slides';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const { scrollTop, clientHeight } = containerRef.current;
      const currentIndex = Math.round(scrollTop / clientHeight);

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        containerRef.current.scrollTo({
          top: (currentIndex + 1) * clientHeight,
          behavior: 'smooth'
        });
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        containerRef.current.scrollTo({
          top: Math.max(0, currentIndex - 1) * clientHeight,
          behavior: 'smooth'
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight } = containerRef.current;

    // Safety check to avoid zero division during resize
    if (clientHeight === 0) return;

    const currentIndex = Math.round(scrollTop / clientHeight);
    setCurrentSlide(Math.min(currentIndex + 1, slides.length));
  };

  return (
    <div className="h-screen w-full bg-slate-950 overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4">
      {/* Slide Container - 16:9 Aspect Ratio within screen bounds */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full max-w-7xl aspect-video bg-white shadow-2xl rounded-xl overflow-y-auto snap-y snap-mandatory relative scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full h-full snap-start snap-always shrink-0 flex flex-col p-10 sm:p-16 lg:p-24 relative bg-gradient-to-br from-slate-50 to-slate-100"
          >
            {/* Slide Header */}
            <div className="mb-10 shrink-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary mt-6 font-semibold opacity-90">
                  {slide.subtitle}
                </h2>
              )}
            </div>

            {/* Slide Content Layouts */}
            <div className="flex-1 flex flex-col justify-center overflow-hidden">
              {slide.layout === 'title' && slide.points && (
                <div className="text-center mt-auto mb-auto">
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 font-medium pb-12">
                    {slide.points[0]}
                  </p>
                </div>
              )}

              {slide.layout === 'bullets' && slide.points && (
                <ul className="space-y-6 sm:space-y-8 max-w-5xl">
                  {slide.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary mt-2 sm:mt-3 shrink-0"></span>
                      <span className="text-xl sm:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {slide.layout === 'split' && slide.points && (
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
                  {slide.points.map((point, i) => (
                    <div key={i} className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 h-full flex items-center">
                      <p className="text-xl sm:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-medium">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {slide.layout === 'quote' && slide.points && (
                <div className="bg-primary/5 p-10 lg:p-16 rounded-3xl border-l-8 border-primary max-w-5xl">
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 leading-relaxed italic font-serif">
                    "{slide.points[0]}"
                  </p>
                </div>
              )}
            </div>

            {/* Slide Footer */}
            <div className="absolute bottom-6 right-8 lg:bottom-10 lg:right-12 text-slate-400 font-mono text-lg lg:text-xl">
              {index + 1} / {slides.length}
            </div>

            {/* Progress indicator border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-200">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((index + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Presentation Controls */}
      <div className="mt-6 sm:mt-8 flex gap-4 sm:gap-6 items-center bg-slate-900/50 p-3 sm:p-4 rounded-full backdrop-blur-md">
        <button
          onClick={() => containerRef.current?.scrollTo({ top: Math.max(0, currentSlide - 2) * containerRef.current.clientHeight, behavior: 'smooth' })}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition filter backdrop-blur-md disabled:opacity-50"
          disabled={currentSlide === 1}
          aria-label="Previous Slide"
        >
          ←
        </button>
        <span className="text-slate-300 font-mono text-base sm:text-lg font-medium px-2 sm:px-4 shrink-0">
          Slide {currentSlide} of {slides.length}
        </span>
        <button
          onClick={() => containerRef.current?.scrollTo({ top: currentSlide * containerRef.current.clientHeight, behavior: 'smooth' })}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition filter backdrop-blur-md disabled:opacity-50"
          disabled={currentSlide === slides.length}
          aria-label="Next Slide"
        >
          →
        </button>
      </div>
    </div>
  );
}
