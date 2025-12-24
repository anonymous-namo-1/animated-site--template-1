import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: `Cookie Policy - ${siteConfig.businessName}`,
  description: `Cookie policy for ${siteConfig.businessName}`,
};

export default function CookiesPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <article className="mx-auto max-w-4xl prose prose-invert">
          <h1>Cookie Policy</h1>
          <p className="text-foreground/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
          </p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly.
            </li>
            <li>
              <strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website.
            </li>
            <li>
              <strong>Preference cookies:</strong> These cookies remember your preferences and settings.
            </li>
            <li>
              <strong>Marketing cookies:</strong> These cookies track your online activity to help advertisers deliver more relevant advertising.
            </li>
          </ul>

          <h2>Types of Cookies We Use</h2>
          <p>
            <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.
          </p>
          <p>
            <strong>Persistent Cookies:</strong> These cookies remain on your device for a set period of time or until you delete them.
          </p>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and some functionality may no longer be available.
          </p>
          <p>
            Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            We may also use third-party cookies from services like Google Analytics to help us understand how users interact with our website.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
