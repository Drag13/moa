export const join = (...classes: (string | undefined)[]) =>
  classes.reduce((acc, v) => (v == null ? acc : acc + v), "");
