# Citation Evidence (side-by-side)

Issue 1 — maxRetries: documented range vs code

- Documentation (README.md, lines 7-9):
  > "### maxRetries\n  - Type: number\n  - Range: 0–10"

- Code (input.ts, lines 15, 18-20):
  > line 15: const maxRetries = options?.maxRetries ?? 3;\n  > lines 18-20: if (maxRetries < 1 || maxRetries > 5) { throw new Error("maxRetries must be between 1 and 5"); }

- Why it's incorrect: README claims the allowed range is 0–10, but the implementation defaults to 3 and enforces 1–5. A value outside 1–5 will throw at runtime.

---

Issue 2 — maxRetries: documented default vs code

- Documentation (README.md, line 10):
  > "- Default: 1"

- Code (input.ts, line 15):
  > "const maxRetries = options?.maxRetries ?? 3;"

- Why it's incorrect: the code's default is 3 (used when the option is omitted or nullish); README states 1.

---

Issue 3 — maxRetries: semantic description

- Documentation (README.md, line 11):
  > "- Description: Number of retry attempts before failing."

- Code (input.ts, lines 26, 32-35):
  > "let attempts = 0;"\n  > "attempts++; if (attempts >= maxRetries) { throw err; }"

- Why it's incorrect: the implementation treats `maxRetries` as the maximum *total attempts* (initial attempt + retries). Therefore the number of retry attempts performed equals `maxRetries - 1`. Example: `maxRetries: 1` => 0 retries.

---

Issue 4 — backoffMs: documented default vs code

- Documentation (README.md, line 15):
  > "- Default: 100"

- Code (input.ts, line 16):
  > "const backoffMs = options?.backoffMs ?? 1000;"

- Why it's incorrect: default in code is 1000ms, not 100ms.

---

Issue 5 — backoffMs: missing minimum constraint in docs

- Documentation (README.md, lines 13-16):
  > (no minimum stated)

- Code (input.ts, lines 16 and 22-24):
  > "const backoffMs = options?.backoffMs ?? 1000;"\n  > "if (backoffMs < 500) { throw new Error(\"backoffMs must be at least 500ms\"); }"

- Why it's incorrect: passing a value < 500 will throw at runtime; the README does not warn about this.

---

Issue 6 — Example in README is invalid

- Documentation (README.md, lines 20-24):
  > "executeWithRetry(fetchData, {\n  maxRetries: 0,\n  backoffMs: 100\n});"

- Code (input.ts, lines 18-20 and 22-24):
  > range check for `maxRetries` and minimum check for `backoffMs` (both would throw for the example values).

- Why it's incorrect: the example will throw at runtime; it is not a valid usage.

---

References (exact files/lines used):
- README.md lines: 7-11, 13-16, 20-24
- input.ts lines: 15-16, 18-20, 22-24, 26, 32-35

All conclusions above were derived by directly comparing the quoted README statements against the exact enforcement and defaults present in the source (`input.ts`).