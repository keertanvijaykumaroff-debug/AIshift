export default function LLMAndAgents() {
  return (
    <section id="llm-agents" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          What's an LLM and Agent?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Understanding Large Language Models and AI Agents is crucial to grasping the next evolution of artificial intelligence and automation.
        </p>

        {/* LLM vs Agent Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* LLM Card */}
          <div className="group relative p-10 bg-white border border-border rounded-xl hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Large Language Model (LLM)</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-foreground mb-2">What it is:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    A neural network trained on vast amounts of text data to understand and generate human language. Examples: ChatGPT, Claude, GPT-4.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">Key Characteristics:</p>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Processes text input and generates text output</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Stateless - each conversation is independent</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Responds to prompts but doesn't take actions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>No memory between conversations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Use Cases:</p>
                  <p className="text-muted-foreground">
                    Writing content, answering questions, translation, summarization, brainstorming, tutoring.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Card */}
          <div className="group relative p-10 bg-white border border-border rounded-xl hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">AI Agent</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-foreground mb-2">What it is:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    An autonomous system (often powered by an LLM) that can perceive its environment, make decisions, and take actions to achieve goals.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground mb-2">Key Characteristics:</p>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Can execute actions (API calls, code, transactions)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Maintains context and memory over interactions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Works toward goals autonomously</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Integrates with external tools and systems</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Use Cases:</p>
                  <p className="text-muted-foreground">
                    Automated customer service, workflow automation, research assistance, code generation & execution, business process automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Outsourcing */}
        <div className="relative overflow-hidden rounded-xl p-12 bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-foreground mb-6 text-pretty">
              Agent Outsourcing: The Future of Work
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">What is Agent Outsourcing?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Agent outsourcing refers to delegating tasks, workflows, or business processes to AI agents rather than human workers or traditional automation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Instead of hiring contractors or maintaining large teams for repetitive work, organizations deploy intelligent agents to handle those responsibilities 24/7.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Cost Reduction</p>
                      <p className="text-sm text-muted-foreground">Significant savings vs hiring full-time staff or contractors</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">24/7 Availability</p>
                      <p className="text-sm text-muted-foreground">Agents work without fatigue, holidays, or time zones</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Scalability</p>
                      <p className="text-sm text-muted-foreground">Instantly scale capacity without hiring delays</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Consistency</p>
                      <p className="text-sm text-muted-foreground">Perfect accuracy and adherence to standards</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/20">
              <h4 className="text-xl font-bold text-foreground mb-4">Real-World Examples</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <p className="font-semibold text-foreground mb-2">Customer Support</p>
                  <p className="text-sm text-muted-foreground">
                    AI agents handle 80% of customer inquiries, escalating only complex issues to humans.
                  </p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <p className="font-semibold text-foreground mb-2">Data Entry & Processing</p>
                  <p className="text-sm text-muted-foreground">
                    Agents extract, validate, and process documents at fraction of human cost.
                  </p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <p className="font-semibold text-foreground mb-2">Content Creation</p>
                  <p className="text-sm text-muted-foreground">
                    Agents generate reports, emails, social media content, and marketing materials.
                  </p>
                </div>
                <div className="p-4 bg-white/50 rounded-lg border border-primary/10">
                  <p className="font-semibold text-foreground mb-2">Research & Analysis</p>
                  <p className="text-sm text-muted-foreground">
                    Agents conduct competitive analysis, market research, and trend identification.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/20">
              <h4 className="text-xl font-bold text-foreground mb-4">The Human Element</h4>
              <p className="text-muted-foreground leading-relaxed">
                Agent outsourcing doesn't mean replacing all humans—it means freeing humans from repetitive tasks to focus on creative, strategic, and interpersonal work. The most successful organizations will be those that effectively partner humans with agents, leveraging the best of both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
