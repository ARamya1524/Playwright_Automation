import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");
  await page.getByRole('checkbox').first().click();
});
