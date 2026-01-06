# Citation Evidence

## Issue 1 — `maxRetries` (High)

**Documentation statement:**
- README.md (Configuration -> maxRetries)
- Lines: 7-11
- Quoted:
  "- Range: 0–10\n  - Default: 1\n  - Description: Number of retry attempts before failing."

**Code behavior:**
- input.ts lines 15-19
- Quoted:
  "const maxRetries = options?.maxRetries ?? 3;\n  if (maxRetries < 1 || maxRetries > 5) {\n    throw new Error(\"maxRetries must be between 1 and 5\");\n  }"

**Explanation:**
- The code sets the default to **3** (line 15). It enforces a minimum of **1** and maximum of **5** (lines 18-19). The documentation incorrectly lists range **0–10** and default **1**. As a result, documented values such as `maxRetries: 0` will throw at runtime.

**References:** README.md (lines 7-11); input.ts (lines 15-19, 28-35 for attempt logic).

---

## Issue 2 — `backoffMs` (High)

**Documentation statement:**
- README.md (Configuration -> backoffMs)
- Lines: 13-16
- Quoted:
  "- Default: 100\n  - Description: Delay between retries in milliseconds."

**Code behavior:**
- input.ts lines 16 and 22-23
- Quoted:
  "const backoffMs = options?.backoffMs ?? 1000;\n  if (backoffMs < 500) {\n    throw new Error(\"backoffMs must be at least 500ms\");\n  }"

**Explanation:**
- The code sets the default to **1000** ms and enforces a minimum of **500** ms. The documentation lists default **100** and does not mention the minimum, so `backoffMs: 100` will throw at runtime.

**References:** README.md (lines 13-16); input.ts (lines 16, 22-23).

---

## Issue 3 — Example values (High)

**Documentation statement:**
- README.md (Example)
- Lines: 21-24
- Quoted:
  "executeWithRetry(fetchData, {\n  maxRetries: 0,\n  backoffMs: 100\n});"

**Code behavior:**
- input.ts lines 18-19 and 22-23
- Quoted:
  "if (maxRetries < 1 || maxRetries > 5) { throw new Error(...) }\nif (backoffMs < 500) { throw new Error(...) }"

**Explanation:**
- The example uses `maxRetries: 0` and `backoffMs: 100`, both of which violate the enforced constraints and will throw at runtime. The example must be updated to use values within the enforced ranges (e.g., `maxRetries: 3`, `backoffMs: 1000`).

**References:** README.md (lines 21-24); input.ts (lines 15-19, 22-23).
