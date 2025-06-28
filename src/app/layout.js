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

export const metadata = {
  title: "Acunova - Intelligent Systems & Solutions",
  description: "Acunova develops intelligent systems using AI, electronics, IoT, embedded systems, and custom software development to solve real-world problems across industries.",
  keywords: "AI solutions, IoT development, embedded systems, custom software, industrial automation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/menu.js" defer></script>
        <script src="/contact.js" defer></script>
        <script src="/newsletter.js" defer></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
