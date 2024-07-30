/// <reference types="vitest" />

import { defineConfig, mergeConfig } from 'vite'
import viteConfig from './vite.config'

const testConfig = defineConfig({
	test: {
		environment: 'jsdom',
		setupFiles: [ 'vitest.setup.ts' ],
	},
});

const mergedConfig = mergeConfig(viteConfig, testConfig);
export default mergedConfig;
