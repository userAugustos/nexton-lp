const LOGO_VARIANTS = [
  <svg key="0" width="22" height="22" viewBox="0 0 22 22">
    <rect
      x="3"
      y="3"
      width="16"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
    />
  </svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 22 22">
    <path d="M3 11l8-8 8 8-8 8z" stroke="currentColor" strokeWidth="1.6" fill="none" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 22 22">
    <path d="M3 18L11 4l8 14z" stroke="currentColor" strokeWidth="1.6" fill="none" />
  </svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 22 22">
    <circle cx="7" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <circle cx="15" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" fill="none" />
  </svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 22 22">
    <rect x="4" y="4" width="14" height="14" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <path d="M4 11h14M11 4v14" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="6" width="22" height="22" viewBox="0 0 22 22">
    <path d="M11 3v16M3 11h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="7" width="22" height="22" viewBox="0 0 22 22">
    <path
      d="M3 11a8 8 0 0 1 16 0M3 11a8 8 0 0 0 16 0"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
    />
  </svg>,
];

function LogoMark({ idx }) {
  return LOGO_VARIANTS[idx % LOGO_VARIANTS.length];
}

const LOGOS = [
  "Stripe",
  "Brex",
  "Ramp",
  "Linear",
  "Vercel",
  "Notion",
  "Figma",
  "Loom",
  "Mercury",
  "Modal",
  "Retool",
  "Gusto",
  "Plaid",
  "Anthropic",
  "OpenAI",
  "Replit",
];

export default function CompaniesLogos() {
  const reel = [...LOGOS, ...LOGOS];

  return (
    <section className="c-logos">
      <div className="section-inner">
        <div className="c-logos-head mono">
          <span>—— Trusted by engineering teams at 300+ US companies</span>
        </div>
      </div>
      <div className="c-logos-reel">
        <div className="c-logos-track">
          {reel.map((l, i) => (
            <div key={`${l}-${i}`} className="c-logo">
              <LogoMark idx={i} />
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
