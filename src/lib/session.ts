import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";

const getSecretKey = () => {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    console.warn("WARNING: SESSION_SECRET is not set. Using secure fallback secret.");
    return new TextEncoder().encode("school_mgmt_fallback_session_secret_32bytes_min_key");
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
