# Active Context

## Current Status
- **Vercel 500 Resolution**: Fixed root cause `Error code 14: Unable to open the database file` on Vercel serverless. Implemented automatic SQLite replication from bundled `prisma/template.db` into `/tmp/school_prod.db` with `outputFileTracingIncludes` in `next.config.mjs`.
- **Hybrid Database Architecture**: Implemented `scripts/prepare-prisma.js` to dynamically detect PostgreSQL URLs (`postgres://` or `postgresql://`) vs SQLite (`file:`) and configure `schema.prisma` automatically during build.
- **Production Status**: Deployed site `https://school-management-dashboard-fullsta.vercel.app` verified live; `/api/login` and dashboard routes return HTTP/2 200 OK.
- **Zero Dummy/Showcase Features**: All entities, metric cards, modals, and settings are 100% connected to live database operations and server actions.
- **Lesson Management**: Created `LessonForm.tsx` and wired into `FormContainer` and `FormModal`, completing full CRUD for lessons.
- **Dynamic Performance & Metrics**:
  - `Performance.tsx` refactored to compute real slices dynamically.
  - Student detail (`/list/students/[id]`) queries real `Result` records and computes live GPA / average score.
  - Teacher detail (`/list/teachers/[id]`) computes real attendance percentage across supervised/taught classes and live performance scores across all taught lesson exams/assignments.
- **Settings & Navbar**:
  - `SettingsPage` queries Prisma for user's actual profile data; `SettingsClientPage` invokes `updateProfile` server action to persist changes (with `bcrypt` password verification) and saves preferences to local storage.
  - Navbar announcement bell icon displays real dynamic unread count and links directly to `/list/announcements`.
  - Announcements card "View All" connects directly to `/list/announcements`.
- **UserCard & Charts**:
  - Dynamic academic year computation (`${year}/${(year+1)}`).
  - `CountChartContainer` guarded against division by zero.
- **Engineering Quality**:
  - All 21 Vitest tests passing (`npm test`).
  - ESLint passing with zero warnings (`npm run lint`).
  - Production build passing with zero errors (`npm run build`).
