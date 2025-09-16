import { NextResponse } from "next/server";

export const config = {
  matcher: ["/profile/:path*"],
};

export function middleware(req) {
  const cookie = req.cookies.get("user")?.value;
  if (cookie !== "ok") {
    const url = new URL("/signin", req.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}