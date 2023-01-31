import { test, expect } from '@playwright/test';

let module;
let serial;
let batteries;
let parallel;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Complicated .card');
	serial = await module.locator('#complicated_serial');
	batteries = await module.locator('#complicated_batteries');
	parallel = await module.locator('#complicated_parallel');
});

test('red', async ({ page }) => {
	await module.locator('#complicated_1_1_label').click(); //Red

	await expect(serial).toBeVisible();
});

test('red, blue', async ({ page }) => {
	await module.locator('#complicated_1_1_label').click(); //Red
	await module.locator('#complicated_1_2_label').click(); //Blue

	await expect(serial).toBeVisible();
});

test('blue', async ({ page }) => {
	await module.locator('#complicated_1_2_label').click(); //Blue

	await expect(serial).toBeVisible();
});

test('light, red, star', async ({ page }) => {
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_1_label').click(); //Red
	await module.locator('#complicated_1_3_label').click(); //Star

	await expect(batteries).toBeVisible();
});

test('light, red', async ({ page }) => {
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_1_label').click(); //Red

	await expect(batteries).toBeVisible();
});

test('light, star', async ({ page }) => {
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_3_label').click(); //Star

	await expect(batteries).toBeVisible();
});

test('red, blue, star', async ({ page }) => {
	await module.locator('#complicated_1_1_label').click(); //Red
	await module.locator('#complicated_1_2_label').click(); //Blue
	await module.locator('#complicated_1_3_label').click(); //Star

	await expect(parallel).toBeVisible();
});


test('light, blue, star', async ({ page }) => {
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_2_label').click(); //Blue
	await module.locator('#complicated_1_3_label').click(); //Star

	await expect(parallel).toBeVisible();
});

test('light, blue', async ({ page }) => {
	await module.locator('#complicated_1_0_label').click(); //Light
	await module.locator('#complicated_1_2_label').click(); //Blue

	await expect(parallel).toBeVisible();
});

//todo: test solution values