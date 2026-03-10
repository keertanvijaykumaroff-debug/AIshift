'use client';

import { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'introduction', label: 'Introduction' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'landscape', label: 'AI Landscape' },
  { id: 'companies', label: 'Major Companies' },
  { id: 'revolution', label: 'Business Impact' },
  { id: 'jobs', label: 'Job Impact' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'finance', label: 'Finance' },
  { id: 'tools', label: 'Tools' },
  { id: 'prompting', label: 'Prompt Engineering' },
  { id: 'automation', label: 'Automation' },
  { id: 'comparison', label: 'Free vs Paid' },
  { id: 'ethics', label: 'Ethics' },
  { id: 'future', label: 'Future' },
  { id: 'takeaways', label: 'Takeaways' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observers = SECTIONS.map(section => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between overflow-x-auto">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-primary">AI Shift</h1>
          </div>
          <div className="flex gap-1 overflow-x-auto pb-2">
            {SECTIONS.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
