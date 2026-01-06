# Retry Utility

This utility executes an async task with retry support.

## Configuration

### maxRetries
- Type: number
- Range: 1–5
- Default: 3
- Description: Number of retry attempts before failing.

### backoffMs
- Type: number
- Range: 500–∞
- Default: 1000
- Description: Delay between retries in milliseconds.

## Example

```ts
executeWithRetry(fetchData, {
  maxRetries: 3,
  backoffMs: 1000
});
