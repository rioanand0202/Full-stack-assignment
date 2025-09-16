// middleware.js
// Global middleware for route protection and security headers

import { NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/jwt";

const PROTECTED_PATHS = ["/api/profile"]; // add more as needed

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // ✅ Only run on protected routes
  if (PROTECTED_PATHS.some((path) => pathname.startsWith(path))) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    try {
      verifyAccessToken(token); // throws if invalid/expired
    } catch (err) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 },
      );
    }
  }

  // ✅ Security headers (helmet-lite)
  const res = NextResponse.next();
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-XSS-Protection", "1; mode=block");
  return res;
}

// Limit middleware to API routes only
export const config = {
  matcher: ["/api/:path*"],
};
