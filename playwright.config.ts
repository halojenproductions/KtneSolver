import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 30000,
  globalTimeout: 600000,
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