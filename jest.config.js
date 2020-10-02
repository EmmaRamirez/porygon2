module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "core/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/*.stories.{ts,tsx}"
  ]
};