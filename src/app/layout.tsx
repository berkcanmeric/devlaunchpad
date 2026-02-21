import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevLaunchpad — Ship Apps at Warp Speed",
  description:
    "Your complete development companion. Roadmaps, AI tools, libraries, SDKs, prompts, and everything you need to build web & mobile apps end-to-end.",
  openGraph: {
    title: "DevLaunchpad",
    description: "Ship web & mobile apps at warp speed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${outfit.variable} font-body antialiased bg-surface text-fore`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
