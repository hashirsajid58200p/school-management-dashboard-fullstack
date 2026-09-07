import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

function getEffectiveDatabaseUrl(): string | undefined {
  const envUrl = process.env.DATABASE_URL;

  // 1. If remote database (PostgreSQL, MySQL, etc.), use as-is
  if (envUrl && !envUrl.startsWith("file:")) {
    return envUrl;
  }

  // 2. If running on Vercel Serverless / AWS Lambda environment with SQLite
  const isServerless = !!(
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.LAMBDA_TASK_ROOT
  );

  if (isServerless) {
    const tmpDbPath = "/tmp/school_prod.db";

    // Check possible template locations bundled by Next.js
    const candidatePaths = [
      path.join(process.cwd(), "prisma", "template.db"),
      path.join(__dirname, "..", "..", "prisma", "template.db"),
      path.join(__dirname, "prisma", "template.db"),
      path.join("/var/task", "prisma", "template.db"),
      path.join("/var/task", ".next", "server", "prisma", "template.db"),
    ];

    try {
      if (!fs.existsSync(tmpDbPath)) {
        let copied = false;
        for (const candidate of candidatePaths) {
          if (fs.existsSync(candidate)) {
            fs.copyFileSync(candidate, tmpDbPath);
            console.log(`✅ Initialized /tmp SQLite DB from ${candidate}`);
            copied = true;
            break;
          }
        }
        if (!copied) {
          console.warn("⚠️ template.db candidate paths not found in serverless environment.");
        }
      }
    } catch (e) {
      console.error("Error copying template.db to /tmp:", e);
    }

    return `file:${tmpDbPath}`;
  }

  return envUrl;
}

const effectiveUrl = getEffectiveDatabaseUrl();
if (effectiveUrl) {
  process.env.DATABASE_URL = effectiveUrl;
}

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: effectiveUrl ? { db: { url: effectiveUrl } } : undefined,
  });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;