import { useState } from "react";

const STEPS = [
  {
    week: "Step 1",
    title: "Apply & connect with us",
    body: "Tell us about you — your stack, your story, what you're looking for next. A real human reads every application. We want to know you, not just your résumé.",
    stat: "1:1",
    statLbl: "a real talent partner reads every application",
  },
  {
    week: "Step 2",
    title: "Engage with a Nexton Engineer",
    body: "You'll meet a senior engineer from our network for a technical chat — part screen, part conversation. Engineers vetting engineers means feedback that actually helps you grow.",
    stat: "100%",
    statLbl: "every candidate gets written feedback, pass or not",
  },
  {
    week: "Step 3",
    title: "Meet companies",
    body: "We hand-pick a shortlist of U.S. companies that fit your skills, goals, and comp targets. You get a custom prep doc and a debrief on each team before any intro call.",
    stat: "3.4×",
    statLbl: "higher pass-rate vs. applying solo, per our 2025 cohort",
  },
  {
    week: "Step 4",
    title: "Happy onboarding!",
    body: "When the offer comes in, we share live comp benchmarks and run negotiation with you. We handle payroll, equipment and contracts so day one is just shipping — with a team that already feels like home.",
    stat: "+22%",
    statLbl: "average comp lift after Nexton-led negotiation",
  },
];

export default function TalentProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="section t-process" id="process">
      <div className="section-inner">
        <div className="section-head section-head-flush">
          <h2 className="h-section">
            We want to <span className="h-display-serif">know you,</span>
            <br />
            we want to link you to the <span className="h-display-serif">perfect fit.</span>
          </h2>
        </div>

        <div className="t-process-grid">
          <div className="t-process-rail-wrap">
            <ol className="t-process-rail">
              {STEPS.map((s, i) => (
                <li key={s.week}>
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
              <p>
                We value and respect your time. The process is easy and straightforward — you'll
                proceed only if we consider it's worthy for both of us.
              </p>
            </div>
          </div>

          <div className="t-process-detail" key={active}>
            <div
              className="mono"
              style={{ fontSize: 11, color: "var(--navy-600)", letterSpacing: "0.12em" }}
            >
              STEP 0{active + 1} / 04
            </div>
            <h3 className="t-process-title">{STEPS[active].title}</h3>
            <p className="t-process-body">{STEPS[active].body}</p>
            <div className="t-process-stat">
              <div className="t-stat-num">{STEPS[active].stat}</div>
              <div className="t-stat-lbl">{STEPS[active].statLbl}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
