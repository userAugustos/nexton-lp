const OFFERS = [
  {
    icon: "compass",
    title: "Career coaching, not job ads",
    body: "A dedicated talent partner who's actually placed engineers. They map where you are now to where you want to be in 2 years — then find the role that gets you there.",
    detail: "1:1 coaching · resume rewrites · negotiation prep",
  },
  {
    icon: "code",
    title: "Interview prep with real engineers",
    body: "We run mock systems-design and coding loops with senior engineers from our network. They'll tell you exactly what U.S. interviewers are listening for.",
    detail: "live mocks · feedback loops · company-specific drills",
  },
  {
    icon: "scale",
    title: "Salary intel, told straight",
    body: "We share real offer ranges from companies in our network — by stack, seniority, and timezone. No more guessing what a senior backend role pays in 2026.",
    detail: "live benchmarks · offer review · counter-offer support",
  },
  {
    icon: "anchor",
    title: "Long-term roles, never gigs",
    body: "Every role we present is a full-time, long-tenure position with health benefits, equity, and actual career ladders. No staff-aug shuffle. No 3-month rolls.",
    detail: "FTE only · benefits · equity · path to senior+",
  },
];

function OfferIcon({ kind }) {
  const stroke = "var(--navy-1000)";
  const acc = "var(--navy-600)";
  const wrap = (children) => (
    <div className="t-offer-icon">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {children}
      </svg>
    </div>
  );
  switch (kind) {
    case "compass":
      return wrap(
        <g>
          <circle cx="16" cy="16" r="12" stroke={stroke} strokeWidth="1.5" />
          <path
            d="M16 8v3M16 21v3M8 16h3M21 16h3"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 20l3-6 5-2-3 6-5 2z"
            fill={acc}
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>,
      );
    case "code":
      return wrap(
        <g>
          <rect x="3" y="6" width="26" height="20" rx="3" stroke={stroke} strokeWidth="1.5" />
          <path
            d="M11 14l-3 2 3 2M21 14l3 2-3 2M17 12l-2 8"
            stroke={acc}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>,
      );
    case "scale":
      return wrap(
        <g>
          <path
            d="M16 5v22M5 11h22M9 11l-3 8h6l-3-8zM23 11l-3 8h6l-3-8z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="19" r="1.5" fill={acc} />
          <circle cx="23" cy="19" r="1.5" fill={acc} />
        </g>,
      );
    case "anchor":
      return wrap(
        <g>
          <circle cx="16" cy="9" r="3" stroke={stroke} strokeWidth="1.5" />
          <path
            d="M16 12v15M11 14h10M7 21c0 4 4 6 9 6s9-2 9-6"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="16" cy="27" r="2" fill={acc} />
        </g>,
      );
    default:
      return null;
  }
}

export default function WhatWeOffer() {
  return (
    <section className="section" id="offer">
      <div className="section-inner">
        <div className="section-head section-head-flush">
          <h2 className="h-section">
            Most platforms list jobs.{" "}
            <span className="h-display-serif">We invest in your career.</span>
          </h2>
        </div>

        <div className="t-offer-grid">
          {OFFERS.map((o, i) => (
            <article key={o.icon} className="t-offer">
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
