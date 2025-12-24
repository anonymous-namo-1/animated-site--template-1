import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { content } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: `Solutions - ${content.brand.name}`,
  description: content.solutions.subheading,
};

export default function SolutionsPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-container">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{content.solutions.heading}</h1>
            <p className="text-xl text-foreground/70">{content.solutions.subheading}</p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {content.solutions.items.map((solution, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-foreground/70 mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.cta.href}
                  className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-all"
                >
                  {solution.cta.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
