"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !dotRef.current) return;

    // Looping vertical motion with opacity fade
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "sine.inOut" },
    });

    tl.to(dotRef.current, {
      y: 8,
      opacity: 0.3,
      duration: 0.7,
    }).to(dotRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      aria-hidden="true"
    >
      {/* Scroll text */}
      <p className="text-foreground/60 text-sm tracking-wide">Scroll down</p>

      {/* Animated dot/line indicator */}
      <div
        ref={dotRef}
        className="w-[2px] h-8 bg-gradient-to-b from-foreground/40 to-transparent rounded-full"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />
    </div>
  );
}
