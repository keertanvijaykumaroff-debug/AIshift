
export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  points?: string[];
    icon: 'Sparkles',
  layout: 'title' | 'bullets' | 'split' | 'quote' | 'bar-chart' | 'stacked-bar-chart' | 'line-chart' | 'pie-chart';
  chartData?: any[];
  chartConfig?: {
    value1Name?: string;
    value2Name?: string;
  };
  extraContent?: any;
  icon?: string;
}

export const slides: SlideContent[] = [
  // 1: Hero
  {
    id: 1,
    title: "The AI Shift",
    subtitle: "Understanding Artificial Intelligence, Its Impact, and How to Prepare for the Future",
    icon: 'Sparkles',
    layout: 'title',
    points: ['Keertan Vijaykumar']
  },
  
  // 2-6: Intro
  {
    id: 2,
    title: "Understanding AI, ML, and Deep Learning",
    subtitle: "Establishing a baseline for the future",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Before diving into the implications of artificial intelligence, let's establish a clear understanding of what these terms mean.",
      "They are often used interchangeably, but they represent distinct concepts."
    ]
  },
  {
    id: 3,
    title: "Artificial Intelligence (AI)",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "The broad field of computer science",
      "Focused on creating machines capable of performing tasks that typically require human intelligence",
      "Includes learning, reasoning, and problem-solving"
    ]
  },
  {
    id: 4,
    title: "Machine Learning (ML)",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "A subset of Artificial Intelligence",
      "Enables systems to learn and improve from experience",
      "Does not require being explicitly programmed for every scenario",
      "Performance improves automatically through exposure to data"
    ]
  },
  {
    id: 5,
    title: "Deep Learning",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "A specialized subset of Machine Learning",
      "Uses artificial neural networks with multiple layers",
      "Learns hierarchical representations of complex data",
      "Powers modern breakthrough AI systems"
    ]
  },
  {
    id: 6,
    title: "Key Insight: The Hierarchy",
    icon: 'Sparkles',
    layout: 'quote',
    points: [
      "These technologies build upon one another: All Deep Learning is Machine Learning, and all Machine Learning is AI. But not all AI is Deep Learning."
    ]
  },

  // 7: Timeline visual
  {
    id: 7,
    title: "Evolution of AI: Interest & Capability",
    subtitle: "A visualization of AI's timeline",
    icon: 'Clock',
    layout: 'line-chart',
    chartData: [
      { name: '1950', value: 10 },
      { name: '1974', value: 5 },
      { name: '1997', value: 25 },
      { name: '2012', value: 45 },
      { name: '2016', value: 65 },
      { name: '2024', value: 95 }
    ]
  },

  // 8-13: Timeline text points
  { id: 8, title: "Evolution Timeline: 1950", subtitle: "The Birth of AI", icon: 'Clock', layout: 'bullets', points: ["Alan Turing proposes the 'Imitation Game' test for machine intelligence (The Turing Test).", "Forms the philosophical foundation of AI."] },
  { id: 9, title: "Evolution Timeline: 1974-1980", subtitle: "First AI Winter", icon: 'Clock', layout: 'bullets', points: ["Reduced funding and public interest.", "Caused by unmet expectations and early technological limitations in compute power."] },
  { id: 10, title: "Evolution Timeline: 1997", subtitle: "Deep Blue", icon: 'Clock', layout: 'bullets', points: ["IBM's Deep Blue defeats world chess champion Garry Kasparov.", "A major milestone in rule-based, game-playing AI."] },
  { id: 11, title: "Evolution Timeline: 2012", subtitle: "Deep Learning Revolution", icon: 'Clock', layout: 'bullets', points: ["AlexNet wins the ImageNet competition by a massive margin.", "Sparks a massive surge in deep learning research and GPU cloud investment."] },
  { id: 12, title: "Evolution Timeline: 2016", subtitle: "AlphaGo Victory", icon: 'Clock', layout: 'bullets', points: ["DeepMind's AlphaGo defeats world Go champion Lee Sedol.", "Mastering a game previously thought too complex for machines using Reinforcement Learning."] },
  { id: 13, title: "Evolution Timeline: 2022-2024", subtitle: "Generative AI Boom", icon: 'Clock', layout: 'bullets', points: ["ChatGPT, GPT-4, Claude, and other Large Language Models (LLMs) are released.", "Completely transforms the global AI landscape and public accessibility."] },

  // 14-19: Landscape
  {
    id: 14,
    title: "The AI Ecosystem Stack",
    subtitle: "How is AI built?",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "The modern AI ecosystem is built on a massive stack of technologies.",
      "From bare-metal computing infrastructure to consumer-facing applications."
    ]
  },
  {
    id: 15,
    title: "Foundation & Data Layers",
    icon: 'Database',
    layout: 'split',
    points: [
      "Foundation Layer: Computing Infrastructure (GPUs, TPUs, Cloud Computing grids). The hardware that makes models possible.",
      "Data Layer: Massive datasets, robust Data Processing pipelines, Feature Engineering. The fuel for the models."
    ]
  },
  {
    id: 16,
    title: "Algorithms & Deep Learning",
    icon: 'BrainCircuit',
    layout: 'split',
    points: [
      "ML Algorithms: Supervised Learning, Unsupervised Learning, Reinforcement Learning strategies.",
      "Deep Learning Models: Neural Networks, Transformers architecture, Large Language Models (the brain)."
    ]
  },
  {
    id: 17,
    title: "Applications Layer",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "The top of the stack is where users interact with AI.",
      "Divided into Horizontal and Vertical applications."
    ]
  },
  {
    id: 18,
    title: "Horizontal Applications",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "General-purpose tools used broadly across all industries.",
      "Examples: ChatGPT, Copilot, Midjourney.",
      "Lower barrier to entry but extremely high competition."
    ]
  },
  {
    id: 19,
    title: "Vertical Applications",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Industry-specific, highly specialized solutions.",
      "Examples: Medical diagnosis AI, Legal contract analyzers.",
      "Higher value extraction but requires deep domain expertise to build."
    ]
  },

  // 20-26: Major Companies
  {
    id: 20,
    title: "Leading AI Organizations",
    subtitle: "Who is building the future?",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "A handful of massive organizations currently dominate foundational model research.",
      "Their varying philosophies (open vs closed source) shape the ecosystem."
    ]
  },
  { id: 21, title: "Organization: OpenAI", icon: 'Building2', layout: 'split', points: ["Focus: Large Language Models. Products: ChatGPT, GPT-4, DALL-E.", "Impact: Democratized global access to advanced AI tools and sparked the current boom."] },
  { id: 22, title: "Organization: Google DeepMind", icon: 'Building2', layout: 'split', points: ["Focus: Fundamental Research & AI Systems. Products: AlphaGo, Gemini, AlphaFold.", "Impact: Driving massive scientific breakthroughs (e.g., protein folding)."] },
  { id: 23, title: "Organization: Microsoft", icon: 'Building2', layout: 'split', points: ["Focus: Enterprise AI & Productivity. Products: Copilot, Azure AI.", "Impact: Integrating AI directly into the world's daily productivity software (Office, GitHub)."] },
  { id: 24, title: "Organization: Anthropic", icon: 'Building2', layout: 'split', points: ["Focus: Safe & Aligned AI Development. Products: Claude, Constitutional AI.", "Impact: Pioneering comprehensive safety frameworks and ethical model alignment."] },
  { id: 25, title: "Organization: Meta", icon: 'Building2', layout: 'split', points: ["Focus: Open-Source AI Ecosystems. Products: Llama series, OPT.", "Impact: Democratizing developer access by open-sourcing massive, powerful model weights."] },
  { id: 26, title: "Organization: xAI", icon: 'Building2', layout: 'split', points: ["Focus: AI Infrastructure & Unfiltered Models. Products: Grok, Colossus.", "Impact: Building next-generation hyper-scale AI systems at unprecedented speed."] },

  // 27-35: LLMs & Agents
  {
    id: 27,
    title: "What's an LLM and Agent?",
    icon: 'Cpu',
    layout: 'quote',
    points: [
      "Understanding Large Language Models and AI Agents is crucial to grasping the next evolution of artificial intelligence and automation."
    ]
  },
  {
    id: 28,
    title: "Large Language Models (LLMs)",
    subtitle: "What it is",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "A neural network trained on vast text data to understand/generate human language.",
      "Examples: ChatGPT, Claude, GPT-4."
    ]
  },
  {
    id: 29,
    title: "LLM Characteristics",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Processes text input -> generates text output.",
      "Stateless by default: each conversation is independent with no inherent memory.",
      "Responds to user prompts but cannot take real-world autonomous actions on its own."
    ]
  },
  {
    id: 30,
    title: "LLM Use Cases",
    icon: 'Sparkles',
    layout: 'split',
    points: [
      "Writing content, copywriting, answering general queries, translation.",
      "Summarization of long documents, brainstorming, personal tutoring."
    ]
  },
  {
    id: 31,
    title: "AI Agents",
    subtitle: "What it is",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "An autonomous system (often powered by an LLM) that perceives its environment.",
      "Can make decisions and take actions to achieve a predefined goal.",
      "The 'hands and eyes' added to the 'brain' (LLM)."
    ]
  },
  {
    id: 32,
    title: "AI Agent Characteristics",
    icon: 'Cpu',
    layout: 'bullets',
    points: [
      "Can execute API calls, run code, or perform transactions.",
      "Works toward goals autonomously without step-by-step human prompting.",
      "Maintains context and long-term memory over multiple interactions.",
      "Integrates with external tools and software systems."
    ]
  },
  {
    id: 33,
    title: "AI Agent Use Cases",
    icon: 'Cpu',
    layout: 'split',
    points: [
      "Fully automated customer service resolution, internet research.",
      "Code generation loops, end-to-end business process workflows."
    ]
  },
  {
    id: 34,
    title: "Agent Outsourcing",
    subtitle: "The Future of Work",
    icon: 'Users',
    layout: 'bullets',
    points: [
      "Definition: Delegating tasks or workflows to AI agents rather than human contractors.",
      "Cost Reduction: Significant savings vs. hiring full-time staff.",
      "24/7 Availability: Agents work without fatigue, holidays, or time zones.",
      "Scalability: Instantly scale capacity up or down based on data demand."
    ]
  },
  {
    id: 35,
    title: "The Human Element",
    subtitle: "In the Age of Agents",
    icon: 'Cpu',
    layout: 'bullets',
    points: [
      "Agent outsourcing doesn't mean replacing humans entirely.",
      "It frees humans from repetitive tasks to focus on creative, strategic, and interpersonal work.",
      "The most successful organizations effectively partner human taste with agent execution."
    ]
  },

  // 36-39: Business Revolution & Chart
  {
    id: 36,
    title: "Business Revolution",
    subtitle: "AI Adoption Across Industries",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "AI is revolutionizing how businesses operate.",
      "Different industries are adopting AI at different rates based on competitive pressures and available use cases."
    ]
  },
  {
    id: 37,
    title: "AI Adoption Readiness by Industry (%)",
    icon: 'BrainCircuit',
    layout: 'bar-chart',
    chartData: [
      { name: 'Healthcare', value: 75 },
      { name: 'Finance', value: 80 },
      { name: 'Retail', value: 65 },
      { name: 'Logistics', value: 70 },
      { name: 'Manufacturing', value: 60 },
      { name: 'Technology', value: 85 },
      { name: 'Media', value: 72 },
      { name: 'Energy', value: 55 }
    ]
  },
  {
    id: 38,
    title: "Early Adopters",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Technology, Finance, Healthcare sectors.",
      "Competitive advantage is absolutely critical.",
      "These sectors have seen heavy investment in foundational AI infrastructure and data pipelines."
    ]
  },
  {
    id: 39,
    title: "Future Growth Sectors",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Manufacturing, Energy, Agriculture sectors.",
      "Catching up due to proven ROI from early adopters.",
      "Custom AI solutions and edge-computing AI are emerging to support these."
    ]
  },

  // 40-44: Job Impact & Chart
  {
    id: 40,
    title: "The Impact on Jobs",
    icon: 'Users',
    layout: 'bullets',
    points: [
      "AI will fundamentally transform work, but not necessarily eliminate it.",
      "Most roles will be augmented rather than replaced.",
      "Understanding which tasks are replaceable is the key to staying competitive."
    ]
  },
  {
    id: 41,
    title: "Task Automation vs Augmentation (%)",
    icon: 'Cpu',
    layout: 'stacked-bar-chart',
    chartConfig: {
      value1Name: "Replaceable %",
      value2Name: "Augmented %"
    },
    chartData: [
      { name: 'Administrative', value1: 40, value2: 60 },
      { name: 'Customer Svc.', value1: 50, value2: 50 },
      { name: 'Data Entry', value1: 70, value2: 30 },
      { name: 'Coding', value1: 20, value2: 80 },
      { name: 'Research', value1: 15, value2: 85 },
      { name: 'Creative', value1: 10, value2: 90 },
      { name: 'Management', value1: 5, value2: 95 }
    ]
  },
  {
    id: 42,
    title: "Replaceable Tasks",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Routine data processing and entry.",
      "Repetitive, script-based customer service.",
      "Basic, formulaic content creation."
    ]
  },
  {
    id: 43,
    title: "Augmented Work",
    icon: 'Users',
    layout: 'bullets',
    points: [
      "Complex problem-solving and systems thinking.",
      "Strategic decision-making and leadership.",
      "Creative innovation and art direction."
    ]
  },
  {
    id: 44,
    title: "Job Impact Case Studies",
    icon: 'Users',
    layout: 'split',
    points: [
      "Medical: AI helps radiologists process more scans faster. Best outcomes result from Human + AI collaboration.",
      "Developers: GitHub Copilot makes devs 3-5x more productive. Demand for senior human architects has increased."
    ]
  },

  // 45-50: Analytics
  {
    id: 45,
    title: "AI and Data Analytics",
    icon: 'Database',
    layout: 'bullets',
    points: [
      "Data is the absolute fuel of AI.",
      "Understanding data analytics and how AI leverages it is critical to modern business success."
    ]
  },
  {
    id: 46,
    title: "Analytics Data Processing Volume",
    icon: 'Database',
    layout: 'pie-chart',
    chartData: [
      { name: 'Descriptive Analytics', value: 40 },
      { name: 'Diagnostic Analytics', value: 30 },
      { name: 'Predictive Analytics', value: 20 },
      { name: 'Prescriptive Analytics', value: 10 }
    ]
  },
  {
    id: 47,
    title: "Analytics Maturity: Stage 3 & 4",
    icon: 'Database',
    layout: 'split',
    points: [
      "Stage 3 (2010s): Predictive Analytics. 'What will happen?' Driven by ML Models and Forecasts.",
      "Stage 4 (2020s+): Prescriptive Analytics. 'What should happen?' Driven by AI Automation and Agents."
    ]
  },
  {
    id: 48,
    title: "The Data Pipeline (Pt 1)",
    icon: 'Database',
    layout: 'split',
    points: [
      "1. Collection: Gather data from disparate sources (APIs, logs, forms).",
      "2. Processing: Clean, normalize, and prepare the data (ETL/ELT processes)."
    ]
  },
  {
    id: 49,
    title: "The Data Pipeline (Pt 2)",
    icon: 'Database',
    layout: 'split',
    points: [
      "3. Analysis: Extract features, insights, and hidden patterns via ML.",
      "4. Action: Make automated decisions or present prescriptions to management."
    ]
  },
  {
    id: 50,
    title: "Key Data Technologies",
    icon: 'Database',
    layout: 'bullets',
    points: [
      "Data Warehousing: Centralized data storage (Snowflake, BigQuery).",
      "ETL Tools: Extract, Transform, Load pipelines.",
      "ML Platforms: Enterprise model development and scalable deployment."
    ]
  },

  // 51-54: Finance
  {
    id: 51,
    title: "AI in Finance: Fraud Detection",
    icon: 'Briefcase',
    layout: 'bullets',
    points: [
      "Real-Time Detection: Analyzing thousands of data points in milliseconds.",
      "Learning from Data: ML models train continually on historical & live fraud cases.",
      "Reduced False Positives: AI adapts to individual behaviors, preventing frustrating lock-outs."
    ]
  },
  {
    id: 52,
    title: "Enterprise Finance: JP Morgan & BlackRock",
    icon: 'Briefcase',
    layout: 'split',
    points: [
      "JPMorgan Chase: 'COIN' reviews commercial loans. 360,000 human hours reduced to seconds. ($300M+ value)",
      "BlackRock: 'Aladdin' platform manages risk across trillions in assets using massive scale AI analytics."
    ]
  },
  {
    id: 53,
    title: "Enterprise Finance: Amex & HSBC",
    icon: 'Briefcase',
    layout: 'split',
    points: [
      "American Express: Processes millions of daily transactions finding fraud with 95%+ accuracy. ($200M savings)",
      "HSBC: AI Anti-Money Laundering (AML) reduced false positive alerts by 50%. ($150M savings)"
    ]
  },
  {
    id: 54,
    title: "Enterprise Finance: Goldman Sachs & Citi",
    icon: 'Briefcase',
    layout: 'split',
    points: [
      "Goldman Sachs: Automated algorithmic trading floors; 40% improvement in efficiency and risk management.",
      "Citigroup: Predictive risk analytics across 200+ countries, driving 30% retention improvements."
    ]
  },

  // 55-58: Professional Tools
  {
    id: 55,
    title: "Professional Tools: Productivity & Research",
    icon: 'Sparkles',
    layout: 'split',
    points: [
      "Productivity & Writing: ChatGPT (GPT-4), Claude 3, Notion AI, Grammarly",
      "Research & Analysis: Perplexity, Google Scholar AI, Elicit, Scite (Citation AI)"
    ]
  },
  {
    id: 56,
    title: "Professional Tools: Creative & Code",
    icon: 'Terminal',
    layout: 'split',
    points: [
      "Creative & Design: Midjourney, DALL-E 3, Adobe Firefly, Canva AI",
      "Code & Dev: GitHub Copilot, Cursor, Tabnine, Codeium"
    ]
  },
  {
    id: 57,
    title: "Free vs Paid AI Tools",
    icon: 'BrainCircuit',
    layout: 'split',
    points: [
      "Free Tier: Best for exploration, learning, small prototypes. Examples: ChatGPT 3.5, Claude Haiku, Perplexity Free.",
      "Paid Tier: Best for professional production, privacy, high-usage. Examples: GPT-4 Plus ($20), Claude Pro ($20), Copilot ($10)."
    ]
  },
  {
    id: 58,
    title: "Choosing the Right Tool",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Capabilities: Match the tool's core strength to your exact requirements.",
      "Cost: Start with free tools to learn. Upgrade when you hit usage limits.",
      "Integrations: Consider how the tool natively fits into your existing software stack."
    ]
  },

  // 59-62: Prompting
  {
    id: 59,
    title: "The Art of Prompt Engineering",
    subtitle: "A new communication skill",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Getting the best results from AI requires crafting effective prompts.",
      "Poor Prompt: 'write a story' (Too vague, no context).",
      "Better Prompt: 'Write a 500-word sci-fi story about a detective on Mars. Tone: Noir.'"
    ]
  },
  {
    id: 60,
    title: "The Effective Prompt Formula",
    icon: 'Terminal',
    layout: 'bullets',
    points: [
      "1. Role: Define what you want the AI to be ('You are an expert...').",
      "2. Context: Provide background info ('We are launching a new product...').",
      "3. Task: Be highly specific about the goal.",
      "4. Output Format: Specify the exact format ('Numbered list, 150 chars max')."
    ]
  },
  {
    id: 61,
    title: "Advanced Prompting: Chain of Thought",
    icon: 'Terminal',
    layout: 'bullets',
    points: [
      "Asking the AI to explain its reasoning step-by-step.",
      "E.g., 'Let's think through this step by step...'",
      "Greatly helps with complex reasoning tasks and reduces logical errors."
    ]
  },
  {
    id: 62,
    title: "Advanced Prompting: Few-Shot Learning",
    icon: 'Terminal',
    layout: 'bullets',
    points: [
      "Providing examples of what you want before asking the actual question.",
      "Input: X -> Output: Y.",
      "The AI perfectly adapts its style, format, and tone based on the examples."
    ]
  },

  // 63-65: Automation
  {
    id: 63,
    title: "AI-Powered Automation & Workflows",
    icon: 'Users',
    layout: 'bullets',
    points: [
      "Combining AI with traditional workflow automation can dramatically increase productivity.",
      "Workflow Platforms: n8n (Open-source), Zapier, Make, IFTTT."
    ]
  },
  {
    id: 64,
    title: "Common Automation Use Cases",
    icon: 'Cpu',
    layout: 'split',
    points: [
      "Summarizing articles and auto-generating newsletters daily.",
      "Extracting structured JSON data from unstructured PDF documents via APIs."
    ]
  },
  {
    id: 65,
    title: "Example Pipeline: Research to Insights",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "1. Monitor: RSS feed collects industry news automatically.",
      "2. Extract: ChatGPT API parses and summarizes key trends.",
      "3. Formatter: Generates a neatly formatted Markdown digest.",
      "4. Distribute: Automated push to a Slack channel every morning."
    ]
  },

  // 66-70: Ethics
  {
    id: 66,
    title: "AI Ethics & Concerns",
    icon: 'ShieldCheck',
    layout: 'quote',
    points: ["With great power comes great responsibility. Understanding the ethical implications of AI is crucial for responsible deployment."]
  },
  {
    id: 67,
    title: "Ethical Concern: Bias & Misinformation",
    icon: 'ShieldCheck',
    layout: 'split',
    points: [
      "Bias: Models trained on biased internet data can perpetuate discrimination (e.g., biased hiring tools).",
      "Hallucinations: AI can confidently generate false info. Fact-checking is always required."
    ]
  },
  {
    id: 68,
    title: "Ethical Concern: Privacy & Workforce",
    icon: 'Users',
    layout: 'split',
    points: [
      "Privacy: Models can memorize and leak personal/sensitive data. Never paste API keys into ChatGPT.",
      "Workforce: Rapid automation displaces workers. Retraining programs and social safety nets are needed."
    ]
  },
  {
    id: 69,
    title: "Ethical Concern: Alignment",
    icon: 'ShieldCheck',
    layout: 'bullets',
    points: [
      "Autonomous Weapons: AI-driven military tech raises accountability concerns.",
      "AI Alignment: Ensuring powerful generalized AI systems pursue goals strictly aligned with human values and intentions."
    ]
  },
  {
    id: 70,
    title: "Responsible Actions",
    icon: 'Sparkles',
    layout: 'split',
    points: [
      "Individual: Verify info, protect privacy, understand limitations.",
      "Organizational: Establish ethics committees, conduct impact assessments, ensure human oversight."
    ]
  },

  // 71-77: Prep & Takeaways
  {
    id: 71,
    title: "Preparing for the AI-Powered Future",
    subtitle: "Humans Collaborating with AI",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "The future of work isn't about humans vs AI.",
      "It is about humans equipped with AI vs humans without it.",
      "Continuous learning and skill adaptation are paramount."
    ]
  },
  {
    id: 72,
    title: "The 3 Pillars of AI-Readiness",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "1. Technical Fluency: Knowing what AI can/cannot do. Hands-on experience.",
      "2. Domain Expertise: Deep knowledge of your field to spot where AI adds value.",
      "3. Ethical Judgment: Responsible deployment and an understanding of risks."
    ]
  },
  {
    id: 73,
    title: "5-Year Action Plan",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Year 1: Foundation (Learn basics, identify opportunities).",
      "Year 2: Experimentation (Build projects, develop actual expertise).",
      "Year 3: Integration (Incorporate deeply into business workflows).",
      "Year 4-5: Leadership (Mentor others, drive organizational adoption)."
    ]
  },
  {
    id: 74,
    title: "Key Takeaway: Transformation",
    icon: 'Sparkles',
    layout: 'split',
    points: [
      "AI is Transformative: It's a fundamental shift in how we work, live, and solve problems.",
      "Adoption is Critical: Organizations that embrace AI gain massive, compounding competitive advantages."
    ]
  },
  {
    id: 75,
    title: "Key Takeaway: Partnership",
    icon: 'Sparkles',
    layout: 'split',
    points: [
      "Collaboration > Competition: The best outcomes come from combining human creative context with AI efficiency.",
      "Skills Matter: Technical literacy helps in every role. Start building those 'muscles' now."
    ]
  },
  {
    id: 76,
    title: "Key Takeaway: Ethics & Timing",
    icon: 'ShieldCheck',
    layout: 'split',
    points: [
      "Ethics is Essential: Responsible deployment requires transparency and fairness.",
      "The Time is Now: The window to upskill is open. Those who wait will be playing catch-up for decades."
    ]
  },
  {
    id: 77,
    title: "Thank You",
    subtitle: "The Future is Collaboration",
    icon: 'Sparkles',
    layout: 'title',
    points: [
      "Connect with me on LinkedIn to continue the conversation."
    ]
  }
];
