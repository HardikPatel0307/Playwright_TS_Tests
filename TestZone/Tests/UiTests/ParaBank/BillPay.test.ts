import { test, expect } from '@playwright/test';

test('Bill Payment Test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.locator('input[name="username"]').fill('john');
    await page.locator('input[name="username"]').press('Tab');
    await page.locator('input[name="password"]').fill('demo');
    await page.getByRole('button', { name: 'Log In' }).click();

    await page.getByRole('link', { name: 'Bill Pay' }).click();
    await page.locator('input[name="payee\\.name"]').fill('Test');
    await page.locator('input[name="payee\\.address\\.street"]').fill('3214 Fake Fr');
    await page.locator('input[name="payee\\.address\\.city"]').fill('Lake Mary');
    await page.locator('input[name="payee\\.address\\.state"]').fill('Florida');
    await page.locator('input[name="payee\\.address\\.zipCode"]').fill('58787');
    await page.locator('input[name="payee\\.phoneNumber"]').fill('2587410302');
    await page.locator('input[name="payee\\.accountNumber"]').fill('65740');
    await page.locator('input[name="verifyAccount"]').fill('65740');
    await page.locator('input[name="amount"]').fill('50');
    await page.getByRole('button', { name: 'Send Payment' }).click();
    await expect(page.getByRole('heading', { name: 'Bill Payment Complete' })).toBeVisible();
});