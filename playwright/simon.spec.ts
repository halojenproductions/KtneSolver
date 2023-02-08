import { test, expect } from '@playwright/test';

let module;
let answer;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Simon .card');
	answer = await module.locator('div.solution');
});

test('red, blue, green, yellow', async ({ page }) => {

	await module.locator('label[for="simon_0_0"]').click(); //red
	await module.locator('label[for="simon_1_1"]').click(); //blue
	await module.locator('label[for="simon_2_2"]').click(); //green
	await module.locator('label[for="simon_3_3"]').click(); //yellow
	await expect(answer).toBeHidden();	
	await expect(answer).toContainText('');
});

test('vowel, 0, red, blue, green, yellow', async ({ page }) => {
	await module.locator('label[for="simon_serial_vowel"]').click(); 
	await module.locator('label[for="simon_strikes_0"]').click(); 
	await module.locator('label[for="simon_0_0"]').click(); //red
	await module.locator('label[for="simon_1_1"]').click(); //blue
	await module.locator('label[for="simon_2_2"]').click(); //green
	await module.locator('label[for="simon_3_3"]').click(); //yellow
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('blue, red, yellow, green');
});

test('novowel, 0, red, blue, green, yellow', async ({ page }) => {
	await module.locator('label[for="simon_serial_no vowel"]').click();
	await module.locator('label[for="simon_strikes_0"]').click(); 
	await module.locator('label[for="simon_0_0"]').click(); //red
	await module.locator('label[for="simon_1_1"]').click(); //blue
	await module.locator('label[for="simon_2_2"]').click(); //green
	await module.locator('label[for="simon_3_3"]').click(); //yellow
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('blue, yellow, green, red');
});

test('vowel, 1, red, blue, green, yellow', async ({ page }) => {
	await module.locator('label[for="simon_serial_vowel"]').click();
	await module.locator('label[for="simon_strikes_1"]').click(); 
	await module.locator('label[for="simon_0_0"]').click(); //red
	await module.locator('label[for="simon_1_1"]').click(); //blue
	await module.locator('label[for="simon_2_2"]').click(); //green
	await module.locator('label[for="simon_3_3"]').click(); //yellow
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('yellow, green, blue, red');
});

test('novowel, 2, red, blue, green, yellow', async ({ page }) => {
	await module.locator('label[for="simon_serial_no vowel"]').click(); 
	await module.locator('label[for="simon_strikes_2"]').click(); 
	await module.locator('label[for="simon_0_0"]').click(); //red
	await module.locator('label[for="simon_1_1"]').click(); //blue
	await module.locator('label[for="simon_2_2"]').click(); //green
	await module.locator('label[for="simon_3_3"]').click(); //yellow
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('yellow, green, blue, red');
});