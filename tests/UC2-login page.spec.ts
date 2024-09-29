import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rose-tst-bs02.encore.forgerock.com/demo/webapp/en/home');
  await expect(page.getByRole('img').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  await expect(page.getByPlaceholder('Email Address')).toBeVisible();
});