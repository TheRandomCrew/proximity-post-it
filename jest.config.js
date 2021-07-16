/* eslint-disable */
const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouterDOM = require('react-router-dom')

module.exports = {
  moduleNameMapper: {
    '^store/(./*)$': '<rootDir>/src/store/$1',
    '^assets/(./*)$': '<rootDir>/src/assets/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/mock_files/styleMock.js',
    '\\.(gif|ttf|eot|jpg|jpeg|png)$': '<rootDir>/mock_files/fileMock.js',
  },
  globals: {
    React,
    'react-dom': ReactDOM,
    'react-router-dom': ReactRouterDOM,
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleDirectories: ['node_modules', 'src'],
  coverageReporters: ['json', 'json-summary', 'lcov', 'clover', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 9.09,
      branches: 0,
      functions: 33.33,
      lines: 9.09,
    },
  },
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!src/service/**',
    '!src/index.tsx',
    '!**/pages/__snapshots__/**',
    'src/components/**/*',
  ],
  testPathIgnorePatterns: ['src/react-app-env.d.ts', 'jest', 'coverage', '.vscode', 'src/main.tsx'],
  moduleFileExtensions: ['js', 'ts', 'json', 'jsx', 'tsx'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  coverageDirectory: 'coverage',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/svgTransform.js',
    '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
  },
}
