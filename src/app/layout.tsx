import type { Metadata } from "next";
import { Gilda_Display, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { BRAND } from "@/lib/content";

/* Jost carries the text and every figure; Gilda Display is the quiet
   display voice for the headline and titles. Figures stay in Jost: the
   display serifs tried before (Italiana, Bodoni Moda) read as thin or loud. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const gilda = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://astormgt.com"
  ),
  title: `${BRAND.name} · ${BRAND.tagline}`,
  description:
    "How Astor runs creator pages: our own software, published rates, and the dashboards to prove it.",
  openGraph: {
    title: `${BRAND.name} · ${BRAND.tagline}`,
    description:
      "How Astor runs creator pages: our own software, published rates, and the dashboards to prove it.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: BRAND.wordmark }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} · ${BRAND.tagline}`,
    description:
      "How Astor runs creator pages: our own software, published rates, and the dashboards to prove it.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${gilda.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <Nav />
          <div className="flex-1">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
