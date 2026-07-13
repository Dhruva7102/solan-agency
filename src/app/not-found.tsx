import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero-glow flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display text-4xl tracking-tight text-ink">
        That page isn&apos;t part of the tour.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
        The link may be old, or mistyped. Everything worth seeing starts at the
        beginning.
      </p>
      <Link href="/" className="btn-gold mt-8">
        Back to the start
      </Link>
    </main>
  );
}
