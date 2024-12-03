import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Mono } from 'next/font/google';
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "another receiptify",
  description: "Generated by anderson bee",
  openGraph: {
    title: "another receiptify",
    description: "Generated by anderson bee",
  },
  twitter: {
    title: "another receiptify",
    description: "Generated by anderson bee",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased bg-[#1a1b1e]`}
      >
        {children}
      </body>
    </html>
  );
}
