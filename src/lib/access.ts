"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const COOKIE = "solan_access";

function expectedCode() {
  // Set SITE_ACCESS_CODE in Vercel (or .env.local) to change the code.
  return process.env.SITE_ACCESS_CODE ?? "SOLAN";
}

export async function hasAccess(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(COOKIE)?.value === "granted";
}

export type UnlockState = { error?: string };

export async function unlock(
  _prev: UnlockState,
  formData: FormData
): Promise<UnlockState> {
  const code = String(formData.get("code") ?? "").trim();
  if (code.toLowerCase() !== expectedCode().toLowerCase()) {
    return { error: "That code isn't right. Check your invite or ask your contact." };
  }
  const jar = await cookies();
  jar.set(COOKIE, "granted", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  revalidatePath("/", "layout");
  return {};
}
