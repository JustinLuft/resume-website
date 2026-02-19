// ============================================================
//  RESUME INFO - This file contains all the data for the resume website,
// ============================================================

export const resumeInfo = {

  // ── PERSONAL INFO ────────────────────────────────────────
  name: {
    first: "JUSTIN",
    last: "LUFT",
  },
  tagline: "FRONTEND ENGINEER // DATA ENGINEER // VISUALIZATION",
  phone: "(646) 320-4998",
  email: "j.n.luft@icloud.com",
  linkedin: "linkedin.com/in/justinluft",
  github:   "github.com/justinluft",
  website:  "justinluft.com",

  // ── ABOUT BLURB ──────────────────────────────────────────
  about: `Full-stack developer and data engineer with hands-on experience building
production systems — from Python scraping pipelines and Power BI dashboards
to responsive web apps and real-time analytics platforms. I bridge the gap
between raw data and polished interfaces, with a strong focus on clean code,
scalability, and design-forward engineering.`,

  // ── SKILLS (shown as HUD stat bars, 0–100) ───────────────
  skills: [
    { label: "FRONTEND SYSTEMS",  value: 92 },
    { label: "DATA ENGINEERING",  value: 88 },
    { label: "VISUALIZATION",     value: 85 },
    { label: "BACKEND / INFRA",   value: 78 },
    { label: "DESIGN SYSTEMS",    value: 80 },
  ],

  // ── TECH TAGS (shown as pills in About section) ──────────
  techTags: [
    "Python", "TypeScript", "React", "SQL", "Power BI", "Next.js", "Node.js", "Firebase"
  ],

  // ── TECHNICAL SKILLS (shown in a grid) ───────────────────
  technicalSkills: [
    { category: "LANGUAGES",               items: "Python, JavaScript, TypeScript, Java, C/C#, SQL, DAX, R, HTML" },
    { category: "FRAMEWORKS",              items: "React.js, Next.js, Node.js, Express.js, Tailwind CSS, Firebase" },
    { category: "DEVELOPER TOOLS",         items: "Git, GitHub, VS Code, npm, Vercel, Render, Linux Terminal, Power Query, ETL Pipelines" },
    { category: "PLATFORMS & APPS",        items: "Power BI, SharePoint, PowerApps, Excel, ChatGPT, Claude, CoPilot" },
  ],

  // ── WORK EXPERIENCE ──────────────────────────────────────
  experience: [
    {
      title:    "Lean Digitalization",
      company:  "Mercedes-Benz",
      location: "Charleston, South Carolina",
      dates:    "Aug 2025 – Present",
      tech:     "TypeScript, Python, SQL, DAX, PowerBI, Agile",
      bullets: [
        "Developed a Python web scraping pipeline to automate data collection, reducing data collection time by 90%.",
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
      location: "Charleston, South Carolina",
      dates:    "Jan 2025 – May 2025",
      tech:     "C#, Unity, ffmpeg, Scrum",
      bullets: [
        "Developed a Raspberry Pi based photo booth with low-level hardware control and procedural code.",
        "Led sprint planning and execution in a 5-sprint Scrum cycle, delivering a reliable, production-ready system.",
        "Deployed and optimized the system, documenting architecture for long-term maintainability.",
      ],
    },
  ],

  // ── PROJECTS ─────────────────────────────────────────────
  projects: [
    {
      title: "BuildCarolina Graduate Showcase",
      date:  "July 2025",
      tags:  ["TypeScript", "HTML/CSS", "Vite", "Firebase", "Cloud Deploy"],
      desc:  "2nd place winner at CharlestonHacks Hackathon. Built a responsive, full-stack portfolio platform with real-time Firebase sync, authentication, dynamic filtering, and sorting to help employers browse profiles.",
    },
    {
      title: "AI Powered Prop Firm Comparison Tool",
      date:  "July 2025",
      tags:  ["JavaScript", "Python", "PHP", "Firecrawl AI", "GitHub Actions"],
      desc:  "Filterable platform comparing proprietary trading firms using AI-enhanced web scraping. Built a WordPress plugin for email capture and interactive comparison tables, with automated data refresh scripts.",
    },
    {
      title: "South Carolina Bill Tracker",
      date:  "June 2025",
      tags:  ["TypeScript", "Python", "Firebase", "Next.js", "GitHub Actions"],
      desc:  "Legislative bill tracker with real-time updates and accessibility focus. Python scraper pulls and parses SC Statehouse data, with automated deployments and CRON-scheduled data refreshes.",
    },
    {
      title: "Custom Notetaking Website",
      date:  "October 2025",
      tags:  ["JavaScript", "PostgreSQL", "Vite", "Supabase", "Vercel"],
      desc:  "Secure, user-authenticated note-taking web app with CRUD operations, per-user access control, editable titles, PDF export, RESTful APIs, and custom auth middleware. Deployed on Vercel and Render.",
    },
  ],

  // ── EDUCATION ────────────────────────────────────────────
  education: [
    {
      degree:  "Computer Science, B.S.",
      school:  "College of Charleston",
      location: "Charleston, SC",
      year:    "2025",
      honors:  "Cum Laude, 3.69 GPA",
    },
  ],

  // ── CONTACT / CTA BOX ────────────────────────────────────
  ctaStatus:      "AVAILABLE FOR HIRE",
  ctaHeadline:    "READY TO DEPLOY",
  ctaBody:        "AVAILABLE NOW · FULL-STACK · REMOTE/HYBRID · WITH FULL COLLABORATION AND COMMITMENT.",
  ctaButtonLabel: "TRANSMIT NOW [↗]",
  ctaButtonHref:  "mailto:j.n.luft@icloud.com",

};