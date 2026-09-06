# Project Upgrade & Hardening Progress

Track the implementation and verification of all critical upgrades across the 5 phases.

## Phase 1: Security Critical
- [ ] **1.1 Password Hashing with bcrypt**: Hash passwords using bcryptjs on user creation, updates, and seed; use `bcrypt.compare` for login and settings; eliminate all raw `=== password`/`!== password` comparisons.
- [ ] **1.2 Purge SQLite DB from Git History**: Add `prisma/*.db` and `*.db` to `.gitignore`, run `git-filter-repo` to permanently eradicate `prisma/dev.db` from all commit history.
- [ ] **1.3 Signed Session Tokens with `jose`**: Replace raw base64 encoding with cryptographically signed JWTs using `jose` and `SESSION_SECRET`; enforce expiry check; reject tampered tokens.
- [ ] **1.4 Server-Side Authorization Checks in `actions.ts`**: Implement `requireRole` helper in `src/lib/auth.ts`; enforce role verification on all mutating server actions in `actions.ts`.
- [ ] **1.5 Fix Delete Action Map and Implement Missing Deletes**: Create real server actions for `deleteAssignment`, `deleteResult`, `deleteAnnouncement`; map correctly in `FormModal.tsx` and eliminate accidental `deleteSubject` mappings.
- [ ] **1.6 Login Brute-Force Rate Limiting**: Implement rate limiting on `/api/login` keyed by IP/email with cooldown lockout to thwart automated brute-force attacks.

## Phase 2: Data Integrity Bugs
- [ ] **2.1 Timetable Generator Transaction Rollback**: Wrap `generateAITimetable` in `prisma.$transaction`; rollback data wipe if timetable solver fails to find a valid schedule.
- [ ] **2.2 Fix Academic Year Double Promotion**: Snapshot student state in memory before promotions to prevent recycled Grade 10 students from double-promoting to Grade 2.
- [ ] **2.3 Atomic Transactions for Multi-Step Mutations**: Wrap `promoteAcademicYear`, `generateAITimetable`, `generateAttendanceSimulation`, and `archiveMonthlyAttendanceLogs` in `prisma.$transaction`.
- [ ] **2.4 Attendance Unique Constraint & Race-Condition-Safe Upsert**: Add `@@unique([studentId, date])` to `Attendance` schema, generate migration, and replace manual duplicate checks with `prisma.attendance.upsert`.
- [ ] **2.5 Fix Results Table Student Surname Typo**: Correct student surname rendering in `src/app/(dashboard)/list/results/page.tsx`.

## Phase 3: Incomplete Features
- [ ] **3.1 Forms & Actions for Assignment, Result, Announcement**: Add Zod validation schemas, server actions, and Form components (`AssignmentForm`, `ResultForm`, `AnnouncementForm`); register in `FormModal.tsx` and `FormContainer.tsx`.
- [ ] **3.2 Complete Sort & Filter on All List Pages**: Wire up `SortButton` and `FilterButton` with query logic across all 8 remaining list pages (Parents, Subjects, Lessons, Exams, Assignments, Results, Events, Announcements).
- [ ] **3.3 Finance Dashboard Card Real Data Integration / Transparent Labeling**: Connect Finance card to real financial records or clearly label as demo data.

## Phase 4: Production Readiness & DevOps
- [ ] **4.1 Fix Docker Compose Configuration**: Fix YAML syntax, rename service to `postgres`, and resolve host networking.
- [ ] **4.2 Multi-Stage Production Dockerfile**: Implement multi-stage build, standalone Next.js output, non-root user, and start-time migrations.
- [ ] **4.3 PostgreSQL Production Provider Setup**: Document and configure PostgreSQL datasource support for cloud deployments.
- [ ] **4.4 Environment Configuration Documentation (`.env.example`)**: Provide comprehensive `.env.example` with documented environment variables.

## Phase 5: Engineering Hygiene
- [ ] **5.1 Automated Testing Suite & CI Workflow**: Add Vitest unit test suite covering `requireRole`, academic year promotion, timetable constraints, and Zod schemas; add GitHub Actions CI pipeline (`.github/workflows/ci.yml`).
- [ ] **5.2 Production README**: Overhaul `README.md` with complete documentation, architecture, security features, and local development guide.
- [ ] **5.3 Differentiated Action Error Feedback**: Return descriptive error messages in `CurrentState` across server actions and display them in UI toasts.

---
## Summary of Changes
*(Will be updated upon completion of each phase)*
