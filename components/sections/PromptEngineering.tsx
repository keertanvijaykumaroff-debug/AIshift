export default function PromptEngineering() {
  return (
    <section id="prompting" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          The Art of Prompt Engineering
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Getting the best results from AI requires crafting effective prompts. Think of it as learning a new
          communication skill.
        </p>

        <div className="space-y-8">
          {/* Poor Prompt Example */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-destructive/20 rounded-lg">
              <h3 className="text-lg font-bold text-destructive mb-4">❌ Poor Prompt</h3>
              <div className="bg-muted/30 p-4 rounded font-mono text-sm mb-4 overflow-x-auto">
                <p className="text-muted-foreground">
                  "write a story"
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                Too vague. AI doesn&apos;t know tone, length, genre, or audience.
              </p>
            </div>

            <div className="p-8 bg-white border border-green-600/20 rounded-lg">
              <h3 className="text-lg font-bold text-green-700 mb-4">✓ Better Prompt</h3>
              <div className="bg-muted/30 p-4 rounded font-mono text-sm mb-4 overflow-x-auto">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  "Write a 500-word science fiction story about a
                  {' '}<br/>
                  detective solving a mystery on Mars. Use
                  {' '}<br/>
                  engaging dialogue and keep the tone noir and
                  {' '}<br/>
                  suspenseful."
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                Specific about length, genre, setting, tone, and elements.
              </p>
            </div>
          </div>

          {/* Prompt Structure */}
          <div className="p-8 bg-primary/5 border border-primary/10 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8">The Effective Prompt Formula</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Role</h4>
                  <p className="text-muted-foreground text-sm">
                    Define what you want the AI to be: "You are an expert marketing strategist..."
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Context</h4>
                  <p className="text-muted-foreground text-sm">
                    Provide background information: "We&apos;re launching a B2B SaaS product for startups..."
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Task</h4>
                  <p className="text-muted-foreground text-sm">
                    Be specific about what you want: "Create 5 social media post ideas for LinkedIn..."
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Output Format</h4>
                  <p className="text-muted-foreground text-sm">
                    Specify the format: "Format as a numbered list with 150 characters max per post"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Chain of Thought</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ask the AI to explain its reasoning step-by-step for more accurate answers.
              </p>
              <div className="bg-muted/30 p-3 rounded font-mono text-xs overflow-x-auto mb-4">
                <p className="text-muted-foreground">
                  "Let&apos;s think through this step by step..."
                </p>
              </div>
              <p className="text-muted-foreground text-xs">
                Helps with complex reasoning tasks and reduces errors.
              </p>
            </div>

            <div className="p-8 bg-white border border-border rounded-lg">
              <h3 className="text-lg font-bold text-foreground mb-4">Few-Shot Learning</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Provide examples of what you want before asking the actual question.
              </p>
              <div className="bg-muted/30 p-3 rounded font-mono text-xs overflow-x-auto mb-4">
                <p className="text-muted-foreground">
                  Example: Input: X → Output: Y
                </p>
              </div>
              <p className="text-muted-foreground text-xs">
                AI adapts its style and format based on examples.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
