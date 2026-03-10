export default function MajorCompanies() {
  const companies = [
    {
      name: 'OpenAI',
      focus: 'Large Language Models',
      products: 'ChatGPT, GPT-4, DALL-E',
      impact: 'Democratized access to advanced AI',
    },
    {
      name: 'Google DeepMind',
      focus: 'Research & AI Systems',
      products: 'AlphaGo, Gemini, AlphaFold',
      impact: 'Breakthrough in protein folding',
    },
    {
      name: 'Microsoft',
      focus: 'Enterprise AI',
      products: 'Copilot, GitHub Copilot, Azure AI',
      impact: 'Integrating AI into productivity tools',
    },
    {
      name: 'Anthropic',
      focus: 'Safe AI Development',
      products: 'Claude, Constitutional AI',
      impact: 'Focus on AI safety and alignment',
    },
    {
      name: 'Meta',
      focus: 'Open-Source AI',
      products: 'Llama 2, Llama 3, OPT',
      impact: 'Democratizing access through open-source',
    },
    {
      name: 'X (formerly Twitter)',
      focus: 'AI Infrastructure',
      products: 'Grok, AI research',
      impact: 'Building next-generation AI systems',
    },
  ];

  return (
    <section id="companies" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-pretty">
          Leading AI Companies & Organizations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-border rounded-xl hover:shadow-xl hover:border-primary/40 transition-all duration-300 animate-in fade-in overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">{company.name}</h3>
                  <div className="w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Focus Area</p>
                    <p className="text-foreground font-medium">{company.focus}</p>
                  </div>
                  <div className="pb-4 border-b border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Key Products</p>
                    <p className="text-foreground font-medium">{company.products}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Impact</p>
                    <p className="text-foreground font-medium">{company.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
