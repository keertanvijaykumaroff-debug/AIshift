'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BusinessRevolution() {
  const data = [
    { name: 'Healthcare', adoption: 75, value: 'High' },
    { name: 'Finance', adoption: 80, value: 'Critical' },
    { name: 'Retail', adoption: 65, value: 'High' },
    { name: 'Logistics', adoption: 70, value: 'High' },
    { name: 'Manufacturing', adoption: 60, value: 'Growing' },
    { name: 'Technology', adoption: 85, value: 'Critical' },
    { name: 'Media', adoption: 72, value: 'High' },
    { name: 'Energy', adoption: 55, value: 'Growing' },
  ];

  return (
    <section id="revolution" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          AI Adoption Across Industries
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          AI is revolutionizing how businesses operate. Different industries are adopting AI at different rates based on
          competitive pressures and available use cases.
        </p>

        <div className="bg-white border border-border rounded-lg p-8 mb-12">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" />
              <XAxis dataKey="name" stroke="oklch(0.5 0 0)" />
              <YAxis stroke="oklch(0.5 0 0)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid oklch(0.92 0 0)',
                  borderRadius: '8px',
                }}
                formatter={(value) => `${value}%`}
              />
              <Bar dataKey="adoption" fill="oklch(0.54 0.16 235)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-primary/5 border border-primary/10 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Early Adopters</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Technology, Finance, Healthcare</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Competitive advantage critical</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Heavy investment in AI infrastructure</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-accent/5 border border-accent/10 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Future Growth</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Manufacturing, Energy, Agriculture</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Catching up due to proven ROI</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Custom AI solutions emerging</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
