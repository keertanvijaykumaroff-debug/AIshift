export default function AnalyticsDeepDive() {
  return (
    <section id="analytics" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          AI and Data Analytics
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Data is the fuel of AI. Understanding data analytics and how AI leverages it is critical to modern business
          success.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Analytics Maturity Progression</h3>
          <svg viewBox="0 0 900 200" className="w-full max-w-4xl mx-auto">
            {/* Stage 1 */}
            <g>
              <rect x="50" y="50" width="140" height="120" fill="oklch(0.54 0.16 235 / 0.1)" stroke="oklch(0.54 0.16 235)" strokeWidth="2" rx="8"/>
              <text x="120" y="75" textAnchor="middle" className="text-lg font-bold fill-foreground">
                Descriptive
              </text>
              <text x="120" y="95" textAnchor="middle" className="text-sm fill-muted-foreground">
                What happened?
              </text>
              <text x="120" y="115" textAnchor="middle" className="text-xs fill-muted-foreground">
                Reports, Dashboards
              </text>
              <text x="120" y="155" textAnchor="middle" className="text-xs font-semibold fill-foreground">
                1990s
              </text>
            </g>

            {/* Arrow 1 */}
            <path d="M 200 110 L 240 110" stroke="oklch(0.5 0 0)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Stage 2 */}
            <g>
              <rect x="250" y="50" width="140" height="120" fill="oklch(0.5 0.12 220 / 0.1)" stroke="oklch(0.5 0.12 220)" strokeWidth="2" rx="8"/>
              <text x="320" y="75" textAnchor="middle" className="text-lg font-bold fill-foreground">
                Diagnostic
              </text>
              <text x="320" y="95" textAnchor="middle" className="text-sm fill-muted-foreground">
                Why did it happen?
              </text>
              <text x="320" y="115" textAnchor="middle" className="text-xs fill-muted-foreground">
                Analysis, Insights
              </text>
              <text x="320" y="155" textAnchor="middle" className="text-xs font-semibold fill-foreground">
                2000s
              </text>
            </g>

            {/* Arrow 2 */}
            <path d="M 400 110 L 440 110" stroke="oklch(0.5 0 0)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Stage 3 */}
            <g>
              <rect x="450" y="50" width="140" height="120" fill="oklch(0.45 0.14 250 / 0.1)" stroke="oklch(0.45 0.14 250)" strokeWidth="2" rx="8"/>
              <text x="520" y="75" textAnchor="middle" className="text-lg font-bold fill-foreground">
                Predictive
              </text>
              <text x="520" y="95" textAnchor="middle" className="text-sm fill-muted-foreground">
                What will happen?
              </text>
              <text x="520" y="115" textAnchor="middle" className="text-xs fill-muted-foreground">
                ML Models, Forecasts
              </text>
              <text x="520" y="155" textAnchor="middle" className="text-xs font-semibold fill-foreground">
                2010s
              </text>
            </g>

            {/* Arrow 3 */}
            <path d="M 600 110 L 640 110" stroke="oklch(0.5 0 0)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

            {/* Stage 4 */}
            <g>
              <rect x="650" y="50" width="150" height="120" fill="oklch(0.58 0.1 240 / 0.1)" stroke="oklch(0.58 0.1 240)" strokeWidth="2" rx="8"/>
              <text x="725" y="75" textAnchor="middle" className="text-lg font-bold fill-foreground">
                Prescriptive
              </text>
              <text x="725" y="95" textAnchor="middle" className="text-sm fill-muted-foreground">
                What should happen?
              </text>
              <text x="725" y="115" textAnchor="middle" className="text-xs fill-muted-foreground">
                AI Automation
              </text>
              <text x="725" y="155" textAnchor="middle" className="text-xs font-semibold fill-foreground">
                2020s+
              </text>
            </g>

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="oklch(0.5 0 0)"/>
              </marker>
            </defs>
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">Data Pipeline</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <p className="font-semibold text-foreground">Collection</p>
                  <p className="text-sm text-muted-foreground">Gather data from all sources</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <p className="font-semibold text-foreground">Processing</p>
                  <p className="text-sm text-muted-foreground">Clean and prepare data</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <p className="font-semibold text-foreground">Analysis</p>
                  <p className="text-sm text-muted-foreground">Extract insights and patterns</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <p className="font-semibold text-foreground">Action</p>
                  <p className="text-sm text-muted-foreground">Make decisions and automate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-primary/5 border border-primary/10 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">Key Technologies</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">Data Warehousing:</span> Centralized data storage</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">ETL Tools:</span> Extract, Transform, Load</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">BI Tools:</span> Business Intelligence dashboards</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><span className="font-semibold text-foreground">ML Platforms:</span> Model development and deployment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
