const STEPS = [
  {
    n: "01",
    title: "Scope Definition & Calibration",
    body: "Tell us what you need. The calibration ensures alignment.",
    stat: null,
  },
  {
    n: "02",
    title: "Gatekeeping & Pre-Screening",
    body: "Hand-matching process + live interviews.",
    stat: "20+ headhunters · 100+ engineers",
  },
  {
    n: "03",
    title: "Candidate Submission",
    body: "We submit only pre-vetted matching candidates.",
    stat: "First candidates in less than 72h",
  },
  {
    n: "04",
    title: "Offer Stage & Onboarding",
    body: "We lead the offer stage and admin until talent is ready to be onboarded.",
    stat: "4–6 weeks avg to hire",
  },
];

export default function HowItWorks() {
  return (
    <section className="section c-how" id="how">
      <div className="section-inner">
        <div className="section-head section-head-flush">
          <h2 className="h-section">Four steps. No black box.</h2>
        </div>

        <ol className="c-how-grid">
          {STEPS.map((s, i) => (
            <li key={s.n} className="c-how-step">
              <div className="c-how-num mono">{s.n}</div>
              <div className="c-how-line" aria-hidden="true">
                <span></span>
                {i < STEPS.length - 1 && <span className="c-how-arrow"></span>}
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
