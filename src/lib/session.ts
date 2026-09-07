import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";

const getSecretKey = () => {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("FATAL: SESSION_SECRET environment variable is missing in production.");
    }
    console.warn("WARNING: SESSION_SECRET is not set. Using local development fallback secret.");
    return new TextEncoder().encode("dev_insecure_local_secret_must_be_32_bytes_long_min");
  }
  return new TextEncoder().encode(secret);
};

export async function encrypt(payload: any): Promise<string> {
  const data = typeof payload === "string" ? JSON.parse(payload) : payload;
  return await new SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecretKey());
}

export async function decrypt(token: string | undefined = ""): Promise<any | null> {
  if (!token || typeof token !== "string") return null;
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    return null;
  }
}
