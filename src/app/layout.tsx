import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Alexandria } from "next/font/google";
import Head from "next/head";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ace",
  description: "Ace Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <title>Ace Institute – Best Coaching Center</title>
        <meta name="description" content="Ace Institute offers quality coaching for students with expert faculty, online exams, and learner support." />
        <meta name="keywords" content="coaching, institute, exams, results, learning portal" />
        <meta property="og:title" content="Ace Institute" />
        <meta property="og:description" content="Join Ace Institute to excel in your studies with expert guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta property="og:image" content="/icon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${alexandria.className}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
