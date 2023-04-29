import { test, expect } from '@playwright/test';

let module;
let stage1, stage2, stage3, stage4, stage5;

test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Memory .card');
	stage1 = await module.locator('#memory_label_1');
	stage2 = await module.locator('#memory_label_2');
	stage3 = await module.locator('#memory_label_3');
	stage4 = await module.locator('#memory_label_4');
	stage5 = await module.locator('#memory_label_5');
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

	await expect(stage1).toContainText('Position 2');
	await expect(stage2).toContainText('Label 4');
	await expect(stage3).toContainText('Label 4');
	await expect(stage4).toContainText('Position 2');
	await expect(stage5).toContainText('Label 1');
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

	await expect(stage1).toContainText('Position 2');
	await expect(stage2).toContainText('Position 2');
	await expect(stage3).toContainText('Label 2');
	await expect(stage4).toContainText('Position 1');
	await expect(stage5).toContainText('Label 2');
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

	await expect(stage1).toContainText('Position 3');
	await expect(stage2).toContainText('Position 1');
	await expect(stage3).toContainText('Position 3');
	await expect(stage4).toContainText('Position 1');
	await expect(stage5).toContainText('Label 3');
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

	await expect(stage1).toContainText('Position 4');
	await expect(stage2).toContainText('Position 4');
	await expect(stage3).toContainText('Label 4');
	await expect(stage4).toContainText('Position 4');
	await expect(stage5).toContainText('Label 4');
});