// ============================================================
//  RESUME SITE — Edit resumeInfo to update your content
// ============================================================
import { useState, useEffect } from "react";

// ── ✏️  EDIT YOUR INFO HERE ─────────────────────────────────
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
      location: "Charleston, South Carolina",
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
      location: "Charleston, South Carolina",
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
      tags:  ["TypeScript", "Vite", "Firebase", "Tailwind", "Cloud Deploy"],
      desc:  "Full-stack portfolio platform with real-time Firebase sync, authentication, dynamic filtering, and employer-facing profile browsing.",
    },
    {
      title: "AI Prop Firm Comparison Tool",
      date:  "Jul 2025",
      tags:  ["JavaScript", "Python", "PHP", "Firecrawl AI", "GitHub Actions"],
      desc:  "Filterable trading firm comparison platform with AI-enhanced scraping, a WordPress plugin for lead capture, and automated data refresh pipelines.",
    },
    {
      title: "South Carolina Bill Tracker",
      date:  "Jun 2025",
      tags:  ["TypeScript", "Python", "Firebase", "Next.js", "GitHub Actions"],
      desc:  "Real-time legislative tracker with Python scraper for SC Statehouse data, GitHub Actions CI/CD, and CRON-scheduled automated deployments.",
    },
    {
      title: "Custom Notetaking App",
      date:  "Oct 2025",
      tags:  ["JavaScript", "PostgreSQL", "Supabase", "Vercel", "Render"],
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

// ── TOKENS ──────────────────────────────────────────────────
const A    = "#5bb8f5";
const A15  = "rgba(91,184,245,0.15)";
const A30  = "rgba(91,184,245,0.30)";
const A50  = "rgba(91,184,245,0.50)";
const MONO = "'Share Tech Mono', monospace";
const DISP = "'Bebas Neue', cursive";
const BODY = "'Rajdhani', sans-serif";
const BG   = "#070710";
const CARD = "#0b0b18";
const BORDER = "#151525";

// ── GLOBAL CSS ───────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: ${BG}; }
::selection { background: rgba(91,184,245,0.2); color: #fff; }
a { text-decoration: none; color: inherit; cursor: crosshair; }
button { cursor: crosshair; }

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes scan {
  0%   { transform: translateY(-100vh); }
  100% { transform: translateY(200vh); }
}
@keyframes breathe {
  0%,100% { opacity:0.4; transform: scale(1); }
  50%      { opacity:1;   transform: scale(1.15); }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

// ── DECORATIVE COMPONENTS ────────────────────────────────────

// Fake barcode using thin vertical bars
const Barcode = ({ width = 80, height = 28, color = "#ffffff18", style = {} }) => {
  const bars = [3,1,2,1,3,1,1,2,1,2,3,1,2,1,1,3,2,1,1,2,1,3,1,2,2,1,3,1,1,2];
  let x = 0;
  const rects = [];
  bars.forEach((w, i) => {
    if (i % 2 === 0) rects.push({ x, w });
    x += w * (width / bars.reduce((a,b)=>a+b,0));
  });
  const unit = width / bars.reduce((a,b)=>a+b,0);
  return (
    <svg width={width} height={height} style={style} viewBox={`0 0 ${width} ${height}`}>
      {bars.map((w, i) => i % 2 === 0 && (
        <rect key={i}
          x={bars.slice(0,i).reduce((a,b)=>a+b,0) * unit}
          y={0} width={w * unit - 0.4} height={height}
          fill={color} />
      ))}
    </svg>
  );
};

// Scan line overlay
const ScanLine = () => (
  <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:9999, overflow:"hidden" }}>
    <div style={{
      position:"absolute", left:0, right:0, height:"25vh",
      background:"linear-gradient(to bottom, transparent, rgba(91,184,245,0.018), transparent)",
      animation:"scan 16s linear infinite",
    }} />
    <div style={{
      position:"absolute", inset:0,
      backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
    }} />
  </div>
);

// Corner bracket decoration
const Corners = ({ size = 14, color = A30, style = {} }) => (
  <div style={{ position:"absolute", inset:0, pointerEvents:"none", ...style }}>
    {[{top:0,left:0,bt:"borderTop",bl:"borderLeft"},{top:0,right:0,bt:"borderTop",bl:"borderRight"},
      {bottom:0,left:0,bt:"borderBottom",bl:"borderLeft"},{bottom:0,right:0,bt:"borderBottom",bl:"borderRight"}]
      .map((p,i) => (
        <div key={i} style={{
          position:"absolute", width:size, height:size,
          top:p.top, left:p.left, right:p.right, bottom:p.bottom,
          [p.bt]:`1px solid ${color}`, [p.bl]:`1px solid ${color}`,
        }} />
      ))}
  </div>
);

// Large ghost section number
const GhostNum = ({ n }) => (
  <div style={{
    fontFamily: DISP, fontSize: "clamp(100px,18vw,200px)",
    color: "rgba(91,184,245,0.13)", lineHeight:1,
    position:"absolute", right: 40, top: -20,
    letterSpacing:"-0.02em", userSelect:"none", pointerEvents:"none",
    zIndex: 0,
  }}>
    {String(n).padStart(2,"0")}
  </div>
);

// HUD status row
const HudRow = ({ label, value, accent = false }) => (
  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
    fontFamily: MONO, fontSize:10, letterSpacing:"0.12em",
    borderBottom:`1px solid ${BORDER}`, padding:"5px 0",
  }}>
    <span style={{ color:"#b2b2dc" }}>{label}</span>
    <span style={{ color: accent ? A : "#c0c0e8" }}>{value}</span>
  </div>
);

const Tag = ({ children }) => (
  <span style={{
    fontFamily: MONO, fontSize: 10, color: A,
    background: "rgba(91,184,245,0.07)", border:`1px solid rgba(91,184,245,0.25)`,
    padding:"2px 10px", letterSpacing:"0.08em", whiteSpace:"nowrap",
  }}>
    {children}
  </span>
);

const Marquee = ({ text }) => {
  const rep = (text + "   ").repeat(6);
  return (
    <div style={{
      overflow:"hidden", whiteSpace:"nowrap",
      background:`linear-gradient(to right, ${CARD}, #0d0d20, ${CARD})`,
      borderTop:`1px solid ${BORDER}`, borderBottom:`1px solid ${BORDER}`,
      padding:"8px 0",
    }}>
      <div style={{ display:"inline-block", animation:"marquee 60s linear infinite" }}>
        <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.25em" }}>
          {rep + rep}
        </span>
      </div>
    </div>
  );
};

// ── NAV ──────────────────────────────────────────────────────
function Nav({ info }) {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(`${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}:${String(n.getSeconds()).padStart(2,"0")}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => { clearInterval(id); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:500,
      height:54, padding:"0 48px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      background: scrolled ? "rgba(7,7,16,0.96)" : "rgba(7,7,16,0.7)",
      borderBottom: `1px solid ${scrolled ? BORDER : "transparent"}`,
      backdropFilter:"blur(16px)",
      transition:"all 0.4s",
    }}>
      {/* Logo */}
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <div style={{
          width:8, height:8, borderRadius:"50%", background:A,
          animation:"breathe 2.5s ease-in-out infinite",
          boxShadow:`0 0 8px ${A}`,
        }} />
        <span style={{ fontFamily:DISP, fontSize:18, letterSpacing:"0.25em", color:A }}>
          {info.name.first[0]}{info.name.last}_SYS
        </span>
      </div>

      {/* Links */}
      <div style={{ display:"flex", gap:36 }}>
        {[["#about","PROFILE"],["#experience","EXP"],["#projects","PROJECTS"],["#contact","CONTACT"]].map(([href,label]) => (
          <a key={href} href={href}
            style={{ fontFamily:MONO, fontSize:10, color:"#b2b2dc", letterSpacing:"0.18em", transition:"color 0.2s" }}
            onMouseEnter={e=>e.target.style.color=A}
            onMouseLeave={e=>e.target.style.color="#b2b2dc"}>
            {label}
          </a>
        ))}
      </div>

      {/* Clock + barcode */}
      <div style={{ display:"flex", alignItems:"center", gap:16 }}>
        <span style={{ fontFamily:MONO, fontSize:10, color:"#c4c4e8", letterSpacing:"0.1em" }}>{time}</span>
        <Barcode width={48} height={18} color="#c4c4e8" />
      </div>
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────
function Hero({ info }) {
  return (
    <section style={{
      minHeight:"100vh", position:"relative", overflow:"hidden",
      display:"flex", flexDirection:"column", justifyContent:"flex-end",
      padding:"0 80px 80px",
    }}>
      {/* Dot grid background */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:`radial-gradient(circle, rgba(91,184,245,0.08) 1px, transparent 1px)`,
        backgroundSize:"40px 40px",
        maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }} />

      {/* Radial glow */}
      <div style={{
        position:"absolute", top:"-15%", right:"-5%",
        width:"55vw", height:"55vw", borderRadius:"50%", pointerEvents:"none",
        background:"radial-gradient(circle, rgba(91,184,245,0.07) 0%, transparent 65%)",
      }} />

      {/* Top-left HUD block */}
      <div style={{
        position:"absolute", top:80, left:80,
        fontFamily:MONO, fontSize:10, letterSpacing:"0.12em", lineHeight:2,
        color:"#b0b0de",
      }}>
        <div>SYS// PORTFOLIO_OS v2.8.93</div>
        <div>USER// LUFT_JUSTIN</div>
        <div>STATUS// <span style={{color:A}}>ONLINE</span></div>
      </div>

      {/* Top-right coordinate block */}
      <div style={{
        position:"absolute", top:80, right:80,
        fontFamily:MONO, fontSize:10, letterSpacing:"0.1em",
        color:"#b0b0de", textAlign:"right", lineHeight:2,
      }}>
        <div>ID// 18-00039-JL</div>
        <div>CLEARANCE// <span style={{color:A}}>LEVEL 4</span></div>
        <div>NODE// TAU-CETI-IV</div>
      </div>

      {/* Large decorative number — hero gets no number, sections 01–06 own them */}

      {/* Main content */}
      <div style={{ position:"relative", zIndex:2, maxWidth:900 }}>
        {/* Eyebrow */}
        <div style={{
          display:"flex", alignItems:"center", gap:16, marginBottom:32,
        }}>
          <div style={{ width:32, height:1, background:A30 }} />
          <span style={{ fontFamily:MONO, fontSize:10, color:A, letterSpacing:"0.3em", opacity:0.8 }}>
            RUNNER PROFILE INITIALIZED
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily:DISP,
          fontSize:"clamp(72px,13vw,160px)",
          lineHeight:0.88, letterSpacing:"0.02em",
          color:"#e8eaf2",
          textShadow:`0 0 80px rgba(91,184,245,0.12)`,
          marginBottom:32,
        }}>
          {info.name.first}<br/>
          <span style={{ color:A, textShadow:`0 0 40px rgba(91,184,245,0.4)` }}>{info.name.last}</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily:BODY, fontWeight:600, fontSize:16,
          color:"#b0b0d5", letterSpacing:"0.18em", marginBottom:40,
        }}>
          {info.tagline}
        </p>

        {/* Bottom status strip */}
        <div style={{
          display:"flex", alignItems:"center", gap:32,
          fontFamily:MONO, fontSize:10, color:"#c4c4e8", letterSpacing:"0.12em",
          paddingTop:24, borderTop:`1px solid ${BORDER}`,
        }}>
          <Barcode width={70} height={20} color="#b0b0de" />
          <span>╳</span>
          <span>COORD// 32.7765° N, 79.9311° W</span>
          <span>╳</span>
          <span style={{color:"#b0b0de"}}>{"█".repeat(5)}{"░".repeat(3)}</span>
          <span>╳</span>
          <span>"BUILD IS THE FIRST STEP"</span>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────
function AboutSection({ info }) {
  return (
    <section id="about" style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"100px 80px" }}>
      <GhostNum n={1} />
      <div style={{ position:"relative", zIndex:1 }}>
        {/* Section header */}
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:64 }}>
          <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:"0.35em", color:A, opacity:0.7 }}>01</span>
          <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${A30}, transparent)` }} />
          <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.25em" }}>RUNNER_PROFILE</span>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"80px 100px", alignItems:"start" }}>
          {/* Left: bio */}
          <div>
            <h2 style={{ fontFamily:DISP, fontSize:60, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:28, lineHeight:1 }}>
              ABOUT
            </h2>
            <p style={{ fontFamily:BODY, fontWeight:400, fontSize:17, color:"#d0d0ee", lineHeight:1.85, marginBottom:36,
              borderLeft:`2px solid rgba(91,184,245,0.2)`, paddingLeft:20 }}>
              {info.about}
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {info.techTags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>

            {/* Mini HUD card */}
            <div style={{ marginTop:40, border:`1px solid ${BORDER}`, padding:"20px 24px",
              background:CARD, position:"relative" }}>
              <Corners size={10} color={A30} />
              <HudRow label="AVAILABILITY" value="IMMEDIATE" accent />
              <HudRow label="PREFERRED_MODE" value="REMOTE / HYBRID" />
              <HudRow label="LOCATION" value="CHARLESTON, SC" />
              <HudRow label="CONTACT" value={info.email} accent />
            </div>
          </div>

          {/* Right: skill bars */}
          <div>
            <h2 style={{ fontFamily:DISP, fontSize:60, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:28, lineHeight:1 }}>
              ARMORY
            </h2>
            <div style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.2em", marginBottom:28 }}>
              // CAPABILITY_MATRIX
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:22 }}>
              {info.skills.map((s, i) => (
                <div key={s.label}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontFamily:BODY, fontSize:14, color:"#d0d0ee", fontWeight:500, letterSpacing:"0.05em" }}>
                      {s.label}
                    </span>
                    <span style={{ fontFamily:MONO, fontSize:11, color:A }}>
                      {s.value}<span style={{color:A30, fontSize:9}}>%</span>
                    </span>
                  </div>
                  <div style={{ height:2, background:"#111125", position:"relative" }}>
                    <div style={{
                      position:"absolute", top:0, left:0, height:"100%",
                      width:`${s.value}%`,
                      background:`linear-gradient(to right, rgba(91,184,245,0.4), ${A})`,
                      boxShadow:`0 0 8px rgba(91,184,245,0.3)`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ───────────────────────────────────────────────
function ExperienceSection({ info }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"0 80px 100px" }}>
      <GhostNum n={2} />
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:64 }}>
          <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:"0.35em", color:A, opacity:0.7 }}>02</span>
          <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${A30}, transparent)` }} />
          <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.25em" }}>DEPLOYMENT_HISTORY</span>
        </div>

        <div style={{ display:"flex", alignItems:"baseline", gap:24, marginBottom:48 }}>
          <h2 style={{ fontFamily:DISP, fontSize:60, letterSpacing:"0.06em", color:"#e8eaf2", lineHeight:1 }}>EXPERIENCE</h2>
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          {info.experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderTop:`1px solid ${isOpen ? "rgba(91,184,245,0.2)" : BORDER}`,
                transition:"border-color 0.3s",
              }}>
                {/* Clickable header */}
                <div
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{ cursor:"crosshair", padding:"28px 0", display:"flex", justifyContent:"space-between", alignItems:"center" }}
                >
                  <div style={{ display:"flex", alignItems:"baseline", gap:24, flexWrap:"wrap" }}>
                    <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.2em", minWidth:32 }}>
                      {String(i+1).padStart(2,"0")}
                    </span>
                    <span style={{ fontFamily:DISP, fontSize:36, letterSpacing:"0.06em", color: isOpen ? "#e8eaf2" : "#b0b0d5", transition:"color 0.3s" }}>
                      {job.title}
                    </span>
                    <span style={{ fontFamily:BODY, fontSize:15, color: isOpen ? A : "#b2b2dc", transition:"color 0.3s", fontWeight:600 }}>
                      {job.company}
                    </span>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:24, flexShrink:0 }}>
                    <span style={{ fontFamily:MONO, fontSize:10, color:"#c4c4e8", letterSpacing:"0.12em" }}>{job.dates}</span>
                    <span style={{ fontFamily:DISP, fontSize:22, color: isOpen ? A : "#b0b0de", transition:"all 0.3s",
                      display:"inline-block", transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
                  </div>
                </div>

                {/* Expanded body */}
                {isOpen && (
                  <div style={{ paddingBottom:40 }}>
                    {/* Tech tags + location */}
                    <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginBottom:28 }}>
                      {job.tech.map(t => <Tag key={t}>{t}</Tag>)}
                      <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", marginLeft:8, letterSpacing:"0.1em" }}>
                        // {job.location}
                      </span>
                    </div>
                    {/* Bullets */}
                    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                      {job.bullets.map((b, j) => (
                        <div key={j} style={{ display:"flex", gap:20, alignItems:"flex-start" }}>
                          <span style={{ fontFamily:MONO, fontSize:9, color:A30, flexShrink:0, marginTop:6, letterSpacing:"0.1em" }}>
                            {String(j+1).padStart(2,"0")}
                          </span>
                          <div style={{ width:1, background:BORDER, flexShrink:0, alignSelf:"stretch", marginRight:4 }} />
                          <span style={{ fontFamily:BODY, fontSize:15, color:"#d0d0ee", lineHeight:1.75, fontWeight:400 }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {/* Bottom border */}
          <div style={{ borderTop:`1px solid ${BORDER}` }} />
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────
function ProjectsSection({ info }) {
  const [hov, setHov] = useState(null);
  return (
    <section id="projects" style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"0 80px 100px" }}>
      <GhostNum n={3} />
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:64 }}>
          <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:"0.35em", color:A, opacity:0.7 }}>03</span>
          <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${A30}, transparent)` }} />
          <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.25em" }}>MISSION_LOG</span>
        </div>

        <h2 style={{ fontFamily:DISP, fontSize:60, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:48, lineHeight:1 }}>
          PROJECTS
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", border:`1px solid ${BORDER}` }}>
          {info.projects.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                padding:"40px 44px",
                background: hov===i ? "rgba(91,184,245,0.03)" : "transparent",
                borderRight: i%2===0 ? `1px solid ${BORDER}` : "none",
                borderBottom: i<2 ? `1px solid ${BORDER}` : "none",
                transition:"background 0.3s",
                position:"relative",
                overflow:"hidden",
                cursor:"crosshair",
              }}
            >
              {/* Hover accent line */}
              <div style={{
                position:"absolute", top:0, left:0, right:0, height:1,
                background: hov===i ? A : "transparent",
                boxShadow: hov===i ? `0 0 10px ${A}` : "none",
                transition:"all 0.3s",
              }} />

              {/* Number + date */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
                <span style={{ fontFamily:DISP, fontSize:48, color:`rgba(91,184,245,${hov===i?0.50:0.25})`, lineHeight:1, transition:"color 0.3s" }}>
                  {String(i+1).padStart(2,"0")}
                </span>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.1em", marginBottom:4 }}>{p.date}</div>
                  <Barcode width={60} height={14} color="#8080c0" />
                </div>
              </div>

              {/* Award */}
              {p.award && (
                <div style={{ fontFamily:MONO, fontSize:9, color:A, letterSpacing:"0.15em", marginBottom:10,
                  background:"rgba(91,184,245,0.07)", display:"inline-block", padding:"3px 10px",
                  border:`1px solid rgba(91,184,245,0.2)` }}>
                  ★ {p.award}
                </div>
              )}

              {/* Title */}
              <h3 style={{
                fontFamily:DISP, fontSize:26, letterSpacing:"0.05em",
                color: hov===i ? "#e8eaf2" : "#b0b0d5",
                marginBottom:14, lineHeight:1.1, transition:"color 0.3s",
              }}>
                {p.title}
              </h3>

              {/* Desc */}
              <p style={{ fontFamily:BODY, fontSize:14, color:"#c0c0e4", lineHeight:1.8, marginBottom:20, fontWeight:400 }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────
function SkillsSection({ info }) {
  return (
    <section id="skills" style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"0 80px 100px" }}>
      <GhostNum n={4} />
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:64 }}>
          <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:"0.35em", color:A, opacity:0.7 }}>04</span>
          <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${A30}, transparent)` }} />
          <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.25em" }}>TECHNICAL_LOADOUT</span>
        </div>

        <h2 style={{ fontFamily:DISP, fontSize:60, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:48, lineHeight:1 }}>
          SKILLS
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0", border:`1px solid ${BORDER}` }}>
          {info.technicalSkills.map((s, i) => (
            <div key={s.category} style={{
              padding:"36px 32px",
              borderRight: i<info.technicalSkills.length-1 ? `1px solid ${BORDER}` : "none",
              position:"relative",
            }}>
              {/* Category */}
              <div style={{ fontFamily:MONO, fontSize:9, color:A, letterSpacing:"0.25em", marginBottom:6 }}>
                {s.category}
              </div>
              {/* Index */}
              <div style={{ fontFamily:DISP, fontSize:42, color:`rgba(91,184,245,0.22)`, lineHeight:1, marginBottom:20 }}>
                {String(i+1).padStart(2,"0")}
              </div>
              {/* Items */}
              <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                {s.items.map(item => (
                  <div key={item} style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ width:3, height:3, background:`rgba(91,184,245,0.3)`, flexShrink:0 }} />
                    <span style={{ fontFamily:BODY, fontSize:13, color:"#c8c8e8", fontWeight:400 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── EDUCATION ────────────────────────────────────────────────
function EducationSection({ info }) {
  return (
    <section style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"0 80px 100px" }}>
      <GhostNum n={5} />
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:64 }}>
          <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:"0.35em", color:A, opacity:0.7 }}>05</span>
          <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${A30}, transparent)` }} />
          <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.25em" }}>TRAINING_RECORD</span>
        </div>

        <h2 style={{ fontFamily:DISP, fontSize:60, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:48, lineHeight:1 }}>
          EDUCATION
        </h2>

        {info.education.map((e, i) => (
          <div key={i} style={{ position:"relative", border:`1px solid ${BORDER}`, padding:"48px 56px", background:CARD }}>
            <Corners size={14} color={A30} />
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:32 }}>
              <div>
                <div style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.2em", marginBottom:16 }}>
                  // DEGREE_RECORD · ID-{String(i+1).padStart(3,"0")}
                </div>
                <h3 style={{ fontFamily:DISP, fontSize:42, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:10, lineHeight:1 }}>
                  {e.degree}
                </h3>
                <div style={{ fontFamily:BODY, fontSize:16, color:A, fontWeight:600, letterSpacing:"0.05em", marginBottom:8 }}>
                  {e.school} · {e.location}
                </div>
                <div style={{ fontFamily:MONO, fontSize:11, color:"#c0c0e8", letterSpacing:"0.12em" }}>
                  {e.honors}
                </div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontFamily:DISP, fontSize:100, letterSpacing:"-0.02em", color:`rgba(91,184,245,0.35)`, lineHeight:0.85 }}>
                  {e.year}
                </div>
                <div style={{ marginTop:12 }}>
                  <Barcode width={100} height={24} color="#8080c0" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────
function ContactSection({ info }) {
  const links = [
    { label:"EMAIL",    value:info.email,    href:`mailto:${info.email}` },
    { label:"PHONE",    value:info.phone,    href:`tel:${info.phone}` },
    { label:"GITHUB",   value:info.github,   href:`https://${info.github}` },
    { label:"LINKEDIN", value:info.linkedin, href:`https://${info.linkedin}` },
    { label:"WEBSITE",  value:info.website,  href:`https://${info.website}` },
  ];
  return (
    <section id="contact" style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"0 80px 140px" }}>
      <GhostNum n={6} />
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:64 }}>
          <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:"0.35em", color:A, opacity:0.7 }}>06</span>
          <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${A30}, transparent)` }} />
          <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.25em" }}>OPEN_CHANNEL</span>
        </div>

        <h2 style={{ fontFamily:DISP, fontSize:60, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:64, lineHeight:1 }}>
          ESTABLISH COMMS
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:80, alignItems:"start" }}>
          {/* Left: links */}
          <div>
            {links.map((item, i) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{
                display:"flex", justifyContent:"space-between", alignItems:"center",
                padding:"18px 0", borderBottom:`1px solid ${i===links.length-1?"transparent":BORDER}`,
                transition:"all 0.2s", gap:16,
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderBottomColor = A30;
                  e.currentTarget.querySelector(".lv").style.color = A;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderBottomColor = i===links.length-1?"transparent":BORDER;
                  e.currentTarget.querySelector(".lv").style.color = "#b2b2dc";
                }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:20 }}>
                  <span style={{ fontFamily:MONO, fontSize:9, color:"#b0b0de", letterSpacing:"0.2em", minWidth:64 }}>
                    {item.label}
                  </span>
                  <div style={{ width:1, height:16, background:BORDER }} />
                  <span className="lv" style={{ fontFamily:BODY, fontSize:15, color:"#b2b2dc", transition:"color 0.2s", fontWeight:500 }}>
                    {item.value}
                  </span>
                </div>
                <span style={{ fontFamily:MONO, fontSize:12, color:"#b0b0de" }}>→</span>
              </a>
            ))}
          </div>

          {/* Right: CTA card */}
          <div style={{ position:"relative", border:`1px solid rgba(91,184,245,0.25)`, padding:"44px 40px", background:CARD, overflow:"hidden" }}>
            <Corners size={14} color={A50} />
            {/* Diagonal stripe bg */}
            <div style={{
              position:"absolute", inset:0, pointerEvents:"none",
              backgroundImage:"repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(91,184,245,0.015) 12px, rgba(91,184,245,0.015) 13px)",
            }} />

            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ fontFamily:MONO, fontSize:10, color:A, letterSpacing:"0.2em", marginBottom:20, opacity:0.7 }}>
                ▸ STATUS: {info.ctaStatus}
              </div>
              <h3 style={{ fontFamily:DISP, fontSize:52, color:"#e8eaf2", lineHeight:0.95, letterSpacing:"0.04em", marginBottom:20 }}>
                {info.ctaHeadline}
              </h3>
              <p style={{ fontFamily:BODY, fontSize:14, color:"#c0c0e4", lineHeight:1.75, marginBottom:36, fontWeight:400 }}>
                {info.ctaBody}
              </p>
              <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                <a href={info.ctaButtonHref} style={{
                  display:"inline-block", border:`1px solid ${A}`,
                  padding:"11px 28px", fontFamily:MONO, fontSize:11,
                  letterSpacing:"0.18em", color:A, cursor:"crosshair",
                  transition:"all 0.25s",
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background=A;e.currentTarget.style.color=BG;}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=A;}}
                >
                  {info.ctaButtonLabel} [↗]
                </a>
                <Barcode width={64} height={28} color="rgba(91,184,245,0.12)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────────────────────
function Footer({ info }) {
  return (
    <footer style={{
      borderTop:`1px solid ${BORDER}`, padding:"20px 80px",
      display:"flex", justifyContent:"space-between", alignItems:"center",
      background:"#030308",
    }}>
      <span style={{ fontFamily:DISP, fontSize:16, letterSpacing:"0.25em", color:"#b0b0de" }}>
        {info.name.last}_{info.name.first.slice(0,2)}
      </span>
      <Barcode width={80} height={20} color="#8080c0" />
      <span style={{ fontFamily:MONO, fontSize:9, color:"#b0b0de", letterSpacing:"0.15em" }}>
        © {new Date().getFullYear()} {info.name.first} {info.name.last} · ALL RIGHTS RESERVED
      </span>
    </footer>
  );
}

// ── APP ──────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <ScanLine />
      <div style={{ minHeight:"100vh", background:BG, color:"#e8eaf2" }}>
        <Nav info={resumeInfo} />
        <Hero info={resumeInfo} />
        <Marquee text="RUNNER ONLINE ★ SYSTEMS NOMINAL ★ MISSION ACTIVE ★ AUTHENTICATION COMPLETE ★ DEPLOY READY ★ ALL CLEARANCES VERIFIED ★" />
        <AboutSection info={resumeInfo} />
        <Marquee text="DEPLOYMENT_HISTORY LOADED ★ SCANNING RECORDS ★ ACCESSING SECURE FILES ★ CLEARANCE CONFIRMED ★" />
        <ExperienceSection info={resumeInfo} />
        <ProjectsSection info={resumeInfo} />
        <SkillsSection info={resumeInfo} />
        <EducationSection info={resumeInfo} />
        <ContactSection info={resumeInfo} />
        <Footer info={resumeInfo} />
      </div>
    </>
  );
}