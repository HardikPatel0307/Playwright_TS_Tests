import { test, expect } from '@playwright/test';

test('Add and Remove articles form wikipedia watchlist', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your username').fill('HariakshWiki');
  await page.getByPlaceholder('Enter your username').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('Sw@mi100');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByRole('link', { name: 'Random article' }).click();
  const firstArticleTitle = (await page.locator('#firstHeading').textContent())?.trim() ?? 'Unknown Title';
  console.log(`First random article: ${firstArticleTitle}`);
  await page.getByRole('link', { name: 'Watch', exact: true }).click();

  await page.getByRole('link', { name: 'Random article' }).click();
  const secondArticleTitle = (await page.locator('#firstHeading').textContent())?.trim() ?? 'Unknown Title';
  console.log(`Second random article: ${secondArticleTitle}`);

  await page.getByRole('link', { name: 'Watch', exact: true }).click();
  await page.getByRole('link', { name: 'Watchlist', exact: true }).click();
  await page.getByRole('link', { name: 'View and edit watchlist' }).click();

  // Verify both articles are in the watchlist
  await expect(page.locator('body')).toContainText(firstArticleTitle);
  await expect(page.locator('body')).toContainText(secondArticleTitle);

  await page.getByLabel(firstArticleTitle).check();
  await page.getByRole('button', { name: 'Remove titles' }).click();

  await page.getByRole('link', { name: 'View and edit watchlist' }).click();
  await expect(page.locator('body')).not.toContainText(firstArticleTitle);
  await expect(page.locator('body')).toContainText(secondArticleTitle);

});