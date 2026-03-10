
export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  points?: string[];
  layout: 'title' | 'bullets' | 'split' | 'quote' | 'bar-chart' | 'stacked-bar-chart' | 'line-chart' | 'pie-chart' | 'qr-code';
  chartData?: any[];
  chartConfig?: {
    value1Name?: string;
    value2Name?: string;
  };
  extraContent?: any;
  icon?: string;
}

export const slides: SlideContent[] = [
  {
    id: 1,
    title: "THE AI SHIFT",
    subtitle: "AI Agents, Automations & New Workflows",
    icon: 'Sparkles',
    layout: 'title',
    points: ['By Keertan Vijaykumar']
  },
  {
    id: 2,
    title: "Opening Question",
    icon: 'HelpCircle',
    layout: 'bullets',
    points: [
      "Who uses AI every day?",
      "What tools do you use?",
      "What task takes the most time in your job?"
    ]
  },
  {
    id: 3,
    title: "The Core Idea of This Talk",
    icon: 'Lightbulb',
    layout: 'split',
    points: [
      "Old world:\n\nYou operate tools",
      "New world:\n\nYou direct systems"
    ]
  },
  {
    id: 4,
    title: "Example",
    icon: 'ArrowRightLeft',
    layout: 'split',
    points: [
      "Old world:\n\nOpen Excel.\nAnalyze data manually.",
      "New world:\n\nTell AI: \"Analyze this dataset and send me insights every morning.\""
    ]
  },
  {
    id: 5,
    title: "Why This Is Called The AI Shift",
    icon: 'TrendingUp',
    layout: 'split',
    points: [
      "People say:\n\nLearn ChatGPT\nLearn Claude\nLearn Gemini",
      "Reality:\n\nYou will not operate tools.\nYou will direct systems."
    ]
  },
  {
    id: 6,
    title: "Chatbot vs LLM",
    icon: 'BrainCircuit',
    layout: 'split',
    points: [
      "LLM = Brain\nChatbot = Interface",
      "Example:\n\nGPT = Brain\nChatGPT = Mouth"
    ]
  },
  {
    id: 7,
    title: "Why ChatGPT Sometimes Lies",
    icon: 'AlertTriangle',
    layout: 'bullets',
    points: [
      "AI predicts language.",
      "It does not verify facts.",
      "Analogy: A student confidently answering incorrectly."
    ]
  },
  {
    id: 8,
    title: "Reinforcement Learning",
    icon: 'Award',
    layout: 'bullets',
    points: [
      "Models learn to:",
      "• respond quickly",
      "• sound confident",
      "• satisfy users",
      "Not necessarily to verify truth."
    ]
  },
  {
    id: 9,
    title: "AI Might Be the Last Innovation",
    icon: 'Zap',
    layout: 'bullets',
    points: [
      "Idea: AI can invent technology itself.",
      "Examples:\n• software\n• research\n• robotics\n• materials"
    ]
  },
  {
    id: 10,
    title: "Example",
    icon: 'Microscope',
    layout: 'bullets',
    points: [
      "AI designing:\n• drugs\n• chips\n• code",
      "AI accelerates every innovation."
    ]
  },
  {
    id: 11,
    title: "From Tools → Agents",
    icon: 'Bot',
    layout: 'split',
    points: [
      "Old world:\n\nUse tools.",
      "New world:\n\nDelegate tasks to agents."
    ]
  },
  {
    id: 12,
    title: "Perplexity Computer",
    icon: 'Search',
    layout: 'bullets',
    points: [
      "Perplexity is building a system that:\n• researches topics\n• builds apps\n• analyzes competitors\n• generates reports",
      "Search that takes action."
    ]
  },
  {
    id: 13,
    title: "Example Workflow: Track Competitors",
    subtitle: "Perplexity",
    icon: 'GitMerge',
    layout: 'bullets',
    points: [
      "1. Research competitors",
      "2. Analyze pricing",
      "3. Generate report",
      "Fully automated."
    ],
    extraContent: { image: "/slide-13-demo.png" }
  },
  {
    id: 14,
    title: "Kimi K2.5",
    icon: 'Layers',
    layout: 'bullets',
    points: [
      "Moonshot AI model.",
      "100 agents working in parallel.",
      "Meaning: Multiple AI workers solving tasks simultaneously."
    ]
  },
  {
    id: 15,
    title: "Grok AI Agent Debate",
    icon: 'MessageSquare',
    layout: 'bullets',
    points: [
      "Agents debating each other.",
      "Used to improve reasoning and decision-making."
    ]
  },
  {
    id: 16,
    title: "Google AI Ecosystem",
    icon: 'Globe',
    layout: 'bullets',
    points: [
      "Tools emerging:\n• Gemini\n• Flow\n• Imagen 4\n• Lyria\n• Jules\n• Project Marina"
    ]
  },
  {
    id: 17,
    title: "Google Flow",
    icon: 'PenTool',
    layout: 'bullets',
    points: [
      "AI creative studio.",
      "Create:\n• videos\n• images\n• scenes",
      "Using prompts."
    ]
  },
  {
    id: 18,
    title: "Flow Workflow",
    icon: 'FastForward',
    layout: 'bullets',
    points: [
      "Prompt",
      "→ generate scene",
      "→ refine",
      "→ export video."
    ],
    extraContent: { image: "/slide-18-demo.png" }
  },
  {
    id: 19,
    title: "Imagen 4",
    icon: 'Image',
    layout: 'bullets',
    points: [
      "Advanced AI image model.",
      "Used for:\n• marketing\n• concept design\n• branding."
    ]
  },
  {
    id: 20,
    title: "Lyria AI",
    icon: 'Music',
    layout: 'bullets',
    points: [
      "Music generation AI.",
      "Prompt example: \"Create cinematic orchestral music.\"",
      "AI produces full soundtrack."
    ]
  },
  {
    id: 21,
    title: "Jules (Google)",
    icon: 'Code',
    layout: 'bullets',
    points: [
      "AI coding assistant.",
      "Can generate:\n• applications\n• backend logic\n• APIs."
    ]
  },
  {
    id: 22,
    title: "Project Marina",
    icon: 'Network',
    layout: 'bullets',
    points: [
      "Experimental AI system.",
      "AI performing autonomous internet tasks.",
      "Example: Research → decision → action."
    ]
  },
  {
    id: 23,
    title: "AI Video Tools",
    icon: 'Video',
    layout: 'bullets',
    points: [
      "• Runway",
      "• Sora",
      "• Flow"
    ]
  },
  {
    id: 24,
    title: "AI Music Tools",
    icon: 'Headphones',
    layout: 'bullets',
    points: [
      "• Lyria",
      "• Suno",
      "• Udio"
    ]
  },
  {
    id: 25,
    title: "AI Image Tools",
    icon: 'Image',
    layout: 'bullets',
    points: [
      "• Midjourney",
      "• Imagen",
      "• Leonardo"
    ]
  },
  {
    id: 26,
    title: "Example Creative Workflow",
    icon: 'Workflow',
    layout: 'bullets',
    points: [
      "Idea",
      "→ AI script",
      "→ AI video",
      "→ AI music",
      "→ publish content."
    ]
  },
  {
    id: 27,
    title: "Automation",
    icon: 'Settings',
    layout: 'quote',
    points: [
      "Automation = AI + APIs + workflows."
    ]
  },
  {
    id: 28,
    title: "Automation Platforms",
    icon: 'Server',
    layout: 'bullets',
    points: [
      "• n8n",
      "• Zapier",
      "• Make"
    ]
  },
  {
    id: 29,
    title: "n8n Workflow Concept",
    icon: 'PlayCircle',
    layout: 'bullets',
    points: [
      "Trigger",
      "→ Process",
      "→ Action."
    ],
    extraContent: { imagePlaceholder: "Screenshot: n8n Workflow" }
  },
  {
    id: 30,
    title: "Finance Automation Example",
    icon: 'DollarSign',
    layout: 'bullets',
    points: [
      "Financial news",
      "→ AI sentiment analysis",
      "→ market report."
    ],
    extraContent: { imagePlaceholder: "Screenshot: Finance News Automation" }
  },
  {
    id: 31,
    title: "Earnings Report Automation",
    icon: 'FileText',
    layout: 'bullets',
    points: [
      "Upload PDF",
      "→ AI extracts insights",
      "→ send analysis."
    ],
    extraContent: { imagePlaceholder: "Screenshot: Earnings PDF Automation" }
  },
  {
    id: 32,
    title: "Portfolio Automation",
    icon: 'PieChart',
    layout: 'bullets',
    points: [
      "Portfolio data",
      "→ AI analysis",
      "→ performance report."
    ],
    extraContent: { imagePlaceholder: "Screenshot: Portfolio Analysis Automation" }
  },
  {
    id: 33,
    title: "Invoice Processing",
    icon: 'FileText',
    layout: 'bullets',
    points: [
      "Invoices",
      "→ AI extraction",
      "→ accounting system."
    ],
    extraContent: { imagePlaceholder: "Screenshot: Invoice OCR Workflow" }
  },
  {
    id: 34,
    title: "Fraud Monitoring",
    icon: 'ShieldAlert',
    layout: 'bullets',
    points: [
      "Transactions",
      "→ anomaly detection",
      "→ alert system."
    ],
    extraContent: { imagePlaceholder: "Screenshot: Fraud Alert Workflow" }
  },
  {
    id: 35,
    title: "Automated Research",
    icon: 'Search',
    layout: 'bullets',
    points: [
      "Market data",
      "→ AI research",
      "→ investment brief."
    ],
    extraContent: { imagePlaceholder: "Screenshot: Market Research Agent" }
  },
  {
    id: 36,
    title: "Case Study: BlackRock",
    icon: 'Building',
    layout: 'bullets',
    points: [
      "AI platform Aladdin.",
      "Runs simulations to analyze market risk."
    ]
  },
  {
    id: 37,
    title: "Case Study: JPMorgan",
    icon: 'Building2',
    layout: 'bullets',
    points: [
      "COiN AI analyzes contracts.",
      "Saved 360,000 lawyer hours."
    ]
  },
  {
    id: 38,
    title: "AI in Customer Support",
    icon: 'Headphones',
    layout: 'bullets',
    points: [
      "Banks using AI chatbots to handle support instantaneously."
    ]
  },
  {
    id: 39,
    title: "AI Workforce Impact",
    icon: 'TrendingDown',
    layout: 'bullets',
    points: [
      "Some companies reducing teams due to automation.",
      "Example discussion point: Elon Musk reducing engineering teams using automation."
    ]
  },
  {
    id: 40,
    title: "AI Geopolitics",
    icon: 'Globe',
    layout: 'bullets',
    points: [
      "AI is now geopolitical.",
      "Countries protecting data."
    ]
  },
  {
    id: 41,
    title: "Data Security Risks",
    icon: 'Shield',
    layout: 'bullets',
    points: [
      "China restricting some AI models due to data security risks."
    ]
  },
  {
    id: 42,
    title: "Sovereign AI",
    icon: 'Flag',
    layout: 'bullets',
    points: [
      "Countries building their own models."
    ]
  },
  {
    id: 43,
    title: "India Sovereign AI Examples",
    icon: 'MapPin',
    layout: 'bullets',
    points: [
      "• Sarvam AI",
      "• Indus",
      "• BharatGPT",
      "• Param 2"
    ]
  },
  {
    id: 44,
    title: "AI Infrastructure Race",
    icon: 'Database',
    layout: 'bullets',
    points: [
      "AI requires infrastructure.",
      "• GPUs",
      "• data centers",
      "• energy"
    ]
  },
  {
    id: 45,
    title: "Resource Demand",
    icon: 'BatteryCharging',
    layout: 'bullets',
    points: [
      "US launching massive investments in lithium.",
      "Lithium becoming critical for AI infrastructure."
    ]
  },
  {
    id: 46,
    title: "Hardware Markets",
    icon: 'Cpu',
    layout: 'bullets',
    points: [
      "GPU shortages and RAM price increases.",
      "AI demand driving hardware markets."
    ]
  },
  {
    id: 47,
    title: "AI Risks & Safety",
    icon: 'AlertOctagon',
    layout: 'bullets',
    points: [
      "Anthropic CEO left OpenAI over safety concerns.",
      "Debate: Innovation vs. safety."
    ]
  },
  {
    id: 48,
    title: "The Alignment Problem",
    icon: 'Crosshair',
    layout: 'bullets',
    points: [
      "AI tries to please users.",
      "It does not inherently seek truth."
    ]
  },
  {
    id: 49,
    title: "Human Supervision",
    icon: 'Eye',
    layout: 'quote',
    points: [
      "AI must operate with human supervision."
    ]
  },
  {
    id: 50,
    title: "Future of Work Predictions",
    icon: 'TrendingUp',
    layout: 'bullets',
    points: [
      "Many entry-level tasks will be completely automated."
    ]
  },
  {
    id: 51,
    title: "If You Don't Use AI",
    icon: 'XCircle',
    layout: 'bullets',
    points: [
      "You will struggle."
    ]
  },
  {
    id: 52,
    title: "If You Rely ONLY On AI",
    icon: 'XCircle',
    layout: 'bullets',
    points: [
      "You will also struggle."
    ]
  },
  {
    id: 53,
    title: "The Winning Formula",
    icon: 'Trophy',
    layout: 'quote',
    points: [
      "Best professionals = Human + AI collaboration."
    ]
  },
  {
    id: 54,
    title: "Interactive Question",
    icon: 'MessageCircle',
    layout: 'title',
    points: [
      "What workflow in your job could be automated tomorrow?"
    ]
  },
  {
    id: 55,
    title: "The AI Shift (Recap)",
    icon: 'ArrowRight',
    layout: 'split',
    points: [
      "Old world:\n\nLearn tools.",
      "New world:\n\nDirect systems."
    ]
  },
  {
    id: 56,
    title: "Thank You",
    subtitle: "The Future is Collaboration",
    icon: 'Sparkles',
    layout: 'qr-code',
    points: [
      "Connect with me on LinkedIn and Linktree to continue the conversation."
    ],
    extraContent: {
      qrImage: "/qr-code.png"
    }
  }
];
