---
title: "OmniRoute: One Gateway for All Local Agents"
description: "Five agents, five API formats, five configs — until everything started pointing at localhost:20128."
date: 2026-08-14
lang: en
tags: ["ai", "infra", "docker"]
---

My stack runs on agents: Kiro, nekocli, opencode, OpenDesign, DSH.
Each speaks a slightly different DIALECT of the same idea — an
Anthropic-compatible messages API — and each wanted its own key,
base URL and config file.

## The problem is config drift

Every new agent meant another `.env`, another place for a token to
leak, another "which URL was it again?". And when a model moved,
I edited five files.

## One endpoint

OmniRoute is a Docker service at `localhost:20128/v1` that emulates the
Kiro/Anthropic API and routes to whatever backends are configured:

```
Kiro ───────┐
nekocli ────┤
opencode ───┼──► OmniRoute:20128 ──► models
OpenDesign ─┤
DSH ────────┘
```

- One URL, one secret, five consumers.
- Model aliases: `sonnet-4.5`, `sonnet-5`, `haiku` — mapped centrally.
- DB backups and maintenance scripts ship with it.

## Local-first, always

The gateway runs on my machine. Nothing routes through someone else's
account, no telemetry leaves the box, and pulling the network cable
doesn't break the pipeline.

Config drift went from five files to one. That's the whole pitch.
