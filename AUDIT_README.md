# Audit README

## Scope
This audit examined the single README.md in the repository and verified it against the implementation in `input.ts`.

## Types of documentation errors found
- Incorrect default values (high severity — causes incorrect expectations and runtime errors).
- Incorrect allowed ranges / missing constraints (high severity — passing documented values can throw runtime errors).
- Invalid example values (high severity — examples that will fail at runtime).

## How citations were derived
- I compared the README statements to the implementation lines in `input.ts`.
- Code lines referenced are:
  - Default and constraint for `maxRetries`: lines 15 and 18-20.
  - Default and constraint for `backoffMs`: lines 16 and 22-24.
- The original README content was preserved as `README_backup.md` for traceability.

## How to manually verify
1. Check `input.ts` lines referenced above to see exact behavior.
2. Run a small snippet that calls `executeWithRetry` with the documented-but-invalid values to see runtime errors. Example that will throw based on current implementation:

```ts
await executeWithRetry(async () => { throw new Error('fail'); }, { maxRetries: 0, backoffMs: 100 });
```

This will throw because `maxRetries` < 1 and `backoffMs` < 500.

## Recommendations
- Keep code as authoritative for behavior.
- Update README to match implementation (done in this audit); or, if behavior should be different, update the code and add tests to lock the intended contract.

