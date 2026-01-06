# Retry Utility

This utility executes an async task with retry support.

## Configuration

### maxRetries
- Type: number
- Range: 010
- Default: 1
- Description: Number of retry attempts before failing.

### backoffMs
- Type: number
- Default: 100
- Description: Delay between retries in milliseconds.

## Example

```ts
executeWithRetry(fetchData, {
  maxRetries: 0,
  backoffMs: 100
});