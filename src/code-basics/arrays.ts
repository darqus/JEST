// https://code-basics.com/ru/languages/typescript/lessons/arrays

// Массивы 6/53

/* Реализуйте функцию filterAnagrams(), которая находит все анаграммы слова. Функция принимает исходное слово и список для проверки — массив. А возвращает функция массив всех анаграмм. Если в списке нет анаграммы, то возвращается пустой массив:

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// [] */

// BEGIN (write your solution here)
const getSortedWord = (word: string): string => word.split('').sort().join('')

const filterAnagrams = (anagram: string, listAnagram: string[]): string[] =>
  listAnagram.filter((item) => getSortedWord(item) === getSortedWord(anagram))
// END

export default filterAnagrams
