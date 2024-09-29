import { test, expect } from '@playwright/test';


test('test', async ({ page, context }) => {
  test.setTimeout(120000);
  await context.grantPermissions(['geolocation'], { origin: 'https://<DEMO DOMAIN>' });
  
  await page.goto('<BASELINE DASHBOARD URL>');
  await page.locator('div:nth-child(3) > .css-primary').click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('list').locator('a').click();
  const page4 = await page4Promise;
  await page4.getByPlaceholder('Email Address').click();
  await page4.getByPlaceholder('Email Address').fill('EMAIL@gmail.com');
  await page4.getByRole('button', { name: 'Next' }).click();
  await page4.getByPlaceholder('Password').click();
  await page4.getByPlaceholder('Password').fill('<INSERT PASSWORD>');
  await page4.getByRole('button', { name: 'Next' }).click();
  await page4.getByRole('button', { name: 'Next' }).click();
  await page4.getByRole('link', { name: 'My Account' }).click();
  await page4.getByRole('link', { name: 'My Account' }).click();
  await expect(page4.getByText('Welcome back. How can we help')).toBeVisible();
});