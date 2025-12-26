"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { content } from "@/lib/content";

// Wave configuration for enhanced gradient animations
const waveConfigs = [
  {
    className: 'wave-1',
    size: { width: 1200, height: 1200 },
    position: { top: '-15%', left: '-10%' },
    gradient: 'radial-gradient(ellipse at 30% 40%, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)',
    blur: 380,
    animations: [
      { x: '20%', y: '-5%', scale: 1.15, rotation: 15, opacity: 0.20, duration: 12.5, ease: 'sine.inOut' },
      { x: '0%', y: '0%', scale: 1, rotation: 0, opacity: 0.12, duration: 12.5, ease: 'sine.inOut' }
    ]
  },
  {
    className: 'wave-2',
    size: { width: 900, height: 900 },
    position: { bottom: '-12%', right: '-8%' },
    gradient: 'radial-gradient(ellipse at 60% 50%, rgba(139, 92, 246, 0.22) 0%, rgba(236, 72, 153, 0.12) 45%, transparent 70%)',
    blur: 340,
    animations: [
      { x: '-18%', y: '12%', scale: 0.9, rotation: -20, opacity: 0.18, duration: 9, ease: 'power1.inOut' },
      { x: '0%', y: '0%', scale: 1, rotation: 0, opacity: 0.14, duration: 9, ease: 'power1.inOut' }
    ]
  },
  {
    className: 'wave-3',
    size: { width: 850, height: 850 },
    position: { top: '35%', left: '-5%' },
    gradient: 'radial-gradient(ellipse at 40% 60%, rgba(100, 160, 180, 0.20) 0%, rgba(120, 180, 200, 0.10) 50%, transparent 70%)',
    blur: 320,
    animations: [
      { x: '15%', y: '-8%', scale: 1.1, rotation: 25, opacity: 0.16, duration: 7.3, ease: 'sine.inOut' },
      { x: '8%', y: '10%', scale: 0.95, rotation: -10, opacity: 0.14, duration: 7.3, ease: 'sine.inOut' },
      { x: '0%', y: '0%', scale: 1, rotation: 0, opacity: 0.10, duration: 7.4, ease: 'sine.inOut' }
    ]
  },
  {
    className: 'wave-4',
    size: { width: 600, height: 600 },
    position: { top: '15%', right: '5%' },
    gradient: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.18) 0%, rgba(139, 92, 246, 0.08) 60%, transparent 70%)',
    blur: 280,
    animations: [
      { x: '-10%', y: '15%', scale: 1.2, rotation: 30, opacity: 0.15, duration: 7, ease: 'power2.inOut' },
      { x: '0%', y: '0%', scale: 1, rotation: 0, opacity: 0.10, duration: 7, ease: 'power2.inOut' }
    ]
  },
  {
    className: 'wave-5',
    size: { width: 700, height: 700 },
    position: { bottom: '20%', left: '50%' },
    gradient: 'radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.16) 0%, rgba(100, 160, 180, 0.08) 55%, transparent 70%)',
    blur: 300,
    animations: [
      { x: '12%', y: '-12%', scale: 0.85, rotation: -15, opacity: 0.14, duration: 8, ease: 'expo.inOut' },
      { x: '0%', y: '0%', scale: 1, rotation: 0, opacity: 0.10, duration: 8, ease: 'expo.inOut' }
    ]
  }
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fogLayerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!sectionRef.current) return;

    // ENHANCED WAVE GRADIENT ANIMATION
    if (!prefersReducedMotion && fogLayerRef.current) {
      const waves = waveConfigs.map((config) =>
        fogLayerRef.current!.querySelector(`.${config.className}`)
      ) as HTMLElement[];

      const wavesTl = gsap.timeline({
        repeat: -1,
        defaults: { ease: 'sine.inOut' }
      });

      // Add GPU acceleration
      gsap.set(waves, { force3D: true });

      // Add staggered animations for each wave
      waveConfigs.forEach((config, i) => {
        const wave = waves[i];
        let startTime = i * 3; // 3s stagger between wave starts

        config.animations.forEach((anim) => {
          wavesTl.to(wave, {
            x: anim.x,
            y: anim.y,
            scale: anim.scale,
            rotation: anim.rotation,
            opacity: anim.opacity,
            duration: anim.duration,
            ease: anim.ease
          }, startTime);

          startTime += anim.duration;
        });
      });
    }

    // Accessibility: Static waves for reduced motion
    if (prefersReducedMotion && fogLayerRef.current) {
      const waves = waveConfigs.map((config) =>
        fogLayerRef.current!.querySelector(`.${config.className}`)
      ) as HTMLElement[];

      // Set to mid-opacity values (static gradients)
      const opacities = [0.12, 0.14, 0.10, 0.10, 0.10];
      waves.forEach((wave, i) => {
        gsap.set(wave, { opacity: opacities[i] });
      });
    }

    // HERO TEXT ENTRANCE ANIMATIONS
    const entranceTl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    if (prefersReducedMotion) {
      entranceTl
        .fromTo(playButtonRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0)
        .fromTo(headlineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.1)
        .fromTo(subheadingRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.2)
        .fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.3);
    } else {
      entranceTl
        .fromTo(playButtonRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 }, 0)
        .fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
        .fromTo(subheadingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9);
    }

    // PLAY BUTTON PULSE ANIMATION
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
      const waveSelectors = waveConfigs.map(c => `.${c.className}`);
      gsap.killTweensOf(waveSelectors);
      entranceTl.kill();
    };
  }, []);

  const handleCTAClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* LAYER 1 — BASE BLACK BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "#050505" }}
        aria-hidden="true"
      />

      {/* LAYER 2 — ENHANCED WAVE GRADIENTS */}
      <div ref={fogLayerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {waveConfigs.map((config, i) => (
          <div
            key={i}
            className={config.className}
            style={{
              position: 'absolute',
              ...config.position,
              width: `${config.size.width}px`,
              height: `${config.size.height}px`,
              background: config.gradient,
              filter: `blur(${config.blur}px)`,
              borderRadius: '50%',
              transform: config.position.left === '50%' ? 'translate3d(-50%, 0, 0)' : 'translate3d(0, 0, 0)',
              willChange: 'transform, opacity, filter',
              backfaceVisibility: 'hidden' as const,
            }}
          />
        ))}
      </div>

      {/* LAYER 3 — NOISE TEXTURE */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* HERO CONTENT */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-6">
        {/* Play Button */}
        <button
          ref={playButtonRef}
          className="relative w-16 h-16 mx-auto mb-8 rounded-full flex items-center justify-center transition-all group z-20"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
          aria-label="Watch demo"
        >
          <div className="pulse-ring absolute inset-0 rounded-full border border-white/30" />
          <div className="pulse-ring absolute inset-0 rounded-full border border-white/30" />
          <svg className="w-6 h-6 text-white ml-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Main heading */}
        <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="inline-block">{content.hero.heading}</span>{" "}
          <span className="inline-block bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            {content.hero.headingAccent}
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
        >
          {content.hero.subheading}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => handleCTAClick(content.hero.cta.primary.href)}
            className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>{content.hero.cta.primary.text}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => handleCTAClick(content.hero.cta.secondary.href)}
            className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "white",
            }}
          >
            {content.hero.cta.secondary.text}
          </button>
        </div>
      </div>
    </section>
  );
}
