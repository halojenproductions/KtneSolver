import { test, expect } from '@playwright/test';

test('yellow, black, yellow', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#basicwires .card');
	await module.locator('.btn-group > label:nth-child(6)').first().click();
	await module.locator('div:nth-child(3) > label:nth-child(8)').first().click();
	await module.locator('div:nth-child(4) > label:nth-child(6)').first().click();
	const answer = await module.locator('#basicwires_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('2nd');
});