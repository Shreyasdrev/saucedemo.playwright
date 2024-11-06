import { test, expect } from '@playwright/test';

test('verify login with invalid username and valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});