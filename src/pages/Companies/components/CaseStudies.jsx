import { useState } from "react";
import { useCarousel } from "../hooks/useCarousel";
import { TESTIMONIALS } from "@/data/testimonials";
import LinkedInIcon from "@/components/LinkedInIcon";

function Avatar({ name, image, hue }) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (image && !errored) {
    return (
      <img
        src={image}
        alt={name}
        loading="lazy"
        onError={() => setErrored(true)}
        className="c-tavatar-img"
      />
    );
  }

  return (
    <div
      className="c-tavatar"
      style={{
        background: `radial-gradient(circle at 30% 30%, hsl(${hue} 70% 72%), hsl(${(hue + 40) % 360} 60% 50%))`,
      }}
    >
      <span className="mono">{initials}</span>
    </div>
  );
}

export default function CaseStudies() {
  const { active, setPaused, goTo } = useCarousel(TESTIMONIALS.length);
  const t = TESTIMONIALS[active];

  return (
    <section className="section c-cases" id="proof">
      <div className="section-inner">
        <div className="c-cases-frame">
          <img
            src={`${import.meta.env.BASE_URL}team.jpg`}
            alt="The Nexton team"
            className="c-cases-bg"
            loading="lazy"
            decoding="async"
          />

          <div
            className="c-cases-card-slot"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="c-tcard" key={t.id}>
              <div className="c-tcard-top">
                <div className="c-tclutch mono">
                  <span className="c-tclutch-lbl">Review on</span>
                  <a
                    className="c-tclutch-link"
                    href="https://clutch.co/profile/nexton#highlights"
                    target="_blank"
                    rel="noreferrer"
                    referrerPolicy="no-referrer"
                    aria-label="Review on Clutch"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}clutch.svg`}
                      alt="Clutch"
                      className="c-tclutch-img"
                    />
                  </a>
                  <span className="c-tclutch-score">4.9</span>
                  <span className="c-tclutch-stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
                      </svg>
                    ))}
                  </span>
                </div>
                <blockquote className="c-tquote">
                  <span className="c-tquote-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  {t.quote}
                  <span className="c-tquote-mark" aria-hidden="true">
                    &rdquo;
                  </span>
                </blockquote>
              </div>
              <div className="c-tcard-bot">
                <Avatar name={t.name} image={t.image} hue={t.hue} />
                <div className="c-tname-block">
                  <div className="c-tname">{t.name}</div>
                  <div className="c-tmeta">
                    {t.title} · <strong>{t.company}</strong>
                  </div>
                </div>
                <LinkedInIcon
                  href={t.linkedin}
                  label={`${t.name} on LinkedIn`}
                  size="sm"
                  className="c-tli"
                />
                <div className="c-tdots">
                  {TESTIMONIALS.map((it, i) => (
                    <button
                      key={it.id}
                      className={`c-tdot ${i === active ? "active" : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to ${it.name}'s testimonial`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="c-cases-caption">
            <h2 className="h-section c-tfooter-h">
              We've already placed <span className="c-accent">1000+ engineers</span>
            </h2>
            <p className="c-tfooter-sub">
              with our not-so-secret hand-matching process{" "}
              <em>designed by Engineers, executed by Humans</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}