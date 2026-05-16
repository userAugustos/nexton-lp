const COMPANY_COUNT = 20;
const COMPANIES = Array.from({ length: COMPANY_COUNT }, (_, i) => ({
  id: i + 1,
  src: `${import.meta.env.BASE_URL}companies/company_${i + 1}.svg`,
}));

export default function CompaniesLogos() {
  const reel = [...COMPANIES, ...COMPANIES];

  return (
    <section className="c-logos">
      <div className="section-inner">
        <div className="c-logos-head mono">
          <span>—— Trusted by engineering teams at 300+ US companies</span>
        </div>
      </div>
      <div className="c-logos-reel">
        <div className="c-logos-track">
          {reel.map((c, i) => (
            <div key={`${c.id}-${i}`} className="c-logo">
              <img src={c.src} alt="" loading="lazy" decoding="async" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}