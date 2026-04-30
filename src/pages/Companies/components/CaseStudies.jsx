import { useCarousel } from "../hooks/useCarousel";

const QUOTES = [
  {
    quote:
      "We could actually grow an entire unit out there with the foundation of knowing we'll find the right people through Nexton at our side.",
    name: "Josh Schachter",
    title: "CEO",
    company: "UpdateAI",
    hue: 12,
  },
  {
    quote:
      "Nexton sent us four senior engineers in six weeks after agencies wasted five months. The vetting bar is genuinely the highest I've seen — we've kept every single hire.",
    name: "Maya Ellington",
    title: "COO",
    company: "Verdant Climate",
    hue: 158,
  },
  {
    quote:
      "They handled sourcing, contracts, payroll, and equipment across five countries. I have one point of contact instead of five vendors and our LATAM team ships before SF wakes up.",
    name: "Daniel Park",
    title: "VP Engineering",
    company: "Loopstack",
    hue: 220,
  },
  {
    quote:
      "Our shortlist showed up with full vetting transcripts and live coding recordings. Our interview loop went from eight rounds to four and we still raised the bar.",
    name: "Priya Raman",
    title: "Head of Talent",
    company: "Northwind Health",
    hue: 290,
  },
  {
    quote:
      "We've made twelve hires through Nexton across two years. Eleven are still on the team. That retention number alone is worth the partnership.",
    name: "Marco Beltrán",
    title: "CTO",
    company: "Ledgerlane",
    hue: 38,
  },
  {
    quote:
      "Direct calendar links, structured rubrics, transparent pricing. It's the only hiring partner I recommend without a caveat.",
    name: "Sarah Okonkwo",
    title: "CEO",
    company: "Threadlight",
    hue: 340,
  },
  {
    quote:
      "We saved roughly $2.4M against equivalent local hires in our first year. The salary delta is real but the quality delta is what made us renew.",
    name: "James Whitford",
    title: "COO",
    company: "Pacific Logic",
    hue: 195,
  },
];

export default function CaseStudies() {
  const { active, setPaused, goTo } = useCarousel(QUOTES.length);
  const q = QUOTES[active];

  return (
    <section className="section c-cases" id="proof">
      <div className="section-inner">
        <div className="c-cases-frame">
          <img
            src="/team.jpg"
            alt="The Nexton team"
            className="c-cases-bg"
            loading="lazy"
            decoding="async"
          />

          <div
            className="c-cases-card-slot"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="c-tcard" key={active}>
              <div className="c-tcard-top">
                <div className="c-tclutch mono">
                  <span className="c-tclutch-lbl">Review on</span>
                  <a
                    className="c-tclutch-link"
                    href="https://clutch.co/profile/nexton#highlights"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    aria-label="Review on Clutch"
                  >
                    <img src="/clutch.svg" alt="Clutch" className="c-tclutch-img" />
                  </a>
                  <span className="c-tclutch-score">4.9</span>
                  <span className="c-tclutch-stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
                      </svg>
                    ))}
                  </span>
                </div>
                <blockquote className="c-tquote">
                  <span className="c-tquote-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  {q.quote}
                  <span className="c-tquote-mark" aria-hidden="true">
                    &rdquo;
                  </span>
                </blockquote>
              </div>
              <div className="c-tcard-bot">
                <div
                  className="c-tavatar"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, hsl(${q.hue} 70% 72%), hsl(${(q.hue + 40) % 360} 60% 50%))`,
                  }}
                >
                  <span className="mono">
                    {q.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="c-tname">{q.name}</div>
                <div className="c-tmeta">
                  {q.title} · <strong>{q.company}</strong>
                </div>
                <div className="c-tdots">
                  {QUOTES.map((_, i) => (
                    <button
                      key={i}
                      className={`c-tdot ${i === active ? "active" : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="c-cases-caption">
            <h2 className="h-section c-tfooter-h">
              We've already placed <span className="c-accent">1000+ engineers</span>
            </h2>
            <p className="c-tfooter-sub">
              with our not-so-secret hand-matching process{" "}
              <em>designed by Engineers, executed by Humans</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
