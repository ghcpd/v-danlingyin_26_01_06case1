# Retry Utility

This utility executes an async task with retry support.

## Configuration

### maxRetries
- **Type:** number
- **Range:** 1–5 (inclusive)
- **Default:** 3
- **Description:** Number of retry attempts before failing. Values outside the range [1, 5] will cause the function to throw an error.

### backoffMs
- **Type:** number
- **Default:** 1000
- **Minimum:** 500
- **Description:** Delay between retries in milliseconds. Values less than 500 will cause the function to throw an error.

## Example

```ts
executeWithRetry(fetchData, {
  maxRetries: 3,
  backoffMs: 1000
});
