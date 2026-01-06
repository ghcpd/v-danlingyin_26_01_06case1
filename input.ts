// input.ts

export interface RetryOptions {
  maxRetries?: number;
  backoffMs?: number;
}

/**
 * Execute a task with retry logic
 */
export function executeWithRetry(
  task: () => Promise<void>,
  options?: RetryOptions
): Promise<void> {
  const maxRetries = options?.maxRetries ?? 3;
  const backoffMs = options?.backoffMs ?? 1000;

  if (maxRetries < 1 || maxRetries > 5) {
    throw new Error("maxRetries must be between 1 and 5");
  }

  if (backoffMs < 500) {
    throw new Error("backoffMs must be at least 500ms");
  }

  let attempts = 0;

  const run = async (): Promise<void> => {
    try {
      await task();
    } catch (err) {
      attempts++;
      if (attempts >= maxRetries) {
        throw err;
      }
      await new Promise((r) => setTimeout(r, backoffMs));
      return run();
    }
  };

  return run();
}
