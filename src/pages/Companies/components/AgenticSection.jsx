const RUBRIC_ROWS = [
  {
    skill: "AGENT HARNESSES",
    desc: "Building & debugging Claude Code / Cursor / Devin workflows",
  },
  {
    skill: "EVALS & TESTING",
    desc: "Writing offline + online evals for agentic systems",
  },
  {
    skill: "MCP & TOOLS",
    desc: "Designing tool surfaces, MCP servers, structured outputs",
  },
  {
    skill: "OBSERVABILITY",
    desc: "Tracing, replay, cost & latency budgeting",
  },
  {
    skill: "REVIEW LITERACY",
    desc: "Reading AI-authored diffs critically — knowing when to override",
  },
  {
    skill: "HUMAN-IN-LOOP UX",
    desc: "Designing approvals, fallbacks, and graceful degradation",
  },
];

function RubricCheck() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="c-rubric-check"
    >
      <circle cx="9" cy="9" r="9" fill="var(--accent)" opacity="0.22" />
      <path
        d="M5 9l2.5 2.5 5.5-5"
        stroke="var(--accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AgenticSection() {
  return (
    <section className="section c-agentic">
      <div className="section-inner">
        <div className="c-agentic-copy">
          <div className="eyebrow c-agentic-eyebrow" style={{ marginBottom: 20 }}>
            <span className="c-agentic-dot" aria-hidden="true">●</span>
            {" "}ENGINEERED FOR THE AGENTIC ERA
          </div>
          <h2 className="h-section c-agentic-h2">
            We hire engineers who ship{" "}
            <span className="c-agentic-accent">3× faster with agents.</span>
          </h2>
          <p className="c-agentic-body">
            The bar for a senior engineer changed in 2025. Writing code is table-stakes — the work
            is now{" "}
            <strong>
              directing agents, reading their output critically, and owning the system end-to-end.
            </strong>
            {" "}We screen every candidate on exactly that.
          </p>
        </div>

        <div className="c-agentic-grid">
          <div className="c-agentic-stats">
            <div className="c-agentic-stat">
              <div className="c-agentic-num c-agentic-num--accent">3.2×</div>
              <div className="c-agentic-lbl">
                avg. PR throughput vs. pre-agent baseline, per our 2025 cohort
              </div>
            </div>
            <div className="c-agentic-stat">
              <div className="c-agentic-num">100%</div>
              <div className="c-agentic-lbl">
                of new hires complete a live agent-driven coding session before joining the network
              </div>
            </div>
          </div>

          <div className="c-rubric">
            <div className="c-rubric-chrome">
              <span className="mono c-rubric-chrome-name">// vetting-rubric.md</span>
              <div className="c-rubric-dots" aria-hidden="true">
                <span className="c-rubric-dot" />
                <span className="c-rubric-dot" />
                <span className="c-rubric-dot" />
              </div>
            </div>
            <div className="c-rubric-body">
              <div className="mono c-rubric-title">
                NEXTON VETTING RUBRIC — AGENTIC SKILLS v3.2
              </div>
              <div className="c-rubric-rows">
                {RUBRIC_ROWS.map((r) => (
                  <div key={r.skill} className="c-rubric-row">
                    <RubricCheck />
                    <span className="mono c-rubric-skill">{r.skill}</span>
                    <span className="c-rubric-desc">{r.desc}</span>
                  </div>
                ))}
              </div>
              <div className="mono c-rubric-footer">
                Every Nexton engineer · re-evaluated every 6 months
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
