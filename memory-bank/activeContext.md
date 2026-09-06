# Active Context

## Current Status
- Project onboarding analysis completed.
- Git repository clean on branch `main`, synced with `origin/main`.
- `memory-bank/` established per Global Agent Rules (Rule 2).

## Recent Git Commit History
1. `255dda6` - `style: integrate CustomSelect dropdowns and resize svg icons inside SettingsPage`
2. `caff0c5` - `feat: implement dynamic settings page dashboard with profile updates, notifications settings, and security controls`
3. `3011f99` - `style: pass full names to UserAvatar in lists to display two-character initials`
4. `5557fac` - `style: reposition dynamic calendar heading above class selection tabs, refactor avatars to modern initials monograms`
5. `0a32107` - `style: position calendar toolbar at top-right of dynamic heading, refactor avatars to premium shape silhouettes`

## Key Architecture & Conventions
- **Server Actions & Forms**: Form operations in `src/lib/actions.ts` validated with schemas in `src/lib/formValidationSchemas.ts`. Modal form rendering handled via `FormContainer.tsx` and `FormModal.tsx`.
- **Authentication**: Custom cookie-based authentication via `auth_session` cookie (`src/lib/session.ts`), verified in `src/middleware.ts` and `src/lib/auth.ts`.
- **Data Fetching**: Next.js Server Components fetching directly from Prisma (`src/lib/prisma.ts`), with Client Components used for interactive tables, attendance selector, and calendar components.
- **Styling**: Tailwind CSS with custom palette classes (`hsSky`, `hsPurple`, `hsYellow`) and responsive grid layouts.

## Next Steps
- Awaiting user instructions on features, enhancements, or bug fixes.
