import { LocalStorageMock, getLocalStorageMock, } from '../../src/helpers/getLocalStorageMock'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const localStorageMock: any = getLocalStorageMock()

describe('getLocalStorageMock', () => {
  it('should return an instance of LocalStorageMock', () => {
    expect(localStorageMock).toBeInstanceOf(LocalStorageMock)
  })
})
