import { LocalStorageMock, getLocalStorageMock } from '../../src/helpers/getLocalStorageMock'

 
const localStorageMock: any = getLocalStorageMock()

describe('getLocalStorageMock', () => {
  it('should return an instance of LocalStorageMock', () => {
    expect(localStorageMock).toBeInstanceOf(LocalStorageMock)
  })
})
