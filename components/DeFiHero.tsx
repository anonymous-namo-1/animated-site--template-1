"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollIndicator } from "./ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

interface AssetCardProps {
  name: string;
  value: string;
  position: string;
  delay: number;
}

function AssetCard({ name, value, position, delay }: AssetCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !cardRef.current) return;

    // Entrance animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: "back.out(1.2)",
      }
    );

    // Floating animation
    gsap.to(cardRef.current, {
      y: "+=15",
      duration: 2.5 + delay * 0.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Hover effect
    const card = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`asset-card absolute ${position} cursor-pointer`}
      style={{ transform: "translate3d(0, 0, 0)", willChange: "transform" }}
    >
      {/* GLASSMORPHISM UI - Premium glass card */}
      <div
        className="relative rounded-2xl px-4 py-3 transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-white/80" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{name}</p>
            <p className="text-xs text-foreground/60">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeFiHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fogLayerRef = useRef<HTMLDivElement>(null);
  const lightLinesRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const unlockBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!sectionRef.current) return;

    // ================================
    // LAYER 2 — FOG / BLOOM GRADIENT ANIMATION
    // ================================
    if (!prefersReducedMotion && fogLayerRef.current) {
      const fog1 = fogLayerRef.current.querySelector(".fog-1") as HTMLElement;
      const fog2 = fogLayerRef.current.querySelector(".fog-2") as HTMLElement;
      const fog3 = fogLayerRef.current.querySelector(".fog-3") as HTMLElement;

      // Very slow, subtle drift animation (35s loop)
      const fogTl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "sine.inOut" },
      });

      fogTl
        .to(
          fog1,
          {
            x: "15%",
            y: "-10%",
            opacity: 0.14,
            duration: 17.5,
          },
          0
        )
        .to(
          fog1,
          {
            x: "0%",
            y: "0%",
            opacity: 0.08,
            duration: 17.5,
          },
          17.5
        )
        .to(
          fog2,
          {
            x: "-12%",
            y: "18%",
            opacity: 0.16,
            duration: 17.5,
          },
          0
        )
        .to(
          fog2,
          {
            x: "0%",
            y: "0%",
            opacity: 0.10,
            duration: 17.5,
          },
          17.5
        )
        .to(
          fog3,
          {
            x: "8%",
            y: "15%",
            opacity: 0.12,
            duration: 17.5,
          },
          0
        )
        .to(
          fog3,
          {
            x: "0%",
            y: "0%",
            opacity: 0.08,
            duration: 17.5,
          },
          17.5
        );
    }

    // ================================
    // LAYER 3 — VERTICAL LIGHT LINES ANIMATION
    // ================================
    if (!prefersReducedMotion && lightLinesRef.current) {
      const lines = lightLinesRef.current.querySelectorAll(".light-line-glow");

      lines.forEach((glow, index) => {
        // Randomize animation parameters for each line
        const duration = 4 + Math.random() * 3; // 4-7s
        const delay = Math.random() * 3; // 0-3s delay

        gsap.fromTo(
          glow,
          {
            y: "-120px",
            opacity: 0,
          },
          {
            y: "100vh",
            opacity: 1,
            duration: duration,
            ease: "none",
            repeat: -1,
            delay: delay,
            modifiers: {
              opacity: (value) => {
                // Fade in/out during travel for smoother effect
                const progress = parseFloat(value);
                if (progress < 0.2) return (progress / 0.2).toString();
                if (progress > 0.8) return ((1 - progress) / 0.2).toString();
                return "1";
              },
            },
          }
        );
      });
    }

    // ================================
    // HERO TEXT ENTRANCE ANIMATIONS
    // ================================
    const entranceTl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    if (prefersReducedMotion) {
      entranceTl
        .fromTo(unlockBadgeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0)
        .fromTo(headlineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.1)
        .fromTo(subheadingRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.2)
        .fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.3)
        .fromTo(playButtonRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.4);
    } else {
      entranceTl
        .fromTo(
          unlockBadgeRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.3
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        )
        .fromTo(
          subheadingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.8
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.0
        )
        .fromTo(
          playButtonRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8 },
          0.7
        );
    }

    // ================================
    // PLAY BUTTON PULSE ANIMATION
    // ================================
    if (!prefersReducedMotion && playButtonRef.current) {
      gsap.to(playButtonRef.current, {
        scale: 1.08,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const rings = playButtonRef.current.querySelectorAll(".pulse-ring");
      rings.forEach((ring, index) => {
        gsap.fromTo(
          ring,
          { scale: 1, opacity: 0.4 },
          {
            scale: 1.6,
            opacity: 0,
            duration: 2.5,
            ease: "power2.out",
            repeat: -1,
            delay: index * 0.6,
          }
        );
      });
    }

    // Cleanup
    return () => {
      gsap.killTweensOf([".fog-1", ".fog-2", ".fog-3", ".light-line-glow"]);
      entranceTl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* ================================ */}
      {/* LAYER 1 — BASE BLACK BACKGROUND */}
      {/* ================================ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "#050505",
        }}
        aria-hidden="true"
      />

      {/* ================================ */}
      {/* LAYER 2 — FOG / BLOOM GRADIENTS */}
      {/* ================================ */}
      <div
        ref={fogLayerRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Fog bloom 1 - Desaturated cyan */}
        <div
          className="fog-1 absolute top-[-10%] left-[-5%] w-[900px] h-[900px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, rgba(120, 180, 200, 0.4) 0%, transparent 70%)",
            filter: "blur(300px)",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
          }}
        />

        {/* Fog bloom 2 - Desaturated green/teal */}
        <div
          className="fog-2 absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, rgba(100, 160, 140, 0.4) 0%, transparent 70%)",
            filter: "blur(350px)",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
          }}
        />

        {/* Fog bloom 3 - Cool gray */}
        <div
          className="fog-3 absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, rgba(140, 150, 160, 0.3) 0%, transparent 70%)",
            filter: "blur(280px)",
            transform: "translate3d(-50%, -50%, 0)",
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* ================================ */}
      {/* LAYER 3 — VERTICAL LIGHT LINES */}
      {/* ================================ */}
      <div
        ref={lightLinesRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Generate 12 vertical lines with traveling glows */}
        {[5, 12, 22, 35, 45, 55, 62, 70, 78, 85, 92, 97].map((leftPos, i) => (
          <div
            key={i}
            className="absolute top-0 h-[140%]"
            style={{
              left: `${leftPos}%`,
              width: "1px",
              background: "rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Traveling glow inside line */}
            <div
              className="light-line-glow absolute left-0 w-full"
              style={{
                height: "100px",
                background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
                filter: "blur(8px)",
              }}
            />
          </div>
        ))}
      </div>

      {/* ================================ */}
      {/* LAYER 4 — NOISE TEXTURE */}
      {/* ================================ */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* ================================ */}
      {/* FLOATING ASSET CARDS - GLASSMORPHISM */}
      {/* ================================ */}
      <AssetCard
        name="Cortex"
        value="20 NFTs"
        position="left-[8%] top-[22%]"
        delay={0.8}
      />
      <AssetCard
        name="Aelf"
        value="19,346"
        position="left-[5%] bottom-[28%]"
        delay={1.2}
      />
      <AssetCard
        name="Quant"
        value="7.8k"
        position="right-[10%] top-[18%]"
        delay={1.0}
      />
      <AssetCard
        name="Meeton"
        value="440"
        position="right-[12%] top-[45%]"
        delay={1.4}
      />
      <AssetCard
        name="DeFi horizons"
        value=""
        position="right-[8%] bottom-[15%]"
        delay={1.6}
      />

      {/* ================================ */}
      {/* HERO CONTENT */}
      {/* ================================ */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6">
        {/* Unlock Badge - Glassmorphism */}
        <div
          ref={unlockBadgeRef}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <span className="text-sm text-foreground/80">
            🔓 Unlock Your Assets Spark!
          </span>
          <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Main heading */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="inline-block">One-click for</span>{" "}
          <span className="inline-block bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            Asset Defense
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Dive into the art assets, where innovative blockchain technology meets financial expertise
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2">
            <span>Open App</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "white",
            }}
          >
            Discover More
          </button>
        </div>

        {/* Video Play Button - Glassmorphism */}
        <button
          ref={playButtonRef}
          className="relative w-16 h-16 mx-auto mb-12 rounded-full flex items-center justify-center transition-all group"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
          aria-label="Play video"
        >
          {/* Pulse rings */}
          <div className="pulse-ring absolute inset-0 rounded-full border border-white/30" />
          <div className="pulse-ring absolute inset-0 rounded-full border border-white/30" />

          {/* Play icon */}
          <svg className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
