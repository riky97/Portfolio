import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { contact } from "../data/cv";
import "./Hero.css";

export function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!rootRef.current) return;

    const lines = rootRef.current.querySelectorAll<HTMLElement>("[data-hero-line]");
    animate(lines, {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 700,
      delay: stagger(110, { start: 150 }),
      easing: "easeOutQuart",
    });

    const path = rootRef.current.querySelector<SVGPathElement>("[data-hero-wave]");
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      animate(path, {
        strokeDashoffset: [length, 0],
        duration: 1400,
        delay: 400,
        easing: "easeInOutQuad",
      });
    }

    const dot = rootRef.current.querySelector<SVGCircleElement>("[data-hero-dot]");
    if (dot) {
      animate(dot, {
        r: [3, 6, 3],
        loop: true,
        duration: 1800,
        easing: "easeInOutSine",
      });
    }
  }, []);

  return (
    <section id="top" className="hero" ref={rootRef}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow" data-hero-line>
            status: available for opportunities
          </p>
          <h1 className="hero__name" data-hero-line>
            {contact.name}
          </h1>
          <p className="hero__role" data-hero-line>
            {contact.role} — building reliable, data-driven front ends.
          </p>
          <p className="hero__pitch" data-hero-line>
            Three years designing React interfaces and monitoring systems for
            large-scale platforms, from ESA data pipelines to banking
            microfrontends.
          </p>
          <div className="hero__cta" data-hero-line>
            <a className="button button--primary" href="/cv.pdf" download>
              Download CV
            </a>
            <a className="button button--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__signal" aria-hidden="true">
          <svg viewBox="0 0 320 240" className="hero__signal-svg">
            <circle cx="160" cy="120" r="40" className="hero__ring" />
            <circle cx="160" cy="120" r="70" className="hero__ring hero__ring--dim" />
            <circle cx="160" cy="120" r="100" className="hero__ring hero__ring--dimmer" />
            <path
              data-hero-wave
              d="M20 150 L70 150 L90 90 L120 190 L150 60 L180 170 L210 120 L240 140 L300 140"
              className="hero__wave"
            />
            <circle data-hero-dot cx="160" cy="120" r="4" className="hero__dot" />
          </svg>
        </div>
      </div>
    </section>
  );
}
