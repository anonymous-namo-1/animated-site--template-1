import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.seo.home.title,
  description: content.seo.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
