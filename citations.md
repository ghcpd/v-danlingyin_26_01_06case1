# Citation Evidence

## Issue 1: maxRetries Default
- **Documentation Statement**: "Default: 1" (README.md, Configuration section, maxRetries)
- **Code Behavior**: `const maxRetries = options?.maxRetries ?? 3;` (input.ts, line 13)
- **Explanation**: The code uses nullish coalescing to default to 3, not 1.
- **References**: README.md lines 8-9; input.ts line 13

## Issue 2: maxRetries Range
- **Documentation Statement**: "Range: 0–10" (README.md, Configuration section, maxRetries)
- **Code Behavior**: `if (maxRetries < 1 || maxRetries > 5) { throw new Error("maxRetries must be between 1 and 5"); }` (input.ts, lines 15-16)
- **Explanation**: The code enforces 1-5, not 0-10, and throws error for invalid values.
- **References**: README.md lines 7; input.ts lines 15-16

## Issue 3: backoffMs Default
- **Documentation Statement**: "Default: 100" (README.md, Configuration section, backoffMs)
- **Code Behavior**: `const backoffMs = options?.backoffMs ?? 1000;` (input.ts, line 14)
- **Explanation**: The code defaults to 1000ms, not 100ms.
- **References**: README.md lines 12; input.ts line 14

## Issue 4: backoffMs Minimum
- **Documentation Statement**: No minimum specified (README.md, Configuration section, backoffMs)
- **Code Behavior**: `if (backoffMs < 500) { throw new Error("backoffMs must be at least 500ms"); }` (input.ts, lines 18-19)
- **Explanation**: The code enforces a minimum of 500ms, which is not documented.
- **References**: README.md lines 11-13; input.ts lines 18-19

## Additional Issue: Example Usage
- **Documentation Statement**: Example uses `maxRetries: 0` (README.md, Example section)
- **Code Behavior**: Throws error for maxRetries < 1
- **Explanation**: The example provides invalid input that would cause runtime error.
- **References**: README.md lines 15-19; input.ts lines 15-16