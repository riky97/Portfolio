import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

/**
 * Reveals the children of the returned ref (one level deep) with a fade + rise
 * the first time the section enters the viewport. A single IntersectionObserver
 * instance per section keeps this cheap even with many sections on the page.
 */
export function useScrollReveal<T extends HTMLElement>(options?: { targetSelector?: string }) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = options?.targetSelector
      ? root.querySelectorAll<HTMLElement>(options.targetSelector)
      : (Array.from(root.children) as HTMLElement[]);

    if (!targets.length) return;

    targets.forEach((el) => {
      el.style.opacity = "0";
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => {
        el.style.opacity = "1";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(targets, {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 700,
            delay: stagger(90),
            easing: "easeOutQuart",
          });
          obs.disconnect();
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [options?.targetSelector]);

  return ref;
}
