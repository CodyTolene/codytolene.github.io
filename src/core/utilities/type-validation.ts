export function isNonEmptyValue<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export function isNonEmptyObject<T>(value: T): value is NonNullable<T> {
  return isNonEmptyValue(value) && Object.keys(value).length > 0;
}
