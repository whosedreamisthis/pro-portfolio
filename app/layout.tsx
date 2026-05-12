import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/hoc/Provider";
import ResponsiveNav from "@/components/navbar/ResponsiveNav";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import Footer from "@/components/home/footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dana Sharon's Portfolio",
  description: "Portfolio website using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${font.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />

          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
