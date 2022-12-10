export function top(take = 5, results: { result: number }[]) {
  return results.sort((a, b) => b.result - a.result).slice(0, take);
}

type OnlyNumbers<T> = T[keyof T] extends number ? keyof T : never;

export function topBy<T extends Record<string, number>>(
  v: OnlyNumbers<T>,
  arr: T[]
) {
  return arr.sort((a, b) => a[v] - b[v]);
}
