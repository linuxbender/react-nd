import {defineConfig} from 'vite';
import {createJestConfig} from 'vite-plugin-test';

export default defineConfig({
    plugins: [
        createJestConfig({
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.tsx?$': 'ts-jest',
            },
            moduleNameMapper: {
                '^@/(.*)$': '<rootDir>/src/$1',
            },
        }),
    ],
});
