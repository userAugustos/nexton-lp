import { Link } from "react-router";
import TransitionLink from "./TransitionLink";
import "./Nav.css";

export function NextonNav({ active = "talent", dark = false }) {
  const ctaHref = active === "talent" ? "#apply" : "#contact";
  const ctaLabel = active === "talent" ? "Apply" : "Hire engineers";

  return (
    <header className={`nx-nav ${dark ? "dark" : ""}`}>
      <div className="nx-nav-inner">
        <TransitionLink to="/talent" className="nx-logo">
          <span className="nx-logo-mark"></span>
          Nexton
        </TransitionLink>

        <nav className="nx-toggle" aria-label="Audience">
          <TransitionLink to="/" className={active === "companies" ? "active" : ""}>
            For Companies
          </TransitionLink>
          <TransitionLink to="/talent" className={active === "talent" ? "active" : ""}>
            For Engineers
          </TransitionLink>
        </nav>

        <nav className="nx-nav-links" aria-label="Primary">
          <a href="#offer">Talent Advice</a>
          <a href="#blog">Blog</a>
          <a href="#about">About Us</a>
        </nav>

        <a href={ctaHref} className="nx-cta">
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

export function NextonFooter() {
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
            <li>
              <Link to="/talent#offer">What you get</Link>
            </li>
            <li>
              <Link to="/talent#process">Our process</Link>
            </li>
            <li>
              <Link to="/talent#faq">FAQ</Link>
            </li>
            <li>
              <Link to="/talent#apply">Apply</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Who we are</a>
            </li>
            <li>
              <Link to="/">For companies</Link>
            </li>
            <li>
              <a href="#">Careers at Nexton</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
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
