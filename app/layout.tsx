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
  title: "Ritik Jain | Graphic Designer & Visual Artist",
  description:
    "Portfolio of Ritik Jain — Graphic Designer crafting high-impact branding, YouTube thumbnails, festival graphics, and digital artwork using Canva and AI tools.",
  keywords: [
    "Graphic Designer",
    "Portfolio",
    "Ritik Jain",
    "Canva",
    "Thumbnails",
    "Branding",
    "AI Art",
    "Visual Design",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08080a] text-neutral-100 selection:bg-pink-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
