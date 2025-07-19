import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariel Orbe | Senior Software Engineer — AI & Full Stack",
  description:
    "Portfolio of Ariel Orbe — 10 years building scalable web applications, AI-driven solutions, and enterprise platforms at Dell, Wherefour, ThoughtWire, and China Bank PH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="mesh-bg min-h-screen antialiased">{children}</body>
    </html>
  );
}
