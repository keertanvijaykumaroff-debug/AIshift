export default function FinanceSection() {
  return (
    <section id="finance" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          AI in Finance & Risk Management
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Finance was one of the earliest adopters of AI, using it for trading, fraud detection, and risk management.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Fraud Detection Network</h3>
            <svg viewBox="0 0 320 280" className="w-full max-w-sm">
              {/* Nodes */}
              <circle cx="160" cy="40" r="26" fill="oklch(0.54 0.16 235)" opacity="0.85"/>
              <text x="160" y="40" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="white">
                <tspan x="160" dy="-0.3em">Transact</tspan>
                <tspan x="160" dy="1.1em">-ion</tspan>
              </text>

              <circle cx="75" cy="130" r="24" fill="oklch(0.5 0.12 220)" opacity="0.75"/>
              <text x="75" y="130" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="bold" fill="white">
                <tspan x="75" dy="-0.4em">User</tspan>
                <tspan x="75" dy="1.2em">Profile</tspan>
              </text>

              <circle cx="160" cy="145" r="24" fill="oklch(0.5 0.12 220)" opacity="0.75"/>
              <text x="160" y="145" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="white">
                Patterns
              </text>

              <circle cx="245" cy="130" r="24" fill="oklch(0.5 0.12 220)" opacity="0.75"/>
              <text x="245" y="130" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="white">
                Network
              </text>

              <circle cx="50" cy="225" r="22" fill="oklch(0.45 0.14 250)" opacity="0.7"/>
              <text x="50" y="225" textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="bold" fill="white">
                <tspan x="50" dy="-0.3em">Risk</tspan>
                <tspan x="50" dy="1em">Model</tspan>
              </text>

              <circle cx="160" cy="245" r="22" fill="oklch(0.45 0.14 250)" opacity="0.7"/>
              <text x="160" y="245" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="bold" fill="white">
                Decision
              </text>

              <circle cx="270" cy="225" r="22" fill="oklch(0.45 0.14 250)" opacity="0.7"/>
              <text x="270" y="225" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="bold" fill="white">
                Alert
              </text>

              {/* Connections */}
              <line x1="160" y1="66" x2="85" y2="110" stroke="oklch(0.92 0 0)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="160" y1="66" x2="160" y2="122" stroke="oklch(0.92 0 0)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="160" y1="66" x2="235" y2="110" stroke="oklch(0.92 0 0)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="75" y1="154" x2="55" y2="207" stroke="oklch(0.92 0 0)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="160" y1="169" x2="160" y2="225" stroke="oklch(0.92 0 0)" strokeWidth="1.5" opacity="0.4"/>
              <line x1="245" y1="154" x2="285" y2="207" stroke="oklch(0.92 0 0)" strokeWidth="1.5" opacity="0.4"/>
            </svg>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-white border border-border rounded-lg">
              <h4 className="text-lg font-bold text-primary mb-2">Real-Time Detection</h4>
              <p className="text-muted-foreground text-sm">
                AI systems analyze transactions in milliseconds to identify suspicious patterns before funds are
                transferred.
              </p>
            </div>

            <div className="p-6 bg-white border border-border rounded-lg">
              <h4 className="text-lg font-bold text-primary mb-2">Learning from Data</h4>
              <p className="text-muted-foreground text-sm">
                Machine learning models train on historical fraud cases and legitimate transactions to improve accuracy
                over time.
              </p>
            </div>

            <div className="p-6 bg-white border border-border rounded-lg">
              <h4 className="text-lg font-bold text-primary mb-2">Reduced False Positives</h4>
              <p className="text-muted-foreground text-sm">
                AI adapts to individual user behavior, reducing false alarms that frustrate customers while catching
                real fraud.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-8">Case Studies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 font-bold text-blue-700">
              JPM
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">JPMorgan Chase</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Developed COIN (Contract Intelligence) to review commercial loans, reducing time spent by lawyers from
              360,000 hours annually to just seconds per document.
            </p>
            <p className="text-sm text-primary font-semibold">Impact: $300M+ in annual value</p>
          </div>

          <div className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 font-bold text-orange-700">
              BR
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">BlackRock</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Uses AI for portfolio management and risk analysis across trillions of dollars in assets. Aladdin
              platform processes vast amounts of market data.
            </p>
            <p className="text-sm text-primary font-semibold">Impact: Enhanced decision-making at scale</p>
          </div>

          <div className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 font-bold text-red-700">
              AMEX
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">American Express</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pioneered AI for fraud detection and credit risk assessment, processing millions of transactions daily.
              AI models detect fraud with 95%+ accuracy.
            </p>
            <p className="text-sm text-primary font-semibold">Impact: Reduced fraud losses by $200M annually</p>
          </div>

          <div className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 font-bold text-green-700">
              HSBC
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">HSBC</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Implemented AI-powered anti-money laundering (AML) systems that reduce false positives by 50% and improve
              compliance efficiency across global operations.
            </p>
            <p className="text-sm text-primary font-semibold">Impact: $150M savings in compliance costs</p>
          </div>

          <div className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 font-bold text-purple-700">
              GS
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Goldman Sachs</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Uses AI for algorithmic trading, risk management, and insights generation. Automated many trading floors
              operations, reducing headcount while increasing profitability.
            </p>
            <p className="text-sm text-primary font-semibold">Impact: 40% improvement in trading efficiency</p>
          </div>

          <div className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 font-bold text-indigo-700">
              CITI
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Citigroup</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Leverages AI for customer insights, personalized banking experiences, and predictive risk analytics across
              200+ countries and territories.
            </p>
            <p className="text-sm text-primary font-semibold">Impact: 30% improvement in customer retention</p>
          </div>
        </div>
      </div>
    </section>
  );
}
