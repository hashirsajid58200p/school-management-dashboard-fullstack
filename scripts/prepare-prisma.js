const fs = require("fs");
const path = require("path");

const dbUrl = process.env.DATABASE_URL || "";
const isPostgres = dbUrl.startsWith("postgres://") || dbUrl.startsWith("postgresql://");

const prismaDir = path.join(__dirname, "..", "prisma");
const targetSchema = path.join(prismaDir, "schema.prisma");
const postgresSchema = path.join(prismaDir, "schema.postgresql.prisma");
const sqliteSchema = path.join(prismaDir, "schema.sqlite.prisma");

try {
  if (isPostgres) {
    console.log("⚡ Detected PostgreSQL DATABASE_URL. Configuring schema for PostgreSQL...");
    if (fs.existsSync(postgresSchema)) {
      fs.copyFileSync(postgresSchema, targetSchema);
      console.log("✅ Copied schema.postgresql.prisma to schema.prisma");
    } else {
      console.error("❌ schema.postgresql.prisma not found!");
    }
  } else {
    console.log("📁 Detected SQLite DATABASE_URL. Configuring schema for SQLite...");
    if (fs.existsSync(sqliteSchema)) {
      fs.copyFileSync(sqliteSchema, targetSchema);
      console.log("✅ Copied schema.sqlite.prisma to schema.prisma");
    }
  }
} catch (err) {
  console.error("Error preparing prisma schema:", err);
}
