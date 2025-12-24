import { gsap } from "gsap";

/**
 * Premium micro-interactions for buttons and interactive elements
 * Fast, subtle, no jitter - classy premium feel
 */

export const microInteractions = {
  /**
   * Apply hover micro-interaction to a button/link element
   * Subtle scale + glow effect on hover
   */
  button: (element: HTMLElement) => {
    const onEnter = () => {
      gsap.to(element, {
        scale: 1.02,
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        scale: 1,
        boxShadow: "0 0 0px rgba(59, 130, 246, 0)",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const onPress = () => {
      gsap.to(element, {
        scale: 0.98,
        duration: 0.1,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(element, {
            scale: 1.02,
            duration: 0.15,
            ease: "power2.out",
          });
        },
      });
    };

    element.addEventListener("mouseenter", onEnter);
    element.addEventListener("mouseleave", onLeave);
    element.addEventListener("mousedown", onPress);

    // Cleanup function
    return () => {
      element.removeEventListener("mouseenter", onEnter);
      element.removeEventListener("mouseleave", onLeave);
      element.removeEventListener("mousedown", onPress);
      gsap.killTweensOf(element);
    };
  },

  /**
   * Apply hover micro-interaction to nav items
   * Subtle scale only, lighter glow
   */
  navItem: (element: HTMLElement) => {
    const onEnter = () => {
      gsap.to(element, {
        scale: 1.02,
        opacity: 1,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        scale: 1,
        opacity: 0.9,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", onEnter);
    element.addEventListener("mouseleave", onLeave);

    // Cleanup function
    return () => {
      element.removeEventListener("mouseenter", onEnter);
      element.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(element);
    };
  },

  /**
   * Apply magnetic cursor effect to elements
   * Element subtly follows cursor when nearby
   */
  magnetic: (element: HTMLElement, strength: number = 0.3) => {
    const onMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    // Cleanup function
    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(element);
    };
  },
};

/**
 * React hook for applying micro-interactions
 * Usage in component:
 *
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * useMicroInteraction(buttonRef, 'button');
 */
export function useMicroInteraction(
  ref: React.RefObject<HTMLElement>,
  type: keyof typeof microInteractions,
  options?: { strength?: number }
) {
  if (typeof window === "undefined") return;

  const element = ref.current;
  if (!element) return;

  // Check for reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  // Apply interaction
  if (type === "magnetic" && options?.strength !== undefined) {
    return microInteractions[type](element, options.strength);
  } else if (type !== "magnetic") {
    return microInteractions[type](element);
  }
}
