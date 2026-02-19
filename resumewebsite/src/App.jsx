// ============================================================
//  RESUME SITE — Import resumeInfo.js to update your content
// ============================================================
import { useState, useEffect } from "react";
import resumeInfo from "./resumeInfo.js";

// ── TOKENS ──────────────────────────────────────────────────
const A      = "#5bb8f5";
const A20    = "rgba(91,184,245,0.20)";
const A30    = "rgba(91,184,245,0.30)";
const A50    = "rgba(91,184,245,0.50)";
const MONO   = "'Share Tech Mono', monospace";
const DISP   = "'Bebas Neue', cursive";
const BODY   = "'Rajdhani', sans-serif";
const BG     = "#070710";
const CARD   = "#0b0b18";
const BORDER = "#151525";
const BLUE_PANEL = "#0a2a45";
const BLUE_SOLID = "#1a4f7a";


// ── GLOBAL CSS ───────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: #070710; overflow-x: hidden; width: 100%; }
::selection { background: rgba(91,184,245,0.2); color: #fff; }
a { text-decoration: none; color: inherit; cursor: crosshair; }
button { cursor: crosshair; border: none; background: none; padding: 0; }

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes scan {
  0%   { transform: translateY(-100vh); }
  100% { transform: translateY(200vh); }
}
@keyframes breathe {
  0%,100% { opacity:0.4; transform:scale(1); }
  50%      { opacity:1;   transform:scale(1.15); }
}
`;

// ── RESPONSIVE HOOK ─────────────────────────────────────────
function useBreakpoint() {
  const get = () => {
    if (typeof window === "undefined") return "desktop";
    if (window.innerWidth <= 640)  return "mobile";
    if (window.innerWidth <= 1024) return "tablet";
    return "desktop";
  };
  const [bp, setBp] = useState(get);
  useEffect(() => {
    const handler = () => setBp(get());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return bp;
}

function sectionPad(bp) {
  if (bp === "mobile")  return { padding: "60px 20px 80px" };
  if (bp === "tablet")  return { padding: "70px 40px 90px" };
  return                       { padding: "80px 80px 100px" };
}

// ── DECORATIVE COMPONENTS ────────────────────────────────────
const Barcode = ({ width = 80, height = 28, color = "#ffffff18" }) => {
  const bars  = [3,1,2,1,3,1,1,2,1,2,3,1,2,1,1,3,2,1,1,2,1,3,1,2,2,1,3,1,1,2];
  const total = bars.reduce((a,b)=>a+b,0);
  const unit  = width / total;
  let x = 0;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display:"block", flexShrink:0 }}>
      {bars.map((w, i) => { const rx = x; x += w * unit; return i%2===0 ? <rect key={i} x={rx} y={0} width={Math.max(0,w*unit-0.4)} height={height} fill={color}/> : null; })}
    </svg>
  );
};
// Pixel-grid icon (like the reference image top-left mark)
const PixelMark = ({ size = 24, color = A, style: extStyle = {} }) => {
  // 4x4 pixel pattern — irregular/asymmetric like the reference
  const pixels = [
    [1,0,0,1],
    [1,1,0,0],
    [0,1,1,0],
    [0,0,1,1],
  ];
  const cell = size / 4;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display:"block", flexShrink:0, ...extStyle }}>
      {pixels.flatMap((row, r) =>
        row.map((on, c) => on ? (
          <rect key={`${r}-${c}`} x={c*cell} y={r*cell} width={cell-1} height={cell-1} fill={color} opacity={0.85} />
        ) : null)
      )}
    </svg>
  );
};

// Wider pixel mark like the ">>>" or hash in the reference image
const PixelStripe = ({ width=48, height=16, color=A, density=0.55 }) => {
  const cols = Math.floor(width / 4);
  const rows = Math.floor(height / 4);
  // deterministic "random" using simple pattern
  const on = (r, c) => ((r * 7 + c * 3 + r * c) % 5) < Math.round(density * 5);
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ display:"block", flexShrink:0 }}>
      {Array.from({length:rows}, (_, r) =>
        Array.from({length:cols}, (_, c) =>
          on(r,c) ? <rect key={`${r}-${c}`} x={c*4} y={r*4} width={3} height={3} fill={color} opacity={0.7} /> : null
        )
      )}
    </svg>
  );
};
const SplitDivider = ({ leftLabel, rightContent, bp }) => {
  const isMobile = bp === "mobile";
  return (
    <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "55% 45%", minHeight: isMobile ? "auto" : 72, overflow:"hidden", borderTop:`1px solid ${BORDER}`, borderBottom:`1px solid ${BORDER}` }}>
      {/* Black left panel */}
      <div style={{ background:BG, padding: isMobile?"20px 20px":"0 80px", display:"flex", alignItems:"center", gap:16, borderRight: isMobile?"none":`1px solid ${BLUE_SOLID}` }}>
        <PixelMark size={16} color={A} />
        <PixelStripe width={36} height={12} color={A} density={0.6} />
        <span style={{ fontFamily:MONO, fontSize:9, color:A, letterSpacing:"0.25em", opacity:0.8 }}>{leftLabel}</span>
        <div style={{ flex:1, height:1, background:`linear-gradient(to right, ${A20}, transparent)` }} />
      </div>
      {/* Blue right panel */}
      <div style={{ background: BLUE_PANEL, padding: isMobile?"10px 20px":"0 40px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, borderTop: isMobile ? `1px solid ${BLUE_SOLID}` : "none" }}>
        <span style={{ fontFamily:MONO, fontSize:9, color:"#8bd4f8", letterSpacing:"0.18em", flex:1 }}>{rightContent}</span>
        <Barcode width={48} height={14} color="rgba(91,184,245,0.4)" />
        <PixelStripe width={28} height={12} color="#8bd4f8" density={0.5} />
      </div>
    </div>
  );
};
const ScanLine = () => (
  <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:9999, overflow:"hidden" }}>
    <div style={{ position:"absolute", left:0, right:0, height:"25vh", background:"linear-gradient(to bottom,transparent,rgba(91,184,245,0.018),transparent)", animation:"scan 16s linear infinite" }} />
    <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.04) 3px,rgba(0,0,0,0.04) 4px)" }} />
  </div>
);

const Corners = ({ size=14, color=A30 }) => (
  <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
    {[
      { top:0,    left:0,    borderTop:`1px solid ${color}`,    borderLeft:`1px solid ${color}`  },
      { top:0,    right:0,   borderTop:`1px solid ${color}`,    borderRight:`1px solid ${color}` },
      { bottom:0, left:0,    borderBottom:`1px solid ${color}`, borderLeft:`1px solid ${color}`  },
      { bottom:0, right:0,   borderBottom:`1px solid ${color}`, borderRight:`1px solid ${color}` },
    ].map((s,i) => <div key={i} style={{ position:"absolute", width:size, height:size, ...s }} />)}
  </div>
);

const GhostNum = ({ n, bp }) => {
  if (bp === "mobile") return null;
  return (
    <div style={{
      fontFamily:DISP, fontSize: bp === "tablet" ? "120px" : "clamp(100px,18vw,200px)",
      color:"rgba(91,184,245,0.13)", lineHeight:1,
      position:"absolute", right: bp==="tablet" ? 20 : 40, top:-20,
      letterSpacing:"-0.02em", userSelect:"none", pointerEvents:"none", zIndex:0,
      overflow:"hidden",
    }}>
      {String(n).padStart(2,"0")}
    </div>
  );
};

const Tag = ({ children }) => (
  <span style={{
    fontFamily:MONO, fontSize:10, color:A,
    background:"rgba(91,184,245,0.07)", border:"1px solid rgba(91,184,245,0.25)",
    padding:"3px 10px", letterSpacing:"0.08em", whiteSpace:"nowrap", display:"inline-block",
  }}>
    {children}
  </span>
);

const HudRow = ({ label, value, accent=false }) => (
  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:8, fontFamily:MONO, fontSize:10, letterSpacing:"0.1em", borderBottom:`1px solid ${BORDER}`, padding:"7px 0" }}>
    <span style={{ color:"#b2b2dc", flexShrink:0 }}>{label}</span>
    <span style={{ color: accent ? A : "#c0c0e8", textAlign:"right", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", minWidth:0 }}>{value}</span>
  </div>
);

const SectionEyebrow = ({ num, label }) => (
  <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:40, overflow:"hidden" }}>
    <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:"0.35em", color:A, opacity:0.7, flexShrink:0 }}>{num}</span>
    <div style={{ flex:1, height:1, background:`linear-gradient(to right,${A30},transparent)`, minWidth:0 }} />
    <span style={{ fontFamily:MONO, fontSize:9, color:"#b0b0de", letterSpacing:"0.2em", flexShrink:0 }}>{label}</span>
  </div>
);

const SectionTitle = ({ children, bp }) => (
  <h2 style={{ fontFamily:DISP, fontSize: bp==="mobile" ? 40 : bp==="tablet" ? 50 : 60, letterSpacing:"0.06em", color:"#e8eaf2", marginBottom:36, lineHeight:1 }}>
    {children}
  </h2>
);

const Marquee = ({ text }) => {
  const rep = (text + "   ").repeat(6);
  return (
    <div style={{ overflow:"hidden", whiteSpace:"nowrap", background:`linear-gradient(to right,${CARD},#0d0d20,${CARD})`, borderTop:`1px solid ${BORDER}`, borderBottom:`1px solid ${BORDER}`, padding:"9px 0" }}>
      <div style={{ display:"inline-block", animation:"marquee 60s linear infinite" }}>
        <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.22em" }}>{rep + rep}</span>
      </div>
    </div>
  );
};

// ── NAV ──────────────────────────────────────────────────────
function Nav({ info }) {
  const bp = useBreakpoint();
  const isMobile = bp !== "desktop";
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const navLinks = [["#about","PROFILE"],["#experience","EXP"],["#projects","PROJECTS"],["#contact","CONTACT"]];
  const navBg = (scrolled || menuOpen) ? "rgba(7,7,16,0.98)" : "rgba(7,7,16,0.7)";

  return (
    <>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:600, height:54, padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", background:navBg, borderBottom:`1px solid ${scrolled||menuOpen ? BORDER : "transparent"}`, backdropFilter:"blur(16px)", transition:"all 0.3s" }}>

        {/* Logo */}
        <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          <div style={{ width:8, height:8, borderRadius:"50%", background:A, animation:"breathe 2.5s ease-in-out infinite", boxShadow:`0 0 8px ${A}`, flexShrink:0 }} />
          <span style={{ fontFamily:DISP, fontSize:18, letterSpacing:"0.2em", color:A, whiteSpace:"nowrap" }}>
            {info.name.first[0]}{info.name.last}_SYS
          </span>
        </div>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display:"flex", gap:32 }}>
            {navLinks.map(([href,label]) => (
              <a key={href} href={href} style={{ fontFamily:MONO, fontSize:10, color:"#b2b2dc", letterSpacing:"0.18em", transition:"color 0.2s" }}
                onMouseEnter={e=>e.target.style.color=A} onMouseLeave={e=>e.target.style.color="#b2b2dc"}>
                {label}
              </a>
            ))}
          </div>
        )}

        {/* Desktop clock */}
        {!isMobile && (
          <div style={{ display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
            <span style={{ fontFamily:MONO, fontSize:10, color:"#c4c4e8", letterSpacing:"0.1em" }}>{time}</span>
            <Barcode width={44} height={16} color="#c4c4e8" />
          </div>
        )}

        {/* Mobile: clock + hamburger */}
        {isMobile && (
          <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            <span style={{ fontFamily:MONO, fontSize:9, color:"#c4c4e8", letterSpacing:"0.08em" }}>{time}</span>
            <button
              onClick={() => setMenuOpen(o=>!o)}
              style={{ display:"flex", flexDirection:"column", gap:5, padding:"8px", cursor:"crosshair" }}
              aria-label="Menu"
            >
              <span style={{ display:"block", width:22, height:1.5, background: menuOpen ? A : "#b0b0de", transition:"all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px,5px)" : "none" }} />
              <span style={{ display:"block", width:22, height:1.5, background:"#b0b0de", transition:"all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display:"block", width:22, height:1.5, background: menuOpen ? A : "#b0b0de", transition:"all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px,-5px)" : "none" }} />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div style={{ position:"fixed", top:54, left:0, right:0, zIndex:599, background:"rgba(7,7,16,0.98)", backdropFilter:"blur(16px)", borderBottom:`1px solid ${BORDER}` }}>
          {navLinks.map(([href,label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ display:"block", padding:"16px 24px", fontFamily:MONO, fontSize:11, color:"#b2b2dc", letterSpacing:"0.2em", borderBottom:`1px solid ${BORDER}`, transition:"color 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.color=A} onMouseLeave={e=>e.currentTarget.style.color="#b2b2dc"}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

// ── HERO ─────────────────────────────────────────────────────
function Hero({ info }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const px = isMobile ? "20px" : isTablet ? "40px" : "80px";

  // Hero is full viewport, vertically centered. No extra top gap beyond nav height.
  return (
    <section style={{
      minHeight: "calc(100vh - 54px)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: `84px ${px} 0`, //to edit space above splitdivider
    }}>

      {/* Dot grid bg */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"radial-gradient(circle,rgba(91,184,245,0.08) 1px,transparent 1px)", backgroundSize:"40px 40px", maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)" }} />
      {/* Glow orb */}
      <div style={{ position:"absolute", top:"-15%", right:"-5%", width:"55vw", height:"55vw", borderRadius:"50%", pointerEvents:"none", background:"radial-gradient(circle,rgba(91,184,245,0.07) 0%,transparent 65%)" }} />

      

      {/* Main content */}
      <div style={{ position:"relative", zIndex:2, width:"100%" }}>

        {/* Eyebrow label */}
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom: isMobile ? 14 : 20, overflow:"hidden" }}>
          <div style={{ width:28, height:1, background:A30, flexShrink:0 }} />
          <span style={{ fontFamily:MONO, fontSize:isMobile?9:10, color:A, letterSpacing:isMobile?"0.12em":"0.25em", opacity:0.8 }}>
            RUNNER PROFILE INITIALIZED
          </span>
        </div>

        {/* BIG name */}
        <h1 style={{
          fontFamily: DISP,
          fontSize: isMobile
            ? "clamp(88px, 24vw, 130px)"
            : isTablet
              ? "clamp(110px, 19vw, 160px)"
              : "clamp(130px, 17vw, 200px)",
          lineHeight: 0.86,
          letterSpacing: "0.02em",
          color: "#e8eaf2",
          textShadow: "0 0 80px rgba(91,184,245,0.12)",
          marginBottom: isMobile ? 18 : 28,
          wordBreak: "break-word",
        }}>
          {info.name.first}<br/>
          <span style={{ color:A, textShadow:"0 0 40px rgba(91,184,245,0.4)" }}>{info.name.last}</span>
        </h1>

        {/* Tagline */}
        <p style={{ fontFamily:BODY, fontWeight:600, fontSize:isMobile?12:14, color:"#b0b0d5", letterSpacing:isMobile?"0.06em":"0.12em", marginBottom: isMobile ? 22 : 36, maxWidth:560, lineHeight:1.5 }}>
          {info.tagline}
        </p>

        {/* Status strip */}
        <div style={{ display:"flex", alignItems:"center", gap:isMobile?10:24, fontFamily:MONO, fontSize:9, color:"#b0b0de", letterSpacing:"0.08em", paddingTop:18, borderTop:`1px solid ${BORDER}`, flexWrap:"wrap", rowGap:8 }}>
          {!isMobile && <Barcode width={56} height={16} color="#7070a8" />}
          {!isMobile && <span style={{color:"#4a4a70"}}>╳</span>}
          <span>COORD// 32.78°N 79.93°W</span>
          <span style={{color:"#4a4a70"}}>╳</span>
          <span>"BUILD IS THE FIRST STEP"</span>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────
function AboutSection({ info }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isDesktop = bp === "desktop";

  return (
    <section id="about" style={{ position:"relative", maxWidth:1200, margin:"0 auto", ...sectionPad(bp) }}>
      <GhostNum n={1} bp={bp} />
      <div style={{ position:"relative", zIndex:1 }}>
        <SectionEyebrow num="01" label="RUNNER_PROFILE" />
        <div style={{ display:"grid", gridTemplateColumns: isDesktop ? "1.1fr 0.9fr" : "1fr", gap: isDesktop ? 80 : 48, alignItems:"start" }}>
          <div>
            <SectionTitle bp={bp}>ABOUT</SectionTitle>
            <p style={{ fontFamily:BODY, fontWeight:400, fontSize:isMobile?15:17, color:"#c8c8e8", lineHeight:1.85, marginBottom:28, borderLeft:`2px solid rgba(91,184,245,0.2)`, paddingLeft:16 }}>
              {info.about}
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {info.techTags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <div style={{ marginTop:32, border:`1px solid ${BORDER}`, padding:"18px 20px", background:CARD, position:"relative" }}>
              <Corners size={10} color={A30} />
              <HudRow label="AVAILABILITY" value="IMMEDIATE"       accent />
              <HudRow label="MODE"         value="REMOTE / HYBRID" />
              <HudRow label="LOCATION"     value="CHARLESTON, SC"  />
              <HudRow label="CONTACT"      value={info.email}      accent />
            </div>
          </div>
          <div>
            <SectionTitle bp={bp}>ARMORY</SectionTitle>
            <div style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.18em", marginBottom:24 }}>// CAPABILITY_MATRIX</div>
            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
              {info.skills.map(s => (
                <div key={s.label}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8, gap:8 }}>
                    <span style={{ fontFamily:BODY, fontSize:13, color:"#c0c0e4", fontWeight:500 }}>{s.label}</span>
                    <span style={{ fontFamily:MONO, fontSize:11, color:A, flexShrink:0 }}>{s.value}<span style={{color:A20,fontSize:9}}>%</span></span>
                  </div>
                  <div style={{ height:2, background:"#111125", position:"relative" }}>
                    <div style={{ position:"absolute", top:0, left:0, height:"100%", width:`${s.value}%`, background:`linear-gradient(to right,rgba(91,184,245,0.4),${A})`, boxShadow:"0 0 8px rgba(91,184,245,0.3)" }} />
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
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" style={{ position:"relative", maxWidth:1200, margin:"0 auto", ...sectionPad(bp) }}>
      <GhostNum n={2} bp={bp} />
      <div style={{ position:"relative", zIndex:1 }}>
        <SectionEyebrow num="02" label="DEPLOYMENT_HISTORY" />
        <SectionTitle bp={bp}>EXPERIENCE</SectionTitle>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {info.experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderTop:`1px solid ${isOpen ? "rgba(91,184,245,0.2)" : BORDER}`, transition:"border-color 0.3s" }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width:"100%", padding:"22px 0", cursor:"crosshair", textAlign:"left" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap: isMobile ? "wrap" : "nowrap" }}>
                    <div style={{ display:"flex", alignItems:"baseline", gap:12, flexWrap:"wrap", flex:1, minWidth:0 }}>
                      <span style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.2em", flexShrink:0 }}>{String(i+1).padStart(2,"0")}</span>
                      <span style={{ fontFamily:DISP, fontSize:isMobile?24:32, letterSpacing:"0.05em", color: isOpen?"#e8eaf2":"#b0b0d5", transition:"color 0.3s", wordBreak:"break-word", lineHeight:1.1 }}>{job.title}</span>
                      <span style={{ fontFamily:BODY, fontSize:14, fontWeight:600, color: isOpen ? A : "#7070aa", transition:"color 0.3s", flexShrink:0 }}>{job.company}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
                      <span style={{ fontFamily:MONO, fontSize:isMobile?8:10, color:"#c4c4e8", letterSpacing:"0.08em", whiteSpace:"nowrap" }}>{job.dates}</span>
                      <span style={{ fontFamily:DISP, fontSize:20, color: isOpen?A:"#b0b0de", display:"inline-block", transform: isOpen?"rotate(45deg)":"none", transition:"all 0.3s", lineHeight:1 }}>+</span>
                    </div>
                  </div>
                </button>
                {isOpen && (
                  <div style={{ paddingBottom:32 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", marginBottom:20 }}>
                      {job.tech.map(t => <Tag key={t}>{t}</Tag>)}
                      <span style={{ fontFamily:MONO, fontSize:9, color:"#b0b0de", letterSpacing:"0.08em" }}>// {job.location}</span>
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                      {job.bullets.map((b, j) => (
                        <div key={j} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                          <span style={{ fontFamily:MONO, fontSize:9, color:A30, flexShrink:0, marginTop:5, letterSpacing:"0.1em" }}>{String(j+1).padStart(2,"0")}</span>
                          <div style={{ width:1, background:BORDER, flexShrink:0, alignSelf:"stretch", marginRight:2 }} />
                          <span style={{ fontFamily:BODY, fontSize:isMobile?14:15, color:"#d0d0ee", lineHeight:1.75, fontWeight:400 }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ borderTop:`1px solid ${BORDER}` }} />
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────
function ProjectsSection({ info }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const cols = isMobile ? 1 : 2;
  const [hov, setHov] = useState(null);

  const cardBorder = (i) => {
    const isRight  = (i % cols) === cols - 1;
    const isBottom = i < info.projects.length - cols;
    return { borderRight: isRight ? "none" : `1px solid ${BORDER}`, borderBottom: isBottom ? `1px solid ${BORDER}` : "none" };
  };

  return (
    <section id="projects" style={{ position:"relative", maxWidth:1200, margin:"0 auto", ...sectionPad(bp) }}>
      <GhostNum n={3} bp={bp} />
      <div style={{ position:"relative", zIndex:1 }}>
        <SectionEyebrow num="03" label="MISSION_LOG" />
        <SectionTitle bp={bp}>PROJECTS</SectionTitle>
        <div style={{ display:"grid", gridTemplateColumns: cols===1 ? "1fr" : "1fr 1fr", border:`1px solid ${BORDER}` }}>
          {info.projects.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{ padding: isMobile ? "24px 20px" : "36px 40px", background: hov===i ? "rgba(91,184,245,0.03)" : "transparent", transition:"background 0.3s", position:"relative", overflow:"hidden", cursor:"crosshair", ...cardBorder(i) }}
            >
              <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background: hov===i?A:"transparent", boxShadow: hov===i?`0 0 10px ${A}`:"none", transition:"all 0.3s" }} />
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                <span style={{ fontFamily:DISP, fontSize: isMobile?36:48, color:`rgba(91,184,245,${hov===i?0.5:0.25})`, lineHeight:1, transition:"color 0.3s" }}>{String(i+1).padStart(2,"0")}</span>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.1em", marginBottom:4 }}>{p.date}</div>
                  <Barcode width={50} height={11} color="#7070a8" />
                </div>
              </div>
              {p.award && (
                <div style={{ fontFamily:MONO, fontSize:9, color:A, letterSpacing:"0.1em", marginBottom:10, background:"rgba(91,184,245,0.07)", display:"inline-block", padding:"3px 10px", border:"1px solid rgba(91,184,245,0.2)" }}>
                  ★ {p.award}
                </div>
              )}
              <h3 style={{ fontFamily:DISP, fontSize: isMobile?22:26, letterSpacing:"0.05em", color: hov===i?"#e8eaf2":"#b0b0d5", marginBottom:10, lineHeight:1.1, transition:"color 0.3s" }}>{p.title}</h3>
              <p style={{ fontFamily:BODY, fontSize:14, color:"#c0c0e4", lineHeight:1.8, marginBottom:16, fontWeight:400 }}>{p.desc}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────
function SkillsSection({ info }) {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const cols = isMobile ? 2 : 4;

  const skillBorder = (i) => {
    const isRight  = (i % cols) === cols - 1;
    const isBottom = i < info.technicalSkills.length - cols;
    return { borderRight: isRight ? "none" : `1px solid ${BORDER}`, borderBottom: isBottom ? `1px solid ${BORDER}` : "none" };
  };

  return (
    <section id="skills" style={{ position:"relative", maxWidth:1200, margin:"0 auto", ...sectionPad(bp) }}>
      <GhostNum n={4} bp={bp} />
      <div style={{ position:"relative", zIndex:1 }}>
        <SectionEyebrow num="04" label="TECHNICAL_LOADOUT" />
        <SectionTitle bp={bp}>SKILLS</SectionTitle>
        <div style={{ display:"grid", gridTemplateColumns: cols===2 ? "1fr 1fr" : "repeat(4,1fr)", border:`1px solid ${BORDER}` }}>
          {info.technicalSkills.map((s, i) => (
            <div key={s.category} style={{ padding: isMobile?"22px 16px":"32px 28px", position:"relative", ...skillBorder(i) }}>
              <div style={{ fontFamily:MONO, fontSize:9, color:A, letterSpacing:"0.22em", marginBottom:6, overflow:"hidden", textOverflow:"ellipsis" }}>{s.category}</div>
              <div style={{ fontFamily:DISP, fontSize: isMobile?32:40, color:"rgba(91,184,245,0.22)", lineHeight:1, marginBottom:16 }}>{String(i+1).padStart(2,"0")}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                {s.items.map(item => (
                  <div key={item} style={{ display:"flex", alignItems:"center", gap:7 }}>
                    <div style={{ width:3, height:3, background:"rgba(91,184,245,0.4)", flexShrink:0 }} />
                    <span style={{ fontFamily:BODY, fontSize: isMobile?12:13, color:"#c8c8e8", fontWeight:400 }}>{item}</span>
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
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";

  return (
    <section style={{ position:"relative", maxWidth:1200, margin:"0 auto", ...sectionPad(bp) }}>
      <GhostNum n={5} bp={bp} />
      <div style={{ position:"relative", zIndex:1 }}>
        <SectionEyebrow num="05" label="TRAINING_RECORD" />
        <SectionTitle bp={bp}>EDUCATION</SectionTitle>
        {info.education.map((e, i) => (
          <div key={i} style={{ position:"relative", border:`1px solid ${BORDER}`, padding: isMobile?"28px 20px":"44px 52px", background:CARD }}>
            <Corners size={14} color={A30} />
            <div style={{ display:"flex", flexDirection: isMobile?"column":"row", justifyContent:"space-between", alignItems: isMobile?"flex-start":"center", gap: isMobile?20:32, flexWrap:"wrap" }}>
              <div style={{ minWidth:0 }}>
                <div style={{ fontFamily:MONO, fontSize:10, color:"#b0b0de", letterSpacing:"0.18em", marginBottom:12 }}>
                  // DEGREE_RECORD · ID-{String(i+1).padStart(3,"0")}
                </div>
                <h3 style={{ fontFamily:DISP, fontSize: isMobile?28:40, letterSpacing:"0.05em", color:"#e8eaf2", marginBottom:10, lineHeight:1, wordBreak:"break-word" }}>{e.degree}</h3>
                <div style={{ fontFamily:BODY, fontSize:15, color:A, fontWeight:600, letterSpacing:"0.05em", marginBottom:8 }}>{e.school} · {e.location}</div>
                <div style={{ fontFamily:MONO, fontSize:11, color:"#c0c0e8", letterSpacing:"0.1em" }}>{e.honors}</div>
              </div>
              <div style={{ flexShrink:0 }}>
                <div style={{ fontFamily:DISP, fontSize: isMobile?64:96, letterSpacing:"-0.02em", color:"rgba(91,184,245,0.35)", lineHeight:0.85 }}>{e.year}</div>
                <div style={{ marginTop:12 }}><Barcode width={isMobile?80:100} height={20} color="#7070a8" /></div>
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
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isDesktop = bp === "desktop";
  const pad = isMobile ? { padding:"0 20px 80px" } : bp==="tablet" ? { padding:"0 40px 100px" } : { padding:"0 80px 140px" };

  const links = [
    { label:"EMAIL",    value:info.email,    href:`mailto:${info.email}` },
    { label:"PHONE",    value:info.phone,    href:`tel:${info.phone}` },
    { label:"GITHUB",   value:info.github,   href:`https://${info.github}` },
    { label:"LINKEDIN", value:info.linkedin, href:`https://${info.linkedin}` },
    { label:"WEBSITE",  value:info.website,  href:`https://${info.website}` },
  ];

  return (
    <section id="contact" style={{ position:"relative", maxWidth:1200, margin:"0 auto", ...pad }}>
      <GhostNum n={6} bp={bp} />
      <div style={{ position:"relative", zIndex:1 }}>
        <SectionEyebrow num="06" label="OPEN_CHANNEL" />
        <SectionTitle bp={bp}>ESTABLISH COMMS</SectionTitle>
        <div style={{ display:"grid", gridTemplateColumns: isDesktop?"1.2fr 1fr":"1fr", gap: isDesktop?80:48, alignItems:"start" }}>
          <div>
            {links.map((item, i) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"15px 0", borderBottom:`1px solid ${i===links.length-1?"transparent":BORDER}`, transition:"border-color 0.2s", gap:12, minWidth:0 }}
                onMouseEnter={e=>{if(i<links.length-1)e.currentTarget.style.borderBottomColor=A30;e.currentTarget.querySelector(".lv").style.color=A;}}
                onMouseLeave={e=>{if(i<links.length-1)e.currentTarget.style.borderBottomColor=BORDER;e.currentTarget.querySelector(".lv").style.color="#b2b2dc";}}
              >
                <div style={{ display:"flex", alignItems:"center", gap:14, minWidth:0, flex:1 }}>
                  <span style={{ fontFamily:MONO, fontSize:9, color:"#b0b0de", letterSpacing:"0.18em", flexShrink:0, minWidth:56 }}>{item.label}</span>
                  <div style={{ width:1, height:14, background:BORDER, flexShrink:0 }} />
                  <span className="lv" style={{ fontFamily:BODY, fontSize:isMobile?13:15, color:"#b2b2dc", transition:"color 0.2s", fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", minWidth:0 }}>
                    {item.value}
                  </span>
                </div>
                <span style={{ fontFamily:MONO, fontSize:12, color:"#b0b0de", flexShrink:0 }}>→</span>
              </a>
            ))}
          </div>
          <div style={{ position:"relative", border:`1px solid rgba(91,184,245,0.25)`, padding: isMobile?"28px 24px":"40px 36px", background:CARD, overflow:"hidden" }}>
            <Corners size={14} color={A50} />
            <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"repeating-linear-gradient(135deg,transparent,transparent 12px,rgba(91,184,245,0.015) 12px,rgba(91,184,245,0.015) 13px)" }} />
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ fontFamily:MONO, fontSize:10, color:A, letterSpacing:"0.18em", marginBottom:14, opacity:0.8 }}>▸ STATUS: {info.ctaStatus}</div>
              <h3 style={{ fontFamily:DISP, fontSize: isMobile?36:50, color:"#e8eaf2", lineHeight:0.95, letterSpacing:"0.04em", marginBottom:14 }}>{info.ctaHeadline}</h3>
              <p style={{ fontFamily:BODY, fontSize:14, color:"#c0c0e4", lineHeight:1.75, marginBottom:28, fontWeight:400 }}>{info.ctaBody}</p>
              <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
                <a href={info.ctaButtonHref}
                  style={{ display:"inline-block", border:`1px solid ${A}`, padding:"11px 24px", fontFamily:MONO, fontSize:11, letterSpacing:"0.16em", color:A, cursor:"crosshair", transition:"all 0.25s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background=A;e.currentTarget.style.color=BG;}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=A;}}
                >
                  {info.ctaButtonLabel} [↗]
                </a>
                {!isMobile && <Barcode width={60} height={26} color="rgba(91,184,245,0.2)" />}
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
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const px = isMobile ? "20px" : bp==="tablet" ? "40px" : "80px";

  return (
    <footer style={{ borderTop:`1px solid ${BORDER}`, padding:`18px ${px}`, display:"flex", justifyContent:"space-between", alignItems:"center", background:"#030308", flexWrap:"wrap", gap:10, overflow:"hidden" }}>
      <span style={{ fontFamily:DISP, fontSize:15, letterSpacing:"0.2em", color:"#b0b0de" }}>{info.name.last}_{info.name.first.slice(0,2)}</span>
      {!isMobile && <Barcode width={80} height={18} color="#7070a8" />}
      <span style={{ fontFamily:MONO, fontSize:9, color:"#b0b0de", letterSpacing:"0.1em" }}>© {new Date().getFullYear()} {info.name.first} {info.name.last}</span>
    </footer>
  );
}


// ── APP ──────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <ScanLine />
      <div style={{ minHeight:"100vh", background:BG, color:"#e8eaf2", width:"100%", overflowX:"hidden" }}>
        <Nav info={resumeInfo} />
        <Hero info={resumeInfo} />
        <div style={{ marginBottom: 48 }}>
          <SplitDivider bp="desktop" leftLabel="RUNNER ONLINE ★ SYSTEMS NOMINAL ★ MISSION ACTIVE" rightContent="AUTHENTICATION COMPLETE ★ DEPLOY READY ★ CLEARANCES VERIFIED" />
        </div>
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