import { isDefinedPrimitive } from 'src/app/utilities/types';

/**
 * Retrieves a member of an enum if it exists. Falls back to a default value if provided and valid.
 * Throws an error if neither value nor defaultValue are valid enum members.
 *
 * @param enumObject - The enum object to check against.
 * @param value - The value to check if it's a valid enum member.
 * @param defaultValue - A fallback value to return if the first value is invalid.
 * @returns The valid enum member, or null if no valid member is found.
 */
export function getEnumMember<T extends object>(
  enumObject: T,
  value?: string | number | null,
  defaultValue?: T[keyof T] | null,
): T[keyof T] | null {
  // Check if the provided value is non-empty and a valid enum member.
  if (isDefinedPrimitive(value) && isEnumMember(enumObject, value)) {
    return value;
  }

  // Check if the default value is non-empty and a valid enum member.
  if (
    isDefinedPrimitive(defaultValue) &&
    isEnumMember(enumObject, defaultValue)
  ) {
    return defaultValue;
  }

  // If neither the value nor the default value is valid, throw an error.
  throw new Error(
    `Invalid enum value "${value}" with default value "${defaultValue}".`,
  );
}

/**
 * Retrieves all the values from an enum.
 *
 * @param enumObject - The enum object to extract values from.
 * @returns An array containing all the values of the enum.
 */
export function getEnumValues<T extends object>(
  enumObject: T,
): Array<T[keyof T]> {
  // Use Object.values to retrieve all the enum's values.
  return Object.values(enumObject);
}

/**
 * Checks if a given value is a valid member of the enum.
 *
 * @param enumObject - The enum object to check against.
 * @param value - The value to validate.
 * @returns True if the value is a valid member of the enum, false otherwise.
 */
function isEnumMember<T extends object>(
  enumObject: T,
  value: unknown,
): value is T[keyof T] {
  // Convert the enum into an array of values and check if the given value exists in that array.
  return getEnumValues(enumObject).includes(value as T[keyof T]);
}
