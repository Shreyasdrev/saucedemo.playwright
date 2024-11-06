import { test, expect } from '@playwright/test';

test('verify add to cart updates cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.getByText('Products')).toHaveText('Products');
  await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText('Sauce Labs Backpack');
  await page.getByRole('button', { name: 'REMOVE' }).click();
  await page.locator('#shopping_cart_container').getByRole('link').click();
  await page.getByText('Your Cart').click();
});