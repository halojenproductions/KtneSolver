import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './playwright',
	timeout: 5000,
	globalTimeout: 90000,
	fullyParallel: true,
	//reporter: 'html',
	forbidOnly: !!process.env.CI,
	webServer: {
		command: 'npm run start',
		url: 'http://localhost:8080/',
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},
	use: {
		baseURL: 'http://localhost:8080/',
		headless: true,
	},
	projects: [
		{
			name: 'Default',
			//testIgnore: /.*smoke.spec.ts/,
			retries: 1,
		},
	],

};
export default config;