import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interactive US Map | State Resources",
  description:
    "Interactive map of the United States with state-specific resources for IBEW districts, NECA chapters, and more.",
  keywords: ["US Map", "IBEW", "NECA", "Interactive Map", "State Resources"],
  authors: [{ name: "Rosendin" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f9fafb",
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
