import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { content } from "@/lib/content";

export const metadata = {
  title: content.seo.contact.title,
  description: content.seo.contact.description,
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24">
        <Contact />
        {/* Contact Methods */}
        <div className="py-12 px-6">
          <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.contact.methods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="p-6 rounded-xl text-center hover:bg-white/5 transition-colors"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <div className="font-semibold mb-1">{method.label}</div>
                <div className="text-sm text-foreground/70">{method.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
