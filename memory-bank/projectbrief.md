# Project Brief: School Management Dashboard

## Overview
A comprehensive full-stack School Management System built with Next.js (App Router), React, TypeScript, Tailwind CSS, Prisma ORM, and SQLite (local) / PostgreSQL (production docker). It supports four distinct user roles: **Admin**, **Teacher**, **Student**, and **Parent**, providing role-tailored dashboards, schedule calendars, attendance tracking, exam/assignment evaluations, announcements, event notifications, and realtime messaging.

---

## Core Architecture & Tech Stack

- **Framework**: Next.js 14.2.5 (App Router, Server Actions, API Routes)
- **Frontend / UI**:
  - React 18, TypeScript
  - Tailwind CSS 3.4.1 (with custom tokens `hsSky`, `hsPurple`, `hsYellow`, etc.)
  - React Hook Form 7.52.2 + Zod 3.23.8 for validation
  - Recharts for data visualizations (finance, attendance, counts)
  - React Big Calendar & React Calendar for scheduling and events
  - React-Toastify for feedback notifications
- **Database & ORM**:
  - Prisma ORM 5.19.1
  - Database: SQLite (`prisma/dev.db`) in local development; PostgreSQL container option (`docker-compose.yml`, `Dockerfile`)
- **Authentication & Authorization**:
  - Custom session cookie authentication (`auth_session` cookie storing encrypted JSON payload via `src/lib/session.ts`)
  - Middleware route protection (`src/middleware.ts`) enforcing role-based permissions (`src/lib/settings.ts`)
  - Mock Clerk client interface (`src/lib/auth.ts`) allowing seamless migration from Clerk to self-hosted auth without rewriting existing server action signatures
- **External Services**:
  - **Cloudinary**: Media/image asset storage via `next-cloudinary` (`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`)
  - **Pusher**: Realtime messaging and live notification triggers (`src/lib/pusher.ts`, `src/lib/pusher-client.ts`)

---

## Multi-System Data Mapping (Rule 9)

| Entity | Primary Database (SQLite / Postgres) | External Asset / Service | Notes & Synchronization Rules |
| :--- | :--- | :--- | :--- |
| **Student** | Prisma `Student` model (records, relations to Parent, Class, Grade) | Cloudinary (`img` URL) | When updating/deleting student, profile image should be managed cleanly; password/session synced |
| **Teacher** | Prisma `Teacher` model (records, subject & class links) | Cloudinary (`img` URL) | Image in Cloudinary; relations to Lessons & Classes in DB |
| **Parent** | Prisma `Parent` model (contact, linked students) | None / Gravatar-like UI initials | Passwords stored in DB |
| **Admin** | Prisma `Admin` model | None / UI initials | Authentication & administrative operations |
| **Message** | Prisma `Message` model | Pusher channels & events | Creating a message persists to DB and triggers realtime Pusher event (`chat-[userId]` channel) |
| **Attendance**| Prisma `Attendance` & `MonthlyAttendanceSummary` | None (DB-only) | Computes monthly percentages and status reports |
| **Event / Announcement**| Prisma `Event`, `Announcement` | Pusher (if notification broadcasts enabled) | Linked to specific classes or school-wide |

---

## Design System & Responsive Breakpoint Standards (Rule 10)

- **Standard Breakpoints**:
  - `sm`: 640px (Mobile landscape)
  - `md`: 768px (Tablets)
  - `lg`: 1024px (Laptops / Small desktops)
  - `xl`: 1280px (Desktops)
  - `2xl`: 1536px (Large desktops / Ultra-wide)
- **Fluid Layout Conventions**:
  - Sidebar: `w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]`
  - Content area: `w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]`
  - Standard max container widths and responsive flex/grid layouts used across lists, charts, and form modals.
- **Custom Color Tokens**:
  - `hsSky`: `#C3EBFA`, `hsSkyLight`: `#EDF9FD`
  - `hsPurple`: `#CFCEFF`, `hsPurpleLight`: `#F1F0FF`
  - `hsYellow`: `#FAE27C`, `hsYellowLight`: `#FEFCE8`
