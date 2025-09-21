// https://code-basics.com/ru/languages/typescript/lessons/enums

// Перечисления (Enums) 8/53

/* Задание

    Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
    Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно. Параметры функции:

    Текст, который должен быть внутри окна после инициализации
    Статус, с которым надо создать объект окна

Функция возвращает объект с двумя полями: text (здесь хранится переданный текст) и status (здесь хранится переданный статус)

const modal = buildModal('hexlet forever', ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened } */

// BEGIN (write your solution here)
enum ModalStatus {
  Opened,
  Closed
}

type Modal = {
  text: string
  status: ModalStatus
}

const buildModal = (
  text: string,
  status: ModalStatus
): Modal => ({
  text,
  status,
})
// END

export { ModalStatus }

export default buildModal
