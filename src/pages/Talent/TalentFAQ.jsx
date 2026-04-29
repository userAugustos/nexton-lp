import { useAccordion } from "@/hooks/useAccordion";

const ITEMS = [
  {
    q: "Do I need to be in a specific country in LATAM?",
    a: "Nope. We place engineers from across Latin America — Argentina, Brazil, Colombia, Mexico, Chile, Uruguay, Peru, Costa Rica, and beyond. As long as you can work in the EST–PST overlap window, we can find roles for you.",
  },
  {
    q: "What seniority levels do you place?",
    a: "Mid (4+ yrs) through Staff/Principal. Most of our open roles are senior-and-up. We occasionally place exceptional mid-level engineers, but we are not a juniors-or-bootcamp-grads platform.",
  },
  {
    q: "Do I keep my taxes / payroll situation in my country?",
    a: "Yes. You sign a long-term contractor or EOR (employer-of-record) agreement, depending on the company. We handle the paperwork on both sides and pay you in USD to a method that works for you (Wise, Deel, Payoneer, local bank).",
  },
  {
    q: "Is this a recruiting agency, a job board, or staff augmentation?",
    a: "Closest to engineer-led recruiting. We're not a job board — every match is hand-picked. We're not a typical staff-aug shop — we focus on long-term, full-time roles where you become a real member of the team. Some companies do hire via a staff-aug structure initially, but the goal is always long-term.",
  },
  {
    q: "What does Nexton cost the engineer?",
    a: "Zero. Always. Companies pay us. Coaching, interview prep, contract review, negotiation — all free for you, forever.",
  },
  {
    q: "What if I don't pass your technical screen?",
    a: "We give you specific, written feedback and tell you what to work on. You can re-apply in 6 months. We'd rather invest in your growth than ghost you.",
  },
];

export default function TalentFAQ() {
  const { open, toggle } = useAccordion(0);

  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <h2 className="h-section" style={{ marginBottom: 56 }}>
          Real questions, <span className="h-display-serif">real answers.</span>
        </h2>

        <ul className="t-faq">
          {ITEMS.map((it, i) => (
            <li key={it.q} className={open === i ? "open" : ""}>
              <button onClick={() => toggle(i)}>
                <span>{it.q}</span>
                <span className="t-faq-sign">{open === i ? "−" : "+"}</span>
              </button>
              <div className="t-faq-a">
                <p>{it.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
