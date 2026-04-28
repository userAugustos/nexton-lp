/* global React */
const { useState: useNavState } = React;

function NextonNav({ active = "talent", dark = false }) {
  return (
    <header className={`nx-nav ${dark ? "dark" : ""}`}>
      <div className="nx-nav-inner">
        <a href="Talent.html" className="nx-logo">
          <span className="nx-logo-mark"></span>
          Nexton
        </a>

        <nav className="nx-toggle" aria-label="Audience">
          <a href="Companies.html" className={active === "companies" ? "active" : ""}>For Companies</a>
          <a href="Talent.html" className={active === "talent" ? "active" : ""}>For Engineers</a>
        </nav>

        <nav className="nx-nav-links" aria-label="Primary">
          <a href="#offer">Talent Advice</a>
          <a href="#blog">Blog</a>
          <a href="#about">About Us</a>
        </nav>

        <a href={active === "talent" ? "#apply" : "#contact"} className="nx-cta">
          {active === "talent" ? "Apply" : "Hire engineers"}
        </a>
      </div>
    </header>
  );
}

function NextonFooter() {
  return (
    <footer className="nx-footer">
      <div className="nx-footer-inner">
        <div>
          <div className="nx-logo" style={{ color: "white", marginBottom: 18 }}>
            <span className="nx-logo-mark"></span>
            Nexton
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, maxWidth: 360, color: "var(--navy-300)" }}>
            Engineer-led recruiting connecting Latin America's best builders with U.S. companies.
          </p>
        </div>
        <div>
          <h4>Talent Advice</h4>
          <ul>
            <li><a href="Talent.html#offer">What you get</a></li>
            <li><a href="Talent.html#process">Our process</a></li>
            <li><a href="Talent.html#faq">FAQ</a></li>
            <li><a href="Talent.html#apply">Apply</a></li>
          </ul>
        </div>
        <div>
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">For companies</a></li>
            <li><a href="#">Careers at Nexton</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="nx-footer-base">
        <span>© 2026 NEXTON LABS, INC.</span>
        <span>BUENOS AIRES · NEW YORK</span>
      </div>
    </footer>
  );
}

window.NextonNav = NextonNav;
window.NextonFooter = NextonFooter;
