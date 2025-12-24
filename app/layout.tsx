import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animated Landing Page",
  description: "A modern animated landing page built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Centered max-width container - 1440px */}
        <div className="mx-auto max-w-container px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
