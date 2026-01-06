# Citation Evidence

## Issue 1 — `maxRetries` (README vs code)

Documentation statement (README_backup.md lines 7-11):

> ### maxRetries
> - Type: number
> - Range: 0–10
> - Default: 1
> - Description: Number of retry attempts before failing.

Code behavior (input.ts):
- Line 15: const maxRetries = options?.maxRetries ?? 3;
- Lines 18-19: if (maxRetries < 1 || maxRetries > 5) { throw new Error("maxRetries must be between 1 and 5"); }
- Line 26: let attempts = 0;
- Lines 31-35: attempts++; if (attempts >= maxRetries) { throw err; }

Why the documentation is incorrect:
- The README claims a range of 0–10 and a default of 1, but the code sets the default to 3 and enforces a range of 1–5. Additionally, the code counts failed attempts and throws when the count reaches `maxRetries`, so `maxRetries` represents the maximum total attempts (including the initial attempt). The cited lines above show the default, the enforcement check, and the attempt-counting logic.

---

## Issue 2 — `backoffMs` (README vs code)

Documentation statement (README_backup.md lines 13-16):

> ### backoffMs
> - Type: number
> - Default: 100
> - Description: Delay between retries in milliseconds.

Code behavior (input.ts):
- Line 16: const backoffMs = options?.backoffMs ?? 1000;
- Lines 22-23: if (backoffMs < 500) { throw new Error("backoffMs must be at least 500ms"); }

Why the documentation is incorrect:
- The README lists a default of 100ms and omits a minimum. The code sets the default to 1000ms and enforces a minimum of 500ms. The cited lines show where the default is applied and where the minimum is enforced.

---

## Issue 3 — Example uses invalid values

Documentation statement (README_backup.md lines 20-24):

> ```ts
> executeWithRetry(fetchData, {
>   maxRetries: 0,
>   backoffMs: 100
> });
> ```

Code behavior (input.ts):
- Lines 18-19: if (maxRetries < 1 || maxRetries > 5) { throw new Error("maxRetries must be between 1 and 5"); }
- Lines 22-23: if (backoffMs < 500) { throw new Error("backoffMs must be at least 500ms"); }

Why the documentation is incorrect:
- The example provides `maxRetries: 0` and `backoffMs: 100`, both of which violate the runtime checks and will cause `executeWithRetry` to throw immediately. The cited code lines show those checks.

---

All citations reference the original README content preserved in `README_backup.md` and the implementation in `input.ts` (lines shown above).