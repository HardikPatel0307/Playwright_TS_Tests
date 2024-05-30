import { test, expect } from '@playwright/test';

test('Profile Update Test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.locator('input[name="username"]').fill('john');
    await page.locator('input[name="username"]').press('Tab');
    await page.locator('input[name="password"]').fill('demo');
    await page.getByRole('button', { name: 'Log In' }).click();

    await page.getByRole('link', { name: 'Update Contact Info' }).click();
    await page.locator('[id="customer\\.firstName"]').fill('Johnny');
    await page.locator('[id="customer\\.lastName"]').fill('Depps');
    await page.locator('[id="customer\\.address\\.street"]').fill('24540 Avalon Ave');
    await page.locator('[id="customer\\.address\\.city"]').fill('Los Angeles');
    await page.locator('[id="customer\\.address\\.state"]').fill('GA');
    await page.locator('[id="customer\\.address\\.zipCode"]').fill('10290');
    await page.locator('[id="customer\\.phoneNumber"]').fill('5801406404');
    await page.getByRole('button', { name: 'Update Profile' }).click();
    await expect(page.getByRole('heading', { name: 'Profile Updated' })).toBeVisible();
});