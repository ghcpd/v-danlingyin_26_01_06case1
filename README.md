# Retry Utility

This utility executes an async task with retry support.

## Configuration

### maxRetries
- Type: number
- Range: 1–5
- Default: 3
- Description: Number of retry attempts before failing. Must be between 1 and 5 inclusive.

### backoffMs
- Type: number
- Minimum: 500
- Default: 1000
- Description: Delay between retries in milliseconds. Must be at least 500ms.

## Example

```ts
executeWithRetry(fetchData, {
  maxRetries: 3,
  backoffMs: 1000
});
