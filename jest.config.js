/** @type {import('jest').Config} */

const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', '<rootDir>']
};

module.exports = config;
