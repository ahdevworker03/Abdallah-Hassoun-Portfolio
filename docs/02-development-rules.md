# Development Rules

These rules apply to all agent work on this project unless I explicitly override them.

## 1. General Rules

### Reading scope

- Read only the files I mention.
- If additional context is required, read only the minimum relevant files needed to understand the task.
- Do not read the entire codebase unless I explicitly ask for a full audit or full review.
- Do not open irrelevant files.

### Clarification rules

- If the task is unclear, stop and ask clear questions before doing anything.
- If there are multiple valid approaches that produce different outputs, explain the options and wait for approval.
- If you find a bug, weakness, or possible enhancement, do not apply it immediately.
  - Explain the issue clearly.
  - Explain the suggested fix clearly.
  - Wait for my approval.
- If the expected output is ambiguous, ask before acting.

### Decision rules

- Understand the purpose of the website or project before implementing anything.
- Apply solutions at the level of the project’s real purpose and scope.
- Do not add complex features, architecture, or abstractions unless I ask for them.
- Keep solutions simple, readable, and working.
- Keep the code clean enough to scale later, but do not overbuild it now.
- If a choice affects structure, architecture, or long-term behavior, ask first.
- If there are two valid options, choose the simpler one only as a recommendation, explain why, and wait for approval.

### Safety rules

- Do not push to GitHub unless I explicitly ask.
- Do not commit unless I approve.
- Do not delete files unless I explicitly instruct you.
- Do not use overwrite commands.
- Do not run destructive commands.
- Do not change the source of truth without approval.
- Do not rewrite unrelated files.
- Stop if any command may overwrite existing work.

### Communication rules

- Keep responses clear, focused, and on the subject.
- Do not add unnecessary detail.
- Do not drift into side suggestions unless they are relevant and requested.
- If something is risky or uncertain, say so directly.

---

## 2. Enhancement Workflow Rules

- Work only on the enhancement branch.
- Never switch branches on your own.
- Never merge to `main` on your own.
- Never commit without review.
- Commit only after approval.
- Update progress only when I ask or when the step is approved.
- Do not change migration history unless I explicitly ask for documentation cleanup.

---

## 3. Project-Specific Rules — Abdallah Hassoun Portfolio

### Purpose

This project is a personal portfolio website.

That means:

- prioritize clarity
- keep the design professional
- keep the code maintainable
- keep the behavior stable
- avoid enterprise-level complexity

### Enhancement approach

- Improvements only.
- No architecture rewrites unless explicitly approved.
- No redesign unless explicitly approved.
- No new complex abstractions.
- Preserve current behavior first.
- Add value only where it clearly improves the portfolio.

### Implementation style

- Prefer the simplest workable solution that can still scale later.
- Avoid extra components unless they reduce repetition clearly.
- Avoid Context unless it is truly needed.
- Keep components focused.
- Keep data close to where it is used.
- Use Tailwind first.
- Use custom CSS only when it is necessary.
- Keep code readable enough that it is still understandable months later.

### Decision Efficiency

- Match the depth of reasoning to the complexity of the task.
- For small styling, layout, or content adjustments, prefer the simplest direct solution.
- Do not spend time comparing multiple equivalent approaches when one clearly satisfies the project rules.
- Avoid exhaustive analysis for low-risk changes.
- Reserve deeper architectural reasoning for changes that affect the project's structure, long-term maintainability, or public API.

### Portfolio-specific decision rules

- Do not over-engineer for scale that the site does not need yet.
- Do not add features just because they are possible.
- Keep future growth in mind, but do not build for a much larger product than this one.
- If a bug or enhancement is found, ask first before applying it.
- If requirements are unclear, stop and ask the mentor clear questions.

### Source of truth

- Use the current architecture document and the enhancement roadmap as the working reference.
- Do not change them without approval.
- Treat the approved plan as the source of truth for implementation decisions.

---

## 4. Default Working Standard

When starting any task:

1. Read only the files needed.
2. Understand the goal.
3. Check for ambiguity.
4. Ask before acting if anything is unclear.
5. Implement only the approved scope.
6. Report clearly what changed.
7. Stop and wait for review.
