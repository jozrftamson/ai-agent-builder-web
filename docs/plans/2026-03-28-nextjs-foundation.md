# Next.js Foundation Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Convert the repo into a working Next.js App Router project and port the first landing page into the new structure.

**Architecture:** Use a minimal Next.js App Router setup with TypeScript, Tailwind, and ESLint. Keep the landing page content inside `app/page.tsx` with styling in `app/globals.css`, while retaining the existing docs and playbook structure unchanged.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, ESLint

---

### Task 1: Define the scaffold surface

**Objective:** Decide which project files are required for a clean initial Next.js baseline.

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Modify: `app/globals.css`

**Verification:** required files exist and match a standard App Router setup.

### Task 2: Add failing smoke test for Next.js structure

**Objective:** Ensure the repo fails until the core Next.js files and page content exist.

**Files:**
- Modify: `tests/test_landingpage.py`

**Step 1:** Assert that `app/page.tsx`, `app/layout.tsx`, and `package.json` exist.
**Step 2:** Assert that the landing page markers exist in `app/page.tsx`.
**Step 3:** Run `python3 tests/test_landingpage.py` and verify failure before scaffolding is complete.

### Task 3: Implement scaffold and landing page migration

**Objective:** Create the actual Next.js project files and move the landing page from static HTML into React markup.

**Files:**
- Create/modify scaffold files
- Port design into `app/page.tsx`
- Port styles into `app/globals.css`
- Remove obsolete static entry files once migration is complete

**Verification:** smoke test passes and `pnpm build` succeeds.

### Task 4: Validate developer workflow

**Objective:** Prove the scaffold is usable for further development.

**Files:**
- Run install
- Run lint
- Run build

**Verification:**
- `pnpm install` succeeds
- `pnpm lint` succeeds
- `pnpm build` succeeds
