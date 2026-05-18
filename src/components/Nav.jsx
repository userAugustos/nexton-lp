import { Link } from "react-router";
import TransitionLink from "./TransitionLink";
import "./Nav.css";

export function NextonNav({ active = "talent", dark = false }) {
  const ctaHref = active === "talent" ? "#apply" : "#contact";
  const ctaLabel = active === "talent" ? "Apply" : "Hire";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[14px] backdrop-saturate-[140%] bg-(--nav-bg) border-b border-(--nav-border)">
      <div className="max-w-(--max) mx-auto px-(--gutter) py-[18px] flex items-center gap-8">
        <TransitionLink to="/" className="hidden lg:flex items-center" aria-label="Nexton">
          <img
            src={`${import.meta.env.BASE_URL}Nexton/${dark ? "NextonLogo.svg" : "NextonLogoDark.svg"}`}
            alt="Nexton"
            className="h-6 w-auto"
          />
        </TransitionLink>

        <nav
          className="relative ml-auto flex bg-(--navy-200) p-[3px] rounded-full text-[13px] font-medium isolate"
          aria-label="Audience"
        >
          <span
            className={`nx-toggle-thumb absolute top-[3px] left-[3px] bottom-[3px] w-[calc(50%-3px)] bg-(--navy-1000) rounded-full z-0 transition-transform duration-[420ms] [transition-timing-function:cubic-bezier(0.5,1.4,0.55,1)] ${active === "talent" ? "translate-x-full" : ""}`}
            aria-hidden="true"
          />
          <TransitionLink
            to="/"
            className={`relative z-10 flex-1 text-center px-[18px] py-[7px] rounded-full whitespace-nowrap transition-colors duration-[220ms] ${active === "companies" ? "text-white" : "text-(--navy-600) hover:text-(--navy-1000)"}`}
          >
            For Companies
          </TransitionLink>
          <TransitionLink
            to="/talent"
            className={`relative z-10 flex-1 text-center px-[18px] py-[7px] rounded-full whitespace-nowrap transition-colors duration-[220ms] ${active === "talent" ? "text-white" : "text-(--navy-600) hover:text-(--navy-1000)"}`}
          >
            For Engineers
          </TransitionLink>
        </nav>

        <nav className="hidden lg:flex gap-7 text-sm text-(--navy-600)" aria-label="Primary">
          <a href="#offer" className="hover:text-(--navy-1000) transition-colors">
            Talent Advice
          </a>
          <a
            href="https://blog.nexton.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--navy-1000) transition-colors"
          >
            Blog
          </a>
          <a
            href="https://nexton.dev/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--navy-1000) transition-colors"
          >
            About Us
          </a>
        </nav>

        <a
          href={ctaHref}
          className="nx-cta inline-flex items-center justify-center px-[18px] py-[9px] rounded-full bg-(--accent) text-white text-[13px] font-medium whitespace-nowrap overflow-hidden transition-[transform,background] duration-150 hover:bg-(--accent-deep) hover:-translate-y-px"
        >
          <span className="nx-cta-text inline-block" key={active}>
            {ctaLabel}
          </span>
        </a>
      </div>
    </header>
  );
}

export function NextonFooter() {
  return (
    <footer className="bg-(--navy-1000) text-(--navy-300) px-(--gutter) pt-20 pb-10">
      <div className="max-w-(--max) mx-auto grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-16">
        <div>
          <Link to="/" aria-label="Nexton home">
            <img
              src={`${import.meta.env.BASE_URL}Nexton/NextonLogo.svg`}
              alt="Nexton Logo"
              loading="lazy"
              className="w-36 h-auto mb-[18px] transition-[filter] duration-[180ms] hover:brightness-110"
            />
          </Link>
          <p className="text-sm leading-[1.55] max-w-[360px] text-(--navy-300)">
            Engineer-led recruiting connecting Latin America's best builders with U.S. companies.
          </p>
        </div>

        <div>
          <h4 className="text-white text-[13px] font-medium mb-4 tracking-[-0.01em]">
            Talent Advice
          </h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-[10px] text-sm">
            <li>
              <Link to="/talent#offer" className="hover:text-white transition-colors">
                What you get
              </Link>
            </li>
            <li>
              <Link to="/talent#process" className="hover:text-white transition-colors">
                Our process
              </Link>
            </li>
            <li>
              <Link to="/talent#faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/talent#apply" className="hover:text-white transition-colors">
                Apply
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[13px] font-medium mb-4 tracking-[-0.01em]">About Us</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-[10px] text-sm">
            <li>
              <a
                href="https://nexton.dev/about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Who we are
              </a>
            </li>
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                For companies
              </Link>
            </li>
            <li>
              <a
                href="https://nexton.dev/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Careers at Nexton
              </a>
            </li>
            <li>
              <Link to="/#contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-(--max) mx-auto mt-[60px] pt-7 border-t border-(--navy-800) flex justify-between text-xs text-(--navy-500) font-[var(--font-mono)]">
        <span>© 2026 NEXTON LABS, INC.</span>
        <span>BUENOS AIRES · NEW YORK</span>
      </div>
    </footer>
  );
}
