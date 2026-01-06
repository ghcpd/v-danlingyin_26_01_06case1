# Retry Utility

This utility executes an async task with retry support.

## Configuration

### `maxRetries`
- Type: number
- Allowed values: integer or number in the inclusive range **1–5**
- Default: **3**
- Meaning: **maximum total attempts** (includes the initial attempt). The number of retries performed equals `maxRetries - 1` (e.g. `maxRetries: 1` => 0 retries).

### `backoffMs`
- Type: number (milliseconds)
- Minimum: **500**
- Default: **1000**
- Description: Delay between retry attempts in milliseconds; used as-is for `setTimeout`.

## Examples

- Use defaults (3 total attempts, 1000ms backoff):

```ts
executeWithRetry(fetchData);
```

- Explicit (2 retries allowed → 3 total attempts):

```ts
executeWithRetry(fetchData, { maxRetries: 3, backoffMs: 1000 });
```

- No retries (1 total attempt):

```ts
executeWithRetry(fetchData, { maxRetries: 1 });
```

Notes:
- Passing `maxRetries` outside the range **1–5** throws an error at runtime.
- Passing `backoffMs` less than **500** throws an error at runtime.
- The library does not impose an upper bound on `backoffMs` in code; only the minimum is enforced.
