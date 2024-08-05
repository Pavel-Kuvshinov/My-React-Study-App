import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/shared/setupTests/setupTests.ts'],
        coverage: {
        provider: 'v8',
        reporter: ['text'],
        },
    },
});
