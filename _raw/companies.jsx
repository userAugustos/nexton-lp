/* global React, LatamUSMap, NextonNav, NextonFooter, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, TweakSelect */
const { useState: useC, useEffect: useEC, useRef: useRC } = React;

const COMPANIES_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#337BFF",
  "headingFont": "Roboto",
  "displayFont": "Oswald",
  "density": "regular",
  "showMap": true
}/*EDITMODE-END*/;

/* ============================================================
   HERO — corporate, Linear/Vercel-coded
   ============================================================ */
function CompaniesHero() {
  return (
    <section className="c-hero">
      <div className="c-hero-grid">
        <div className="c-hero-copy">
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            <span className="c-dot"></span> Trusted by engineering teams at 300+ US companies
          </div>
          <h1 className="h-display">
            Hire engineers from LATAM in <span className="c-accent">14 days,</span> not 14 weeks.
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            Nexton is engineer-led recruiting for U.S. companies building remote teams in Latin America.
            We source, technically vet, and place senior engineers who plug into your team — same timezone,
            full-time, long-tenure.
          </p>
          <div className="c-hero-cta">
            <a href="#contact" className="btn btn-primary">
              Hire engineers
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <a href="#proof" className="btn btn-ghost">See case studies</a>
          </div>
        </div>

        <div className="c-hero-panel">
          <div className="c-panel-head">
            <span className="mono c-panel-key">PIPELINE / Q2 2026</span>
            <span className="mono" style={{ fontSize: 11, color: "var(--positive)" }}>● LIVE</span>
          </div>
          <div className="c-panel-body">
            <CHeroRole role="Senior Backend Engineer" stack="Go · Postgres · k8s" cands={4} stage="On-site" days={11} />
            <CHeroRole role="Sr. Full-stack Engineer" stack="TS · React · Node" cands={6} stage="Tech screen" days={6} />
            <CHeroRole role="Staff Platform Engineer" stack="Rust · AWS · Terraform" cands={3} stage="Sourcing" days={3} />
            <CHeroRole role="Sr. iOS Engineer" stack="Swift · SwiftUI" cands={5} stage="Final round" days={18} />
          </div>
          <div className="c-panel-foot">
            <div>
              <div className="mono c-foot-key">AVG TIME-TO-OFFER</div>
              <div className="c-foot-val">14 days</div>
            </div>
            <div>
              <div className="mono c-foot-key">VETTED RATIO</div>
              <div className="c-foot-val">3.2%</div>
            </div>
            <div>
              <div className="mono c-foot-key">RETENTION 12mo</div>
              <div className="c-foot-val">94%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CHeroRole({ role, stack, cands, stage, days }) {
  return (
    <div className="c-role">
      <div style={{ flex: 1 }}>
        <div className="c-role-name">{role}</div>
        <div className="mono c-role-stack">{stack}</div>
      </div>
      <div className="c-role-stage">{stage}</div>
      <div className="c-role-cands"><strong>{cands}</strong> <span>candidates</span></div>
      <div className="mono c-role-days">d+{days}</div>
    </div>
  );
}

/* ============================================================
   COMPANIES CAROUSEL
   ============================================================ */
function CompaniesLogos() {
  const logos = [
    "Stripe", "Brex", "Ramp", "Linear", "Vercel", "Notion", "Figma", "Loom",
    "Mercury", "Modal", "Retool", "Gusto", "Plaid", "Anthropic", "OpenAI", "Replit"
  ];
  // duplicate for seamless loop
  const reel = [...logos, ...logos];

  return (
    <section className="c-logos">
      <div className="section-inner">
        <div className="c-logos-head mono">
          <span>—— Trusted by engineering teams at 300+ US companies</span>
        </div>
      </div>
      <div className="c-logos-reel">
        <div className="c-logos-track">
          {reel.map((l, i) => (
            <div key={i} className="c-logo">
              <LogoMark name={l} idx={i} />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.CompaniesLogos = CompaniesLogos;

function LogoMark({ name, idx }) {
  // simple, distinct geometric mark per logo (placeholder, original)
  const variants = [
    <svg key="0" width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>,
    <svg key="1" width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>,
    <svg key="2" width="22" height="22" viewBox="0 0 22 22"><path d="M3 11l8-8 8 8-8 8z" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>,
    <svg key="3" width="22" height="22" viewBox="0 0 22 22"><path d="M3 18L11 4l8 14z" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>,
    <svg key="4" width="22" height="22" viewBox="0 0 22 22"><circle cx="7" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="15" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>,
    <svg key="5" width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="4" width="14" height="14" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M4 11h14M11 4v14" stroke="currentColor" strokeWidth="1.6"/></svg>,
    <svg key="6" width="22" height="22" viewBox="0 0 22 22"><path d="M11 3v16M3 11h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    <svg key="7" width="22" height="22" viewBox="0 0 22 22"><path d="M3 11a8 8 0 0 1 16 0M3 11a8 8 0 0 0 16 0" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>,
  ];
  return variants[idx % variants.length];
}
window.LogoMark = LogoMark;

/* ============================================================
   TESTIMONIALS — carousel of CEO/COO quotes
   ============================================================ */
function CaseStudies() {
  const quotes = [
    {
      quote: "We could actually grow an entire unit out there with the foundation of knowing we'll find the right people through Nexton at our side.",
      name: "Josh Schachter",
      title: "CEO",
      company: "UpdateAI",
      hue: 12,
    },
    {
      quote: "Nexton sent us four senior engineers in six weeks after agencies wasted five months. The vetting bar is genuinely the highest I've seen — we've kept every single hire.",
      name: "Maya Ellington",
      title: "COO",
      company: "Verdant Climate",
      hue: 158,
    },
    {
      quote: "They handled sourcing, contracts, payroll, and equipment across five countries. I have one point of contact instead of five vendors and our LATAM team ships before SF wakes up.",
      name: "Daniel Park",
      title: "VP Engineering",
      company: "Loopstack",
      hue: 220,
    },
    {
      quote: "Our shortlist showed up with full vetting transcripts and live coding recordings. Our interview loop went from eight rounds to four and we still raised the bar.",
      name: "Priya Raman",
      title: "Head of Talent",
      company: "Northwind Health",
      hue: 290,
    },
    {
      quote: "We've made twelve hires through Nexton across two years. Eleven are still on the team. That retention number alone is worth the partnership.",
      name: "Marco Beltrán",
      title: "CTO",
      company: "Ledgerlane",
      hue: 38,
    },
    {
      quote: "Direct calendar links, structured rubrics, transparent pricing. It's the only hiring partner I recommend without a caveat.",
      name: "Sarah Okonkwo",
      title: "CEO",
      company: "Threadlight",
      hue: 340,
    },
    {
      quote: "We saved roughly $2.4M against equivalent local hires in our first year. The salary delta is real but the quality delta is what made us renew.",
      name: "James Whitford",
      title: "COO",
      company: "Pacific Logic",
      hue: 195,
    },
  ];

  const [active, setActive] = useC(0);
  const [paused, setPaused] = useC(false);
  const q = quotes[active];
  const next = () => setActive((a) => (a + 1) % quotes.length);
  const prev = () => setActive((a) => (a - 1 + quotes.length) % quotes.length);

  useEC(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % quotes.length), 5000);
    return () => clearInterval(t);
  }, [paused, quotes.length]);

  return (
    <section className="section c-cases" id="proof">
      <div className="section-inner">
        <div
          className="c-tcarousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="c-tnav c-tnav-l" onClick={prev} aria-label="Previous testimonial">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M14 4l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="c-tcard" key={active}>
            <div className="c-tcard-top">
              <div className="c-tclutch mono">
                <span className="c-tclutch-lbl">Review on</span>
                <span className="c-tclutch-mark">Clut<span className="c-tclutch-c">c</span>h</span>
                <span className="c-tclutch-score">4.9</span>
                <span className="c-tclutch-stars">
                  {[0,1,2,3,4].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z"/></svg>
                  ))}
                </span>
              </div>
              <blockquote className="c-tquote">
                <span className="c-tquote-mark" aria-hidden="true">&ldquo;</span>
                {q.quote}
                <span className="c-tquote-mark" aria-hidden="true">&rdquo;</span>
              </blockquote>
            </div>
            <div className="c-tcard-bot">
              <div className="c-tavatar" style={{ background: `radial-gradient(circle at 30% 30%, hsl(${q.hue} 70% 72%), hsl(${(q.hue+40)%360} 60% 50%))` }}>
                <span className="mono">{q.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div className="c-tname">{q.name}</div>
              <div className="c-tmeta">{q.title} · <strong>{q.company}</strong></div>
              <a className="c-tli" href="#" aria-label={`${q.name} on LinkedIn`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1-.001 5.001A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z"/></svg>
              </a>
              <div className="c-tdots">
                {quotes.map((_, i) => (
                  <button key={i} className={`c-tdot ${i === active ? "active" : ""}`} onClick={() => setActive(i)} aria-label={`Go to slide ${i+1}`}></button>
                ))}
              </div>
            </div>
          </div>

          <button className="c-tnav c-tnav-r" onClick={next} aria-label="Next testimonial">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 4l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="c-tfooter">
          <h2 className="h-section c-tfooter-h">
            We've already placed <span className="c-accent">1000+ engineers</span>
          </h2>
          <p className="c-tfooter-sub">
            with our not-so-secret hand-matching process <em>designed by Engineers, executed by Humans</em>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOW IT WORKS — vetting/matching process
   ============================================================ */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Scope Definition & Calibration", body: "Tell us what you need. The calibration ensures alignment.", stat: null },
    { n: "02", title: "Gatekeeping & Pre-Screening", body: "Hand-matching process + live interviews.", stat: "20+ headhunters · 100+ engineers" },
    { n: "03", title: "Candidate Submission", body: "We submit only pre-vetted matching candidates.", stat: "First candidates in less than 72h" },
    { n: "04", title: "Offer Stage & Onboarding", body: "We lead the offer stage and admin until talent is ready to be onboarded.", stat: "4–6 weeks avg to hire" },
  ];

  return (
    <section className="section c-how" id="how">
      <div className="section-inner">
        <div className="section-head section-head-flush">
          <h2 className="h-section">Four steps. No black box.</h2>
        </div>

        <ol className="c-how-grid">
          {steps.map((s, i) => (
            <li key={i} className="c-how-step">
              <div className="c-how-num mono">{s.n}</div>
              <div className="c-how-line" aria-hidden="true">
                <span></span>
                {i < steps.length - 1 && <span className="c-how-arrow"></span>}
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.stat && <div className="c-how-stat mono">{s.stat}</div>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   ENGAGEMENT MODELS — direct hire vs staff aug
   ============================================================ */
function Models() {
  return (
    <section className="section c-models">
      <div className="section-inner">
        <div className="section-head section-head-flush">
          <h2 className="h-section">What Nexton can do <span className="c-accent">for you</span></h2>
          <p className="section-sub">From Full-Stack Engineers to CTOs</p>
        </div>
        <div className="c-models-grid">
          <article className="c-model">
            <header>
              <div className="mono c-model-tag">STAFF AUGMENTATION</div>
              <h3>Staff Augmentation</h3>
            </header>
            <ul className="c-model-list">
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>Pre-vetted engineers (by engineers) in under 72 hours</span></li>
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>Risk-free hiring — talent replacements if needed</span></li>
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>Full Admin, Payroll, Benefits &amp; Compliance handled by us</span></li>
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>Best for <strong>Scaling Fast</strong></span></li>
            </ul>
            <a href="#contact" className="btn btn-primary">Book a call</a>
          </article>
          <article className="c-model c-model-feature">
            <header>
              <div className="mono c-model-tag">RECRUITING &amp; MATCHING</div>
              <h3>Recruiting &amp; Matching</h3>
            </header>
            <ul className="c-model-list">
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>Pre-vetted engineers (by engineers) in under 72 hours</span></li>
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>Only top-matching candidates — no irrelevant profiles</span></li>
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>60-day replacement warranty — hire with confidence</span></li>
              <li><span className="c-model-arrow" aria-hidden="true">7</span><span>Best for <strong>Long-term team building</strong></span></li>
            </ul>
            <a href="#contact" className="btn btn-accent">Talk to sales</a>
          </article>
        </div>
        <p className="c-models-foot">
          <span className="c-accent"><strong>Nexton is a human-powered staffing company</strong></span> specializing in LATAM Nearshore Tech Recruiting for U.S. companies.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT — companies form
   ============================================================ */
function CompaniesContact() {
  const [data, setData] = useC({ name: "", company: "", email: "", roles: "1–3", urgency: "Within 30 days", note: "" });
  const [done, setDone] = useC(false);
  const u = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <section className="section c-contact" id="contact">
      <div className="section-inner">
        <div className="c-contact-grid">
          <div>
            <h2 className="h-section">
              Tell us what you're hiring for.
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              30 minutes with a Nexton partner. We'll review your role, scope a candidate sprint, and have your first shortlist in your inbox within a week.
            </p>
            <ul className="c-contact-meta">
              <li><span className="mono c-key2">SLA</span> Shortlist in 7 days</li>
              <li><span className="mono c-key2">FEE</span> Pay only on hire</li>
              <li><span className="mono c-key2">GUARANTEE</span> 90-day replacement</li>
            </ul>
          </div>

          <form className="c-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            {done ? (
              <div className="c-form-thanks">
                <div className="mono" style={{ color: "var(--accent-deep)", letterSpacing: "0.1em", fontSize: 11 }}>● RECEIVED</div>
                <h3>Thanks, {data.name.split(" ")[0] || "there"}.</h3>
                <p>A partner from Nexton will reach out to <span className="mono">{data.email}</span> within one business day to schedule the intake call.</p>
              </div>
            ) : (
              <>
                <div className="c-form-row">
                  <label><span>Your name</span><input required value={data.name} onChange={u("name")} placeholder="Jane Doe" /></label>
                  <label><span>Company</span><input required value={data.company} onChange={u("company")} placeholder="Acme, Inc." /></label>
                </div>
                <label><span>Work email</span><input required type="email" value={data.email} onChange={u("email")} placeholder="jane@acme.com" /></label>
                <div className="c-form-row">
                  <label><span># of open roles</span>
                    <select value={data.roles} onChange={u("roles")}>
                      <option>1–3</option><option>4–10</option><option>10–25</option><option>25+</option>
                    </select>
                  </label>
                  <label><span>Urgency</span>
                    <select value={data.urgency} onChange={u("urgency")}>
                      <option>This week</option><option>Within 30 days</option><option>Within 90 days</option><option>Just exploring</option>
                    </select>
                  </label>
                </div>
                <label><span>Tell us about the role(s)</span>
                  <textarea rows="3" value={data.note} onChange={u("note")} placeholder="Stack, seniority, team size, anything else we should know…"></textarea>
                </label>
                <button className="btn btn-accent c-form-submit" type="submit">
                  Book intake call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APP
   ============================================================ */
function CompaniesApp() {
  const [tweaks, setTweak] = useTweaks(COMPANIES_DEFAULTS);
  const cssVars = { "--accent": tweaks.accent };
  const fontMap = {
    "Roboto": "'Roboto', system-ui, sans-serif",
    "Roboto Condensed": "'Roboto Condensed', system-ui, sans-serif",
  };
  if (fontMap[tweaks.headingFont]) cssVars["--font-sans"] = fontMap[tweaks.headingFont];
  const displayMap = {
    "Oswald": "'Oswald', sans-serif",
    "Bebas Neue": "'Bebas Neue', sans-serif",
    "Anton": "'Anton', sans-serif",
  };
  if (displayMap[tweaks.displayFont]) cssVars["--font-display"] = displayMap[tweaks.displayFont];

  return (
    <div className={`companies-page density-${tweaks.density}`} style={cssVars}>
      <NextonNav active="companies" />
      <CompaniesHero />
      <CompaniesLogos />
      <CaseStudies />
      <HowItWorks />
      <Models />
      <CompaniesContact />
      <NextonFooter />

      <TweaksPanel title="Tweaks" defaultOpen={false}>
        <TweakSection title="Accent">
          <TweakColor label="Accent color" value={tweaks.accent} onChange={(v) => setTweak("accent", v)} />
        </TweakSection>
        <TweakSection title="Type">
          <TweakSelect label="Body font" value={tweaks.headingFont}
            options={["Roboto", "Roboto Condensed"]}
            onChange={(v) => setTweak("headingFont", v)} />
          <TweakSelect label="Display font" value={tweaks.displayFont}
            options={["Oswald", "Bebas Neue", "Anton"]}
            onChange={(v) => setTweak("displayFont", v)} />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakRadio label="Density" value={tweaks.density}
            options={["tight", "regular", "comfy"]}
            onChange={(v) => setTweak("density", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

window.CompaniesApp = CompaniesApp;
