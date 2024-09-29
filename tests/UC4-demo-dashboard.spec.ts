import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://<DOMAIN>>/demo/config/dashboard');
  await expect(page.getByRole('heading', { name: 'Customizing Baseline Demo' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sample Modern Login Page' })).toBeVisible();
  await expect(page.locator('.card-body')).toBeVisible();
  await expect(page.locator('#kt_content #Path-50')).toBeVisible();
});