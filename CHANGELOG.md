# Changelog

All notable changes to the School Management Dashboard project are documented in this file.

## [1.0.0] - Final Hardening & Portfolio Release

### Security & Access Control
- **Cryptographic JWT Signature Verification:** Upgraded session token authentication to strictly verify HMAC-SHA256 signatures via `jose` across Edge middleware, server components, and all server actions. Eliminated unverified base64 token decoders.
- **Fail-Closed Session Secrets:** Configured strict startup guards requiring `SESSION_SECRET` in production environments.
- **Bcrypt Password Security:** Enforced 10-round `bcryptjs` hashing for all account credentials, seed data, and profile changes. Removed legacy plaintext password fallbacks.
- **Authorized Private Messaging:** Migrated Pusher WebSocket messaging to authenticated private channels (`private-user-${userId}`) protected by server-side role validation in `POST /api/pusher/auth`.
- **Serverless Brute-Force Rate Limiting:** Hardened `/api/login` with sliding window rate limiting and documented serverless concurrency boundaries.
- **Automated Signature Forgery Tests:** Added test suites verifying immediate rejection of forged JWTs signed with untrusted keys.

### Architecture & Persistence
- **Production Database Persistence:** Migrated production persistence to network-reachable PostgreSQL with Prisma migrations (`prisma migrate deploy`), retiring serverless ephemeral SQLite replication hacks.
- **Zero-Setup Local Dev:** Maintained SQLite fallback for offline local development and rapid bootstrapping.
- **Atomic Operations:** Wrapped timetable solver generation, academic year promotions, and attendance operations in atomic Prisma transactions with rollback guarantees.

### Performance & UI Quality
- **Crash Prevention & Null Safety:** Guarded table renders, select dropdowns, and roster calculations against empty or undefined server action states.
- **Eliminated Spontaneous Logouts:** Replaced viewport-prefetched logout links with explicit POST-triggered logout button actions.
- **Dynamic Metrics:** Replaced placeholder statistics with dynamic GPA calculation, live class roster counts, and aggregated teacher performance metrics.

### Repository Cleanup
- **Purged Mock Datasets:** Removed obsolete 808 KB mock seed data (`src/lib/data.ts`).
- **Asset Sweep:** Removed unused static images (`avatar.png`, `finance.png`) while preserving dynamic modal icons.
- **Debug Cleanup:** Stripped development form logs and converted catch blocks to structured server-side error handlers.
