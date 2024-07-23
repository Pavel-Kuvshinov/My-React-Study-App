import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./setupTest.ts'],
        testMatch: ['./tests/**/*.test.tsx'],
        globals: true
    },
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
