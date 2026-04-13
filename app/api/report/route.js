import { NextResponse } from "next/server";

let lastRequestTime = 0;

export async function POST() {
  const now = Date.now();

  // 1 request cada 10 segundos
  if (now - lastRequestTime < 10000) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  lastRequestTime = now;

  return NextResponse.json({ ok: true });
}