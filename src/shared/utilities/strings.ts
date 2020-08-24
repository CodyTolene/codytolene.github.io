export function isNonEmptyString(value: unknown): value is string {
  return !!value && typeof value === 'string' && value.length > 0;
}
