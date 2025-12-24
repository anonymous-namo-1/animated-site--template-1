"use client";

import { content } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="mx-auto max-w-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Powerful features designed to help you work smarter, not harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
