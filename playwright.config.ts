import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 1000,
  globalTimeout: 60000,
  reporter: 'list',
  testDir: './playwright',
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:8080/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:8080/',
	headless: false,
  },
  projects: [
    {
      name: 'Default',
      //testIgnore: /.*smoke.spec.ts/,
      retries: 0,
    },
  ],

};
export default config;