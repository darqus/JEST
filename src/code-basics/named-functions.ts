// https://code-basics.com/ru/languages/typescript/lessons/named-functions

// Именованные функции 4/53

/* Задание

Реализуйте функцию getHiddenCard(). Она принимает на вход номер кредитки, который состоит из 16 цифр, в виде строки и возвращает его скрытую версию. Эта версия может использоваться на сайте для отображения. Например, если номер исходной карты был 2034399002125581, то скрытая версия выглядит так: ****5581.

Получается, функция заменяет первые 12 символов на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

// Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2) // "**5678"
getHiddenCard('1234567812345678', 3) // "***5678"
getHiddenCard('1234567812345678')    // "****5678"
getHiddenCard('2034399002121100', 1) // "*1100"
 */

/* const getHiddenCard = (cardNumber: string, numberOfStars: number = 4): string => {
  const hiddenPart = cardNumber.slice(-4)
  const stars = '*'.repeat(numberOfStars)

  return stars + hiddenPart
} */

const getHiddenCard = (cardNumber: string, numberOfStars: number = 4): string => {
  const visibleDigitsLine = cardNumber.slice(-4)

  return visibleDigitsLine.padStart(numberOfStars + 4, '*')
}
// END

export default getHiddenCard
