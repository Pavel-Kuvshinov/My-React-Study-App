import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
    }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/shared/setupTests/setupTests.ts'],
        coverage: {
        provider: 'v8',
        reporter: ['text'],
        },
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
