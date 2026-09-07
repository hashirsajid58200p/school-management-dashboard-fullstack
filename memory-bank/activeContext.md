# Active Context

## Current Status
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
- **Deployment & Vercel Readiness**:
  - Purged legacy Clerk mock code (`clerkClient`, `useClerk`) in favor of native standard `crypto.randomUUID()`.
  - Optimized `jose` imports (`jose/jwt/sign` and `jose/jwt/verify`) eliminating Edge Runtime deflate warnings.
  - Build script configured as `"prisma generate && next build"`.
  - All 21 Vitest tests passing (`npm test`), ESLint passing with zero warnings (`npm run lint`), and production build passing (`npm run build`).
