export default function AIAutomation() {
  return (
    <section id="automation" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          AI-Powered Automation & Workflows
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Combining AI with workflow automation can dramatically increase productivity and reduce manual work.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Content Creation Workflow</h3>
          <svg viewBox="0 0 800 200" className="w-full max-w-4xl mx-auto">
            {/* Input */}
            <g>
              <rect x="20" y="80" width="100" height="60" fill="oklch(0.54 0.16 235 / 0.1)" stroke="oklch(0.54 0.16 235)" strokeWidth="2" rx="4"/>
              <text x="70" y="110" textAnchor="middle" className="text-sm font-bold fill-foreground">
                News
              </text>
              <text x="70" y="125" textAnchor="middle" className="text-xs fill-muted-foreground">
                Input
              </text>
            </g>

            {/* Arrow 1 */}
            <path d="M 125 110 L 155 110" stroke="oklch(0.5 0 0)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Analysis */}
            <g>
              <rect x="160" y="80" width="100" height="60" fill="oklch(0.5 0.12 220 / 0.1)" stroke="oklch(0.5 0.12 220)" strokeWidth="2" rx="4"/>
              <text x="210" y="110" textAnchor="middle" className="text-sm font-bold fill-foreground">
                Analyze
              </text>
              <text x="210" y="125" textAnchor="middle" className="text-xs fill-muted-foreground">
                (ChatGPT)
              </text>
            </g>

            {/* Arrow 2 */}
            <path d="M 265 110 L 295 110" stroke="oklch(0.5 0 0)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Generate */}
            <g>
              <rect x="300" y="80" width="100" height="60" fill="oklch(0.45 0.14 250 / 0.1)" stroke="oklch(0.45 0.14 250)" strokeWidth="2" rx="4"/>
              <text x="350" y="110" textAnchor="middle" className="text-sm font-bold fill-foreground">
                Generate
              </text>
              <text x="350" y="125" textAnchor="middle" className="text-xs fill-muted-foreground">
                Report
              </text>
            </g>

            {/* Arrow 3 */}
            <path d="M 405 110 L 435 110" stroke="oklch(0.5 0 0)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Format */}
            <g>
              <rect x="440" y="80" width="100" height="60" fill="oklch(0.58 0.1 240 / 0.1)" stroke="oklch(0.58 0.1 240)" strokeWidth="2" rx="4"/>
              <text x="490" y="110" textAnchor="middle" className="text-sm font-bold fill-foreground">
                Format
              </text>
              <text x="490" y="125" textAnchor="middle" className="text-xs fill-muted-foreground">
                Output
              </text>
            </g>

            {/* Arrow 4 */}
            <path d="M 545 110 L 575 110" stroke="oklch(0.5 0 0)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Publish */}
            <g>
              <rect x="580" y="80" width="100" height="60" fill="oklch(0.64 0 0 / 0.1)" stroke="oklch(0.64 0 0)" strokeWidth="2" rx="4"/>
              <text x="630" y="110" textAnchor="middle" className="text-sm font-bold fill-foreground">
                Publish
              </text>
              <text x="630" y="125" textAnchor="middle" className="text-xs fill-muted-foreground">
                Output
              </text>
            </g>

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="oklch(0.5 0 0)"/>
              </marker>
            </defs>
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-white border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">Workflow Platforms</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">n8n:</span> Open-source workflow automation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">Zapier:</span> Connect apps and automate tasks</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">IFTTT:</span> Simple if-then automation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">Make:</span> Visual workflow builder</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-primary/5 border border-primary/10 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">Common Use Cases</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Summarize articles and generate newsletters</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Extract data from unstructured documents</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Classify and route customer support tickets</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Generate reports from database queries</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 bg-white border border-border rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6">Real-World Example: Research to Insights</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground">Monitor: Set up RSS feeds and web scrapers</p>
                <p className="text-sm text-muted-foreground">Automatically collect industry news and research papers</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground">Extract: Use AI to parse and summarize</p>
                <p className="text-sm text-muted-foreground">ChatGPT extracts key insights, trends, and actionable items</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground">Synthesize: Generate formatted reports</p>
                <p className="text-sm text-muted-foreground">Create daily/weekly digests in your preferred format</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <p className="font-semibold text-foreground">Distribute: Send automatically</p>
                <p className="text-sm text-muted-foreground">Email reports to stakeholders on schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
