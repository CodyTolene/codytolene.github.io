type StringKeys<T> = Extract<keyof T, string>;

type ClassPropertyNames<T> = {
  [K in keyof Required<T>]: T[K] extends Function ? never : K;
}[StringKeys<T>];

type ClassProperties<Class> = Pick<Class, ClassPropertyNames<Class>>;
