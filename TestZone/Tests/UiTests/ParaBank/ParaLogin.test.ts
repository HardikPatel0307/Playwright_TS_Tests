// e2eTests.test.ts
import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.locator('input[name="username"]').fill('john');
    await page.locator('input[name="username"]').press('Tab');
    await page.locator('input[name="password"]').fill('demo');
    await page.getByRole('button', { name: 'Log In' }).click();
    
    await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    await expect(page.locator('#showOverview')).toContainText('Accounts Overview');
    console.log();
});


