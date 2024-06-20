/** @type {import('jest').Config} */

const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', '<rootDir>'],
    testPathIgnorePatterns: ['<rootDir>/dist/'],
};

module.exports = config;
