import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { hasAccess } from "@/lib/access";
import AccessGate from "@/components/AccessGate";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { BRAND } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: `${BRAND.name} · ${BRAND.tagline}`,
  description:
    "A private walkthrough of how our agency runs creator pages: systems, rates, and results.",
  robots: { index: false, follow: false },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const unlocked = await hasAccess();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">
        <MotionProvider>
          {unlocked ? (
            <>
              <Nav />
              <div className="flex-1">{children}</div>
              <Footer />
            </>
          ) : (
            <AccessGate />
          )}
        </MotionProvider>
      </body>
    </html>
  );
}
