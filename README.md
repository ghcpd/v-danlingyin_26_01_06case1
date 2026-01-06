# Retry Utility

This utility executes an async task with retry support.

## Configuration

### `maxRetries`
- **Type:** number
- **Range:** 1–5
- **Default:** 3
- **Description:** Maximum number of attempts (including the initial attempt). Must be between **1** and **5**. A value of **1** means the task is executed once with no retries. Passing a value outside this range will throw an Error.

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
