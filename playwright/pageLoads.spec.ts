import { test, expect } from '@playwright/test';

test('Page loads', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  const banner = await page.getByRole('heading', { name: 'Keep Talking and Nobody Explodes' });
  await  expect(banner).toBeVisible();
});