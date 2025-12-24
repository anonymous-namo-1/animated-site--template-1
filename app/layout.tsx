import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeFi Asset Defense - Blockchain Innovation",
  description: "One-click for Asset Defense. Dive into the art assets, where innovative blockchain technology meets financial expertise.",
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
