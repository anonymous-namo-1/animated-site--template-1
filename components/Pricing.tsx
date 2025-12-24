"use client";

import { siteConfig } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="mx-auto max-w-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.pricing.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                plan.featured ? "ring-2 ring-white/20" : ""
              }`}
              style={{
                background: plan.featured
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {plan.featured && (
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-primary text-xs font-medium mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">{plan.price !== "Custom" ? "$" : ""}{plan.price}</span>
                {plan.period && <span className="text-foreground/60">/{plan.period}</span>}
              </div>
              <p className="text-foreground/70 mb-6">{plan.description}</p>
              <button
                className={`w-full py-3 rounded-full font-medium transition-all hover:scale-105 ${
                  plan.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </button>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
