# Audit README

## Scope of Audit
- Files reviewed: `README.md` and `input.ts` in this repository.
- Purpose: Identify factual inconsistencies between documentation and implementation (defaults, ranges, constraints, and examples).

## Types of documentation errors found
- Incorrect default values (documentation vs implementation)
- Incorrect allowed ranges or missing constraints
- Example usage that violates enforced runtime constraints

## How citations were derived
- Every documented claim was compared to the code implementing defaults and guards.
- Code references cite exact line numbers where: default values are assigned and where runtime checks (throwing errors) are performed.
- Documentation references cite the README sections and the exact lines quoted.

## How to manually verify
1. Open `input.ts` and inspect:
   - Default assignments: `options?.maxRetries ?? 3` and `options?.backoffMs ?? 1000` (lines 15-16).
   - Constraints: `if (maxRetries < 1 || maxRetries > 5) ...` and `if (backoffMs < 500) ...` (lines 18-19, 22-23).
2. Open `README.md` and confirm that:
   - `maxRetries` range is **1–5** and default is **3**.
   - `backoffMs` default is **1000** and minimum is **500**.
   - Examples use values within the enforced constraints.

## Changes made
- `README_backup.md` (unchanged copy of original) created.
- `README.md` updated to reflect the code exactly (defaults, ranges, minimums, and a valid example).
- `report.json`, `citations.md` created to document findings and provide exact references.

## Notes
- No source code was modified during this audit.
- All conclusions are based on the local files listed above.
