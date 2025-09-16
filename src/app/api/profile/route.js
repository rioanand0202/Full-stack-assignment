// app/api/profile/route.js
import { NextResponse } from "next/server";
import { verifyAccessToken } from "../../../lib/jwt";
import { rateLimiter } from "../../../lib/rateLimiter";
import logger from "../../../lib/logger";

export async function GET(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  // ✅ Rate limit check
  if (!rateLimiter(ip)) {
    logger.warn(`Rate limit exceeded: ${ip}`);
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // ✅ Auth check (redundant safeguard in case middleware skipped)
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const token = authHeader.split(" ")[1];
    const user = verifyAccessToken(token);

    return NextResponse.json({
      message: "Protected profile data",
      user,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 },
    );
  }
}
