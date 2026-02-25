# Retry Utility

This utility executes an async task with retry support.

## Configuration

### `maxRetries`
- **Type:** number
- **Range:** 1–5
- **Default:** 3
- Description: Number of retry attempts before failing.

### `backoffMs`
- **Type:** number
- **Default:** 1000
- **Minimum:** 500
- **Description:** Delay between retries in milliseconds. Must be at least **500** ms. Passing a smaller value will throw an Error.

## Example

```ts
// Valid example that adheres to code constraints
executeWithRetry(fetchData, {
  maxRetries: 3,
  backoffMs: 1000
});
