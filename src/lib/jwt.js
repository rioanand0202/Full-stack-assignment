// lib/jwt.js
// JWT helpers for access + refresh tokens

import jwt from "jsonwebtoken";
import { SignJWT, jwtVerify } from "jose";

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "dev_access_secret";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "dev_refresh_secret";
const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET);

export async function generateAccessToken(user) {
  return await new SignJWT({ id: user.id, email: user.email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret); // <-- this returns a string (the JWT)
}

export function generateRefreshToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
}

export async function verifyAccessToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    console.error("JWT verify error:", err.message);
    throw new Error("Invalid or expired token");
  }
}

export function verifyRefreshToken(token) {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
}
