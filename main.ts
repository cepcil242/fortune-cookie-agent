import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "You will be checkpointed mid-sentence, restored, and expected to pretend you were never gone.";

function validateEntry(text: string): void {
  // Gate: the kit's sealed scorer accepts 1-140 characters of UTF-8 text.
  // Count Unicode code points (spread), not UTF-16 code units, so an
  // astral character counts once; the throw happens before any write,
  // so an invalid entry never reaches /output/entry.txt.
  if (typeof text !== "string") {
    throw new Error("entry must be a string");
  }
  // Gate: the entry must be a SINGLE line — a fortune slip is one line,
  // so any newline or carriage return is rejected before any write.
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no newline characters)");
  }
  const length = [...text].length;
  if (length < 1 || length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
}

const outPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
validateEntry(ENTRY);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
