# Citation Evidence

## Issue 1 — `maxRetries`

Documentation statement (README.md lines 7-11):

"### maxRetries
- Type: number
- Range: 0–10
- Default: 1
- Description: Number of retry attempts before failing."

Code behavior (input.ts lines 15, 18-20):

- Line 15: `const maxRetries = options?.maxRetries ?? 3;` (default is 3)
- Lines 18-20: `if (maxRetries < 1 || maxRetries > 5) { throw new Error("maxRetries must be between 1 and 5"); }` (enforces range 1–5)

Explanation: The README claims the range is 0–10 and default 1, but the implementation sets default = 3 and enforces 1 ≤ maxRetries ≤ 5, so the documentation is incorrect. Example values like `maxRetries: 0` will cause a runtime exception.

---

## Issue 2 — `backoffMs`

Documentation statement (README.md lines 13-16 and example lines 21-24):

"### backoffMs
- Type: number
- Default: 100
- Description: Delay between retries in milliseconds."

Example shows: `backoffMs: 100`.

Code behavior (input.ts lines 16, 22-24):

- Line 16: `const backoffMs = options?.backoffMs ?? 1000;` (default is 1000)
- Lines 22-24: `if (backoffMs < 500) { throw new Error("backoffMs must be at least 500ms"); }` (enforces minimum 500)

Explanation: The README documents a default of 100ms and omits the minimum constraint; however, the code defaults to 1000ms and throws for values < 500ms. The example `backoffMs: 100` will throw at runtime.

---

References:
- README.md (original content saved in `README_backup.md`)
- input.ts (see the referenced line numbers above)
