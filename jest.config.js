/* eslint-disable */
const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouterDOM = require('react-router-dom')

const config = {
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
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleDirectories: ['node_modules', 'src'],
  coverageReporters: [
    'json',
    'json-summary',
    'lcov',
    'clover',
    'text',
    'text-summary',
  ],
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
  ],
}

module.exports = config
