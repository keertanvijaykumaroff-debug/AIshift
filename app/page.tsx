'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { slides } from '@/data/slides';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import * as Icons from 'lucide-react';

// A small helper to map string names to Lucide icons
const getIcon = (iconName?: string) => {
  if (!iconName) return Icons.Sparkles; // Default fallback icon
  return (Icons as any)[iconName] || Icons.Sparkles;
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;

      const el = containerRef.current;
      const clientHeight = el.clientHeight;
      const currentIndex = Math.round(el.scrollTop / clientHeight);

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        el.scrollTo({
          top: (currentIndex + 1) * clientHeight,
          behavior: 'smooth'
        });
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        el.scrollTo({
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
    if (clientHeight === 0) return;

    const currentIndex = Math.round(scrollTop / clientHeight);
    setCurrentSlide(Math.min(currentIndex + 1, slides.length));
  };

  return (
    <div className="h-screen w-full bg-slate-50 overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4">
      {/* 
        Slide Container 
        Expanded to max width and nearly full height (max-w-[95vw] h-[90vh])
        while retaining the snap logic.
      */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full max-w-[95vw] sm:max-w-7xl max-h-[90vh] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/5 rounded-2xl overflow-y-auto snap-y snap-mandatory relative scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {slides.map((slide, index) => {
          const SlideIcon = getIcon((slide as any).icon);
          return (
            <div
              key={slide.id}
              className="w-full h-full snap-start snap-always shrink-0 flex flex-col p-10 sm:p-14 lg:p-20 relative bg-white"
            >
              {/* Corner Logo */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 opacity-90 z-10 w-24 sm:w-32">
                <Image
                  src="https://storage.googleapis.com/antigravity-artifacts-dev/72ced6a19f2015c7e090/0-ddfa9dbfcbed29d9.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=antigravity-gcs%40antigravity-dev-944f.iam.gserviceaccount.com%2F20260310%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260310T153521Z&X-Goog-Expires=604800&X-Goog-Signature=8987b77ab6841ce2b9fcbcdfd10d6a9d18fa42093556ae53ea1a485596409b30c946e38b375d8d070622a5fb681b49e8dd67b9319b99e900caddba11b816828599cf062e74da05fe9e45c742c3da146c241957252f4eb273398c8cdae6fe0a33118ef3d3df9fd882fcb9ab4b12fe016aebdfec845fef3e52e160e1fd8b83dd4cbefb8b21ba1fb60c5ea2b197ec036a197775a610aeeb85038b14a2754641e9ab7d2a58b09335bf3ce237c04af4cd65979ad6c4bb649c51326be8e0fa0c3ffecbf747683ca51db4fd8d438914b1c7dc4fa24b94cfa1bedeed7c2448ca336df7653f5eb0d8b767799b6ea46b4c311c4e7ab2f3453b0e515d0fa8ef647cc5e2ab24&X-Goog-SignedHeaders=host"
                  alt="DMKV"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Slide Header (Hidden on Title slides) */}
              {slide.layout !== 'title' && (
                <div className="mb-8 shrink-0 flex items-start gap-4 lg:gap-6">
                  <div className="p-3 lg:p-4 bg-indigo-50 rounded-2xl shrink-0 mt-1">
                    <SlideIcon className="w-8 h-8 lg:w-12 lg:h-12 text-indigo-500" />
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <h2 className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 mt-4 font-semibold opacity-90">
                        {slide.subtitle}
                      </h2>
                    )}
                  </div>
                </div>
              )}

              {/* Slide Content Layouts */}
              <div className="flex-1 flex flex-col justify-center overflow-hidden">
                {slide.layout === 'title' && (
                  <div className="flex flex-col items-center justify-center h-full space-y-8 mt-auto mb-auto p-4 sm:p-12 w-full max-w-5xl mx-auto">
                    <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black text-slate-800 tracking-tighter text-center leading-[1.1]">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="text-xl sm:text-2xl lg:text-3xl text-indigo-600 font-semibold text-center mt-6 max-w-3xl leading-relaxed">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.points && slide.points.length > 0 && (
                      <div className="mt-12 pt-10 border-t-2 border-slate-100 w-full text-center">
                        <p className="text-lg sm:text-xl lg:text-2xl text-slate-500 font-medium tracking-wide">
                          {slide.points[0]}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {slide.layout === 'bullets' && slide.points && (
                  <div className="grid gap-6 sm:gap-8 max-w-5xl">
                    {slide.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-500 mt-2 sm:mt-3 shrink-0"></span>
                        <span className="text-xl sm:text-2xl lg:text-[1.75rem] text-slate-700 leading-relaxed font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {slide.layout === 'split' && slide.points && (
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
                    {slide.points.map((point, i) => (
                      <div key={i} className="bg-slate-50 p-8 lg:p-10 rounded-2xl border border-slate-100 h-full flex items-center shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-2xl lg:text-[2rem] text-slate-700 leading-tight font-medium">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {slide.layout === 'quote' && slide.points && (
                  <div className="bg-indigo-50/50 p-10 lg:p-16 rounded-3xl border-l-[6px] border-indigo-500 max-w-5xl shadow-sm">
                    <p className="text-3xl lg:text-[2.5rem] text-slate-800 leading-snug italic font-serif">
                      "{slide.points[0]}"
                    </p>
                  </div>
                )}

                {/* Minimalist Bar Chart Integration */}
                {slide.layout === 'bar-chart' && slide.chartData && (
                  <div className="h-full w-full max-h-[60vh] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={slide.chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 16 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 16 }} />
                        <Tooltip
                          cursor={{ fill: '#f1f5f9' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} maxBarSize={80} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Minimalist Stacked Bar Chart */}
                {slide.layout === 'stacked-bar-chart' && slide.chartData && (
                  <div className="h-full w-full max-h-[60vh] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={slide.chartData} layout="vertical" margin={{ top: 20, right: 30, left: 30, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 16 }} width={140} />
                        <Tooltip
                          cursor={{ fill: '#f1f5f9' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                        <Bar dataKey="value1" stackId="a" fill="#94a3b8" name={slide.chartConfig?.value1Name || 'Value 1'} radius={[0, 0, 0, 0]} barSize={40} />
                        <Bar dataKey="value2" stackId="a" fill="#6366f1" name={slide.chartConfig?.value2Name || 'Value 2'} radius={[0, 6, 6, 0]} barSize={40} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Minimalist Line Chart */}
                {(slide.layout as any) === 'line-chart' && slide.chartData && (
                  <div className="h-full w-full max-h-[60vh] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={slide.chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 16 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 16 }} />
                        <Tooltip
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={4} dot={{ r: 6, fill: '#6366f1', strokeWidth: 0 }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Minimalist Pie Chart */}
                {(slide.layout as any) === 'pie-chart' && slide.chartData && (
                  <div className="h-full w-full max-h-[60vh] mt-4 flex justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={slide.chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={100}
                          outerRadius={160}
                          paddingAngle={5}
                          dataKey="value"
                          nameKey="name"
                        >
                          {slide.chartData.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316', '#eab308'][index % 6]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Legend iconType="circle" />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}
                {/* QR Code Finale */}
                {slide.layout === 'qr-code' && (
                  <div className="flex flex-col items-center justify-center mt-auto mb-auto gap-8">
                    {slide.points && slide.points.length > 0 && (
                      <p className="text-xl sm:text-2xl lg:text-3xl text-slate-500 font-medium text-center max-w-2xl">
                        {slide.points[0]}
                      </p>
                    )}
                    {slide.extraContent?.qrImage && (
                      <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col items-center group">
                        <Image
                          src={slide.extraContent.qrImage}
                          alt={slide.extraContent.qrAlt || "QR Code"}
                          width={240}
                          height={240}
                          className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                        <p className="mt-6 text-lg font-bold text-indigo-600 tracking-wide uppercase">Connect With Me</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Slide Footer */}
              <div className="absolute bottom-6 right-8 lg:bottom-10 lg:right-12 text-slate-400 font-mono text-lg lg:text-xl">
                {index + 1} / {slides.length}
              </div>

              {/* Progress indicator border */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-slate-100">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${((index + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Presentation Controls */}
      <div className="mt-4 sm:mt-6 flex gap-4 sm:gap-6 items-center bg-white shadow-md border border-slate-200 p-2 sm:p-3 rounded-full">
        <button
          onClick={() => containerRef.current?.scrollTo({ top: Math.max(0, currentSlide - 2) * containerRef.current.clientHeight, behavior: 'smooth' })}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-slate-100 text-slate-700 flex items-center justify-center transition disabled:opacity-30 disabled:hover:bg-transparent"
          disabled={currentSlide === 1}
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <span className="text-slate-500 font-mono text-base sm:text-lg px-2 sm:px-4 shrink-0">
          Slide {currentSlide} of {slides.length}
        </span>
        <button
          onClick={() => containerRef.current?.scrollTo({ top: currentSlide * containerRef.current.clientHeight, behavior: 'smooth' })}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-slate-100 text-slate-700 flex items-center justify-center transition disabled:opacity-30 disabled:hover:bg-transparent"
          disabled={currentSlide === slides.length}
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
