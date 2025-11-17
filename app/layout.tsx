import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  title: "Amjad Benamara | Full-Stack Web Developer | React, Next.js, Laravel",
  description: "Full-stack web developer from Agadir, Morocco specializing in React, Next.js, Laravel, and modern web applications. Building responsive, scalable solutions with clean code and strong visual design.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Frontend Developer",
    "Backend Developer",
    "Agadir Developer",
    "Morocco Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "Web Design",
    "Portfolio"
  ],
  authors: [{ name: "Amjad Benamara" }],
  creator: "Amjad Benamara",
  publisher: "Amjad Benamara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://github.com/theonlyamjad"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "", 
    siteName: "Amjad Benamara Portfolio",
    title: "Amjad Benamara | Full-Stack Web Developer",
    description: "Full-stack web developer specializing in React, Next.js, and Laravel. Building modern, responsive web applications.",
    images: [
      {
        url: "/brutalic_portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Amjad Benamara - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amjad Benamara | Full-Stack Web Developer",
    description: "Full-stack web developer specializing in React, Next.js, and Laravel.",
    images: ["/brutalic_portfolio.jpg"],
    creator: "", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
      <Analytics/>
    </html>
  );
}