import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// memoria simple
const rateLimitMap = new Map<string, { count: number; time: number }>();

const LIMIT = 20;
const WINDOW = 60 * 1000;

export function proxy(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
      rateLimitMap.set(ip, { count: 1, time: now });
      return NextResponse.next();
    }

    if (now - record.time > WINDOW) {
      rateLimitMap.set(ip, { count: 1, time: now });
      return NextResponse.next();
    }

    record.count++;

    if (record.count > LIMIT) {
      return new NextResponse("Too many requests", {
        status: 429,
      });
    }

    return NextResponse.next();
  } catch {
    // nunca romper la app
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};