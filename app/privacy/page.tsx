import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: `Privacy Policy - ${siteConfig.businessName}`,
  description: `Privacy policy for ${siteConfig.businessName}`,
};

export default function PrivacyPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <article className="mx-auto max-w-4xl prose prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-foreground/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Introduction</h2>
          <p>
            At {siteConfig.businessName}, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Identity data (name, username)</li>
            <li>Contact data (email address, phone number)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (how you use our website and services)</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Notify you about changes to our services</li>
            <li>Provide customer support</li>
            <li>Monitor and analyze usage and trends</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
