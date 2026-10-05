import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero-glow -mt-16 flex min-h-[80vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="numeral gold-text text-[5rem]">404</p>
      <h1 className="display mt-4 text-4xl text-ink">
        That page isn&apos;t part of the tour.
      </h1>
      <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink-2">
        The link may be old, or mistyped. Everything worth seeing starts at the
        beginning.
      </p>
      <Link href="/" className="btn-gold mt-8">
        Back to the start
      </Link>
    </main>
  );
}
