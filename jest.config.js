/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/__tests__/*.spec.js"],
};
