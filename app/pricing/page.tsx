import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { content } from "@/lib/content";

export const metadata = {
  title: content.seo.pricing.title,
  description: content.seo.pricing.description,
};

export default function PricingPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24">
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
