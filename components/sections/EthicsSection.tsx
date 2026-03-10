export default function EthicsSection() {
  const concerns = [
    {
      title: 'Bias in AI Systems',
      icon: '⚖️',
      description: 'AI models trained on biased data can perpetuate discrimination in hiring, lending, and criminal justice.',
      example: 'Amazon\'s hiring AI showed bias against women in tech roles.',
      mitigation: 'Diverse training data, bias testing, human oversight',
    },
    {
      title: 'Hallucinations & Misinformation',
      icon: '🔮',
      description: 'AI systems can confidently generate false information, creating convincing but inaccurate content.',
      example: 'ChatGPT citing non-existent academic papers',
      mitigation: 'Fact-checking, source verification, uncertainty disclosure',
    },
    {
      title: 'Privacy & Data Security',
      icon: '🔐',
      description: 'Training data often includes personal information. Models can memorize and leak sensitive data.',
      example: 'Accidentally exposing user data through training processes',
      mitigation: 'Data anonymization, differential privacy, strict policies',
    },
    {
      title: 'Workforce Displacement',
      icon: '👥',
      description: 'Automation and AI may displace workers faster than new opportunities emerge.',
      example: 'Widespread job displacement in routine administrative roles',
      mitigation: 'Retraining programs, social safety nets, policy support',
    },
    {
      title: 'Autonomous Weapons',
      icon: '⚔️',
      description: 'AI-driven weapons systems raise concerns about accountability and unintended escalation.',
      example: 'Autonomous military systems without human decision-making',
      mitigation: 'International regulations, human-in-the-loop requirements',
    },
    {
      title: 'AI Alignment',
      icon: '🎯',
      description: 'Ensuring powerful AI systems pursue goals aligned with human values and intentions.',
      example: 'AI systems optimizing for the wrong metrics',
      mitigation: 'Research in interpretability, robust evaluation frameworks',
    },
  ];

  return (
    <section id="ethics" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          AI Ethics & Concerns
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          With great power comes great responsibility. Understanding the ethical implications of AI is crucial for
          responsible deployment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {concerns.map((concern, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 mb-4">
                <span className="text-3xl">{concern.icon}</span>
                <h3 className="text-lg font-bold text-foreground">{concern.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{concern.description}</p>
              <div className="border-t border-border pt-3 mt-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Example</p>
                <p className="text-sm text-muted-foreground mb-3">{concern.example}</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Mitigation</p>
                <p className="text-sm text-primary">{concern.mitigation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-primary/5 border border-primary/10 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Individual Responsibility</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Use AI tools responsibly and ethically</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Understand limitations and biases of tools you use</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Verify AI-generated information before using</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Protect privacy when sharing data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Be transparent about AI involvement</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-accent/5 border border-accent/10 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Organizational Guidelines</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Establish AI ethics committees</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Conduct impact assessments before deployment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Implement bias testing and monitoring</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Ensure human oversight of critical decisions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Maintain clear audit trails</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white border border-border rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">The Balance</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AI is neither inherently good nor evil—it&apos;s a tool shaped by human choices. The same AI that enables
            medical breakthroughs can be used for surveillance. The same automation that frees people from drudgery can
            displace workers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold">The key is intentional, ethical deployment.</span> We must design AI systems
            with safeguards, use them transparently, and ensure the benefits are widely shared while minimizing harms.
          </p>
        </div>
      </div>
    </section>
  );
}
