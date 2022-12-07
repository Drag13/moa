export type LoaderData<TLoader extends (...args: any) => any> =
  ReturnType<TLoader> extends Promise<infer D> ? D : ReturnType<TLoader>;
