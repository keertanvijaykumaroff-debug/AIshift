export default function EvolutionTimeline() {
  const milestones = [
    {
      year: '1950',
      title: 'Birth of AI',
      description: 'Turing proposes the "Imitation Game" test for machine intelligence',
    },
    {
      year: '1974-1980',
      title: 'First AI Winter',
      description: 'Reduced funding and interest due to unmet expectations',
    },
    {
      year: '1997',
      title: 'Deep Blue',
      description: 'IBM\'s Deep Blue defeats world chess champion Garry Kasparov',
    },
    {
      year: '2012',
      title: 'Deep Learning Revolution',
      description: 'AlexNet wins ImageNet competition, sparking deep learning surge',
    },
    {
      year: '2016',
      title: 'AlphaGo Victory',
      description: 'DeepMind\'s AlphaGo defeats world Go champion Lee Sedol',
    },
    {
      year: '2022-2024',
      title: 'Generative AI Boom',
      description: 'ChatGPT, GPT-4, Claude, and other LLMs transform AI landscape',
    },
    {
      year: '2025-2026',
      title: 'AI Integration Era',
      description: 'AI becomes embedded in everyday tools and applications across all industries',
    },
  ];

  return (
    <section id="evolution" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-pretty">
          The Evolution of Artificial Intelligence
        </h2>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex gap-6 animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-primary rounded-full border-4 border-background ring-2 ring-primary"></div>
                {index < milestones.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-primary mb-1">{milestone.year}</h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h4>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
