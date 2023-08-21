/**
 * Checks if a string has balanced paired brackets.
 * @param str The string to check.
 * @returns True if the string has balanced paired brackets, false otherwise.
 */
export const isPairedBrackets = (str: string): boolean => {
  const stack: string[] = []
  const pairs: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (pairs[char]) {
      stack.push(char)
    } else if (char === ')' || char === ']' || char === '}') {
      const top = stack.pop()

      if (!top || pairs[top] !== char) {
        return false
      }
    }
  }

  return stack.length === 0
}
