export default function AILandscape() {
  return (
    <section id="landscape" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-pretty">
          The AI Ecosystem Stack
        </h2>

        <svg
          viewBox="0 0 900 600"
          className="w-full max-w-4xl mx-auto mb-12"
        >
          {/* Foundation */}
          <rect x="50" y="450" width="800" height="100" fill="oklch(0.54 0.16 235 / 0.05)" stroke="oklch(0.54 0.16 235)" strokeWidth="2" rx="8"/>
          <text x="450" y="508" textAnchor="middle" className="text-xl font-bold fill-foreground">
            Foundation: Computing Infrastructure (GPUs, TPUs, Cloud Computing)
          </text>

          {/* Data Layer */}
          <rect x="50" y="350" width="800" height="80" fill="oklch(0.64 0 0 / 0.05)" stroke="oklch(0.64 0 0)" strokeWidth="2" rx="8"/>
          <text x="450" y="398" textAnchor="middle" className="text-lg font-bold fill-foreground">
            Data Layer: Datasets, Data Processing, Feature Engineering
          </text>

          {/* ML Algorithms */}
          <rect x="50" y="250" width="800" height="80" fill="oklch(0.5 0.12 220 / 0.05)" stroke="oklch(0.5 0.12 220)" strokeWidth="2" rx="8"/>
          <text x="450" y="298" textAnchor="middle" className="text-lg font-bold fill-foreground">
            ML Algorithms: Supervised Learning, Unsupervised Learning, Reinforcement Learning
          </text>

          {/* Deep Learning */}
          <rect x="50" y="150" width="800" height="80" fill="oklch(0.45 0.14 250 / 0.05)" stroke="oklch(0.45 0.14 250)" strokeWidth="2" rx="8"/>
          <text x="450" y="198" textAnchor="middle" className="text-lg font-bold fill-foreground">
            Deep Learning: Neural Networks, Transformers, Large Language Models
          </text>

          {/* Applications */}
          <rect x="50" y="30" width="800" height="100" fill="oklch(0.58 0.1 240 / 0.05)" stroke="oklch(0.58 0.1 240)" strokeWidth="2" rx="8"/>
          <text x="450" y="68" textAnchor="middle" className="text-lg font-bold fill-foreground">
            Applications: ChatGPT, Copilot, Image Generation, Recommendation Systems,
          </text>
          <text x="450" y="98" textAnchor="middle" className="text-lg font-bold fill-foreground">
            Fraud Detection, Autonomous Systems, Medical Diagnosis
          </text>
        </svg>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-primary/5 border border-primary/10 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-3">Horizontal Applications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>General-purpose tools used across industries</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Examples: ChatGPT, Copilot, Midjourney</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Lower barrier to entry but high competition</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-accent/5 border border-accent/10 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-3">Vertical Applications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Industry-specific solutions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Examples: Medical diagnosis, Financial analysis, Drug discovery</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Higher value but requires domain expertise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
