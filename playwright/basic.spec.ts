import { test, expect } from '@playwright/test';

let module;
let answer;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Basic .card');
	answer = await module.locator('div.solution');
});

test('yellow, yellow', async ({ page }) => {
	await module.locator('label[for="basicwires_1_2"]').click(); //yellow
	await module.locator('label[for="basicwires_2_2"]').click(); //yellow
	await expect(answer).toBeHidden();
	await expect(answer).toContainText('');
});

test('yellow, black, yellow', async ({ page }) => {
	await module.locator('label[for="basicwires_1_2"]').click(); //yellow
	await module.locator('label[for="basicwires_2_3"]').click(); //black
	await module.locator('label[for="basicwires_3_2"]').click(); //yellow
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('2nd');
});

test('red, red, blue, blue', async ({ page }) => {
	await module.locator('label[for="basicwires_1_0"]').click(); //red
	await module.locator('label[for="basicwires_2_0"]').click(); //red
	await module.locator('label[for="basicwires_3_1"]').click(); //blue
	await module.locator('label[for="basicwires_4_1"]').click(); //blue
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('2nd'); 
});


test('black, black, black, black, black', async ({ page }) => {
	await module.locator('label[for="basicwires_1_3"]').click(); //black
	await module.locator('label[for="basicwires_2_3"]').click(); //black
	await module.locator('label[for="basicwires_3_3"]').click(); //black
	await module.locator('label[for="basicwires_4_3"]').click(); //black
	await module.locator('label[for="basicwires_5_3"]').click(); //black
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('first');
});

test('yellow, yellow, yellow, yellow, yellow, yellow', async ({ page }) => {
	await module.locator('label[for="basicwires_1_2"]').click(); //yellow
	await module.locator('label[for="basicwires_2_2"]').click(); //yellow
	await module.locator('label[for="basicwires_3_2"]').click(); //yellow
	await module.locator('label[for="basicwires_4_2"]').click(); //yellow
	await module.locator('label[for="basicwires_5_2"]').click(); //yellow
	await module.locator('label[for="basicwires_6_2"]').click(); //yellow
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('last');
});

test('red, red, blue, blue, serial', async ({ page }) => {
	await module.locator('label[for="basicwires_1_0"]').click(); //red
	await module.locator('label[for="basicwires_2_0"]').click(); //red
	await module.locator('label[for="basicwires_3_1"]').click(); //blue
	await module.locator('label[for="basicwires_4_1"]').click(); //blue
	await module.locator('label[for="basic_s2"]').click(); //serial
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('last red'); 
});

test('black, black, black, black, black, serial', async ({ page }) => {
	await module.locator('label[for="basicwires_1_3"]').click(); //black
	await module.locator('label[for="basicwires_2_3"]').click(); //black
	await module.locator('label[for="basicwires_3_3"]').click(); //black
	await module.locator('label[for="basicwires_4_3"]').click(); //black
	await module.locator('label[for="basicwires_5_3"]').click(); //black
	await module.locator('label[for="basic_s2"]').click(); //serial
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('4th');
});