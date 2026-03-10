export default function KeyTakeaways() {
  const takeaways = [
    {
      title: 'AI is Transformative',
      description: 'AI is not just an incremental improvement—it represents a fundamental shift in how we work, live, and solve problems.',
      details: 'The technology is evolving rapidly and impacting every industry.',
    },
    {
      title: 'Adoption is Critical',
      description: 'Organizations and individuals that embrace AI will gain significant competitive advantages.',
      details: 'Early adopters are already seeing major ROI improvements.',
    },
    {
      title: 'Collaboration > Competition',
      description: 'The future is about human-AI collaboration, not replacement. The best outcomes come from combining human creativity with AI efficiency.',
      details: 'Learn to work with AI as a partner, not as a threat.',
    },
    {
      title: 'Skills Matter More',
      description: 'Technical literacy is increasingly important across all fields. Understanding AI principles helps in every role.',
      details: 'Start learning now—the tools and skills you develop will be valuable for decades.',
    },
    {
      title: 'Ethics Is Essential',
      description: 'Responsible AI deployment requires ethical considerations from the start. Think about implications, bias, and fairness.',
      details: 'Companies and individuals with strong ethical practices will build more sustainable, trusted solutions.',
    },
    {
      title: 'The Time is Now',
      description: 'The AI wave is here. The window to upskill, experiment, and position yourself is open now.',
      details: 'Those who wait will be playing catch-up. Start your AI journey today.',
    },
  ];

  return (
    <section id="takeaways" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-pretty">
          Key Takeaways
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          As we conclude this seminar, here are the essential points to remember as you navigate the AI revolution.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {takeaways.map((takeaway, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-white border-2 border-primary/30 rounded-xl hover:shadow-xl hover:border-primary transition-all duration-300 animate-in fade-in overflow-hidden"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{takeaway.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{takeaway.description}</p>
                <p className="text-sm text-primary font-semibold">{takeaway.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-xl p-16 bg-gradient-to-br from-primary/10 via-background to-primary/5 border-2 border-primary/40 text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-pretty">
              Thank You
            </h3>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Thank you for joining this exploration of the AI Shift. The future is being written now, and your participation in understanding and adapting to AI is what will drive meaningful change.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Remember: AI is not about replacing humans—it&apos;s about amplifying human potential. The journey ahead is one of collaboration, creativity, and continuous learning.
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="w-48 h-48 bg-white p-4 rounded-xl shadow-lg">
                <img 
                  src="/qr-code.png" 
                  alt="Connect with Keertan Vijaykumar QR Code" 
                  className="w-full h-full"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-foreground mb-2">Connect with me</h4>
                <p className="text-muted-foreground">Scan the QR code to reach out</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Questions? Want to learn more? Connect with the instructor or explore the resources provided.
          </p>
          <p className="text-sm text-muted-foreground">
            Thank you for spending time on this seminar. The future of AI is bright, and we&apos;re excited to see what
            you&apos;ll build with it.
          </p>
        </div>
      </div>
    </section>
  );
}
