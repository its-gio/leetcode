// Memoization
export const fibonacci = function (num: number, cache: number[]): number {
  cache = cache;
  if (num < 3) return cache[num];
  if (cache[num]) return cache[num];
  cache[num] = fibonacci(num - 1, cache) + fibonacci(num - 2, cache);

  return cache[num];
};
