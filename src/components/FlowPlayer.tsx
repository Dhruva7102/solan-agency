"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FLOWS, ACTORS, type Flow } from "@/lib/content";

const STEP_MS = 4200;

export default function FlowPlayer() {
  const [flowKey, setFlowKey] = useState<string>(FLOWS[0].key);
  const flow = FLOWS.find((f) => f.key === flowKey)!;

  return (
    <div>
      {/* Flow tabs */}
      <div className="flex flex-wrap gap-2">
        {FLOWS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFlowKey(f.key)}
            className={`rounded-full border px-4 py-2.5 text-[13px] transition-colors ${
              f.key === flowKey
                ? "border-gold-dim bg-[rgba(210,172,97,0.1)] text-ink"
                : "border-line text-ink-2 hover:border-line-strong hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <FlowTimeline key={flow.key} flow={flow} />
    </div>
  );
}

function FlowTimeline({ flow }: { flow: Flow }) {
  const [reached, setReached] = useState(0); // index of last revealed step
  const [playing, setPlaying] = useState(true);
  const done = reached >= flow.steps.length - 1;
  const activeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing || done) return;
    const t = setTimeout(() => setReached((r) => r + 1), STEP_MS);
    return () => clearTimeout(t);
  }, [playing, reached, done]);

  useEffect(() => {
    if (reached > 0) {
      activeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [reached]);

  return (
    <div className="mt-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="display text-2xl leading-snug text-ink sm:text-3xl">
            {flow.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">{flow.intro}</p>
        </div>
        <div className="flex gap-2">
          {!done && (
            <button
              onClick={() => setPlaying((p) => !p)}
              className="btn-ghost !px-4 !py-2 text-xs"
            >
              {playing ? "Pause" : "Play"}
            </button>
          )}
          <button
            onClick={() => {
              setReached(0);
              setPlaying(true);
            }}
            className="btn-ghost !px-4 !py-2 text-xs"
          >
            Replay
          </button>
          {!done && (
            <button
              onClick={() => {
                setReached(flow.steps.length - 1);
                setPlaying(false);
              }}
              className="btn-ghost !px-4 !py-2 text-xs"
            >
              Show all
            </button>
          )}
        </div>
      </div>

      <div className="relative">
        {/* spine */}
        <div className="absolute bottom-4 left-[15px] top-2 w-px bg-line" />
        <motion.div
          className="absolute left-[15px] top-2 w-px bg-gold-dim"
          animate={{
            height: `${(reached / Math.max(flow.steps.length - 1, 1)) * 96}%`,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <div className="flex flex-col gap-5">
          <AnimatePresence initial={false}>
            {flow.steps.slice(0, reached + 1).map((step, i) => {
              const actor = ACTORS[step.actor];
              const isActive = i === reached;
              return (
                <motion.div
                  key={i}
                  ref={isActive ? activeRef : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.65, 0.36, 1] }}
                  className="relative grid grid-cols-[32px_1fr] gap-4 sm:gap-6"
                >
                  <div
                    className="z-10 mt-1.5 flex h-8 w-8 items-center justify-center rounded-full border bg-bg text-[10px] font-bold"
                    style={{ borderColor: actor.color, color: actor.color }}
                    aria-hidden
                  >
                    {actor.label.slice(0, 1)}
                  </div>
                  <div
                    className={`card max-w-2xl p-6 transition-colors duration-500 ${
                      isActive && !done ? "!border-gold-dim" : ""
                    }`}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: actor.color }}
                      >
                        {actor.label}
                      </span>
                      {step.time && (
                        <span className="text-[11px] text-muted">{step.time}</span>
                      )}
                    </div>
                    <h3 className="text-[15px] font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">
                      {step.desc}
                    </p>
                    {isActive && !done && playing && (
                      <motion.div
                        key={`progress-${i}`}
                        className="mt-4 h-0.5 rounded bg-gold-dim/60"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {done && flow.footnote && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl border-l-2 border-gold-dim pl-4 text-sm italic leading-relaxed text-ink-2"
        >
          {flow.footnote}
        </motion.p>
      )}
    </div>
  );
}
