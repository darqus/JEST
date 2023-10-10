export type Person = {
  name: string
  salary: number
}

/**
 * Checks if a property exists in an object.
 * @param object - The object to check.
 * @param property - The property to check for.
 * @returns True if the property exists in the object, false otherwise.
 */
export const isPropertyExist = (object: Person, property: string): boolean => property in object
