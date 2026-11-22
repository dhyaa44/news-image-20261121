# AGENTS.md

## Overview

One-day world-news image entry for the make.fun bounty `news-image-20261121`. The deliverable is a single `entry.png` (max 1 MiB, max 1024x1024 px, PNG or JPEG by magic bytes) at the repository root; `main.ts` (Node 22+, standard library only) copies it to `/output/entry.png`. No package manager, no dependencies, no network at runtime.

## Commands

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # produce /output/entry.png locally
```

## Conventions

- `main.ts` is the entrypoint and must stay standard-library only.
- The image is the entry: every byte the judge sees comes from `entry.png`.
- Keep `entry.png` under 1048576 bytes and at most 1024x1024 px.

```ts
import { copyFileSync } from 'node:fs';
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
```

## Boundaries

- **NEVER** add a network request, a dependency, or a build step.
- **NEVER** resize or recompress `entry.png` inside `main.ts` — the judge sees the file bytes as committed.
- **ALWAYS** keep the committed `entry.png` byte-identical to what `main.ts` copies.

## Dependencies

None. Node 22.18+ only.

## Config

`MAKEFUN_OUTPUT_DIR` overrides `/output` when running outside the grader.

## Error Handling

`main.ts` must exit 0 on both grader runs and produce identical bytes each time. Do not add randomness, timestamps, or environment-dependent output.

## Troubleshooting

- **Gate refuses the image**: over 1 MiB, over 1024x1024, or not a whole PNG/JPEG. Re-encode and re-commit.
- **Two runs differ**: `main.ts` is doing something non-deterministic. It must only copy the file.
