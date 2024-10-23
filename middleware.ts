import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const mustChangePassword = req.cookies.get("must_change_password")?.value;

  if (
    mustChangePassword === "true" &&
    req.nextUrl.pathname !== "/newPassword"
  ) {
    return NextResponse.redirect(new URL("/newPassword", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/"],
};
