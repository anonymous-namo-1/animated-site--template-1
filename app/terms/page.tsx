import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: `Terms of Service - ${siteConfig.businessName}`,
  description: `Terms of service for ${siteConfig.businessName}`,
};

export default function TermsPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <article className="mx-auto max-w-4xl prose prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-foreground/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using {siteConfig.businessName}, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on {siteConfig.businessName} for personal, non-commercial use only.
          </p>

          <h2>User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Not use the service for any illegal purpose</li>
            <li>Not interfere with or disrupt the service</li>
          </ul>

          <h2>Subscriptions and Payments</h2>
          <p>
            Some parts of the service are billed on a subscription basis. You will be billed in advance on a recurring basis.
          </p>

          <h2>Refunds</h2>
          <p>
            We offer a 30-day money-back guarantee for all new subscriptions. Contact us at {siteConfig.email} to request a refund.
          </p>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice, for any reason, including breach of these Terms.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            {siteConfig.businessName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
