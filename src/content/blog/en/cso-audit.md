---
title: "CSO Audit: SQLi, SSRF and JWT Leaks in My Own Product"
description: "Why I run security audits against my own code before anyone else does — and what ISSUE-001 through ISSUE-006 actually found."
date: 2026-09-20
lang: en
tags: ["security", "audit", "tgtwitchapp"]
---

The best time to find a SQL injection is before a stranger does.

For release 2.99 of TGTWITCHAPP I ran my own CSO/qa audit — the same
checklist I'd run on someone else's codebase, turned inward. Six issues,
ISSUE-001 through ISSUE-006:

## What was found

- **SQLi** — one raw query built from user-supplied sort parameters.
  Parameterized queries were the norm, but one "fast path" escaped them.
- **SSRF** — a webhook helper fetched URLs provided by the client.
  It had no allow-list. Trivial to point at `169.254.169.254`.
- **JWT leaks** — tokens were logged verbatim on auth failures.
  Useful for debugging, catastrophic in a log aggregator.
- **Auth bypass** — one admin route checked the role in the token but
  never re-verified ownership of the resource.
- **Memory leak** — a Socket.io room kept references to disconnected
  sockets under reconnect storms.

## The fix isn't the lesson

Every fix was mechanical: parameterize, allow-list, redact, re-verify,
unref. The lesson is cultural: **proof before "done"**.

My pipeline now has a hard gate:

1. QA registry — every bug written down, with repro steps.
2. Self-audit pass — OWASP top 10 against my own diff.
3. Only then: release.

> Verification before completion. Evidence before assertions.

The audit took an afternoon. The alternative — being told about it in a
Telegram DM three weeks later — costs trust you don't get back.
