"use client";

import { siteConfig } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get started in minutes
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Three simple steps to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {siteConfig.howItWorks.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < siteConfig.howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
              )}
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold relative z-10"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                }}
              >
                {step.step}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
