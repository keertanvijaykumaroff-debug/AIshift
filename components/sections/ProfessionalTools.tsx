export default function ProfessionalTools() {
  const categories = {
    'Productivity & Writing': [
      { name: 'ChatGPT', model: 'GPT-4', type: 'Free/Paid' },
      { name: 'Claude', model: 'Claude 3', type: 'Paid' },
      { name: 'Notion AI', model: 'Proprietary', type: 'Paid' },
      { name: 'Grammarly', model: 'ML-based', type: 'Freemium' },
    ],
    'Research & Analysis': [
      { name: 'Perplexity', model: 'Various', type: 'Freemium' },
      { name: 'Google Scholar AI', model: 'BERT-based', type: 'Free' },
      { name: 'Elicit', model: 'Custom', type: 'Paid' },
      { name: 'Scite', model: 'Citation AI', type: 'Freemium' },
    ],
    'Creative & Design': [
      { name: 'Midjourney', model: 'Custom', type: 'Paid' },
      { name: 'DALL-E 3', model: 'GPT-4 Vision', type: 'Paid' },
      { name: 'Adobe Firefly', model: 'Proprietary', type: 'Paid' },
      { name: 'Canva AI', model: 'Integrated', type: 'Freemium' },
    ],
    'Code & Development': [
      { name: 'GitHub Copilot', model: 'Codex-based', type: 'Paid' },
      { name: 'ChatGPT Code Interpreter', model: 'GPT-4', type: 'Paid' },
      { name: 'Tabnine', model: 'Custom', type: 'Freemium' },
      { name: 'Codeium', model: 'Custom', type: 'Free' },
    ],
  };

  return (
    <section id="tools" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          AI Tools & Platforms
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          A rapidly growing ecosystem of tools is making AI accessible to professionals across every discipline.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, tools]) => (
            <div key={category} className="p-8 bg-white border border-border rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-6">{category}</h3>
              <div className="space-y-4">
                {tools.map((tool, idx) => (
                  <div key={idx} className="pb-4 border-b border-border last:border-b-0">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{tool.name}</h4>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          tool.type === 'Free'
                            ? 'bg-green-100 text-green-700'
                            : tool.type === 'Freemium'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {tool.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.model}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">Choosing the Right Tool</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Capabilities</h4>
              <p className="text-muted-foreground text-sm">Match the tool to your specific task requirements</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Cost</h4>
              <p className="text-muted-foreground text-sm">Free tools for testing, paid for serious production use</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Integration</h4>
              <p className="text-muted-foreground text-sm">Consider how it fits into your existing workflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
