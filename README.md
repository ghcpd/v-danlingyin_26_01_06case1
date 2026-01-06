# Retry Utility

This utility executes an async task with retry support.

## Configuration

### maxRetries
- Type: number
- Range: 1–5
- Default: 3
- Description: Maximum total attempts (includes the initial attempt). The function will try to run the task up to `maxRetries` times; if the task continues to fail the function throws an error when the number of failed attempts reaches `maxRetries`.

### backoffMs
- Type: number
- Default: 1000
- Minimum: 500
- Description: Delay between attempts in milliseconds. Must be at least 500ms.

## Example

Valid examples:

```ts
// use defaults: maxRetries = 3, backoffMs = 1000
executeWithRetry(fetchData);

// explicit options within allowed ranges
executeWithRetry(fetchData, {
  maxRetries: 3,
  backoffMs: 1000
});
