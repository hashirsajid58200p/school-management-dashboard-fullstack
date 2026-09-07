import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";

const getSecretKey = () => {
  const secret = process.env.SESSION_SECRET || "school_management_system_secure_secret_key_long_enough_32_bytes";
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

export function decryptSync(token: string | undefined = ""): any | null {
  if (!token || typeof token !== "string") return null;
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [, payloadB64] = parts;

    const payloadJson =
      typeof Buffer !== "undefined"
        ? Buffer.from(payloadB64, "base64url").toString("utf-8")
        : typeof atob !== "undefined"
        ? decodeURIComponent(
            atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"))
              .split("")
              .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
              .join("")
          )
        : null;

    if (!payloadJson) return null;
    const payload = JSON.parse(payloadJson);

    if (payload.exp && typeof payload.exp === "number") {
      const now = Math.floor(Date.now() / 1000);
      if (now > payload.exp) {
        return null;
      }
    }

    return payload;
  } catch (e) {
    return null;
  }
}
