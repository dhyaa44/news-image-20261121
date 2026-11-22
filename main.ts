import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const makefunOutputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(makefunOutputDir, 'entry.png'));