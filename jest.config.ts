/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: "ts-jest",
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: [
    "<rootDir>/test/**/?(*.)+(spec|test).[tj]s?(x)",
  ], 
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/database/**",
    "!src/models/**",
    "!src/repositories/**",
    "!src/controllers/**",
    "!src/routes/**",
    "!src/data-source.ts",
    "!src/index.ts",
  ],
};
