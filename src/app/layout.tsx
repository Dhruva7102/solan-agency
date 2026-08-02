import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { hasAccess } from "@/lib/access";
import AccessGate from "@/components/AccessGate";
import UnlockReveal from "@/components/UnlockReveal";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://astor-management.vercel.app"
  ),
  title: `${BRAND.name} · ${BRAND.tagline}`,
  description:
    "A private walkthrough of how we run creator pages: systems, rates, and results.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `${BRAND.name} · ${BRAND.tagline}`,
    description:
      "A private walkthrough of how we run creator pages: systems, rates, and results.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: BRAND.wordmark }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} · ${BRAND.tagline}`,
    description:
      "A private walkthrough of how we run creator pages: systems, rates, and results.",
    images: ["/og.png"],
  },
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
              <UnlockReveal />
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
