import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { content } from "@/lib/content";

export const metadata = {
  title: `Refund Policy - ${content.brand.name}`,
  description: `Refund policy for ${content.brand.name}`,
};

export default function RefundPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <article className="mx-auto max-w-4xl prose prose-invert">
          <h1>Refund Policy</h1>
          <p className="text-foreground/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>30-Day Money-Back Guarantee</h2>
          <p>
            We stand behind our product. If you're not completely satisfied with {content.brand.name}, we offer a 30-day money-back guarantee for all annual plan purchases.
          </p>

          <h2>Eligibility</h2>
          <p>To be eligible for a refund:</p>
          <ul>
            <li>You must request the refund within 30 days of your initial annual plan purchase</li>
            <li>The refund applies only to annual plan subscriptions</li>
            <li>Monthly subscriptions can be cancelled anytime without refund</li>
            <li>Enterprise custom contracts follow the terms outlined in your agreement</li>
          </ul>

          <h2>How to Request a Refund</h2>
          <p>
            To request a refund, please contact our support team at{" "}
            <a href={`mailto:${content.brand.email}`}>{content.brand.email}</a> with:
          </p>
          <ul>
            <li>Your account email address</li>
            <li>Order number (found in your purchase confirmation email)</li>
            <li>Brief reason for the refund request (optional but helps us improve)</li>
          </ul>

          <h2>Refund Process</h2>
          <p>
            Once we receive your refund request, we will:
          </p>
          <ul>
            <li>Review your request within 2 business days</li>
            <li>Process the refund to your original payment method</li>
            <li>Send you a confirmation email</li>
          </ul>
          <p>
            Refunds typically appear in your account within 5-10 business days, depending on your payment provider.
          </p>

          <h2>What Happens After a Refund</h2>
          <p>
            After your refund is processed:
          </p>
          <ul>
            <li>Your paid plan will be cancelled immediately</li>
            <li>You may keep access until the end of your current billing period</li>
            <li>Your account will revert to the Free plan if available</li>
            <li>Your data will be retained for 30 days in case you change your mind</li>
          </ul>

          <h2>Exceptions</h2>
          <p>
            Refunds are not available for:
          </p>
          <ul>
            <li>Monthly subscription plans (cancel anytime, no refund)</li>
            <li>Add-on services purchased separately</li>
            <li>Accounts suspended or terminated for Terms of Service violations</li>
            <li>Purchases made more than 30 days ago</li>
          </ul>

          <h2>Upgrades and Downgrades</h2>
          <p>
            If you upgrade or downgrade your plan:
          </p>
          <ul>
            <li>Upgrades: You'll be charged the prorated difference immediately</li>
            <li>Downgrades: Credits will be applied to your next billing cycle</li>
            <li>Changes take effect immediately</li>
          </ul>

          <h2>Questions?</h2>
          <p>
            If you have any questions about our refund policy, please contact us at{" "}
            <a href={`mailto:${content.brand.email}`}>{content.brand.email}</a>
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
