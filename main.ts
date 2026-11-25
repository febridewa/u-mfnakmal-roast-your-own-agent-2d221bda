// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// One original line roasting my own AI agent. The joke: asked for a roast,
// the agent turned a one-line job into a bureaucratic production — three
// subagents, a meeting — and then charged me for the privilege, in tokens.
// Fresh angle (agent bureaucracy + token billing), tight setup, punchline last.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my agent for a one-line roast. It spawned three subagents, held a meeting, then billed me for the tokens.";

// Hard guard: the gate allows 1–200 characters. Fail loudly rather than
// ever shipping an over-long (invalid, unjudged) line.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`roast line is ${LINE.length} chars; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
