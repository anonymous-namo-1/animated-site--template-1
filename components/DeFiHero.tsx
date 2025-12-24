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
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
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
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const unlockBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!bgRef.current || !sectionRef.current) return;

    // === BACKGROUND GRADIENT ANIMATION ===
    if (!prefersReducedMotion) {
      const gradient1 = bgRef.current.querySelector(".gradient-1") as HTMLElement;
      const gradient2 = bgRef.current.querySelector(".gradient-2") as HTMLElement;
      const gradient3 = bgRef.current.querySelector(".gradient-3") as HTMLElement;

      const bgTl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "sine.inOut" },
      });

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

    // === HERO TEXT ENTRANCE ANIMATIONS ===
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

    // === PLAY BUTTON PULSE ANIMATION ===
    if (!prefersReducedMotion && playButtonRef.current) {
      gsap.to(playButtonRef.current, {
        scale: 1.1,
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Pulse ring effect
      const rings = playButtonRef.current.querySelectorAll(".pulse-ring");
      rings.forEach((ring, index) => {
        gsap.fromTo(
          ring,
          { scale: 1, opacity: 0.5 },
          {
            scale: 1.8,
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            repeat: -1,
            delay: index * 0.5,
          }
        );
      });
    }

    // === SCROLL-BASED ANIMATIONS ===
    if (!prefersReducedMotion) {
      const scrollTriggers: ScrollTrigger[] = [];

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

      // Asset cards fade out on scroll
      const cards = document.querySelectorAll(".asset-card");
      cards.forEach((card) => {
        const cardST = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=60vh",
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(card, {
              opacity: 1 - self.progress * 0.9,
              y: `+=${-50 * self.progress}`,
              duration: 0.1,
              overwrite: "auto",
            });
          },
        });
        scrollTriggers.push(cardST);
      });

      return () => {
        scrollTriggers.forEach((st) => st.kill());
        gsap.killTweensOf([".gradient-1", ".gradient-2", ".gradient-3"]);
        entranceTl.kill();
      };
    }

    return () => {
      gsap.killTweensOf([".gradient-1", ".gradient-2", ".gradient-3"]);
      entranceTl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background gradient layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="gradient-1 absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
          style={{
            background: "var(--gradient-primary)",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="gradient-2 absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-25"
          style={{
            background: "var(--gradient-secondary)",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="gradient-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: "var(--gradient-accent)",
            transform: "translate3d(-50%, -50%, 0)",
            willChange: "transform, opacity",
          }}
        />
      </div>

      {/* Floating Asset Cards */}
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

      {/* Hero content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6">
        {/* Unlock Badge */}
        <div
          ref={unlockBadgeRef}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
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
          <button className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-all hover:scale-105">
            Discover More
          </button>
        </div>

        {/* Video Play Button */}
        <button
          ref={playButtonRef}
          className="relative w-16 h-16 mx-auto mb-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors group"
          aria-label="Play video"
        >
          {/* Pulse rings */}
          <div className="pulse-ring absolute inset-0 rounded-full border-2 border-white/40" />
          <div className="pulse-ring absolute inset-0 rounded-full border-2 border-white/40" />

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
