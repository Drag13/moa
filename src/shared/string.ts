export const isNullOrEmpty = (s: string | null | undefined): s is undefined =>
  s == null || s === "";

export const matchCaseInsensitive = (a: string, b: string) => {
  return a.toLocaleLowerCase() === b.toLocaleLowerCase();
};
