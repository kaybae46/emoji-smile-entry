// One Emoji, One Smile — make.fun entry
// https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f
//
// The task: send exactly one emoji, the one most likely to make a stranger
// smile. The program writes that emoji to /output/entry.txt and nothing else.
//
// The choice: 🫶 U+1FAF6 HEART HANDS.
//
// Why this emoji, against the judge's brief (warmth at first glance, most
// important first):
//   1. Warm and friendly: two hands forming a heart is a direct gesture of
//      warmth — it reads as kind before any second thought.
//   2. Warmth at first glance: no context needed; a stranger glancing at a
//      phone screen reads "sending love" instantly.
//   3. Universality: no irony, no in-joke, no words; the heart-hands
//      gesture is read the same way by any age or background.
//   4. Chosen, not default: it is not the first smiley that comes to mind
//      (😊), so it feels picked for the moment while staying readable.
//   5. Right for a stranger: it is affectionate without intimacy —
//      unlike 🥰 (flirtatious) or 🤗 (a hug from someone unknown), it
//      carries no closeness a stranger would read as odd.
//
// Rejected alternatives: 😊 (the default smiley, loses on "chosen"),
// 🥰 (reads as flirtation from a stranger), 🤗 (a hug is too familiar),
// 🌻 and ☀️ (cheerful, but objects — less direct warmth than a gesture),
// 💛 (warm, but a plain heart is less expressive than the hands).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single emoji this entry sends.
const EMOJI = "🫶";

// The gate the sealed scorer applies: /output/entry.txt must be UTF-8 text
// of 1 to 8 characters and not only white space. Enforce it here so a
// bad value fails loudly in the run instead of silently at grading time.
// [...EMOJI] counts Unicode code points, so one emoji counts as one.
const charCount = [...EMOJI].length;
if (charCount < 1 || charCount > 8 || EMOJI.trim().length === 0) {
  throw new Error(`entry must be 1-8 non-blank characters, got ${charCount}`);
}

// The grader runs the program in a sandbox where the output directory is
// /output. A local run can point it elsewhere with OUTPUT_DIR, which is
// read here only as a path (data), never run as code.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, EMOJI, "utf8");
console.log(`wrote ${EMOJI} (${charCount} character) to ${outputPath}`);
