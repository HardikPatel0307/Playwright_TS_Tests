import { test, expect } from '@playwright/test';

test('Transfer Funds Test', async ({ page }) => {
    // Assuming login is required before transferring funds
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');

    await page.getByRole('link', { name: 'Transfer Funds' }).click();
    await page.locator('#amount').click();
    await page.locator('#amount').fill('200');
    await page.locator('#fromAccountId').selectOption('12456');
    await page.locator('#toAccountId').selectOption('12900');
    await page.getByRole('button', { name: 'Transfer' }).click();
    await expect(page.getByRole('heading', { name: 'Transfer Complete!' })).toBeVisible();
    console.log();
});