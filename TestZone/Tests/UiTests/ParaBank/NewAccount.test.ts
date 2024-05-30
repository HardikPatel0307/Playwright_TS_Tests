import { test, expect } from '@playwright/test';

test('New Bank account creation test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');

    await page.getByRole('link', { name: 'Open New Account' }).click();
    await page.locator('#type').selectOption('1');
    await page.locator('#fromAccountId').selectOption('12900');
    await page.getByRole('button', { name: 'Open New Account' }).click();
    await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
});