import { test, expect } from '@playwright/test';

test('Loan Process test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');

    await page.getByRole('link', { name: 'Request Loan' }).click();
    await page.locator('#amount').fill('500');
    await page.locator('#downPayment').fill('50');
    await page.locator('#fromAccountId').selectOption('13011');
    await page.locator('#fromAccountId').selectOption('54321');
    await page.getByRole('button', { name: 'Apply Now' }).click();
    await expect(page.getByRole('heading', { name: 'Loan Request Processed' })).toBeVisible();
    await expect(page.getByText('Congratulations, your loan has been approved')).toBeVisible();
});