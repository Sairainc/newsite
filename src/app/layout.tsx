import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "株式会社Saira - AIで地方創生を実現する",
  description: "最先端のテクノロジーで地域の課題を解決し、持続可能な未来を創造します",
  keywords: "AI, 地方創生, テクノロジー, イノベーション, 持続可能, 未来",
  authors: [{ name: "株式会社Saira" }],
  creator: "株式会社Saira",
  publisher: "株式会社Saira",
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    // ... existing code ...
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
} 