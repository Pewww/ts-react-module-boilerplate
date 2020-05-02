module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: "jest-environment-jsdom-fifteen",
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  testMatch: [
    "**/*.(test|spec).{ts,tsx}"
  ],
  globals: {
    "ts-jest": {
      "diagnostics": true,
      "tsConfig": "jest.tsconfig.json"
    }
  },
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}"
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "json-summary",
    "html"
  ]
};
