Audit: README vs implementation

Scope
- Files audited: `README.md` (original copy saved as `README_backup.md`) and `input.ts`.
- Goal: find factual mismatches between documented parameters (names, ranges, defaults, examples) and what the code enforces.

Summary of findings
- Three issues found (all classified High):
  1. `maxRetries` — documented range and default are incorrect; semantics clarified in code.
  2. `backoffMs` — documented default and missing minimum are incorrect.
  3. Example — the code example uses values that will cause runtime errors.

How citations were derived
- The audit quotes the original documentation preserved in `README_backup.md` and points to exact lines in `input.ts` showing how defaults and validations are implemented.
- Each issue includes the specific README lines and the exact implementation lines that demonstrate defaulting and enforcement.

How to manually verify
1. Open `README_backup.md` to see the original documentation statements.
2. Open `input.ts` and inspect these lines:
   - Line 15: default for `maxRetries` (const maxRetries = options?.maxRetries ?? 3;)
   - Lines 18-19: validation for `maxRetries` (must be between 1 and 5)
   - Line 16: default for `backoffMs` (const backoffMs = options?.backoffMs ?? 1000;)
   - Lines 22-23: validation for `backoffMs` (must be at least 500)
   - Lines 26 and 31-35: attempt-counting logic showing how `maxRetries` governs attempts.
3. To validate runtime behavior, import `executeWithRetry` in a small test script and call it with invalid values (e.g., `maxRetries: 0` or `backoffMs: 100`) — the function will throw due to the checks above.

Notes
- No source code was changed. All fixes were applied to `README.md` only; the original file was saved as `README_backup.md`.
- The updated `README.md` now matches the implementation exactly and contains valid examples.

If you want, I can also add a short unit test that asserts the validation behavior (without modifying the implementation).