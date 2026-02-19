// ============================================================
//  RESUME DATA — Edit this file to update your content
// ============================================================

const resumeInfo = {
  name: { first: "JUSTIN", last: "LUFT" },
  tagline: "FRONTEND ENGINEER // DATA ENGINEER // VISUALIZATION",
  phone: "(646) 320-4998",
  email: "j.n.luft@icloud.com",
  linkedin: "linkedin.com/in/justinluft",
  github: "github.com/justinluft",
  website: "justinluft.com",

  about: `Full-stack developer and data engineer with hands-on experience building production systems — from Python scraping pipelines and Power BI dashboards to responsive web apps and real-time analytics platforms. I bridge the gap between raw data and polished interfaces, with a strong focus on clean code, scalability, and design-forward engineering.`,

  skills: [
    { label: "FRONTEND SYSTEMS", value: 92 },
    { label: "DATA ENGINEERING", value: 88 },
    { label: "VISUALIZATION",    value: 85 },
    { label: "BACKEND / INFRA",  value: 78 },
    { label: "DESIGN SYSTEMS",   value: 80 },
  ],

  techTags: ["Python", "TypeScript", "React", "SQL", "Power BI", "Next.js", "Node.js", "Firebase"],

  technicalSkills: [
    { category: "LANGUAGES",        items: ["Python", "JavaScript", "TypeScript", "Java", "C/C#", "SQL", "DAX", "R", "HTML"] },
    { category: "FRAMEWORKS",       items: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Firebase"] },
    { category: "DEVELOPER TOOLS",  items: ["Git", "GitHub", "VS Code", "npm", "Vercel", "Render", "Linux", "Power Query", "ETL"] },
    { category: "PLATFORMS & APPS", items: ["Power BI", "SharePoint", "PowerApps", "Excel", "ChatGPT", "Claude", "CoPilot"] },
  ],

  experience: [
    {
      title:    "Lean Digitalization",
      company:  "Mercedes-Benz",
      location: "Charleston, SC",
      dates:    "Aug 2025 – Present",
      tech:     ["TypeScript", "Python", "SQL", "DAX", "PowerBI", "Agile"],
      bullets: [
        "Developed a Python web scraping pipeline to automate data collection, reducing time by 90%.",
        "Developed LPA Tracker visualization dashboard, increasing plant-wide compliance from 50% to 90–100%.",
        "Engineered a custom TypeScript heatmap for Power BI to visualize defect patterns from a SQL database.",
        "Engineered internal software solutions to optimize plant workflows, reducing manual reporting and cycle time.",
        "Built Power BI applications using DAX, Power Query, and TypeScript visuals, version controlled via GitHub.",
        "Designed SQL-based data models and reporting pipelines enabling scalable analytics across production shops.",
        "Coached non-technical stakeholders on maintaining and updating Python, TypeScript, and Power BI applications.",
      ],
    },
    {
      title:    "Software Developer",
      company:  "College of Charleston",
      location: "Charleston, SC",
      dates:    "Jan 2025 – May 2025",
      tech:     ["C#", "Unity", "ffmpeg", "Scrum"],
      bullets: [
        "Developed a Raspberry Pi based photo booth with low-level hardware control and procedural code.",
        "Led sprint planning and execution in a 5-sprint Scrum cycle, delivering a reliable, production-ready system.",
        "Deployed and optimized the system, documenting architecture for long-term maintainability.",
      ],
    },
  ],

  projects: [
    {
      title: "BuildCarolina Graduate Showcase",
      date:  "Jul 2025",
      award: "2ND PLACE — CHARLESTONHACKS",
      tags:  ["TypeScript", "Vite", "Firebase", "Tailwind"],
      desc:  "Full-stack portfolio platform with real-time Firebase sync, authentication, dynamic filtering, and employer-facing profile browsing.",
    },
    {
      title: "AI Prop Firm Comparison Tool",
      date:  "Jul 2025",
      tags:  ["JavaScript", "Python", "PHP", "Firecrawl AI"],
      desc:  "Filterable trading firm comparison platform with AI-enhanced scraping, a WordPress plugin for lead capture, and automated data refresh pipelines.",
    },
    {
      title: "South Carolina Bill Tracker",
      date:  "Jun 2025",
      tags:  ["TypeScript", "Python", "Firebase", "Next.js"],
      desc:  "Real-time legislative tracker with Python scraper for SC Statehouse data, GitHub Actions CI/CD, and CRON-scheduled automated deployments.",
    },
    {
      title: "Custom Notetaking App",
      date:  "Oct 2025",
      tags:  ["JavaScript", "PostgreSQL", "Supabase", "Vercel"],
      desc:  "Authenticated note-taking web app with CRUD, per-user access control, PDF export, RESTful APIs, and custom auth middleware.",
    },
  ],

  education: [
    {
      degree:   "Computer Science, B.S.",
      school:   "College of Charleston",
      location: "Charleston, SC",
      year:     "2025",
      honors:   "Cum Laude · 3.69 GPA",
    },
  ],

  ctaStatus:      "AVAILABLE FOR HIRE",
  ctaHeadline:    "READY TO DEPLOY",
  ctaBody:        "AVAILABLE NOW · FULL-STACK · REMOTE/HYBRID · OPEN TO COLLABORATION.",
  ctaButtonLabel: "TRANSMIT NOW",
  ctaButtonHref:  "mailto:j.n.luft@icloud.com",
};

export default resumeInfo;