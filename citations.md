# Citation Evidence File: Documentation Audit

## Issue 1: maxRetries Default Value Mismatch

### Documentation Statement
**File:** README.md, Configuration > maxRetries (line 12)
```
- Default: 1
```

### Code Behavior
**File:** input.ts (line 14)
```typescript
const maxRetries = options?.maxRetries ?? 3;
```

### Explanation of Incorrectness
The code uses the nullish coalescing operator `??` to set the default to `3` when no `maxRetries` option is provided. However, the documentation claims the default is `1`. This is a factual error that will mislead users about the actual retry behavior when no configuration is provided.

**Severity:** High - Leads to unexpected behavior in runtime

---

## Issue 2: maxRetries Range Validation Mismatch

### Documentation Statement
**File:** README.md, Configuration > maxRetries (line 11)
```
- Range: 0–10
```

### Code Behavior
**File:** input.ts (lines 17-18)
```typescript
if (maxRetries < 1 || maxRetries > 5) {
  throw new Error("maxRetries must be between 1 and 5");
}
```

### Explanation of Incorrectness
The code validates that `maxRetries` must be between 1 and 5 (inclusive), but the documentation states the range is 0–10. Attempting to use values outside the 1–5 range will throw an error at runtime, making the documented range invalid.

**Severity:** High - Leads to runtime errors with invalid documented values

---

## Issue 3: backoffMs Default Value Mismatch

### Documentation Statement
**File:** README.md, Configuration > backoffMs (line 17)
```
- Default: 100
```

### Code Behavior
**File:** input.ts (line 15)
```typescript
const backoffMs = options?.backoffMs ?? 1000;
```

### Explanation of Incorrectness
The code sets the default delay to `1000ms` (1 second), but the documentation claims it is `100ms`. This is a significant discrepancy that will cause users to expect much shorter retry delays than actually configured.

**Severity:** High - Leads to unexpected performance characteristics

---

## Issue 4: backoffMs Minimum Constraint Not Documented

### Documentation Statement
**File:** README.md, Configuration > backoffMs (lines 15-18)
```
### backoffMs
- Type: number
- Default: 100
- Description: Delay between retries in milliseconds.
```

### Code Behavior
**File:** input.ts (lines 21-22)
```typescript
if (backoffMs < 500) {
  throw new Error("backoffMs must be at least 500ms");
}
```

### Explanation of Incorrectness
The code enforces a minimum constraint of 500ms for the `backoffMs` parameter. The documentation does not mention this constraint at all. Users attempting to use lower values (e.g., the documented default of 100) will encounter runtime errors.

**Severity:** High - Missing constraint documentation leads to runtime failures

---

## Issue 5: Example Code Uses Invalid Parameter Value

### Documentation Statement
**File:** README.md, Example (lines 22-25)
```typescript
executeWithRetry(fetchData, {
  maxRetries: 0,
  backoffMs: 100
});
```

### Code Behavior
**File:** input.ts (lines 17-18, 21-22)
```typescript
if (maxRetries < 1 || maxRetries > 5) {
  throw new Error("maxRetries must be between 1 and 5");
}

if (backoffMs < 500) {
  throw new Error("backoffMs must be at least 500ms");
}
```

### Explanation of Incorrectness
The example attempts to use `maxRetries: 0` and `backoffMs: 100`, both of which violate the code's validation constraints:
- `maxRetries: 0` fails validation (must be 1–5)
- `backoffMs: 100` fails validation (must be >= 500)

This example code will throw errors when executed, making it an invalid usage pattern.

**Severity:** High - Example will fail at runtime, providing incorrect guidance to users

---

## Summary

All 5 issues are classified as **High Severity** because they either:
1. Lead to runtime errors when users follow the documented usage
2. Cause unexpected behavior due to mismatched defaults
3. Omit critical constraints that will cause failures
4. Provide non-functional example code

These issues indicate a significant disconnect between the documentation and the actual implementation.
