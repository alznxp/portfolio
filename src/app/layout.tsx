// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AnimatedLayout from "@/components/animated-layout";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alizain",
  description: "Alizain Prasla — Site Reliability-Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ALZN_favicon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedLayout>
            <Header />
            {children}
            <Footer/>
          </AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
