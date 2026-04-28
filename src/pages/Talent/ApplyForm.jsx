import { useState } from "react";

const INITIAL = {
  name: "",
  email: "",
  country: "",
  role: "Senior Backend",
  years: "",
  github: "",
};

export default function ApplyForm() {
  const [data, setData] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section t-apply" id="apply">
      <div className="section-inner">
        <div className="t-apply-grid">
          <div>
            <h2 className="h-section">
              The next role of your career <span className="h-display-serif">starts here.</span>
            </h2>
            <p className="lede" style={{ marginTop: 24 }}>
              5-minute application. Real human reads it. We'll get back within 5 business days, no
              matter what.
            </p>
            <div className="t-apply-meta">
              <div>
                <span className="mono t-apply-key">FREE</span> for engineers, forever
              </div>
              <div>
                <span className="mono t-apply-key">5 DAYS</span> to first response
              </div>
              <div>
                <span className="mono t-apply-key">USD</span> long-term contracts
              </div>
            </div>
          </div>

          <form className="t-form" onSubmit={submit}>
            {submitted ? (
              <div className="t-form-thanks">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="28" fill="var(--accent)" opacity="0.18" />
                  <path
                    d="M16 28l8 8 16-18"
                    stroke="var(--accent-deep)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <h3>Got it, {data.name.split(" ")[0] || "friend"}.</h3>
                <p>
                  We just sent a confirmation to{" "}
                  <span className="mono">{data.email || "your inbox"}</span>. A talent partner will
                  reach out within 5 business days.
                </p>
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setData(INITIAL);
                  }}
                >
                  Submit another
                </button>
              </div>
            ) : (
              <>
                <div className="t-form-row">
                  <label>
                    <span>Full name</span>
                    <input
                      required
                      value={data.name}
                      onChange={update("name")}
                      placeholder="Sofía Rodríguez"
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      required
                      type="email"
                      value={data.email}
                      onChange={update("email")}
                      placeholder="sofia@dev.ar"
                    />
                  </label>
                </div>
                <div className="t-form-row">
                  <label>
                    <span>Country</span>
                    <select required value={data.country} onChange={update("country")}>
                      <option value="">Select country</option>
                      <option>Argentina</option>
                      <option>Brazil</option>
                      <option>Colombia</option>
                      <option>Mexico</option>
                      <option>Chile</option>
                      <option>Uruguay</option>
                      <option>Peru</option>
                      <option>Costa Rica</option>
                      <option>Other LATAM</option>
                    </select>
                  </label>
                  <label>
                    <span>Years of experience</span>
                    <input
                      type="number"
                      min="0"
                      max="40"
                      value={data.years}
                      onChange={update("years")}
                      placeholder="8"
                    />
                  </label>
                </div>
                <label>
                  <span>Role / focus</span>
                  <select value={data.role} onChange={update("role")}>
                    <option>Senior Backend</option>
                    <option>Senior Frontend</option>
                    <option>Full-stack</option>
                    <option>Mobile</option>
                    <option>DevOps / Platform</option>
                    <option>Data / ML</option>
                    <option>Engineering Manager</option>
                  </select>
                </label>
                <label>
                  <span>GitHub or portfolio (optional)</span>
                  <input
                    value={data.github}
                    onChange={update("github")}
                    placeholder="github.com/sofia"
                  />
                </label>
                <button className="btn btn-accent t-form-submit" type="submit">
                  Apply to the network
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="mono t-form-note">
                  Application takes ~5 minutes. No CV upload required at this stage.
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
