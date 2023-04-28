import { test, expect } from '@playwright/test';

let module;
let s1, s2, s3, s4, s5;

test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Memory .card');
	s1 = await module.locator('#memory_label_1');
	s2 = await module.locator('#memory_label_2');
	s3 = await module.locator('#memory_label_3');
	s4 = await module.locator('#memory_label_4');
	s5 = await module.locator('#memory_label_5');
});

test('one', async ({ page }) => {
	await module.locator('label[for="memory_display_1_1"]').click(); 
	await module.locator('label[for="memory_input_1_1"]').click();
	
	await module.locator('label[for="memory_display_2_1"]').click(); 
	await module.locator('label[for="memory_input_2_1"]').click(); 

	await module.locator('label[for="memory_display_3_1"]').click(); 
	await module.locator('label[for="memory_input_3_1"]').click(); 

	await module.locator('label[for="memory_display_4_1"]').click(); 
	await module.locator('label[for="memory_input_4_1"]').click(); 

	await module.locator('label[for="memory_display_5_1"]').click(); 
	await module.locator('label[for="memory_input_5_1"]').click(); 

	await expect(s1).toContainText('Position 2');
	await expect(s2).toContainText('Label 4');
	await expect(s3).toContainText('Label 4');
	await expect(s4).toContainText('Position 2');
	await expect(s5).toContainText('Label 1');
});

test('two', async ({ page }) => {
	await module.locator('label[for="memory_display_1_2"]').click(); 
	await module.locator('label[for="memory_input_1_2"]').click();
	
	await module.locator('label[for="memory_display_2_2"]').click(); 
	await module.locator('label[for="memory_input_2_2"]').click(); 

	await module.locator('label[for="memory_display_3_2"]').click(); 
	await module.locator('label[for="memory_input_3_2"]').click(); 

	await module.locator('label[for="memory_display_4_2"]').click(); 
	await module.locator('label[for="memory_input_4_2"]').click(); 

	await module.locator('label[for="memory_display_5_2"]').click(); 
	await module.locator('label[for="memory_input_5_2"]').click(); 

	await expect(s1).toContainText('Position 2');
	await expect(s2).toContainText('Position 2');
	await expect(s3).toContainText('Label 2');
	await expect(s4).toContainText('Position 1');
	await expect(s5).toContainText('Label 2');
});

test('three', async ({ page }) => {
	await module.locator('label[for="memory_display_1_3"]').click(); 
	await module.locator('label[for="memory_input_1_3"]').click();
	
	await module.locator('label[for="memory_display_2_3"]').click(); 
	await module.locator('label[for="memory_input_2_3"]').click(); 

	await module.locator('label[for="memory_display_3_3"]').click(); 
	await module.locator('label[for="memory_input_3_3"]').click(); 

	await module.locator('label[for="memory_display_4_3"]').click(); 
	await module.locator('label[for="memory_input_4_3"]').click(); 

	await module.locator('label[for="memory_display_5_3"]').click(); 
	await module.locator('label[for="memory_input_5_3"]').click(); 

	await expect(s1).toContainText('Position 3');
	await expect(s2).toContainText('Position 1');
	await expect(s3).toContainText('Position 3');
	await expect(s4).toContainText('Position 1');
	await expect(s5).toContainText('Label 3');
});

test('four', async ({ page }) => {
	await module.locator('label[for="memory_display_1_4"]').click(); 
	await module.locator('label[for="memory_input_1_4"]').click();
	
	await module.locator('label[for="memory_display_2_4"]').click(); 
	await module.locator('label[for="memory_input_2_4"]').click(); 

	await module.locator('label[for="memory_display_3_4"]').click(); 
	await module.locator('label[for="memory_input_3_4"]').click(); 

	await module.locator('label[for="memory_display_4_4"]').click(); 
	await module.locator('label[for="memory_input_4_4"]').click(); 

	await module.locator('label[for="memory_display_5_4"]').click(); 
	await module.locator('label[for="memory_input_5_4"]').click(); 

	await expect(s1).toContainText('Position 4');
	await expect(s2).toContainText('Position 4');
	await expect(s3).toContainText('Label 4');
	await expect(s4).toContainText('Position 4');
	await expect(s5).toContainText('Label 4');
});