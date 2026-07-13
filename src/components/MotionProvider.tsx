"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Respects the OS "reduce motion" setting across all framer-motion animations. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
