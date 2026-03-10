
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
  // 1: Hero
  {
    id: 1,
    title: "The AI Shift in Finance",
    subtitle: "Practical Applications, Agents, and Prompting for Senior Professionals",
    icon: 'Sparkles',
    layout: 'title',
    points: ['Keertan Vijaykumar']
  },
  
  // 2: The Real Shift
  {
    id: 2,
    title: "The Real Shift",
    subtitle: "Why Generative AI is different from traditional Machine Learning",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Finance has used predictive ML for a decade (algorithmic trading, credit scoring).",
      "The current shift is Generative AI: Creating novel content, summarizing complex text, and reasoning autonomously.",
      "The barrier to entry has moved from 'Coding' to 'Contextting' via Natural Language."
    ]
  },

  // 3-6: AI Ecosystem & Data
  {
    id: 3,
    title: "Analytics Processing Volume",
    subtitle: "The evolution of financial data usage",
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
    id: 4,
    title: "The Modern Data Pipeline",
    icon: 'Database',
    layout: 'split',
    points: [
      "1. Collection & Processing: Gathering unstructured data (earnings calls, SEC filings) and structured logs (ETL).",
      "2. Analysis & Action: Extracting sentiments via LLMs and automating prescriptive financial decisions."
    ]
  },
  {
    id: 5,
    title: "Horizontal vs Vertical AI",
    icon: 'Layers',
    layout: 'bullets',
    points: [
      "Horizontal Tools: General-purpose chat interfaces used broadly (ChatGPT, Claude). High utility, low specialization.",
      "Vertical Tools: Industry-specific, highly specialized solutions (BloombergGPT, Harvey for Legal/Compliance).",
      "Finance demands Vertical accuracy built on top of Horizontal foundation models."
    ]
  },
  {
    id: 6,
    title: "AI Adoption Readiness by Industry (%)",
    subtitle: "Where finance stands",
    icon: 'Briefcase',
    layout: 'bar-chart',
    chartData: [
      { name: 'Technology', value: 85 },
      { name: 'Finance', value: 80 },
      { name: 'Healthcare', value: 75 },
      { name: 'Media', value: 72 },
      { name: 'Logistics', value: 70 },
      { name: 'Retail', value: 65 },
      { name: 'Manufacturing', value: 60 },
      { name: 'Energy', value: 55 }
    ]
  },

  // 7-12: LLMs vs Agents
  {
    id: 7,
    title: "What is an LLM?",
    subtitle: "The 'Brain'",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "Large Language Models (ChatGPT, Claude) are massive neural networks trained on vast text data.",
      "Primary Function: Pattern recognition and generation of human-like language.",
      "Input Text -> Statistical Reasoning -> Output Text."
    ]
  },
  {
    id: 8,
    title: "LLM Limitations",
    icon: 'ShieldCheck',
    layout: 'bullets',
    points: [
      "Stateless: They do not possess inherent long-term memory of past interactions.",
      "Trapped: They cannot independently access the internet, trigger APIs, or take actions (without tools).",
      "Hallucinations: Will confidently state plausible but completely false financial figures if unsure."
    ]
  },
  {
    id: 9,
    title: "What is an AI Agent?",
    subtitle: "The 'Hands and Eyes'",
    icon: 'Cpu',
    layout: 'bullets',
    points: [
      "An autonomous system powered by an LLM that can perceive its environment and act on it.",
      "Has access to tools (web browsing, code execution, SQL database queries).",
      "Can loop independently to achieve a complex, multi-step goal."
    ]
  },
  {
    id: 10,
    title: "LLM vs AI Agent",
    icon: 'Layers',
    layout: 'split',
    points: [
      "LLM (Assistant): 'Summarize this PDF I uploaded.' (Passive, single-step response).",
      "Agent (Worker): 'Monitor SEC.gov for new 10-Ks from Apple, summarize the risks section, and email my team.' (Autonomous, multi-step, action-oriented)."
    ]
  },
  {
    id: 11,
    title: "Agent Outsourcing",
    subtitle: "The Future of Org Structures",
    icon: 'Users',
    layout: 'bullets',
    points: [
      "Delegating complete workflows to AI agents rather than human contractors or entry-level analysts.",
      "24/7 Availability without fatigue or time zones.",
      "Instant scalability during high-volume periods (e.g., earnings season)."
    ]
  },
  {
    id: 12,
    title: "[LIVE DEMO]",
    subtitle: "LLM Prompting vs Autonomous Agent Execution",
    icon: 'Terminal',
    layout: 'title',
    points: ["Switching to browser visualization"]
  },

  // 13-18: Finance Case Studies
  {
    id: 13,
    title: "The Impact on Financial Tasks (%)",
    icon: 'Users',
    layout: 'stacked-bar-chart',
    chartConfig: {
      value1Name: "Replaceable %",
      value2Name: "Augmented %"
    },
    chartData: [
      { name: 'Data Entry', value1: 70, value2: 30 },
      { name: 'Compliance Checks', value1: 50, value2: 50 },
      { name: 'Basic Reporting', value1: 40, value2: 60 },
      { name: 'Financial Modeling', value1: 20, value2: 80 },
      { name: 'M&A Research', value1: 15, value2: 85 },
      { name: 'Strategic C-Suite', value1: 5, value2: 95 }
    ]
  },
  {
    id: 14,
    title: "AI in Finance: Fraud Detection",
    icon: 'ShieldCheck',
    layout: 'bullets',
    points: [
      "Real-Time Detection: Analyzing thousands of transaction parameters in milliseconds.",
      "Dynamic Learning: ML models adjust continually to evolving fraud typologies.",
      "Reduced False Positives: Preserving client trust by minimizing locked accounts."
    ]
  },
  {
    id: 15,
    title: "Enterprise Use Case: Operations",
    icon: 'Building2',
    layout: 'split',
    points: [
      "JPMorgan Chase ('COIN'): Reviews commercial loan agreements. 360,000 human hours eliminated annually.",
      "BlackRock ('Aladdin'): Massive scale portfolio management and risk analysis powering trillions in assets."
    ]
  },
  {
    id: 16,
    title: "Enterprise Use Case: Compliance",
    icon: 'Building2',
    layout: 'split',
    points: [
      "American Express: Processes millions of daily transactions finding fraud with 95%+ accuracy. ($200M+ savings)",
      "HSBC: AI Anti-Money Laundering (AML) reduced false positive alerts by 50%."
    ]
  },
  {
    id: 17,
    title: "Enterprise Use Case: Trading",
    icon: 'Building2',
    layout: 'split',
    points: [
      "Goldman Sachs: Augmented algorithmic trading floors; 40% improvement in operational efficiency.",
      "Citigroup: Predictive AI risk modeling across 200+ countries to hedge geopolitical volatility."
    ]
  },
  {
    id: 18,
    title: "[LIVE DEMO]",
    subtitle: "Complex Financial Data Extraction",
    icon: 'Database',
    layout: 'title',
    points: ["Parsing unstructured financial documents"]
  },

  // 19-26: Practical Implementation & Prompting
  {
    id: 19,
    title: "The Professional AI Toolkit",
    icon: 'Briefcase',
    layout: 'bullets',
    points: [
      "ChatGPT (OpenAI): Best general reasoning, strongest data analysis tools (Code Interpreter).",
      "Claude 3.5 (Anthropic): Best for massive context windows, dense financial document analysis, and natural tone.",
      "Perplexity: Best for real-time internet research and cited financial news gathering."
    ]
  },
  {
    id: 20,
    title: "The Art of Prompt Engineering",
    subtitle: "From vague requests to precise commands",
    icon: 'Terminal',
    layout: 'split',
    points: [
      "Amateur Prompt: 'Summarize TSLA earnings.' (Yields generic, unhelpful bullet points).",
      "Pro Prompt: 'Act as a senior equity analyst. Extract the top 3 margin risks from TSLA's Q3 call and format as a markdown table.'"
    ]
  },
  {
    id: 21,
    title: "The R.C.T.F Framework",
    icon: 'Terminal',
    layout: 'bullets',
    points: [
      "Role: Define the persona ('You are a strict compliance auditor...').",
      "Context: Provide the backdrop ('We are evaluating a Series B SaaS startup...').",
      "Task: The specific action ('Identify discrepancies in ARR growth...').",
      "Format: The output structure ('Present findings in bullet points max 20 words each')."
    ]
  },
  {
    id: 22,
    title: "Prompting: Chain of Thought",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "Asking the AI to explain its internal reasoning before giving the final answer.",
      "Add: 'Let's think through this step-by-step.'",
      "Crucial for financial math or complex logic—forces the LLM to 'show its work', reducing calculation errors."
    ]
  },
  {
    id: 23,
    title: "Prompting: Few-Shot Learning",
    icon: 'Terminal',
    layout: 'bullets',
    points: [
      "Providing specific examples of input/output pairs within the prompt.",
      "Example: 'Input: Invoice A -> Output: Expense Category Operations. Input: Invoice B -> Output: ?'",
      "Perfect for standardizing categorization of massive ledgers or transaction lists."
    ]
  },
  {
    id: 24,
    title: "[LIVE DEMO]",
    subtitle: "Building the Perfect Financial Prompt",
    icon: 'Terminal',
    layout: 'title',
    points: ["Iterating a prompt from zero to expert"]
  },
  {
    id: 25,
    title: "Workflow Automation",
    subtitle: "Connecting the pieces",
    icon: 'Cpu',
    layout: 'bullets',
    points: [
      "The real power unlocks when you connect LLMs to existing software (Slack, Excel, Salesforce).",
      "No-code tools like Zapier or Make allow you to build automated AI pipelines without coding.",
      "Process: Trigger -> Extract Data -> LLM Processing -> Action."
    ]
  },
  {
    id: 26,
    title: "Example: The Earnings Monitor Pipeline",
    icon: 'Clock',
    layout: 'split',
    points: [
      "1. Trigger: RSS Feed detects new 10-K filing.",
      "2. Process: Claude API reads the PDF, extracting CapEx and Guidance changes to a JSON format.",
      "3. Action: Automatically formats a summary alert and posts it to the Senior Analysts Slack channel."
    ]
  },

  // 27-31: Ethics, Risks & Compliance
  {
    id: 27,
    title: "Ethical & Security Risks",
    subtitle: "The stakes in finance",
    icon: 'ShieldCheck',
    layout: 'quote',
    points: ["In finance, data privacy and regulatory compliance outweigh efficiency gains. Unsecured AI deployment is a massive liability."]
  },
  {
    id: 28,
    title: "The Hallucination Problem",
    icon: 'ShieldCheck',
    layout: 'bullets',
    points: [
      "LLMs are statistical predictors, not fact databases. They will 'guess' numbers if they look statistically correct in a sentence.",
      "Human-in-the-loop (HITL) is mandatory for final review of AI-generated financial models or reports.",
      "Mitigation: Use Retrieval-Augmented Generation (RAG) to force the AI to cite specific internal documents."
    ]
  },
  {
    id: 29,
    title: "Data Privacy & Leakage",
    icon: 'ShieldCheck',
    layout: 'bullets',
    points: [
      "Never paste proprietary financial data, client PII, or internal code into public consumer LLMs (ChatGPT Free).",
      "Public models use your inputs as training data, creating a massive intellectual property leak risk.",
      "Solution: Only use Enterprise-tier licenses (Zero Data Retention) or host open-source models (Llama 3) internally."
    ]
  },
  {
    id: 30,
    title: "Regulatory Compliance & Bias",
    icon: 'ShieldCheck',
    layout: 'split',
    points: [
      "Algorithmic Bias: Credit scoring or lending AIs trained on historical data will replicate historical redlining/biases.",
      "Explainability: Regulators demand to know *why* a loan was rejected. Deep Learning 'black boxes' complicate compliance."
    ]
  },
  {
    id: 31,
    title: "Responsible Action Steps",
    icon: 'Sparkles',
    layout: 'bullets',
    points: [
      "Establish a strict internal AI Usage Policy for analysts.",
      "Conduct regular audits on automated trading or credit systems for model drift.",
      "Invest in 'Red Teaming': Intentionally trying to break or trick your internal AI tools."
    ]
  },

  // 32-35: Conclusion
  {
    id: 32,
    title: "The 3 Pillars of AI-Readiness",
    icon: 'BrainCircuit',
    layout: 'bullets',
    points: [
      "1. Technical Fluency: Start using the tools daily. Understand their limits.",
      "2. Domain Expertise: Your 10+ years of finance knowledge makes you the 'editor'. AI is the 'draftsman'.",
      "3. Ethical Oversight: Championing security and compliance within your org."
    ]
  },
  {
    id: 33,
    title: "Transformation, Not Replacement",
    icon: 'Users',
    layout: 'split',
    points: [
      "AI will not replace bankers and analysts.",
      "Bankers and analysts who use AI will replace those who do not.",
      "The value of complex, human relationship management will actually increase."
    ]
  },
  {
    id: 34,
    title: "Q&A",
    subtitle: "Open Discussion",
    icon: 'BrainCircuit',
    layout: 'title',
    points: ["What are your biggest AI implementation challenges?"]
  },
  {
    id: 35,
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
