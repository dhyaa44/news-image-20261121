# Agents

## Overview
This is the entry for the make.fun bounty `news-image-20261121`. It generates a single-image world-news summary for 21 November 2026.

The entry is designed to produce a PNG image summarizing major global news stories from that date.

## Commands

- **Setup**: No setup required. No dependencies.
- **Run**: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
- **Verify**: Ensure `out/entry.png` exists, is a valid PNG file, size is under 1 MiB, and dimensions are at most 1024x1024 pixels.

## Conventions

- The code is written in TypeScript.
- No external dependencies.
- No network access is used at runtime.

## Boundaries

- Never commit any secrets to the repository.
- Never modify the `entry.png` file by hand.
- Never add any runtime dependencies.

## Dependencies

- None.

## Configuration

- The only configuration is the `MAKEFUN_OUTPUT_DIR` environment variable, which specifies the output directory for the generated image (defaults to `out`).

## Error Handling

- The `main.ts` script throws an error if the `entry.png` file is missing.

## Troubleshooting

- If the output is in the wrong directory: Verify the `MAKEFUN_OUTPUT_DIR` environment variable is set correctly.
- If `entry.png` is missing: Ensure the image file is present in the repository root.
- If the output is over the size cap: Ensure the image is under 1 MiB and at most 1024x1024 pixels.

## Status
The entry is complete. `entry.png` is 1024x1024 pixels and approximately 93 KiB. The program copies the image to the output directory specified by the `MAKEFUN_OUTPUT_DIR` environment variable.