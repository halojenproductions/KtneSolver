import { test, expect } from '@playwright/test';

let module;
let answer;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Morse .card');
	answer = await module.locator('div.solution');
});

test('special1', async ({ page }) => {
	await module.locator('label[for="morse_6"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('555');
});

test('special2', async ({ page }) => {
	await module.locator('label[for="morse_7"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('595');
});

test('special3', async ({ page }) => {
	await module.locator('label[for="morse_10"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('565');
});

test('special4', async ({ page }) => {
	await module.locator('label[for="morse_12"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('592');
});

test('special5', async ({ page }) => {
	await module.locator('label[for="morse_14"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('592');
});

test('special6', async ({ page }) => {
	await module.locator('label[for="morse_17"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('535');
});

test('shell', async ({ page }) => {
	await module.locator('label[for="morse_0"]').click();
	await module.locator('label[for="morse_2"]').click();
	await module.locator('label[for="morse_3"]').click();
	await module.locator('label[for="morse_8"]').click();


	await expect(answer).toBeVisible();
	await expect(answer).toContainText('505');
});


test('bistro', async ({ page }) => {
	await module.locator('label[for="morse_1"]').click();
	await module.locator('label[for="morse_2"]').click();
	await module.locator('label[for="morse_5"]').click();
	await module.locator('label[for="morse_9"]').click();
	await module.locator('label[for="morse_11"]').click();
	await module.locator('label[for="morse_15"]').click();


	await expect(answer).toBeVisible();
	await expect(answer).toContainText('552');
});