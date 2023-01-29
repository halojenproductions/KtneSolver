import { test, expect } from '@playwright/test';

let module;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Password .card');
});

test('Password', async ({ page }) => {
	await module.locator('#passwd_letters1').type('WA');
	await module.locator('#passwd_letters2').type('rb');
	await module.locator('#passwd_letters3').type('io');
	await module.locator('#passwd_letters4').type('tu');
	await module.locator('#passwd_letters5').type('e');
	const answer = await module.locator('#passwd_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toHaveText('write');
});