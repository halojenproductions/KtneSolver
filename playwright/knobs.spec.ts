import { test, expect } from '@playwright/test';

let module;
let answer;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Knobs .card');
	answer = await module.locator('div.solution');
});

test('no result', async ({ page }) => {
	await module.locator('label[for="knobs_2_1"]').click(); 
	await module.locator('label[for="knobs_1_2"]').click(); 
	await module.locator('label[for="knobs_1_3"]').click(); 
	await expect(answer).toBeHidden();
	await expect(answer).toContainText('');
});

test('up', async ({ page }) => {
	await module.locator('label[for="knobs_2_1"]').click(); 
	await module.locator('label[for="knobs_1_2"]').click(); 
	await module.locator('label[for="knobs_1_3"]').click(); 
	await module.locator('label[for="knobs_2_3"]').click(); 
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Up');
});

test('up2', async ({ page }) => {	
	await module.locator('label[for="knobs_1_2"]').click(); 
	await module.locator('label[for="knobs_2_2"]').click(); 
	await module.locator('label[for="knobs_2_3"]').click(); 
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Up');
});

test('down', async ({ page }) => {	
	await module.locator('label[for="knobs_2_1"]').click(); 
	await module.locator('label[for="knobs_1_3"]').click(); 
	await module.locator('label[for="knobs_2_3"]').click(); 
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Down');
});

test('down2', async ({ page }) => {	
	await module.locator('label[for="knobs_1_2"]').click(); 
	await module.locator('label[for="knobs_2_3"]').click(); 
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Down');
});

test('left', async ({ page }) => {	
	await module.locator('label[for="knobs_1_2"]').click(); 
	await module.locator('label[for="knobs_2_1"]').click(); 
	await module.locator('label[for="knobs_2_2"]').click();
	await module.locator('label[for="knobs_2_3"]').click(); 
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Left');
});

test('left2', async ({ page }) => {	
	await module.locator('label[for="knobs_2_1"]').click(); 
	await module.locator('label[for="knobs_1_2"]').click(); 
	await module.locator('label[for="knobs_2_2"]').click(); 	
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Left');
});

test('right', async ({ page }) => {	
	await module.locator('label[for="knobs_1_1"]').click(); 
	await module.locator('label[for="knobs_1_2"]').click(); 
	await module.locator('label[for="knobs_1_3"]').click();
	await module.locator('label[for="knobs_2_2"]').click(); 
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Right');
});

test('right2', async ({ page }) => {	
	await module.locator('label[for="knobs_1_1"]').click(); 
	await module.locator('label[for="knobs_2_2"]').click(); 
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Right');
});