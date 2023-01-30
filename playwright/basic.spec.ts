import { test, expect } from '@playwright/test';

test('yellow, yellow', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#BasicWires .card');
	await module.locator('label[for="basicwires_1_2"]').click(); //yellow
	await module.locator('label[for="basicwires_2_2"]').click(); //yellow
	const answer = await module.locator('#basicwires_solution');
	await expect(answer).toBeHidden();
	await expect(answer).toContainText('');
});

test('yellow, black, yellow', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#BasicWires .card');
	await module.locator('label[for="basicwires_1_2"]').click(); //yellow
	await module.locator('label[for="basicwires_2_3"]').click(); //black
	await module.locator('label[for="basicwires_3_2"]').click(); //yellow
	const answer = await module.locator('#basicwires_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('2nd');
});

test('red, red, blue, blue', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#BasicWires .card');
	await module.locator('label[for="basicwires_1_0"]').click(); //red
	await module.locator('label[for="basicwires_2_0"]').click(); //red
	await module.locator('label[for="basicwires_3_1"]').click(); //blue
	await module.locator('label[for="basicwires_4_1"]').click(); //blue
	const answer = await module.locator('#basicwires_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Serial');
});


test('black, black, black, black, black', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#BasicWires .card');
	await module.locator('label[for="basicwires_1_3"]').click(); //black
	await module.locator('label[for="basicwires_2_3"]').click(); //black
	await module.locator('label[for="basicwires_3_3"]').click(); //black
	await module.locator('label[for="basicwires_4_3"]').click(); //black
	await module.locator('label[for="basicwires_5_3"]').click(); //black
	const answer = await module.locator('#basicwires_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Serial');
});

test('yellow, yellow, yellow, yellow, yellow, yellow', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#BasicWires .card');
	await module.locator('label[for="basicwires_1_2"]').click(); //yellow
	await module.locator('label[for="basicwires_2_2"]').click(); //yellow
	await module.locator('label[for="basicwires_3_2"]').click(); //yellow
	await module.locator('label[for="basicwires_4_2"]').click(); //yellow
	await module.locator('label[for="basicwires_5_2"]').click(); //yellow
	await module.locator('label[for="basicwires_6_2"]').click(); //yellow
	const answer = await module.locator('#basicwires_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('last');
});