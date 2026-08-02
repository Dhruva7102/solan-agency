/**
 * Renders copy with *asterisk-wrapped* phrases in the gold accent.
 * Lets marketing copy in content.ts stay readable while still
 * emphasising the words that carry the pitch.
 */
export default function Highlight({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-gold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
