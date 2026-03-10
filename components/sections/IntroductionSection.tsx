export default function IntroductionSection() {
  return (
    <section id="introduction" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
            Understanding AI, ML, and Deep Learning
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Before diving into the implications of artificial intelligence, let&apos;s establish a clear understanding of
            what these terms mean and how they relate to each other.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative p-8 bg-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Artificial Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                The broad field of computer science focused on creating machines capable of performing tasks that typically
                require human intelligence, such as learning, reasoning, and problem-solving.
              </p>
            </div>
          </div>

          <div className="group relative p-8 bg-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Machine Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                A subset of AI that enables systems to learn and improve from experience without being explicitly
                programmed. Systems improve their performance through exposure to data.
              </p>
            </div>
          </div>

          <div className="group relative p-8 bg-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Deep Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                A specialized subset of machine learning using neural networks with multiple layers to learn hierarchical
                representations of data. Powers modern breakthrough AI systems.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary/5 border border-primary/10 rounded-lg">
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Key Insight:</span> These technologies build on each other.
            All machine learning is AI, but not all AI uses machine learning. All deep learning is machine learning, but
            not all machine learning uses deep learning.
          </p>
        </div>
      </div>
    </section>
  );
}
