// lib/rateLimiter.js
// Simple in-memory rate limiter (for demo). Swap to Redis/ioredis in prod.

const rateLimitMap = new Map(); // { ip: { count, lastRequest } }
const WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // per window

export function rateLimiter(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, lastRequest: now };

  if (now - entry.lastRequest > WINDOW) {
    entry.count = 1;
    entry.lastRequest = now;
  } else {
    entry.count += 1;
  }

  rateLimitMap.set(ip, entry);

  return entry.count <= MAX_REQUESTS;
}
