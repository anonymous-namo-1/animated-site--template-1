"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !navRef.current) return;

    // Entrance animation for nav items
    const items = navRef.current.querySelectorAll(".nav-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto max-w-container px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="nav-item flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-lg font-bold">C</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-item text-sm text-foreground/90 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="nav-item text-sm text-foreground/90 hover:text-foreground transition-colors">
              DeFi App
            </a>
            <a href="#" className="nav-item text-sm text-foreground/90 hover:text-foreground transition-colors">
              Assets
            </a>
            <a href="#" className="nav-item text-sm text-foreground/90 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="nav-item text-sm text-foreground/90 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#" className="nav-item text-sm text-foreground/90 hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>

          {/* Right Side - Protection Dropdown & Account Button */}
          <div className="flex items-center gap-4">
            <button className="nav-item hidden md:flex items-center gap-2 text-sm text-foreground/90 hover:text-foreground transition-colors">
              <span>Protection</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button className="nav-item flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm">Create Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
