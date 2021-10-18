/* eslint-disable no-undef */
module.exports = {
  preset: 'ts-jest',
   transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    "@Stephen-Kai/lerna-pkg-(.*)$": "<rootDir>/packages/lerna-pkg-$1/src",
  },
};
