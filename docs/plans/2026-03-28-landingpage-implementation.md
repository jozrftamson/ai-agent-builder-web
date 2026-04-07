# Landingpage Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Build a strong first landing page for ai-agent-builder-web that clearly communicates the product vision, agent roles, workflows, and call-to-action.

**Architecture:** Start with a framework-neutral static landing page using `index.html` and `assets/styles.css` so copy, structure, and visual direction can be validated immediately. Keep the page modular by section so it can later be ported into Next.js or Nuxt components without rewriting the messaging.

**Tech Stack:** HTML, CSS, simple Python smoke test

---

### Task 1: Define page structure and messaging

**Objective:** Turn the project vision into a clear landing-page section order and message hierarchy.

**Files:**

- Create: `docs/plans/2026-03-28-landingpage-implementation.md`
- Read: `README.md`
- Read: `playbook/04-agent-rollen.md`

**Step 1: Identify required sections**

Required sections:

- hero
- social proof / trust strip
- agent roles
- workflow / how it works
- feature blocks
- final CTA

**Step 2: Define copy direction**

Messaging rules:

- speak to builders, AI engineers, and teams
- focus on outcomes, not generic AI hype
- connect each agent to a practical result

**Step 3: Verification**

Expected outcome: a section list that is specific enough to implement directly in HTML.

### Task 2: Add failing smoke test

**Objective:** Create a simple automated test that fails until the landing page contains the required sections and headline.

**Files:**

- Create: `tests/test_landingpage.py`
- Target: `index.html`

**Step 1: Write failing test**
The test should assert that `index.html` exists and contains required section IDs and core phrases.

**Step 2: Run test to verify failure**
Run: `python3 tests/test_landingpage.py`
Expected: FAIL because `index.html` does not exist yet.

### Task 3: Implement landing page

**Objective:** Create the first production landing page with strong content and polished styling.

**Files:**

- Create: `index.html`
- Create: `assets/styles.css`

**Step 1: Build semantic HTML**
Include:

- navigation
- hero
- proof strip
- agent cards
- workflow timeline
- platform/value section
- final CTA
- footer

**Step 2: Add polished CSS**
Design goals:

- dark premium aesthetic
- vibrant accent gradients
- readable typography
- responsive cards and sections

**Step 3: Verification**
Page should be visually strong and clearly communicate the product in one scroll.

### Task 4: Verify and document

**Objective:** Confirm the landing page works and update project documentation if needed.

**Files:**

- Modify: `README.md` if useful later
- Run: browser/manual validation

**Step 1: Run smoke test**
Run: `python3 tests/test_landingpage.py`
Expected: PASS

**Step 2: Open page in browser and inspect visually**
Expected: all sections visible, responsive enough for first version, copy coherent.

**Step 3: Commit**

```bash
git add docs/plans/2026-03-28-landingpage-implementation.md tests/test_landingpage.py index.html assets/styles.css
git commit -m "feat: add first landing page"
```
