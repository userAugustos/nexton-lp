import { Link } from "react-router";
import TransitionLink from "./TransitionLink";
import "./Nav.css";

export function NextonNav({ active = "talent", dark = false }) {
  const ctaHref = active === "talent" ? "#apply" : "#contact";
  const ctaLabel = active === "talent" ? "Apply" : "Hire engineers";

  return (
    <header className={`nx-nav ${dark ? "dark" : ""}`}>
      <div className="nx-nav-inner">
        <TransitionLink to="/talent" className="nx-logo" aria-label="Nexton">
          <img
            src={dark ? "/Nexton/NextonLogo.svg" : "/Nexton/NextonLogoDark.svg"}
            alt="Nexton"
            className="nx-logo-img"
          />
        </TransitionLink>

        <nav className="nx-toggle" data-active={active} aria-label="Audience">
          <span className="nx-toggle-thumb" aria-hidden="true" />
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
          <span className="nx-cta-text" key={active}>
            {ctaLabel}
          </span>
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
          <Link to="/" aria-label="Nexton home">
            <img
              src="/Nexton/NextonLogo.svg"
              alt="Nexton Logo"
              loading="lazy"
              className="nx-footer-logo"
            />
          </Link>
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
              <a href="https://nexton.dev/about" target="_blank" rel="noopener noreferrer">
                Who we are
              </a>
            </li>
            <li>
              <Link to="/">For companies</Link>
            </li>
            <li>
              <a href="https://nexton.dev/careers" target="_blank" rel="noopener noreferrer">
                Careers at Nexton
              </a>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
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
