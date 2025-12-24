"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollIndicator } from "./ScrollIndicator";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!bgRef.current || !sectionRef.current) return;

    // === BACKGROUND GRADIENT ANIMATION ===
    if (!prefersReducedMotion) {
      const gradient1 = bgRef.current.querySelector(".gradient-1") as HTMLElement;
      const gradient2 = bgRef.current.querySelector(".gradient-2") as HTMLElement;
      const gradient3 = bgRef.current.querySelector(".gradient-3") as HTMLElement;

      // GSAP timeline with infinite repeat - very slow, subtle animation
      const bgTl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "sine.inOut" },
      });

      // Animate gradient positions and opacity in a 25-second loop
      bgTl
        .to(
          gradient1,
          {
            x: "20%",
            y: "-15%",
            opacity: 0.3,
            duration: 12.5,
          },
          0
        )
        .to(
          gradient1,
          {
            x: "0%",
            y: "0%",
            opacity: 0.2,
            duration: 12.5,
          },
          12.5
        )
        .to(
          gradient2,
          {
            x: "-15%",
            y: "20%",
            opacity: 0.35,
            duration: 12.5,
          },
          0
        )
        .to(
          gradient2,
          {
            x: "0%",
            y: "0%",
            opacity: 0.25,
            duration: 12.5,
          },
          12.5
        )
        .to(
          gradient3,
          {
            x: "10%",
            y: "25%",
            opacity: 0.25,
            duration: 12.5,
          },
          0
        )
        .to(
          gradient3,
          {
            x: "0%",
            y: "0%",
            opacity: 0.15,
            duration: 12.5,
          },
          12.5
        );
    }

    // === FLOATING SIDE NODES ANIMATION ===
    if (!prefersReducedMotion && nodesRef.current) {
      const nodes = gsap.utils.toArray<HTMLElement>(".floating-node");

      nodes.forEach((node, index) => {
        // Each node gets unique Y float range and X drift
        const yRange = 10 + index * 1.5; // ±10px to ±14px
        const xDrift = 3 + index * 2; // Slight X variation
        const duration = 3.5 + index * 0.5; // Staggered timing

        gsap.to(node, {
          y: `+=${yRange}`,
          x: `+=${xDrift}`,
          duration: duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.4, // Natural stagger start
        });
      });
    }

    // === HERO TEXT ENTRANCE ANIMATIONS ===
    const entranceTl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    if (prefersReducedMotion) {
      // If reduced motion, just fade in without movement
      entranceTl
        .fromTo(headlineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0)
        .fromTo(subheadingRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.1)
        .fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.2);
    } else {
      // Full entrance animation: fade + slide up
      entranceTl
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          0
        )
        .fromTo(
          subheadingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.15
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.3
        );
    }

    // === SCROLL-BASED EXIT ANIMATIONS (ScrollTrigger) ===
    if (!prefersReducedMotion) {
      const scrollTriggers: ScrollTrigger[] = [];

      // Hero headline: moves up and fades out on scroll
      const headlineST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=60vh",
        scrub: 1,
        onUpdate: (self) => {
          if (headlineRef.current) {
            gsap.to(headlineRef.current, {
              y: -60 * self.progress,
              opacity: 1 - self.progress * 0.7,
              duration: 0.1,
              overwrite: "auto",
            });
          }
        },
      });
      scrollTriggers.push(headlineST);

      // Subheading: similar exit
      const subheadingST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=60vh",
        scrub: 1,
        onUpdate: (self) => {
          if (subheadingRef.current) {
            gsap.to(subheadingRef.current, {
              y: -50 * self.progress,
              opacity: 1 - self.progress * 0.6,
              duration: 0.1,
              overwrite: "auto",
            });
          }
        },
      });
      scrollTriggers.push(subheadingST);

      // CTA: fades out
      const ctaST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=60vh",
        scrub: 1,
        onUpdate: (self) => {
          if (ctaRef.current) {
            gsap.to(ctaRef.current, {
              y: -40 * self.progress,
              opacity: 1 - self.progress * 0.8,
              duration: 0.1,
              overwrite: "auto",
            });
          }
        },
      });
      scrollTriggers.push(ctaST);

      // Floating nodes: drift outward and fade
      if (nodesRef.current) {
        const nodes = gsap.utils.toArray<HTMLElement>(".floating-node");

        nodes.forEach((node, index) => {
          const isLeft = index < 3;
          const driftX = isLeft ? -80 : 80;

          const nodeST = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=60vh",
            scrub: 1,
            onUpdate: (self) => {
              gsap.to(node, {
                x: `+=${driftX * self.progress}`,
                opacity: 1 - self.progress * 0.9,
                duration: 0.1,
                overwrite: "auto",
              });
            },
          });
          scrollTriggers.push(nodeST);
        });
      }

      // Background darkens slightly on scroll
      const bgDarkenST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=60vh",
        scrub: 1,
        onUpdate: (self) => {
          if (bgRef.current) {
            const overlayOpacity = self.progress * 0.3;
            bgRef.current.style.filter = `brightness(${1 - overlayOpacity})`;
          }
        },
      });
      scrollTriggers.push(bgDarkenST);

      // Cleanup function for ScrollTriggers
      return () => {
        scrollTriggers.forEach((st) => st.kill());
        gsap.killTweensOf([
          ".gradient-1",
          ".gradient-2",
          ".gradient-3",
          ".floating-node",
        ]);
        entranceTl.kill();
      };
    }

    return () => {
      gsap.killTweensOf([
        ".gradient-1",
        ".gradient-2",
        ".gradient-3",
        ".floating-node",
      ]);
      entranceTl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Gradient orb 1 - Primary blue to purple */}
        <div
          className="gradient-1 absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          style={{
            background: "var(--gradient-primary)",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
          }}
        />

        {/* Gradient orb 2 - Purple to pink */}
        <div
          className="gradient-2 absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-25"
          style={{
            background: "var(--gradient-secondary)",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
          }}
        />

        {/* Gradient orb 3 - Accent pink to orange */}
        <div
          className="gradient-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: "var(--gradient-accent)",
            transform: "translate3d(-50%, -50%, 0)",
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* Floating side nodes */}
      <div
        ref={nodesRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Left side nodes */}
        <div
          className="floating-node absolute left-[10%] top-[20%] w-3 h-3 rounded-full bg-primary/30 blur-sm"
          style={{ transform: "translate3d(0, 0, 0)" }}
        />
        <div
          className="floating-node absolute left-[5%] top-[60%] w-2 h-2 rounded-full bg-secondary/25 blur-sm"
          style={{ transform: "translate3d(0, 0, 0)" }}
        />
        <div
          className="floating-node absolute left-[15%] top-[80%] w-2.5 h-2.5 rounded-full bg-accent/20 blur-sm"
          style={{ transform: "translate3d(0, 0, 0)" }}
        />

        {/* Right side nodes */}
        <div
          className="floating-node absolute right-[8%] top-[15%] w-2.5 h-2.5 rounded-full bg-secondary/30 blur-sm"
          style={{ transform: "translate3d(0, 0, 0)" }}
        />
        <div
          className="floating-node absolute right-[12%] top-[50%] w-3 h-3 rounded-full bg-accent/25 blur-sm"
          style={{ transform: "translate3d(0, 0, 0)" }}
        />
        <div
          className="floating-node absolute right-[6%] top-[75%] w-2 h-2 rounded-full bg-primary/20 blur-sm"
          style={{ transform: "translate3d(0, 0, 0)" }}
        />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 w-full">
        {/* Main heading */}
        <div
          ref={headlineRef}
          className="h-24 w-full bg-gradient-primary rounded-lg opacity-10"
        />

        {/* Subheading */}
        <div
          ref={subheadingRef}
          className="mt-8 h-12 w-3/4 bg-gradient-secondary rounded-lg opacity-10"
        />

        {/* CTA */}
        <div
          ref={ctaRef}
          className="mt-12 h-16 w-48 bg-gradient-accent rounded-lg opacity-10"
        />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
