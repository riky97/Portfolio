import { useEffect, useRef } from "react";

/**
 * Hook for triggering animations when elements enter the viewport.
 * Uses Intersection Observer API with CSS animations for performance.
 *
 * @param options - Configuration for IntersectionObserver
 * @returns ref to attach to the element
 *
 * @example
 * const ref = useScrollReveal();
 * return <div ref={ref} className={styles.animatedElement}>Content</div>
 */
export function useScrollReveal(
    options: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    },
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
                observer.unobserve(element);
            }
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return ref;
}
