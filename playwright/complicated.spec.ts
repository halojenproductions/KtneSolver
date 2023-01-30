import { test, expect } from '@playwright/test';

//TODO: add test condition to expect other buttons not visible on all tests and rename tests

test('red', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_1_label').click(); //Red
	const answer = await module.locator('#complicated_serial');
	await expect(answer).toBeVisible();
});

test('red, blue', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_1_label').click(); //Red
	await module.locator('#complicated_1_2_label').click(); //Blue
	const answer = await module.locator('#complicated_serial');
	await expect(answer).toBeVisible();
});

test('blue', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_2_label').click(); //Blue
	const answer = await module.locator('#complicated_serial');
	await expect(answer).toBeVisible();
});

test('light, red, star', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_1_label').click(); //Red
	await module.locator('#complicated_1_3_label').click(); //Star
	const answer = await module.locator('#complicated_batteries');
	await expect(answer).toBeVisible();
});

test('light, red', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_1_label').click(); //Red
	const answer = await module.locator('#complicated_batteries');
	await expect(answer).toBeVisible();
});

test('light, star', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_3_label').click(); //Star
	const answer = await module.locator('#complicated_batteries');
	await expect(answer).toBeVisible();
});

test('red, blue, star', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_1_label').click(); //Red
	await module.locator('#complicated_1_2_label').click(); //Blue
	await module.locator('#complicated_1_3_label').click(); //Star
	const answer = await module.locator('#complicated_parallel');
	await expect(answer).toBeVisible();
});


test('light, blue, star', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_2_label').click(); //Blue
	await module.locator('#complicated_1_3_label').click(); //Star
	const answer = await module.locator('#complicated_parallel');
	await expect(answer).toBeVisible();
});

test('light, blue', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Complicated .card');
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_2_label').click(); //Blue
	const answer = await module.locator('#complicated_parallel');
	await expect(answer).toBeVisible();
});