import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/common-components/header";
import Footer from "@/components/common-components/footer";
import SessionWrapper from "./SessionWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
});

const roboto = Roboto({
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Share What You've Built. Discover What's Launching",
  description:
    "A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // todo added everything in nextauth
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${outfit.variable} ${roboto} antialiased  font-outfit`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SessionWrapper>
  );
}
