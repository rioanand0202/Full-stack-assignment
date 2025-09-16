import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyRefreshToken, generateAccessToken } from "@/lib/jwt";

export async function POST(req) {
  try {
    const cookieStore = req.cookies;
    const token = cookieStore.get("refreshToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "No refresh token" }, { status: 401 });
    }

    const payload = verifyRefreshToken(token);

    const session = await prisma.session.findUnique({
      where: { refreshToken: token },
    });
    if (!session || new Date() > session.expiresAt) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }

    const newAccessToken = generateAccessToken(payload);
    return NextResponse.json({ accessToken: newAccessToken });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid refresh token" },
      { status: 401 },
    );
  }
}
