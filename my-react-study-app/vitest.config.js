import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/shared/setupTests/setupTests.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text'],
            include: ['src', 'app'],
            // exclude: [
            //     '**/.eslintrc.cjs',
            //     'vitest.config.ts',
            //     'next.config.js',
            //     '.next',
            //     'dist',
            //     '**/*.test.{js,jsx,ts,tsx}',
            // ],
        },
    },
});
