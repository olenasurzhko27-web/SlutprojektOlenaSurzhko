import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await page.getByRole('link', { name: 'MCP', exact: true }).click();
  await expect(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search (Control+k)' })).toBeVisible();
});
