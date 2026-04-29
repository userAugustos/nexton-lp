import { useCarousel } from "@/hooks/useCarousel";

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
  const { active, setPaused, goTo, next, prev } = useCarousel(QUOTES.length);
  const q = QUOTES[active];

  return (
    <section className="section c-cases" id="proof">
      <div className="section-inner">
        <div
          className="c-tcarousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="c-tnav c-tnav-l" onClick={prev} aria-label="Previous testimonial">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M14 4l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="c-tcard" key={active}>
            <div className="c-tcard-top">
              <div className="c-tclutch mono">
                <span className="c-tclutch-lbl">Review on</span>
                <span className="c-tclutch-mark">
                  Clut<span className="c-tclutch-c">c</span>h
                </span>
                <span className="c-tclutch-score">4.9</span>
                <span className="c-tclutch-stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
              <a className="c-tli" href="#" aria-label={`${q.name} on LinkedIn`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1-.001 5.001A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
                </svg>
              </a>
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

          <button className="c-tnav c-tnav-r" onClick={next} aria-label="Next testimonial">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M8 4l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="c-tfooter">
          <h2 className="h-section c-tfooter-h">
            We've already placed <span className="c-accent">1000+ engineers</span>
          </h2>
          <p className="c-tfooter-sub">
            with our not-so-secret hand-matching process{" "}
            <em>designed by Engineers, executed by Humans</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
