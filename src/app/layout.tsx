import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { BRAND } from "@/lib/content";

/* Jost carries the text and the spaced caps; Bodoni Moda is the display
   voice: the lock-screen clock, titles and the big figures. It replaced
   Italiana, whose single hairline weight made the figures hard to read. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://astor-management.vercel.app"
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
      className={`${jost.variable} ${bodoni.variable} h-full antialiased`}
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
