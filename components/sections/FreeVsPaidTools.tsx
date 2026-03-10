export default function FreeVsPaidTools() {
  return (
    <section id="comparison" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          Free vs Paid AI Tools
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Quality AI tools exist across both free and paid tiers. Choose based on your needs and scale.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-green-50 border-2 border-green-200 rounded-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-8">Free Tier Tools</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white rounded border border-green-100">
                <h4 className="font-semibold text-foreground mb-2">ChatGPT (3.5 Turbo)</h4>
                <p className="text-sm text-muted-foreground">Great for exploration and basic tasks</p>
              </div>
              <div className="p-4 bg-white rounded border border-green-100">
                <h4 className="font-semibold text-foreground mb-2">Claude 3 Haiku</h4>
                <p className="text-sm text-muted-foreground">Fast, excellent for coding help</p>
              </div>
              <div className="p-4 bg-white rounded border border-green-100">
                <h4 className="font-semibold text-foreground mb-2">Codeium</h4>
                <p className="text-sm text-muted-foreground">Free code completion and generation</p>
              </div>
              <div className="p-4 bg-white rounded border border-green-100">
                <h4 className="font-semibold text-foreground mb-2">Perplexity (Free)</h4>
                <p className="text-sm text-muted-foreground">Limited AI research assistant queries</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-green-100">
              <h4 className="font-semibold text-foreground mb-2">Best For</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Learning and experimentation</li>
                <li>✓ Small projects and prototypes</li>
                <li>✓ Individual developers</li>
                <li>✓ Limited usage patterns</li>
              </ul>
            </div>
          </div>

          <div className="p-8 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-8">Paid Tier Tools</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white rounded border border-blue-100">
                <h4 className="font-semibold text-foreground mb-2">ChatGPT Plus ($20/mo)</h4>
                <p className="text-sm text-muted-foreground">GPT-4, priority access, plugins</p>
              </div>
              <div className="p-4 bg-white rounded border border-blue-100">
                <h4 className="font-semibold text-foreground mb-2">Claude Pro ($20/mo)</h4>
                <p className="text-sm text-muted-foreground">Higher usage limits, Claude 3 Opus</p>
              </div>
              <div className="p-4 bg-white rounded border border-blue-100">
                <h4 className="font-semibold text-foreground mb-2">GitHub Copilot ($10/mo)</h4>
                <p className="text-sm text-muted-foreground">Enterprise-grade code assistance</p>
              </div>
              <div className="p-4 bg-white rounded border border-blue-100">
                <h4 className="font-semibold text-foreground mb-2">Midjourney ($10-120/mo)</h4>
                <p className="text-sm text-muted-foreground">Professional image generation</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-blue-100">
              <h4 className="font-semibold text-foreground mb-2">Best For</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Professional use and production</li>
                <li>✓ Teams and organizations</li>
                <li>✓ High-volume usage</li>
                <li>✓ Advanced features and models</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-green-700">Free</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 font-semibold text-foreground">Model Access</td>
                  <td className="px-6 py-4 text-muted-foreground">Basic models, older versions</td>
                  <td className="px-6 py-4 text-muted-foreground">Latest, most advanced models</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="px-6 py-4 font-semibold text-foreground">Usage Limits</td>
                  <td className="px-6 py-4 text-muted-foreground">Strict rate limiting</td>
                  <td className="px-6 py-4 text-muted-foreground">Much higher limits</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-foreground">API Access</td>
                  <td className="px-6 py-4 text-muted-foreground">Limited or unavailable</td>
                  <td className="px-6 py-4 text-muted-foreground">Full API available</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="px-6 py-4 font-semibold text-foreground">Support</td>
                  <td className="px-6 py-4 text-muted-foreground">Community-based</td>
                  <td className="px-6 py-4 text-muted-foreground">Priority support</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-foreground">Integrations</td>
                  <td className="px-6 py-4 text-muted-foreground">Limited plugins/extensions</td>
                  <td className="px-6 py-4 text-muted-foreground">Extensive ecosystem</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">Recommendation</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="font-semibold">Start with free tools</span> to learn and explore. Most free tiers are
            generous enough for experimentation. As your needs grow—higher volume, specific features, or production
            use—upgrade to paid tools.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold">Expect to use multiple tools</span> for different tasks. Many professionals
            use a combination: free ChatGPT for quick tasks, Claude Pro for in-depth work, GitHub Copilot for coding,
            and specialized tools for specific needs.
          </p>
        </div>
      </div>
    </section>
  );
}
