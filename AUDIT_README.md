Audit summary — Documentation vs Implementation

Scope
- Files inspected: `README.md` (documentation), `input.ts` (implementation).
- Focus: parameter descriptions, defaults, ranges, constraints, and example usage for `executeWithRetry`.

Findings (high-level)
- Incorrect or missing documentation for `maxRetries` (range, default, semantics).
- Incorrect or missing documentation for `backoffMs` (default, minimum).
- README contains an example that is invalid and will throw at runtime.

How citations were derived
1. Read the README section for each parameter and quoted the exact lines shown in `README.md`.
2. Located the corresponding runtime logic in `input.ts` (defaults via nullish coalescing, explicit range checks, and the retry loop).
3. Matched the behavior (what throws, what defaults are used) to identify contradictions.

How to manually verify (quick):
- Open `input.ts` and inspect these lines:
  - Defaults: lines 15-16
  - `maxRetries` range check: lines 18-20
  - `backoffMs` minimum check: lines 22-24
  - Retry-count behavior: lines 26 and 32-35
- Try these calls in a TypeScript runtime (they should throw):
  - `executeWithRetry(async () => {}, { maxRetries: 0 })`  // should throw
  - `executeWithRetry(async () => {}, { backoffMs: 100 })` // should throw
- Try a valid call that uses the code defaults (should not throw):
  - `executeWithRetry(async () => Promise.resolve())`

Next steps / recommendations
- Keep this audit's corrected `README.md` (checked-in).
- Add a small unit test covering: default behavior, invalid `maxRetries`, invalid `backoffMs`, and semantics of `maxRetries` (e.g. `maxRetries:1` results in no retries).
- Consider making the parameter name clearer in code (e.g. `maxAttempts`) or adding explicit docs explaining the relationship between "attempts" and "retries".

Contact
- Audit produced programmatically; for follow-ups open an issue with the tag `docs/audit` and reference `report.json` and `citations.md`.