export interface SlideContent {
    id: number;
    title: string;
    subtitle?: string;
    points?: string[];
    layout: 'title' | 'bullets' | 'split' | 'quote';
    extraContent?: any;
}

export const slides: SlideContent[] = [
    // 1
    {
        id: 1,
        title: "The AI Shift",
        subtitle: "Understanding Artificial Intelligence, Its Impact, and How to Prepare for the Future",
        layout: 'title',
        points: ['Keertan Vijaykumar']
    },
    // 2
    {
        id: 2,
        title: "Understanding AI, ML, and Deep Learning",
        subtitle: "Before diving into implications, let's establish a clear understanding of these terms.",
        layout: 'bullets',
        points: [
            "Artificial Intelligence (AI): The broad field of computer science",
            "Focused on creating machines capable of performing tasks requiring human intelligence",
            "Includes learning, reasoning, and problem-solving"
        ]
    },
    // 3
    {
        id: 3,
        title: "Machine Learning (ML)",
        layout: 'bullets',
        points: [
            "A subset of Artificial Intelligence",
            "Enables systems to learn and improve from experience",
            "Does not require explicit programming for every scenario",
            "Performance improves automatically through exposure to more data"
        ]
    },
    // 4
    {
        id: 4,
        title: "Deep Learning",
        layout: 'bullets',
        points: [
            "A specialized subset of Machine Learning",
            "Uses artificial neural networks with multiple layers",
            "Capable of learning hierarchical representations of complex data",
            "The driving force behind modern breakthrough AI systems (like ChatGPT)"
        ]
    },
    // 5
    {
        id: 5,
        title: "Key Insight: The Hierarchy",
        layout: 'bullets',
        points: [
            "These technologies build upon one another hierarchically.",
            "All Machine Learning is AI, but not all AI is Machine Learning.",
            "All Deep Learning is Machine Learning, but not all ML is Deep Learning."
        ]
    },
    // 6
    { id: 6, title: "Evolution Timeline: 1950", subtitle: "The Birth of AI", layout: 'bullets', points: ["Alan Turing proposes the 'Imitation Game' test for machine intelligence (The Turing Test)."] },
    { id: 7, title: "Evolution Timeline: 1974-1980", subtitle: "First AI Winter", layout: 'bullets', points: ["Reduced funding and public interest due to unmet expectations and early technological limitations."] },
    { id: 8, title: "Evolution Timeline: 1997", subtitle: "Deep Blue", layout: 'bullets', points: ["IBM's Deep Blue defeats world chess champion Garry Kasparov, a major milestone in game-playing AI."] },
    { id: 9, title: "Evolution Timeline: 2012", subtitle: "Deep Learning Revolution", layout: 'bullets', points: ["AlexNet wins the ImageNet competition, sparking a massive surge in deep learning research and investment."] },
    { id: 10, title: "Evolution Timeline: 2016", subtitle: "AlphaGo Victory", layout: 'bullets', points: ["DeepMind's AlphaGo defeats world Go champion Lee Sedol, mastering a game previously thought too complex for machines."] },
    { id: 11, title: "Evolution Timeline: 2022-2024", subtitle: "Generative AI Boom", layout: 'bullets', points: ["ChatGPT, GPT-4, Claude, and other Large Language Models (LLMs) completely transform the global AI landscape."] },
    { id: 12, title: "Evolution Timeline: 2025-2026", subtitle: "AI Integration Era", layout: 'bullets', points: ["AI becomes deeply embedded in everyday tools, enterprise workflows, and applications across all industries."] },

    // 13
    {
        id: 13,
        title: "The AI Ecosystem Stack: Infrastructure",
        layout: 'split',
        points: [
            "Foundation Layer: Computing Infrastructure (GPUs, TPUs, Cloud Computing grids)",
            "Data Layer: Massive datasets, robust Data Processing pipelines, Feature Engineering"
        ]
    },
    // 14
    {
        id: 14,
        title: "The AI Ecosystem Stack: Algorithms",
        layout: 'split',
        points: [
            "ML Algorithms: Supervised Learning, Unsupervised Learning, Reinforcement Learning",
            "Deep Learning Models: Neural Networks, Transformers architecture, Large Language Models"
        ]
    },
    // 15
    {
        id: 15,
        title: "The AI Ecosystem Stack: Applications",
        layout: 'split',
        points: [
            "Horizontal Applications: General-purpose tools used across industries (e.g., ChatGPT, Copilot, Midjourney). High competition.",
            "Vertical Applications: Industry-specific solutions (e.g., Medical diagnosis AI). Higher value, requires deep domain expertise."
        ]
    },

    // Companies
    { id: 16, title: "Leading Organizations: OpenAI", layout: 'bullets', points: ["Focus: Large Language Models", "Products: ChatGPT, GPT-4, DALL-E", "Impact: Democratized global access to advanced AI tools."] },
    { id: 17, title: "Leading Organizations: Google DeepMind", layout: 'bullets', points: ["Focus: Fundamental Research & AI Systems", "Products: AlphaGo, Gemini, AlphaFold", "Impact: Massive breakthroughs in sciences (e.g., protein folding)."] },
    { id: 18, title: "Leading Organizations: Microsoft", layout: 'bullets', points: ["Focus: Enterprise AI & Productivity", "Products: Copilot, GitHub Copilot, Azure AI", "Impact: Integrating AI directly into daily productivity software."] },
    { id: 19, title: "Leading Organizations: Anthropic", layout: 'bullets', points: ["Focus: Safe & Aligned AI Development", "Products: Claude, Constitutional AI", "Impact: Pioneering safety frameworks and ethical alignment."] },
    { id: 20, title: "Leading Organizations: Meta", layout: 'bullets', points: ["Focus: Open-Source AI Ecosystems", "Products: Llama 2, Llama 3, OPT", "Impact: Democratizing developer access through open-source weights."] },
    { id: 21, title: "Leading Organizations: xAI", layout: 'bullets', points: ["Focus: AI Infrastructure & Unfiltered Models", "Products: Grok, AI research cluster", "Impact: Building next-generation hyper-scale AI systems."] },

    // LLM vs Agent
    {
        id: 22,
        title: "Large Language Models (LLMs)",
        subtitle: "What it is",
        layout: 'bullets',
        points: [
            "A neural network trained on vast text data to understand/generate human language.",
            "Processes text input -> generates text output.",
            "Stateless by default: each conversation is independent with no inherent memory.",
            "Responds to prompts but cannot take real-world actions on its own."
        ]
    },
    {
        id: 23,
        title: "LLM Use Cases",
        layout: 'bullets',
        points: [
            "Content creation and copywriting",
            "Answering general purpose questions",
            "Language translation",
            "Summarization of long documents",
            "Brainstorming and ideation",
            "Personal tutoring"
        ]
    },
    {
        id: 24,
        title: "AI Agents",
        subtitle: "What it is",
        layout: 'bullets',
        points: [
            "An autonomous system (often powered by an LLM) that perceives its environment.",
            "Can make decisions and take actions to achieve a predefined goal.",
            "Can execute API calls, run code, or perform transactions.",
            "Maintains context and long-term memory over multiple interactions."
        ]
    },
    {
        id: 25,
        title: "AI Agent Use Cases",
        layout: 'bullets',
        points: [
            "Fully automated customer service resolution",
            "Complex multi-step workflow automation",
            "Autonomous internet research and data extraction",
            "Code generation, testing, and deployment cycles",
            "End-to-end business process automation"
        ]
    },
    {
        id: 26,
        title: "Agent Outsourcing: The Future of Work",
        layout: 'bullets',
        points: [
            "Definition: Delegating tasks or workflows to AI agents rather than human contractors.",
            "Cost Reduction: Significant savings vs. hiring full-time staff.",
            "24/7 Availability: Agents work without fatigue, holidays, or time zones.",
            "Scalability: Instantly scale capacity up or down based on demand."
        ]
    },
    {
        id: 27,
        title: "Agent Outsourcing: Real-World Examples",
        layout: 'split',
        points: [
            "Customer Support: Agents handle 80% of inquiries, escalating complex issues to humans.",
            "Data Processing: Extracting and validating document data at a fraction of human cost.",
            "Content Creation: Auto-generating reports, emails, and marketing briefs.",
            "Research: Conducting competitive analysis and trend identification autonomously."
        ]
    },
    {
        id: 28,
        title: "The Human Element in Agent Outsourcing",
        layout: 'quote',
        points: [
            "Agent outsourcing doesn't mean replacing humans—it frees humans from repetitive tasks to focus on creative, strategic, and interpersonal work. The most successful organizations will effectively partner humans with agents."
        ]
    },

    // Business adoption
    {
        id: 29,
        title: "Business Revolution: Early Adopters",
        layout: 'bullets',
        points: [
            "Technology (85% Adoption) - Critical competitive advantage.",
            "Finance (80% Adoption) - Vital for fraud detection and algorithmic trading.",
            "Healthcare (75% Adoption) - High usage in diagnostics and administrative efficiency.",
            "Heavy investment in foundational AI infrastructure is required for these sectors."
        ]
    },
    {
        id: 30,
        title: "Business Revolution: Future Growth Sectors",
        layout: 'bullets',
        points: [
            "Logistics (70% Adoption) - Supply chain optimization.",
            "Retail (65% Adoption) - Inventory management and personalization.",
            "Manufacturing (60% Adoption) - Quality control and robotics integration.",
            "Energy (55% Adoption) - Grid optimization and predictive maintenance."
        ]
    },

    // Job Impact
    {
        id: 31,
        title: "Job Impact: Replaceable vs Augmented Tasks",
        layout: 'split',
        points: [
            "Replaceable Tasks: Routine data processing (70%), Repetitive customer service (50%), Basic administration (40%).",
            "Augmented Work: Complex problem-solving, strategic management (95% augmented), creative innovation (90% augmented), code architecture (80% augmented)."
        ]
    },
    {
        id: 32,
        title: "Job Impact Case Studies",
        layout: 'bullets',
        points: [
            "Medical Professionals: AI doesn't replace radiologists, it helps them process more scans faster. Best outcomes: Human + AI.",
            "Software Developers: AI tools (like Copilot) don't replace devs, they make them 3-5x more productive. Demand for human architects increases."
        ]
    },

    // Analytics
    {
        id: 33,
        title: "Analytics Deep Dive: Maturity Progression",
        layout: 'split',
        points: [
            "Stage 1 (1990s): Descriptive (What happened?) - Reports, Dashboards",
            "Stage 2 (2000s): Diagnostic (Why did it happen?) - Analysis, Insights",
            "Stage 3 (2010s): Predictive (What will happen?) - ML Models, Forecasts",
            "Stage 4 (2020s+): Prescriptive (What should happen?) - AI Automation"
        ]
    },
    {
        id: 34,
        title: "Analytics Deep Dive: The Data Pipeline",
        layout: 'bullets',
        points: [
            "1. Collection: Gather data from disparate sources",
            "2. Processing: Clean and prepare the data (ETL)",
            "3. Analysis: Extract features, insights, and hidden patterns",
            "4. Action: Make automated decisions or present prescriptions to management"
        ]
    },

    // Finance
    {
        id: 35,
        title: "AI in Finance: Fraud Detection",
        layout: 'bullets',
        points: [
            "Real-Time Detection: Milliseconds to identify suspicious patterns.",
            "Learning from Data: ML models train continually on historical & live fraud cases.",
            "Reduced False Positives: AI adapts to individual user behaviors, preventing lock-outs."
        ]
    },
    {
        id: 36,
        title: "AI in Finance: Enterprise Case Studies (Pt. 1)",
        layout: 'bullets',
        points: [
            "JPMorgan Chase: 'COIN' reviews commercial loans. 360,000 human hours reduced to seconds. ($300M+ value)",
            "BlackRock: 'Aladdin' platform manages risk across trillions in assets.",
            "American Express: Processes millions of daily transactions finding fraud with 95%+ accuracy. ($200M savings)"
        ]
    },
    {
        id: 37,
        title: "AI in Finance: Enterprise Case Studies (Pt. 2)",
        layout: 'bullets',
        points: [
            "HSBC: AI Anti-Money Laundering (AML) reduced false positives by 50%. ($150M savings)",
            "Goldman Sachs: Automated algorithmic trading floors; 40% improvement in efficiency.",
            "Citigroup: Predictive risk analytics across 200+ countries, driving 30% retention improvements."
        ]
    },

    // Tools
    {
        id: 38,
        title: "Professional Tools",
        layout: 'split',
        points: [
            "Productivity & Writing: ChatGPT, Claude 3, Notion AI, Grammarly",
            "Research & Analysis: Perplexity, Google Scholar AI, Elicit, Scite",
            "Creative & Design: Midjourney, DALL-E 3, Adobe Firefly, Canva AI",
            "Code & Dev: GitHub Copilot, Cursor, Tabnine, Codeium"
        ]
    },
    {
        id: 39,
        title: "Free vs Paid AI Tools",
        layout: 'split',
        points: [
            "Free Tier: Best for exploration, prototypes, learning. Examples: ChatGPT 3.5 Turbo, Claude Haiku, Perplexity Free.",
            "Paid Tier: Best for professional production, high-volume. Examples: GPT-4 Plus ($20/mo), Claude Pro ($20/mo), Copilot ($10/mo)."
        ]
    },

    // Prompting
    {
        id: 40,
        title: "Prompt Engineering: The Formula",
        layout: 'bullets',
        points: [
            "1. Role: Define the AI persona (e.g., 'You are an expert marketing strategist...')",
            "2. Context: Provide background (e.g., 'We are launching a new SaaS platform...')",
            "3. Task: Be highly specific (e.g., 'Create 5 unique LinkedIn post ideas...')",
            "4. Format: Dictate the exact output (e.g., 'Format as a numbered markdown list...')"
        ]
    },
    {
        id: 41,
        title: "Prompt Engineering: Advanced Techniques",
        layout: 'split',
        points: [
            "Chain of Thought: Asking the AI to 'think step by step'. Greatly reduces logical errors in complex reasoning tasks.",
            "Few-Shot Learning: Providing 2-3 examples of the input-output pattern before asking the actual question. Sets the perfect style."
        ]
    },

    // Automation & Ethics/Takeaways to wrap up 43
    {
        id: 42,
        title: "AI Workflows & Automation",
        layout: 'bullets',
        points: [
            "Platforms like n8n, Zapier, and Make combine LLMs with traditional software APIs.",
            "Example Pipeline: Monitor RSS feed -> Extract & summarize via ChatGPT -> Format to Markdown -> Publish to Slack automatically."
        ]
    },
    {
        id: 43,
        title: "Ethics & Key Takeaways",
        layout: 'bullets',
        points: [
            "Ethics: Be hyper-aware of Bias, Hallucinations, and Data Privacy leaks.",
            "Adoption is Critical: The window to upskill and position yourself is open right now.",
            "Collaboration > Competition: AI amplifies human potential, it does not replace human domain expertise.",
            "Thank you: Start your continuous learning journey today."
        ]
    }
];
