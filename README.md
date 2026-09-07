# 🏫 School Management System & ERP Dashboard

[![CI](https://github.com/hashirsajid58200p/school-management-dashboard-fullstack/actions/workflows/ci.yml/badge.svg)](https://github.com/hashirsajid58200p/school-management-dashboard-fullstack/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.19-2D3748.svg)](https://www.prisma.io/)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-6E9F18.svg)](https://vitest.dev/)

A full-stack, enterprise-grade School Management System designed for educational institutions to streamline administrative workflows, simplify student lifecycle tracking, schedule conflict-free timetables, and empower real-time communication between administrators, teachers, students, and parents.

---

## 🌟 Key Features

- **Role-Based Access Control (4 Portals):**
  - **Admin:** Complete institutional oversight, user creation, class scheduling, automated promotions, and financial ledger management.
  - **Teacher:** Class rosters, daily attendance submission, timetable viewing, exam & assignment grading.
  - **Student:** Personal timetable, assigned homework, grades/exam results, attendance tracking.
  - **Parent:** Multi-child performance tracking, attendance history, teacher communication, fee status.
- **AI-Powered Conflict-Free Timetable Generator:**
  - Backtracking constraint solver that generates automated school timetables across 5 weekdays and 5 time slots.
  - Guarantees zero teacher double-booking and zero classroom collisions, wrapped in atomic database transactions.
- **Academic Year Promotion Engine:**
  - In-memory snapshot pipeline that promotes students safely across grades (Grade 1 $\rightarrow$ 10, graduating cohort recycling to Grade 1) with automatic section re-balancing.
  - Prevents double-promotion bugs via pre-execution state isolation inside atomic Prisma transactions.
- **Daily Attendance & Monthly Aggregation:**
  - Fast attendance marking with DB-enforced `(studentId, date)` uniqueness constraints and automated monthly percentage summaries.
- **Real-Time Messaging:**
  - WebSocket-powered direct messaging built with Pusher Channels, message history, and unread counters.
- **Dynamic URL-Driven Filtering & Sorting:**
  - Server-side sorting (`?sort=asc|desc`) and filtering across all 11 catalog list pages (Students, Teachers, Classes, Parents, Subjects, Lessons, Exams, Assignments, Results, Events, Announcements).
- **Interactive Finance Dashboard:**
  - Real-time aggregation of tuition payments and operational expenses by month, backed by a persistent `FeePayment` ledger.

---

## 🔒 Security Architecture & Hardening

This codebase underwent a security audit and migration away from third-party vendor lock-in (Clerk) to a self-contained, auditable authentication system:

1. **Signed Session Tokens (`jose` / HS256):**
   - Sessions are cryptographically signed using a server-only secret (`SESSION_SECRET`, never exposed to clients).
   - Cookies are tamper-proof with a 7-day `exp` claim. Any tampering or unsigned base64 modifications are rejected immediately by Edge middleware.
2. **Server-Side Authorization (`requireRole`):**
   - Server Actions independently verify the caller's role directly from the verified session claims before executing database mutations (`requireRole(["admin"])`).
   - Prevents bypasses from direct POST server-action invocations.
3. **Bcrypt Password Hashing:**
   - Replaced all legacy plaintext password storage with 10-round `bcryptjs` hashing across seeds and CRUD actions.
4. **Brute-Force Rate Limiting:**
   - `/api/login` implements an in-memory IP + email sliding window rate limiter, enforcing 429 lockout after 5 consecutive failed attempts.
5. **Database Integrity & Atomic Transactions:**
   - All multi-step actions (`promoteAcademicYear`, `generateAITimetable`, `generateAttendanceSimulation`, `archiveMonthlyAttendanceLogs`) run inside `prisma.$transaction`.
   - Solvers roll back deletions automatically if a conflict-free solution cannot be found.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router, Server Components & Server Actions)
- **Language:** TypeScript 5.5
- **Styling:** Tailwind CSS, React Toastify, Lucide Icons
- **Database & ORM:** Prisma ORM 5.19 (SQLite for local zero-setup dev; PostgreSQL for production)
- **Forms & Validation:** React Hook Form + Zod (`@hookform/resolvers/zod`)
- **Visualizations:** Recharts, React Big Calendar
- **Real-Time:** Pusher Channels
- **Media Uploads:** Cloudinary (`next-cloudinary`)
- **Testing:** Vitest 1.6
- **Containerization:** Docker & Docker Compose (Multi-stage build, standalone Next.js server)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/hashirsajid58200p/school-management-dashboard-fullstack.git
cd school-management-dashboard-fullstack
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and configure your credentials:
```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
|---|---|---|
| `DATABASE_URL` | Prisma DB connection string | `file:./dev.db` (SQLite) or `postgresql://...` |
| `SESSION_SECRET` | Cryptographic secret for session signing | Min. 32 character random string |
| `PUSHER_*` | Pusher Channels credentials for chat | From [Pusher Dashboard](https://pusher.com) |
| `CLOUDINARY_*` | Cloudinary credentials for photo uploads | From [Cloudinary Console](https://cloudinary.com) |

### 3. Install Dependencies & Generate Prisma Client
```bash
npm install --legacy-peer-deps
npx prisma generate
```

### 4. Seed the Database
Populate test accounts across all roles, sample lessons, conflict-free schedules, and financial records:
```bash
npx prisma db seed
```

### 5. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Demo Credentials

All seed accounts use the default password: **`password`**

| Role | Username | Email |
|---|---|---|
| **Admin** | `admin` | `admin@school.com` |
| **Teacher** | `teacher_1` | `teacher1@school.com` |
| **Student** | `student_test` | `student@school.com` |
| **Parent** | `parent_1` | `parent1@school.com` |

---

## 🐳 Docker Deployment

The application includes a production-ready, multi-stage Docker build utilizing Next.js `standalone` mode and automated database migrations:

```bash
# Start PostgreSQL and the Next.js container
docker-compose up --build -d
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## 🧪 Testing & Continuous Integration

Run the automated test suite covering authentication security, academic year promotion logic, timetable solver conflict-freedom, and Zod schemas:

```bash
# Run unit tests
npm test

# Run linter
npm run lint

# Run TypeScript type check
npx tsc --noEmit
```

GitHub Actions runs every commit against automated linting, type-checking, test suite execution, and production builds (`.github/workflows/ci.yml`).

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
