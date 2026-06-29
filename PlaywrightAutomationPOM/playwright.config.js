// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
    /**
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {  
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace : 'on',

      },
      
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],


});

