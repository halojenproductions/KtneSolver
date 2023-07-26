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
	await module.locator('#complicated_1_red_label').click();

	await expect(serial).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('red, blue', async ({ page }) => {
	await module.locator('#complicated_1_red_label').click();
	await module.locator('#complicated_1_blue_label').click();

	await expect(serial).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('blue', async ({ page }) => {
	await module.locator('#complicated_1_blue_label').click();

	await expect(serial).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('light, red, star', async ({ page }) => {
	await module.locator('#complicated_1_light_label').click();
	await module.locator('#complicated_1_red_label').click();
	await module.locator('#complicated_1_star_label').click();

	await expect(batteries).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('light, red', async ({ page }) => {
	await module.locator('#complicated_1_light_label').click();
	await module.locator('#complicated_1_red_label').click();

	await expect(batteries).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('light, star', async ({ page }) => {
	await module.locator('#complicated_1_light_label').click();
	await module.locator('#complicated_1_star_label').click();

	await expect(batteries).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('red, blue, star', async ({ page }) => {
	await module.locator('#complicated_1_red_label').click();
	await module.locator('#complicated_1_blue_label').click();
	await module.locator('#complicated_1_star_label').click();

	await expect(parallel).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});


test('light, blue, star', async ({ page }) => {
	await module.locator('#complicated_1_light_label').click();
	await module.locator('#complicated_1_blue_label').click();
	await module.locator('#complicated_1_star_label').click();

	await expect(parallel).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('light, blue', async ({ page }) => {
	await module.locator('#complicated_1_light_label').click();
	await module.locator('#complicated_1_blue_label').click();

	await expect(parallel).toBeVisible();
	await expect(module.locator('#complicated_1_result_label')).toContainText('Leave');
});

test('white', async ({ page }) => {
	await expect(module.locator('#complicated_1_result_label')).toContainText('Cut');
});

test('star', async ({ page }) => {
	await module.locator('#complicated_1_star_label').click();
	

	await expect(module.locator('#complicated_1_result_label')).toContainText('Cut');
});

test('star, red', async ({ page }) => {
	await module.locator('#complicated_1_star_label').click();
	await module.locator('#complicated_1_red_label').click();

	await expect(module.locator('#complicated_1_result_label')).toContainText('Cut');
});