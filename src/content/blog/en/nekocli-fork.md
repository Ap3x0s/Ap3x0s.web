---
title: "Forking Claude Code into a Local-First Agent Runner"
description: "nekocli: stripped telemetry, token economy, RU layout support — and what it costs to maintain your own agent CLI."
date: 2026-07-02
lang: en
tags: ["ai", "cli", "opensource"]
---

Using an agent daily means inheriting its annoyances daily.
After the Nth time paying for tokens I didn't read and seeing
telemetry I didn't opt into, I forked.

## What nekocli changed

- **Telemetry: zero.** Every analytics call removed at the source,
  not disabled by config — configs get forgotten.
- **Local models through OmniRoute.** Same UI, backends I control.
- **Token economy.** Read-once cache (a file costs its tokens once
  per session), Terse output style (−40–50% tokens), diff mode that
  only ships the patch.
- **Pickers with RU layout.** Model / thinking / context switchers
  that don't break when CapsLock is Cyrillic — small thing, huge
  daily annoyance.
- **Reactive UI layer.** Token percentage, status mascot, so long
  runs don't feel like a hung process.

## What maintenance actually costs

98+ commits in, the real bill isn't code — it's **staying in sync**.
Upstream moves fast. My strategy: keep the fork surface small,
abstract the seams early, and re-test the whole loop after every
sync.

> A fork is a subscription you pay in attention.

Worth it? Every day I use it, yes. The discipline of maintaining it
is the price of an agent that behaves like mine should: local,
quiet, and yours.
