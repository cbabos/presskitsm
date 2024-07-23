import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "babel",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/auth*",
    "/tests/mocks/"
  ],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ['{src,tests}/**/*.(j|t)s(x)?'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  moduleNameMapper: {
    '@/auth': '<rootDir>/tests/mocks/auth.ts',
    'next-auth/providers/credentials':
      '<rootDir>/tests/mocks/next-auth-providers-credentials.ts',
    'next-auth': '<rootDir>/tests/mocks/next-auth.ts',
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
