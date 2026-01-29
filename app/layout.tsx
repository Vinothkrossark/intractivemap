import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interactive US Map | State Resources",
  description:
    "Interactive map of the United States with state-specific resources for IBEW districts, NECA chapters, and more.",
  keywords: ["US Map", "IBEW", "NECA", "Interactive Map", "State Resources"],
  authors: [{ name: "Your Organization" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#0f1429",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
