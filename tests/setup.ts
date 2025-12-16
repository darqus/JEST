/**
 * Jest setup file for global test configuration
 */

// Mock console methods in tests to reduce noise
global.console = {
  ...console,
  // Uncomment to ignore specific console methods during tests
  // log: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
}

// Add custom matchers if needed
// expect.extend({
//   toBeWithinRange(received: number, floor: number, ceiling: number) {
//     const pass = received >= floor && received <= ceiling
//     if (pass) {
//       return {
//         message: () =>
//           `expected ${received} not to be within range ${floor} - ${ceiling}`,
//         pass: true,
//       }
//     } else {
//       return {
//         message: () =>
//           `expected ${received} to be within range ${floor} - ${ceiling}`,
//         pass: false,
//       }
//     }
//   },
// })

// Setup global test environment
beforeAll(() => {
  // Global setup before all tests
})

afterAll(() => {
  // Global cleanup after all tests
})

beforeEach(() => {
  // Setup before each test
})

afterEach(() => {
  // Cleanup after each test
  // Note: jest.clearAllMocks() is not available in setup files
  // Mocks will be automatically cleared between tests by Jest
})
