// https://code-basics.com/ru/languages/typescript/lessons/enums

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

export { ModalStatus, }

export default buildModal
