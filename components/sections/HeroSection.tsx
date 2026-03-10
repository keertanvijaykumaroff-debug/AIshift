export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden"
    >
      {/* Background visual elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-1000 relative z-10">
        {/* Top accent */}
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <span className="text-primary font-semibold text-sm">Welcome to</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-pretty">
          The AI Shift
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed text-pretty max-w-3xl mx-auto">
          Understanding Artificial Intelligence, Its Impact, and How to Prepare for the Future
        </p>

        {/* Info badges */}
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-sm hover:shadow-md transition-shadow">
            Keertan Vijaykumar
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-float">
          <div className="text-primary">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
