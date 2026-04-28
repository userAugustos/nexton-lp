/* global React, LatamUSMap, NextonNav, NextonFooter, CompaniesLogos, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, TweakSelect */
const { useState, useEffect, useRef } = React;

const TALENT_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#337BFF",
  "headingFont": "Oswald",
  "mode": "warm",
  "density": "regular",
  "showMap": true
}/*EDITMODE-END*/;

/* ============================================================
   HERO
   ============================================================ */
function TalentHero() {
  return (
    <section className="t-hero">
      <div className="t-hero-grid">
        <div className="t-hero-copy">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="t-pulse"></span> Now placing 200+ engineers · LATAM → US
          </div>
          <h1 className="h-display">
            Built in <span className="h-display-serif">Latin America.</span><br/>
            Hired by the best <span className="h-display-serif">U.S. teams.</span>
          </h1>
          <p className="lede" style={{ marginTop: 28 }}>
            Nexton matches senior engineers from Argentina, Brazil, Colombia, Mexico
            and across LATAM with long-term remote roles at the U.S. companies you
            actually want to work for. Engineers vet engineers. No churn-and-burn.
          </p>
          <div className="t-hero-cta">
            <a href="#apply" className="btn btn-primary">
              Apply to the network
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <a href="#offer" className="btn btn-ghost">See what you get</a>
          </div>

          <div className="t-hero-meta">
            <div>
              <div className="t-meta-num">14k+</div>
              <div className="t-meta-lbl">engineers in network</div>
            </div>
            <div>
              <div className="t-meta-num">$120k</div>
              <div className="t-meta-lbl">avg. annual offer</div>
            </div>
            <div>
              <div className="t-meta-num">3.2 wks</div>
              <div className="t-meta-lbl">median time to offer</div>
            </div>
          </div>
        </div>

        <div className="t-hero-card">
          <div className="t-card-chrome">
            <span className="mono" style={{ fontSize: 11, color: "var(--navy-500)" }}>// candidate.json</span>
            <div className="t-dots"><i></i><i></i><i></i></div>
          </div>
          <div className="t-card-body">
            <div className="t-avatar">
              <div className="t-avatar-img" aria-hidden="true">
                <svg viewBox="0 0 80 80" width="64" height="64"><defs><pattern id="ph1" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="var(--cream-300)" strokeWidth="2"/></pattern></defs><rect width="80" height="80" fill="var(--cream-200)"/><rect width="80" height="80" fill="url(#ph1)"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: "-0.01em" }}>Sofía R.</div>
                <div className="mono" style={{ fontSize: 12, color: "var(--navy-600)" }}>SR. BACKEND · BUENOS AIRES, AR</div>
              </div>
              <span className="t-status">
                <span className="t-pulse"></span> Available
              </span>
            </div>

            <div className="t-card-row">
              <span className="mono t-key">stack</span>
              <div className="t-tags">
                <span className="t-tag">Go</span>
                <span className="t-tag">Postgres</span>
                <span className="t-tag">Kafka</span>
                <span className="t-tag">k8s</span>
                <span className="t-tag">+4</span>
              </div>
            </div>
            <div className="t-card-row">
              <span className="mono t-key">years</span>
              <span style={{ fontSize: 14 }}>8 yrs · ex-Mercado Libre, ex-Globant</span>
            </div>
            <div className="t-card-row">
              <span className="mono t-key">target</span>
              <span style={{ fontSize: 14 }}>$135–155k · GMT-3 / overlap with EST</span>
            </div>
            <div className="t-card-row">
              <span className="mono t-key">vetted</span>
              <span style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <Check /> System design · <Check /> Pairing · <Check /> Comms
              </span>
            </div>

            <div className="t-card-matches">
              <div className="t-match-head">
                <span className="mono" style={{ fontSize: 11, color: "var(--navy-600)", letterSpacing: "0.1em" }}>3 LIVE MATCHES</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--positive)" }}>● UPDATED 2M AGO</span>
              </div>
              <Match name="Series-B fintech" stage="On-site loop" pct={94} />
              <Match name="Climate-tech (NYC)" stage="Tech screen" pct={88} />
              <Match name="AI infra startup" stage="Intro call" pct={81} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="6.5" fill="var(--positive)" opacity="0.15"/>
      <path d="M3.5 6.8l2 2 4-4.5" stroke="var(--positive)" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function Match({ name, stage, pct }) {
  return (
    <div className="t-match">
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{name}</div>
        <div className="mono" style={{ fontSize: 11, color: "var(--navy-600)", marginTop: 2 }}>{stage}</div>
      </div>
      <div className="t-pct">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="14" stroke="var(--navy-200)" strokeWidth="3" fill="none"/>
          <circle cx="18" cy="18" r="14" stroke="var(--navy-600)" strokeWidth="3" fill="none"
            strokeDasharray={`${(pct/100)*88} 88`} strokeLinecap="round" transform="rotate(-90 18 18)"/>
        </svg>
        <span className="mono">{pct}</span>
      </div>
    </div>
  );
}

/* ============================================================
   WHAT WE OFFER
   ============================================================ */
function WhatWeOffer() {
  const offers = [
    {
      icon: "compass",
      title: "Career coaching, not job ads",
      body: "A dedicated talent partner who's actually placed engineers. They map where you are now to where you want to be in 2 years — then find the role that gets you there.",
      detail: "1:1 coaching · resume rewrites · negotiation prep"
    },
    {
      icon: "code",
      title: "Interview prep with real engineers",
      body: "We run mock systems-design and coding loops with senior engineers from our network. They'll tell you exactly what U.S. interviewers are listening for.",
      detail: "live mocks · feedback loops · company-specific drills"
    },
    {
      icon: "scale",
      title: "Salary intel, told straight",
      body: "We share real offer ranges from companies in our network — by stack, seniority, and timezone. No more guessing what a senior backend role pays in 2026.",
      detail: "live benchmarks · offer review · counter-offer support"
    },
    {
      icon: "anchor",
      title: "Long-term roles, never gigs",
      body: "Every role we present is a full-time, long-tenure position with health benefits, equity, and actual career ladders. No staff-aug shuffle. No 3-month rolls.",
      detail: "FTE only · benefits · equity · path to senior+"
    },
  ];

  return (
    <section className="section" id="offer">
      <div className="section-inner">
        <div className="section-head section-head-flush">
          <h2 className="h-section">
            Most platforms list jobs. <span className="h-display-serif">We invest in your career.</span>
          </h2>
        </div>

        <div className="t-offer-grid">
          {offers.map((o, i) => (
            <article key={i} className="t-offer">
              <div className="t-offer-num mono">0{i + 1}</div>
              <OfferIcon kind={o.icon} />
              <h3>{o.title}</h3>
              <p>{o.body}</p>
              <div className="mono t-offer-detail">{o.detail}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferIcon({ kind }) {
  const stroke = "var(--navy-1000)";
  const acc = "var(--navy-600)";
  const wrap = (children) => (
    <div className="t-offer-icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">{children}</svg>
    </div>
  );
  switch (kind) {
    case "compass": return wrap(<g><circle cx="16" cy="16" r="12" stroke={stroke} strokeWidth="1.5"/><path d="M16 8v3M16 21v3M8 16h3M21 16h3" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/><path d="M12 20l3-6 5-2-3 6-5 2z" fill={acc} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/></g>);
    case "code": return wrap(<g><rect x="3" y="6" width="26" height="20" rx="3" stroke={stroke} strokeWidth="1.5"/><path d="M11 14l-3 2 3 2M21 14l3 2-3 2M17 12l-2 8" stroke={acc} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g>);
    case "scale": return wrap(<g><path d="M16 5v22M5 11h22M9 11l-3 8h6l-3-8zM23 11l-3 8h6l-3-8z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="19" r="1.5" fill={acc}/><circle cx="23" cy="19" r="1.5" fill={acc}/></g>);
    case "anchor": return wrap(<g><circle cx="16" cy="9" r="3" stroke={stroke} strokeWidth="1.5"/><path d="M16 12v15M11 14h10M7 21c0 4 4 6 9 6s9-2 9-6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" fill="none"/><circle cx="16" cy="27" r="2" fill={acc}/></g>);
    default: return null;
  }
}

/* ============================================================
   PROCESS (Talent POV)
   ============================================================ */
function TalentProcess() {
  const [active, setActive] = useState(0);
  const steps = [
    {
      week: "Step 1",
      title: "Apply & connect with us",
      body: "Tell us about you — your stack, your story, what you're looking for next. A real human reads every application. We want to know you, not just your résumé.",
      stat: "1:1", statLbl: "a real talent partner reads every application"
    },
    {
      week: "Step 2",
      title: "Engage with a Nexton Engineer",
      body: "You'll meet a senior engineer from our network for a technical chat — part screen, part conversation. Engineers vetting engineers means feedback that actually helps you grow.",
      stat: "100%", statLbl: "every candidate gets written feedback, pass or not"
    },
    {
      week: "Step 3",
      title: "Meet companies",
      body: "We hand-pick a shortlist of U.S. companies that fit your skills, goals, and comp targets. You get a custom prep doc and a debrief on each team before any intro call.",
      stat: "3.4×", statLbl: "higher pass-rate vs. applying solo, per our 2025 cohort"
    },
    {
      week: "Step 4",
      title: "Happy onboarding!",
      body: "When the offer comes in, we share live comp benchmarks and run negotiation with you. We handle payroll, equipment and contracts so day one is just shipping — with a team that already feels like home.",
      stat: "+22%", statLbl: "average comp lift after Nexton-led negotiation"
    },
  ];

  return (
    <section className="section t-process" id="process">
      <div className="section-inner">
        <div className="section-head section-head-flush">
          <h2 className="h-section">
            We want to <span className="h-display-serif">know you,</span><br/>we want to link you to the <span className="h-display-serif">perfect fit.</span>
          </h2>
        </div>

        <div className="t-process-grid">
          <div className="t-process-rail-wrap">
            <ol className="t-process-rail">
              {steps.map((s, i) => (
                <li key={i}>
                  <button
                    className={`t-step ${active === i ? "active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="mono t-step-week">{s.week}</span>
                    <span className="t-step-title">{s.title}</span>
                    <span className="t-step-num mono">0{i + 1}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="t-process-disclaimer">
              <p>We value and respect your time. The process is easy and straightforward — you'll proceed only if we consider it's worthy for both of us.</p>
            </div>
          </div>

          <div className="t-process-detail" key={active}>
            <div className="mono" style={{ fontSize: 11, color: "var(--navy-600)", letterSpacing: "0.12em" }}>
              STEP 0{active + 1} / 04
            </div>
            <h3 className="t-process-title">{steps[active].title}</h3>
            <p className="t-process-body">{steps[active].body}</p>
            <div className="t-process-stat">
              <div className="t-stat-num">{steps[active].stat}</div>
              <div className="t-stat-lbl">{steps[active].statLbl}</div>
            </div>
          </div>
        </div>
        {/* warning moved into rail column */}
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function TalentFAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: "Do I need to be in a specific country in LATAM?",
      a: "Nope. We place engineers from across Latin America — Argentina, Brazil, Colombia, Mexico, Chile, Uruguay, Peru, Costa Rica, and beyond. As long as you can work in the EST–PST overlap window, we can find roles for you."
    },
    {
      q: "What seniority levels do you place?",
      a: "Mid (4+ yrs) through Staff/Principal. Most of our open roles are senior-and-up. We occasionally place exceptional mid-level engineers, but we are not a juniors-or-bootcamp-grads platform."
    },
    {
      q: "Do I keep my taxes / payroll situation in my country?",
      a: "Yes. You sign a long-term contractor or EOR (employer-of-record) agreement, depending on the company. We handle the paperwork on both sides and pay you in USD to a method that works for you (Wise, Deel, Payoneer, local bank)."
    },
    {
      q: "Is this a recruiting agency, a job board, or staff augmentation?",
      a: "Closest to engineer-led recruiting. We're not a job board — every match is hand-picked. We're not a typical staff-aug shop — we focus on long-term, full-time roles where you become a real member of the team. Some companies do hire via a staff-aug structure initially, but the goal is always long-term."
    },
    {
      q: "What does Nexton cost the engineer?",
      a: "Zero. Always. Companies pay us. Coaching, interview prep, contract review, negotiation — all free for you, forever."
    },
    {
      q: "What if I don't pass your technical screen?",
      a: "We give you specific, written feedback and tell you what to work on. You can re-apply in 6 months. We'd rather invest in your growth than ghost you."
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <h2 className="h-section" style={{ marginBottom: 56 }}>
          Real questions, <span className="h-display-serif">real answers.</span>
        </h2>

        <ul className="t-faq">
          {items.map((it, i) => (
            <li key={i} className={open === i ? "open" : ""}>
              <button onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="t-faq-sign">{open === i ? "−" : "+"}</span>
              </button>
              <div className="t-faq-a"><p>{it.a}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   APPLY (form)
   ============================================================ */
function ApplyForm() {
  const [data, setData] = useState({ name: "", email: "", country: "", role: "Senior Backend", years: "", github: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section t-apply" id="apply">
      <div className="section-inner">
        <div className="t-apply-grid">
          <div>
            <h2 className="h-section">
              The next role of your career <span className="h-display-serif">starts here.</span>
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              5-minute application. Real human reads it. We'll get back within 5 business days, no matter what.
            </p>
            <div className="t-apply-meta">
              <div><span className="mono t-apply-key">FREE</span> for engineers, forever</div>
              <div><span className="mono t-apply-key">5 DAYS</span> to first response</div>
              <div><span className="mono t-apply-key">USD</span> long-term contracts</div>
            </div>
          </div>

          <form className="t-form" onSubmit={submit}>
            {submitted ? (
              <div className="t-form-thanks">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="28" fill="var(--accent)" opacity="0.18"/>
                  <path d="M16 28l8 8 16-18" stroke="var(--accent-deep)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
                <h3>Got it, {data.name.split(" ")[0] || "friend"}.</h3>
                <p>We just sent a confirmation to <span className="mono">{data.email || "your inbox"}</span>. A talent partner will reach out within 5 business days.</p>
                <button className="btn btn-ghost" type="button" onClick={() => { setSubmitted(false); setData({ name: "", email: "", country: "", role: "Senior Backend", years: "", github: "" }); }}>Submit another</button>
              </div>
            ) : (
              <>
                <div className="t-form-row">
                  <label>
                    <span>Full name</span>
                    <input required value={data.name} onChange={update("name")} placeholder="Sofía Rodríguez" />
                  </label>
                  <label>
                    <span>Email</span>
                    <input required type="email" value={data.email} onChange={update("email")} placeholder="sofia@dev.ar" />
                  </label>
                </div>
                <div className="t-form-row">
                  <label>
                    <span>Country</span>
                    <select required value={data.country} onChange={update("country")}>
                      <option value="">Select country</option>
                      <option>Argentina</option>
                      <option>Brazil</option>
                      <option>Colombia</option>
                      <option>Mexico</option>
                      <option>Chile</option>
                      <option>Uruguay</option>
                      <option>Peru</option>
                      <option>Costa Rica</option>
                      <option>Other LATAM</option>
                    </select>
                  </label>
                  <label>
                    <span>Years of experience</span>
                    <input type="number" min="0" max="40" value={data.years} onChange={update("years")} placeholder="8" />
                  </label>
                </div>
                <label>
                  <span>Role / focus</span>
                  <select value={data.role} onChange={update("role")}>
                    <option>Senior Backend</option>
                    <option>Senior Frontend</option>
                    <option>Full-stack</option>
                    <option>Mobile</option>
                    <option>DevOps / Platform</option>
                    <option>Data / ML</option>
                    <option>Engineering Manager</option>
                  </select>
                </label>
                <label>
                  <span>GitHub or portfolio (optional)</span>
                  <input value={data.github} onChange={update("github")} placeholder="github.com/sofia" />
                </label>
                <button className="btn btn-accent t-form-submit" type="submit">
                  Apply to the network
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
                <div className="mono t-form-note">
                  Application takes ~5 minutes. No CV upload required at this stage.
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MAP BANNER
   ============================================================ */
function MapBanner() {
  return (
    <section className="t-map">
      <div className="section-inner">
        <div className="t-map-head t-map-head-flush">
          <p className="t-map-line">
            Engineers in <span className="t-place">14 LATAM countries.</span> Roles at U.S. companies from <span className="t-place">San Francisco</span> to <span className="t-place">New York.</span> Same hours. Same standards.
          </p>
        </div>
        <div className="t-map-canvas">
          <LatamUSMap />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APP
   ============================================================ */
function TalentApp() {
  const [tweaks, setTweak] = useTweaks(TALENT_DEFAULTS);

  // apply tweaks via CSS vars
  const cssVars = {
    "--accent": tweaks.accent,
  };

  const fontMap = {
    "Oswald": "'Oswald', sans-serif",
    "Bebas Neue": "'Bebas Neue', sans-serif",
    "Anton": "'Anton', sans-serif",
    "Roboto Condensed": "'Roboto Condensed', sans-serif",
  };
  if (fontMap[tweaks.headingFont]) {
    cssVars["--font-display"] = fontMap[tweaks.headingFont];
  }

  const bodyClass = `talent-page ${tweaks.mode === "cool" ? "mode-cool" : "mode-warm"} density-${tweaks.density}`;

  return (
    <div className={bodyClass} style={cssVars}>
      <NextonNav active="talent" />
      <TalentHero />
      <CompaniesLogos />
      {tweaks.showMap && <MapBanner />}
      <WhatWeOffer />
      <TalentProcess />
      <TalentFAQ />
      <ApplyForm />
      <NextonFooter />

      <TweaksPanel title="Tweaks" defaultOpen={false}>
        <TweakSection title="Accent">
          <TweakColor label="Accent color" value={tweaks.accent} onChange={(v) => setTweak("accent", v)} />
        </TweakSection>
        <TweakSection title="Type">
          <TweakSelect
            label="Display font"
            value={tweaks.headingFont}
            options={["Oswald", "Bebas Neue", "Anton", "Roboto Condensed"]}
            onChange={(v) => setTweak("headingFont", v)}
          />
        </TweakSection>
        <TweakSection title="Mood">
          <TweakRadio
            label="Page mood"
            value={tweaks.mode}
            options={["warm", "cool"]}
            onChange={(v) => setTweak("mode", v)}
          />
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={["tight", "regular", "comfy"]}
            onChange={(v) => setTweak("density", v)}
          />
          <TweakToggle
            label="Show map banner"
            value={tweaks.showMap}
            onChange={(v) => setTweak("showMap", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

window.TalentApp = TalentApp;
