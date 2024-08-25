export function isDefinedPrimitive(value: unknown): value is DefinedPrimitive {
  return value !== null && value !== undefined && isPrimitive(value);
}

export function isPrimitive(value: unknown): value is Primitive {
  return (
    value === null ||
    value === undefined ||
    typeof value === 'bigint' ||
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'string' ||
    typeof value === 'symbol'
  );
}
