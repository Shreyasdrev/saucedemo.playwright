import { test, expect } from '@playwright/test';

test('verify login with valid username and empty password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
});