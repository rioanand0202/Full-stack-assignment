// app/api/auth/logout/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import logger from "@/lib/logger";

export async function POST(req) {
  try {
    const cookieStore = req.cookies;
    const token = cookieStore.get("refreshToken")?.value;

    if (token) {
      // Remove the session from DB
      await prisma.session.deleteMany({ where: { refreshToken: token } });
    }

    const res = NextResponse.json({ message: "Logged out" });

    // Clear cookie
    res.cookies.set("refreshToken", "", { maxAge: 0, path: "/" });

    logger.info("User logged out");
    return res;
  } catch (err) {
    logger.error(`Logout error: ${err.message}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
