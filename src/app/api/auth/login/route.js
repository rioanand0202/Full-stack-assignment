// app/api/auth/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt";
import logger from "@/lib/logger";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const accessToken = await generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await prisma.session.create({
      data: {
        refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const res = NextResponse.json({ message: "Login successful", accessToken });
    res.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    logger.info(`User logged in: ${email}`);
    return res;
  } catch (err) {
    logger.error(`Login error: ${err.message}`);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
