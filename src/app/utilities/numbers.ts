export function isNumber(value: unknown): value is number {
  return value !== null && value !== '' && !isNaN(Number(String(value)));
}

export function toNumber(value: unknown): number | null {
  return isNumber(value) ? Number(value) : null;
}
