import { test, expect } from '@playwright/test';

//TODO: add test condition to expect other buttons not visible on all tests and rename tests

test('red', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_1_label').click();
	const answer = await module.locator('#complicated_serial');
	await expect(answer).toBeVisible();
});

test('red, blue', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_1_label').click();
	await module.locator('#complicated_1_2_label').click();
	const answer = await module.locator('#complicated_serial');
	await expect(answer).toBeVisible();
});

test('blue', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_2_label').click();
	const answer = await module.locator('#complicated_serial');
	await expect(answer).toBeVisible();
});

test('batt1', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_0_label').click();
	await module.locator('#complicated_1_1_label').click();
	await module.locator('#complicated_1_3_label').click();
	const answer = await module.locator('#complicated_batteries');
	await expect(answer).toBeVisible();
});

test('batt2', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_0_label').click();
	await module.locator('#complicated_1_1_label').click();
	const answer = await module.locator('#complicated_batteries');
	await expect(answer).toBeVisible();
});

test('batt3', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_0_label').click();
	await module.locator('#complicated_1_1_label').click();
	await module.locator('#complicated_1_3_label').click();
	const answer = await module.locator('#complicated_batteries');
	await expect(answer).toBeVisible();
});

test('par1', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_1_label').click();
	await module.locator('#complicated_1_3_label').click();
	const answer = await module.locator('#complicated_parallel');
	await expect(answer).toBeVisible();
});


test('par2', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_0_label').click();
	await module.locator('#complicated_1_2_label').click();
	await module.locator('#complicated_1_3_label').click();
	const answer = await module.locator('#complicated_parallel');
	await expect(answer).toBeVisible();
});

test('par3', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#complicated .card');
	await module.locator('#complicated_1_0_label').click();
	await module.locator('#complicated_1_2_label').click();
	const answer = await module.locator('#complicated_parallel');
	await expect(answer).toBeVisible();
});