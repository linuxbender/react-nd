import {defineConfig} from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    test: {
        globals: true,
        setupFiles: ['./testSetup.ts'],
        environment: 'jsdom',
    },
    resolve: {
        alias: {
            '@': '/src',
            'react-kata-05': '/src'
        }
    }
})
