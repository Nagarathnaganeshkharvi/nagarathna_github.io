import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagarathna Ganesh Kharvi | Java Full Stack Developer",
  description:
    "Portfolio of Nagarathna Ganesh Kharvi — Aspiring Java Full Stack Developer skilled in Java, Spring Boot, ReactJS, and SQL. Explore projects, experience, and certifications.",
  keywords: [
    "Nagarathna Ganesh Kharvi",
    "Java Full Stack Developer",
    "ReactJS",
    "Spring Boot",
    "SQL",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Nagarathna Ganesh Kharvi" }],
  openGraph: {
    title: "Nagarathna Ganesh Kharvi | Java Full Stack Developer",
    description:
      "Aspiring Java Full Stack Developer — projects, skills, experience and certifications.",
    siteName: "Nagarathna's Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
