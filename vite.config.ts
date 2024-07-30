/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			exclude: [
				'src/main.tsx',
				'.eslint*',
				'vite.config*',
				'**/*.d.ts',
			],
			thresholds: {
				branches: 80,
				lines: 80,
				statements: 80,
				functions: 80,
			}
		},
		environment: 'jsdom',
		setupFiles: [ 'vitest.setup.ts' ],
	},
})
