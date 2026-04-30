import FaultyTerminal from "@/components/FaultyTerminal/FaultyTerminal";

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="6.5" fill="var(--positive)" opacity="0.15" />
      <path
        d="M3.5 6.8l2 2 4-4.5"
        stroke="var(--positive)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Match({ name, stage, pct }) {
  return (
    <div className="t-match">
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{name}</div>
        <div className="mono" style={{ fontSize: 11, color: "var(--navy-600)", marginTop: 2 }}>
          {stage}
        </div>
      </div>
      <div className="t-pct">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="14" stroke="var(--navy-200)" strokeWidth="3" fill="none" />
          <circle
            cx="18"
            cy="18"
            r="14"
            stroke="var(--navy-600)"
            strokeWidth="3"
            fill="none"
            strokeDasharray={`${(pct / 100) * 88} 88`}
            strokeLinecap="round"
            transform="rotate(-90 18 18)"
          />
        </svg>
        <span className="mono">{pct}</span>
      </div>
    </div>
  );
}

export default function TalentHero() {
  return (
    <section className="t-hero">
      <div className="t-hero-bg" aria-hidden="true">
        <FaultyTerminal
          scale={3}
          digitSize={1.8}
          timeScale={0.5}
          scanlineIntensity={0.1}
          glitchAmount={2}
          flickerAmount={1.1}
          noiseAmp={0.9}
          chromaticAberration={0}
          dither={0}
          curvature={0.15}
          tint="#4372ff"
          mouseReact={false}
          mouseStrength={0.5}
          brightness={0.6}
        />
      </div>
      <div className="t-hero-grid">
        <div className="t-hero-copy">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="t-pulse"></span> Now placing 200+ engineers · LATAM → US
          </div>
          <h1 className="h-display">
            Built in <span className="h-display-serif">Latin America.</span>
            <br />
            Hired by the best <span className="h-display-serif">U.S. teams.</span>
          </h1>
          <p className="lede" style={{ marginTop: 20 }}>
            Nexton matches senior engineers from LATAM with long-term remote roles at the U.S.
            companies you actually want to work for. Engineers vet engineers. No churn-and-burn.
          </p>
          <div className="t-hero-cta">
            <a href="#apply" className="btn btn-primary">
              Apply to the network
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
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
            <span className="mono" style={{ fontSize: 11, color: "var(--navy-500)" }}>
              // candidate.json
            </span>
            <div className="t-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className="t-card-body">
            <div className="t-avatar">
              <div className="t-avatar-img" aria-hidden="true">
                <svg viewBox="0 0 80 80" width="64" height="64">
                  <defs>
                    <pattern
                      id="ph1"
                      patternUnits="userSpaceOnUse"
                      width="6"
                      height="6"
                      patternTransform="rotate(45)"
                    >
                      <line x1="0" y1="0" x2="0" y2="6" stroke="var(--cream-300)" strokeWidth="2" />
                    </pattern>
                  </defs>
                  <rect width="80" height="80" fill="var(--cream-200)" />
                  <rect width="80" height="80" fill="url(#ph1)" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: "-0.01em" }}>
                  Sofía R.
                </div>
                <div className="mono" style={{ fontSize: 12, color: "var(--navy-600)" }}>
                  SR. BACKEND · BUENOS AIRES, AR
                </div>
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
                <span
                  className="mono"
                  style={{ fontSize: 11, color: "var(--navy-600)", letterSpacing: "0.1em" }}
                >
                  3 LIVE MATCHES
                </span>
                <span className="mono" style={{ fontSize: 11, color: "var(--positive)" }}>
                  ● UPDATED 2M AGO
                </span>
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
