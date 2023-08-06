import { test, expect } from '@playwright/test';

test('Page loads', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const banner = await page.getByRole('heading', { name: 'Keep Talking and Nobody Explodes' });
	await expect(banner).toBeVisible();
});

test('Nav renders', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const lastLink = await page.locator('#Nav a.nav-link[href="#Knobs"]');
	await expect(lastLink).toBeVisible();
});
