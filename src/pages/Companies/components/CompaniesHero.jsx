function CHeroRole({ role, stack, cands, stage, days }) {
  return (
    <div className="c-role">
      <div style={{ flex: 1 }}>
        <div className="c-role-name">{role}</div>
        <div className="mono c-role-stack">{stack}</div>
      </div>
      <div className="c-role-stage">{stage}</div>
      <div className="c-role-cands">
        <strong>{cands}</strong> <span>candidates</span>
      </div>
      <div className="mono c-role-days">d+{days}</div>
    </div>
  );
}

export default function CompaniesHero() {
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
            Nexton is engineer-led recruiting for U.S. companies building remote teams in Latin
            America. We source, technically vet, and place senior engineers who plug into your team
            — same timezone, full-time, long-tenure.
          </p>
          <div className="c-hero-cta">
            <a href="#contact" className="btn btn-primary">
              Hire engineers
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a href="#proof" className="btn btn-ghost">
              See case studies
            </a>
          </div>

          <div className="c-hero-meta">
            <div>
              <div className="c-meta-num">14 days</div>
              <div className="c-meta-lbl">avg. time-to-offer</div>
            </div>
            <div>
              <div className="c-meta-num">3.2%</div>
              <div className="c-meta-lbl">vetted ratio</div>
            </div>
            <div>
              <div className="c-meta-num">94%</div>
              <div className="c-meta-lbl">retention 12mo</div>
            </div>
          </div>
        </div>

        <div className="c-hero-panel">
          <div className="c-panel-head">
            <span className="mono c-panel-key">PIPELINE / Q2 2026</span>
            <span className="mono" style={{ fontSize: 11, color: "var(--positive)" }}>
              ● LIVE
            </span>
          </div>
          <div className="c-panel-body">
            <CHeroRole
              role="Senior Backend Engineer"
              stack="Go · Postgres · k8s"
              cands={4}
              stage="On-site"
              days={11}
            />
            <CHeroRole
              role="Sr. Full-stack Engineer"
              stack="TS · React · Node"
              cands={6}
              stage="Tech screen"
              days={6}
            />
            <CHeroRole
              role="Staff Platform Engineer"
              stack="Rust · AWS · Terraform"
              cands={3}
              stage="Sourcing"
              days={3}
            />
            <CHeroRole
              role="Sr. iOS Engineer"
              stack="Swift · SwiftUI"
              cands={5}
              stage="Final round"
              days={18}
            />
          </div>
          <div className="c-panel-cta">
            <div className="c-panel-cta-text">
              <div className="c-panel-cta-title">See what a LATAM team would cost.</div>
              <div className="c-panel-cta-sub">
                Plan headcount, salary, and burn — built by engineers, not spreadsheets.
              </div>
            </div>
            <a
              className="btn btn-ghost"
              href="https://nexton.dev/calculate-team-costs"
              target="_blank"
              rel="noreferrer"
            >
              Calculate team cost
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
        </div>
      </div>
    </section>
  );
}
