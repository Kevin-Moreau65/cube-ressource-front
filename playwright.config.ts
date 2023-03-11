import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	use: {
		baseURL: 'http://localhost:5173'
	},
	webServer: {
		command: 'npm run dev',
		port: 5173
	},
	testDir: 'tests/browser'
};

export default config;
