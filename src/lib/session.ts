export function encrypt(text: string): string {
  return Buffer.from(text).toString("base64");
}

export function decrypt(text: string): string | null {
  try {
    return Buffer.from(text, "base64").toString("utf-8");
  } catch (e) {
    return null;
  }
}
