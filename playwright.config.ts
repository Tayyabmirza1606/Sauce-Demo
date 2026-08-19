import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
   // testMatch: ["test/search.ts"],  // Specify the pattern for test files
  testDir: './tests',        // where your spec files live

  timeout: 30000,             // max time per test (ms) before it's marked failed

  expect: {
    timeout: 5000,             // max time an expect() assertion waits
  },

  fullyParallel: true,        // run test files in parallel for speed

  retries: process.env.CI ? 2 : 0,  // retry failed tests on CI, not locally

  reporter: 'html',           // generates the HTML report you view with `npx playwright show-report`

  use: {
    baseURL: 'https://sauce-demo.myshopify.com',   // lets you write page.goto('/') instead of full URL every time

    trace: 'on-first-retry',   // captures a debug trace only when a test fails+retries

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    //{ name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    //{ name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});