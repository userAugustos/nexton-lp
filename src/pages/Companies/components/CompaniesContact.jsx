import { useFormState } from "@/hooks/useFormState";

const INITIAL = {
  name: "",
  company: "",
  email: "",
  roles: "1–3",
  urgency: "Within 30 days",
  note: "",
};

export default function CompaniesContact() {
  const { data, submitted, update, submit } = useFormState(INITIAL);

  return (
    <section className="section c-contact" id="contact">
      <div className="section-inner">
        <div className="c-contact-grid">
          <div>
            <h2 className="h-section">Tell us what you're hiring for.</h2>
            <p className="lede" style={{ marginTop: 24 }}>
              30 minutes with a Nexton partner. We'll review your role, scope a candidate sprint,
              and have your first shortlist in your inbox within a week.
            </p>
            <ul className="c-contact-meta">
              <li>
                <span className="mono c-key2">SLA</span> Shortlist in 7 days
              </li>
              <li>
                <span className="mono c-key2">FEE</span> Pay only on hire
              </li>
              <li>
                <span className="mono c-key2">GUARANTEE</span> 90-day replacement
              </li>
            </ul>
          </div>

          <form className="c-form" onSubmit={submit}>
            {submitted ? (
              <div className="c-form-thanks">
                <div
                  className="mono"
                  style={{ color: "var(--accent-deep)", letterSpacing: "0.1em", fontSize: 11 }}
                >
                  ● RECEIVED
                </div>
                <h3>Thanks, {data.name.split(" ")[0] || "there"}.</h3>
                <p>
                  A partner from Nexton will reach out to <span className="mono">{data.email}</span>{" "}
                  within one business day to schedule the intake call.
                </p>
              </div>
            ) : (
              <>
                <div className="c-form-row">
                  <label>
                    <span>Your name</span>
                    <input
                      required
                      value={data.name}
                      onChange={update("name")}
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label>
                    <span>Company</span>
                    <input
                      required
                      value={data.company}
                      onChange={update("company")}
                      placeholder="Acme, Inc."
                    />
                  </label>
                </div>
                <label>
                  <span>Work email</span>
                  <input
                    required
                    type="email"
                    value={data.email}
                    onChange={update("email")}
                    placeholder="jane@acme.com"
                  />
                </label>
                <div className="c-form-row">
                  <label>
                    <span># of open roles</span>
                    <select value={data.roles} onChange={update("roles")}>
                      <option>1–3</option>
                      <option>4–10</option>
                      <option>10–25</option>
                      <option>25+</option>
                    </select>
                  </label>
                  <label>
                    <span>Urgency</span>
                    <select value={data.urgency} onChange={update("urgency")}>
                      <option>This week</option>
                      <option>Within 30 days</option>
                      <option>Within 90 days</option>
                      <option>Just exploring</option>
                    </select>
                  </label>
                </div>
                <label>
                  <span>Tell us about the role(s)</span>
                  <textarea
                    rows="3"
                    value={data.note}
                    onChange={update("note")}
                    placeholder="Stack, seniority, team size, anything else we should know…"
                  ></textarea>
                </label>
                <button className="btn btn-accent c-form-submit" type="submit">
                  Book intake call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
