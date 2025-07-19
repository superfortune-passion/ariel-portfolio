export const profile = {
  name: "Ariel Orbe",
  title: "Senior Software Engineer",
  subtitle: "AI / Data & Full Stack",
  email: "arielmarnel0402@gmail.com",
  phone: "+63 924 121 7413",
  location: "City of San Fernando, Pampanga, Philippines",
  linkedin: "https://www.linkedin.com/in/ariel-marnel-orbe-14a09430a/",
  summary:
    "Senior Full Stack Engineer with 10 years of progressive experience designing, developing, and deploying scalable web applications and AI-driven solutions. Adept at integrating AI models with full stack architectures, leading cross-functional teams, and delivering innovative software that drives business value.",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Python",
  "Django",
  "Java",
  "REST APIs",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "CI/CD",
  "Machine Learning",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Azure",
  "TensorFlow",
  "PyTorch",
  "Microservices",
  "Terraform",
  "NLP",
  "Computer Vision",
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Toronto",
  period: "June 2011 — December 2015",
};

export type WorkSample = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  accent: string;
  logo: string;
  highlights: string[];
  samples: WorkSample[];
};

export const experiences: Experience[] = [
  {
    id: "dell",
    company: "Dell",
    role: "Senior AI & Full Stack Engineer",
    period: "Jan 2024 — Jan 2026",
    location: "US · Remote",
    accent: "#0076CE",
    logo: "/companies/dell.svg",
    highlights: [
      "Spearheaded full-stack, AI-enabled solutions to enhance product capabilities and automate complex decision-making workflows.",
      "Led cross-functional agile teams delivering end-to-end systems focused on scalability, reliability, and maintainability.",
      "Architected service-oriented systems supporting real-time data processing and intelligent inference in production.",
      "Established automated delivery pipelines with integrated testing to improve quality and release velocity.",
      "Productionized machine learning models with data science teams to continuously improve prediction accuracy.",
      "Led modernization initiatives migrating legacy platforms into flexible AI-ready architectures.",
    ],
    samples: [
      {
        title: "ML Applications Marketplace",
        description:
          "End-to-end AI development platform integrating model catalog, filtering, and collaborative workflows for data teams building production ML applications.",
        image: "/work/dell-dataloop-platform.png",
        tags: ["React", "Computer Vision", "NLP", "ML Ops"],
      },
      {
        title: "Dell Technologies Capital",
        description:
          "Enterprise investment portal showcasing portfolio expertise, team engagement, and customer connections for early-stage technology companies.",
        image: "/work/dell-capital.png",
        tags: ["Next.js", "Full Stack", "Enterprise", "UI/UX"],
      },
    ],
  },
  {
    id: "wherefour",
    company: "Wherefour",
    role: "Senior Software Engineer — Data & Web Applications",
    period: "Feb 2022 — Jan 2024",
    location: "US · Remote",
    accent: "#2D6A4F",
    logo: "/companies/wherefour.svg",
    highlights: [
      "Developed intelligent web applications with embedded AI-driven capabilities for automation and user efficiency.",
      "Integrated predictive and analytical features into customer-facing systems with product and research teams.",
      "Designed responsive, accessible interfaces optimized for performance across devices.",
      "Built backend services for large-scale data ingestion and processing for AI workflows.",
      "Delivered real-time analytics and reporting to support data-driven decision-making.",
      "Performed performance tuning and reliability testing under high load.",
    ],
    samples: [
      {
        title: "Customer Success Stories",
        description:
          "Marketing showcase highlighting real results from leading CPG brands using Wherefour for production and inventory management.",
        image: "/work/wherefour-success-stories.png",
        tags: ["React", "CMS", "UI/UX", "Marketing"],
      },
      {
        title: "Inventory Management System",
        description:
          "Full-stack ERP inventory module with lot tracking, transfers, SKU management, reorder points, and cost reporting for food & beverage manufacturers.",
        image: "/work/wherefour-inventory.png",
        tags: ["Vue.js", "PostgreSQL", "REST APIs", "ERP"],
      },
    ],
  },
  {
    id: "thoughtwire",
    company: "ThoughtWire",
    role: "Software Engineer — Full Stack & AI/Data",
    period: "Jun 2018 — Jan 2022",
    location: "Philippines",
    accent: "#0E7490",
    logo: "/companies/thoughtwire.svg",
    highlights: [
      "Contributed to healthcare platforms leveraging intelligent analytics for operational and clinical decision-making.",
      "Built scalable web applications supporting forecasting, optimization, and reporting use cases.",
      "Integrated predictive models into enterprise systems alongside data science teams.",
      "Developed visualization components translating complex insights into actionable information.",
      "Implemented secure integration layers for safe data exchange across internal systems.",
      "Ensured solutions aligned with healthcare compliance and data privacy standards.",
    ],
    samples: [
      {
        title: "BDC Venture Capital Portfolio",
        description:
          "Portfolio company profile on BDC's venture capital site — company details, investment context, and Ambiant IIOT platform overview for smart cities, healthcare, and enterprise automation.",
        image: "/work/thoughtwire-bdc-portfolio.png",
        tags: ["Enterprise", "IIOT", "Healthcare", "Smart Cities"],
      },
      {
        title: "Operations & Certifications Hub",
        description:
          "Content hub for ISO and business certifications — structured navigation, article discovery, and resources to help teams choose and achieve operational certifications.",
        image: "/work/thoughtwire-iso-certifications.png",
        tags: ["Content Platform", "Operations", "Compliance", "UX"],
      },
    ],
  },
  {
    id: "chinabank",
    company: "China Bank PH",
    role: "Software Engineer — Banking Systems",
    period: "Jan 2016 — Apr 2018",
    location: "Philippines",
    accent: "#B91C1C",
    logo: "/companies/chinabank.svg",
    highlights: [
      "Developed core banking applications with intelligent fraud detection and customer behavior analysis.",
      "Designed user-focused interfaces improving accessibility and operational efficiency of financial tools.",
      "Implemented backend services for transaction monitoring and real-time alerting workflows.",
      "Built proactive alerting mechanisms surfacing financial risks in real time.",
      "Ensured secure coding practices aligned with banking regulations and data protection policies.",
      "Optimized data models and queries for high-volume analytical workloads.",
    ],
    samples: [
      {
        title: "Personal Banking Homepage",
        description:
          "Chinabank personal banking portal — hero carousel, My CBC app migration campaign, and quick-access advisories, FX rates, and governance modules.",
        image: "/work/chinabank-personal-home.png",
        tags: ["React", "Banking", "Responsive UI", "CMS"],
      },
      {
        title: "Business Banking Portal",
        description:
          "Corporate banking landing page with business solutions hero, service navigation, and featured cash management and loans product cards.",
        image: "/work/chinabank-business-solutions.png",
        tags: ["React", "REST APIs", "Enterprise", "Banking"],
      },
    ],
  },
];
