import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // ❌ NO bloquear frontend
  if (!request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 👉 aquí puedes poner rate limit después si quieres

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};