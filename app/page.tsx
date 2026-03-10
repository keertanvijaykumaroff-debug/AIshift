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
  const [revealedPoints, setRevealedPoints] = useState<Record<number, number>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScreenClick = () => {
    const currentSlideData = slides[currentSlide - 1];

    // Calculate total items to reveal
    const pointsCount = currentSlideData?.points?.length || 0;
    const hasExtra = (currentSlideData?.extraContent?.imagePlaceholder || currentSlideData?.extraContent?.image || currentSlideData?.extraContent?.qrImage) ? 1 : 0;
    const totalItems = pointsCount + hasExtra;

    if (totalItems > 0) {
      const currentRevealed = revealedPoints[currentSlideData.id] || 0;
      if (currentRevealed < totalItems) {
        setRevealedPoints(prev => ({ ...prev, [currentSlideData.id]: currentRevealed + 1 }));
      } else if (currentSlide < slides.length) {
        containerRef.current?.scrollTo({
          top: currentSlide * containerRef.current.clientHeight,
          behavior: 'smooth'
        });
      }
    } else if (currentSlide < slides.length) {
      containerRef.current?.scrollTo({
        top: currentSlide * containerRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

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
    <div
      className="h-screen w-screen bg-white overflow-hidden flex flex-col items-center justify-center cursor-pointer"
      onClick={handleScreenClick}
    >
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full bg-white overflow-y-auto snap-y snap-mandatory relative scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {slides.map((slide, index) => {
          const SlideIcon = getIcon((slide as any).icon);
          return (
            <div
              key={slide.id}
              className="w-full h-full snap-start snap-always shrink-0 flex flex-col p-10 sm:p-14 lg:p-20 relative bg-white"
            >
              {/* Corner Logo */}
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10 select-none">
                <span className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                  DMKV
                </span>
              </div>

              {/* Slide Header (Hidden on Title slides) */}
              {slide.layout !== 'title' && (
                <div className="mb-8 shrink-0 flex items-start gap-4 lg:gap-6 mt-12 lg:mt-16">
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
                      <div className={`mt-12 pt-10 border-t-2 border-slate-100 w-full text-center transition-all duration-500 ${(revealedPoints[slide.id] || 0) > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <p className="text-lg sm:text-xl lg:text-2xl text-slate-500 font-medium tracking-wide">
                          {slide.points[0]}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {slide.layout === 'bullets' && slide.points && (
                  <div className="grid gap-6 sm:gap-8 max-w-5xl">
                    {slide.points.map((point, i) => {
                      const isVisible = i < (revealedPoints[slide.id] || 0);
                      return (
                        <div
                          key={i}
                          className={`flex items-start gap-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                            }`}
                        >
                          <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-500 mt-2 sm:mt-3 shrink-0"></span>
                          <span className="text-xl sm:text-2xl lg:text-[1.75rem] text-slate-700 leading-relaxed font-medium">
                            {point}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {slide.layout === 'split' && slide.points && (
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl">
                    {slide.points.map((point, i) => {
                      const isVisible = i < (revealedPoints[slide.id] || 0);
                      return (
                        <div key={i} className={`bg-slate-50 p-8 lg:p-10 rounded-2xl border border-slate-100 h-full flex items-center shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                          <p className="text-2xl lg:text-[2rem] text-slate-700 leading-tight font-medium">
                            {point}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                )}

                {slide.layout === 'quote' && slide.points && (
                  <div className={`bg-indigo-50/50 p-10 lg:p-16 rounded-3xl border-l-[6px] border-indigo-500 max-w-5xl shadow-sm transition-all duration-500 ${(revealedPoints[slide.id] || 0) > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
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

                {/* Image Placeholder */}
                {slide.extraContent?.imagePlaceholder && (
                  <div className={`mt-8 flex-1 w-full min-h-[250px] lg:min-h-[350px] border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-2xl flex flex-col items-center justify-center text-indigo-400 group hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-500 ${(revealedPoints[slide.id] || 0) > (slide.points?.length || 0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                    <Icons.Image className="w-12 h-12 mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                    <p className="font-medium text-lg lg:text-xl px-4 text-center">
                      {slide.extraContent.imagePlaceholder}
                    </p>
                    <p className="text-sm mt-2 opacity-70 px-4 text-center">
                      (Insert screenshot/image here)
                    </p>
                  </div>
                )}

                {/* Real Image Rendering */}
                {slide.extraContent?.image && (
                  <div className={`mt-8 flex-1 w-full flex flex-col items-center justify-center transition-all duration-500 ${(revealedPoints[slide.id] || 0) > (slide.points?.length || 0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                    <div className="relative w-full max-w-4xl h-[300px] lg:h-[450px] shadow-xl rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex items-center justify-center p-2">
                      <Image
                        src={slide.extraContent.image}
                        alt="Slide Screenshot"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* QR Code Finale */}
                {slide.layout === 'qr-code' && (
                  <div className="flex flex-col items-center justify-center mt-auto mb-auto gap-8">
                    {slide.points && slide.points.length > 0 && (
                      <p className={`text-xl sm:text-2xl lg:text-3xl text-slate-500 font-medium text-center max-w-2xl transition-all duration-500 ${(revealedPoints[slide.id] || 0) > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        {slide.points[0]}
                      </p>
                    )}
                    {slide.extraContent?.qrImage && (
                      <div className={`bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col items-center group transition-all duration-500 ${(revealedPoints[slide.id] || 0) > (slide.points?.length || 0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                        }`}>
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
              {/* Progress indicator border */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-slate-100 z-50">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${((index + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
