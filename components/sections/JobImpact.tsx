'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function JobImpact() {
  const data = [
    { role: 'Administrative', replaced: 40, augmented: 60 },
    { role: 'Customer Service', replaced: 50, augmented: 50 },
    { role: 'Data Entry', replaced: 70, augmented: 30 },
    { role: 'Coding', replaced: 20, augmented: 80 },
    { role: 'Research', replaced: 15, augmented: 85 },
    { role: 'Creative', replaced: 10, augmented: 90 },
    { role: 'Management', replaced: 5, augmented: 95 },
  ];

  return (
    <section id="jobs" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          The Impact on Jobs
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          AI will transform work, but not necessarily eliminate it. Most roles will be augmented rather than replaced.
          Understanding which tasks are replaceable is key to staying competitive.
        </p>

        <div className="bg-white border border-border rounded-lg p-8 mb-12">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0 0)" />
              <XAxis dataKey="role" stroke="oklch(0.5 0 0)" />
              <YAxis stroke="oklch(0.5 0 0)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid oklch(0.92 0 0)',
                  borderRadius: '8px',
                }}
                formatter={(value) => `${value}%`}
              />
              <Legend />
              <Bar dataKey="replaced" fill="oklch(0.577 0.245 27.325)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="augmented" fill="oklch(0.54 0.16 235)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="p-8 bg-white border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">Replaceable Tasks</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Routine data processing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Repetitive customer service</span>
              </li>
              <li className="flex gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Basic content creation</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">Augmented Work</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Complex problem-solving</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Strategic decision-making</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Creative innovation</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">New Opportunities</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>AI training & expertise</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Human-AI collaboration</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Entirely new job categories</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-3">Case Study</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            <span className="font-semibold">Medical Professionals:</span> Rather than replacing radiologists, AI helps
            them process more scans and focus on complex cases. The best outcomes come from human-AI collaboration, not
            replacement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold">Software Developers:</span> GitHub Copilot doesn&apos;t replace developers—it
            makes them 3-5x more productive. Demand for senior developers who can guide AI has actually increased.
          </p>
        </div>
      </div>
    </section>
  );
}
