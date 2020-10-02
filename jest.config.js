module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    "core/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/*.stories.{ts,tsx}"
  ],
  moduleDirectories: ["node_modules", "core"],
};