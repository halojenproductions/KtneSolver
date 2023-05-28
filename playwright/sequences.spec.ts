import { test, expect } from '@playwright/test';

let module;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Sequences .card');
});

test('red', async ({ page }) => {
	await module.locator('#Sequences_1_0_label').click(); //Red
	await module.locator('#Sequences_1_5_label').click(); //C

	await module.locator('#Sequences_2_0_label').click(); //Red
	await module.locator('#Sequences_2_4_label').click(); //B

	await module.locator('#Sequences_3_0_label').click(); //Red
	await module.locator('#Sequences_3_3_label').click(); //A
	
	await module.locator('#Sequences_4_0_label').click(); //Red
	await module.locator('#Sequences_4_3_label').click(); //A
	
	await module.locator('#Sequences_5_0_label').click(); //Red
	await module.locator('#Sequences_5_4_label').click(); //B
	
	await module.locator('#Sequences_6_0_label').click(); //Red
	await module.locator('#Sequences_6_3_label').click(); //A
	
	await module.locator('#Sequences_7_0_label').click(); //Red
	await module.locator('#Sequences_7_3_label').click(); //A
	
	await module.locator('#Sequences_8_0_label').click(); //Red
	await module.locator('#Sequences_8_3_label').click(); //A
	
	await module.locator('#Sequences_9_0_label').click(); //Red
	await module.locator('#Sequences_9_4_label').click(); //B

	await expect(module.locator('#Sequences_1_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_2_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_3_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_4_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_5_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_6_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_7_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_8_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_9_6_label')).toContainText('Cut');	
});

test('blue', async ({ page }) => {
	await module.locator('#Sequences_1_1_label').click(); //Blue
	await module.locator('#Sequences_1_4_label').click(); //B

	await module.locator('#Sequences_2_1_label').click(); //Blue
	await module.locator('#Sequences_2_3_label').click(); //A

	await module.locator('#Sequences_3_1_label').click(); //Blue
	await module.locator('#Sequences_3_4_label').click(); //B
	
	await module.locator('#Sequences_4_1_label').click(); //Blue
	await module.locator('#Sequences_4_3_label').click(); //A
	
	await module.locator('#Sequences_5_1_label').click(); //Blue
	await module.locator('#Sequences_5_4_label').click(); //B
	
	await module.locator('#Sequences_6_1_label').click(); //Blue
	await module.locator('#Sequences_6_4_label').click(); //B
	
	await module.locator('#Sequences_7_1_label').click(); //Blue
	await module.locator('#Sequences_7_5_label').click(); //C
	
	await module.locator('#Sequences_8_1_label').click(); //Blue
	await module.locator('#Sequences_8_5_label').click(); //C
	
	await module.locator('#Sequences_9_1_label').click(); //Blue
	await module.locator('#Sequences_9_3_label').click(); //A

	await expect(module.locator('#Sequences_1_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_2_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_3_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_4_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_5_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_6_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_7_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_8_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_9_6_label')).toContainText('Cut');	
});

test('black', async ({ page }) => {
	await module.locator('#Sequences_1_2_label').click(); //Black
	await module.locator('#Sequences_1_3_label').click(); //A

	await module.locator('#Sequences_2_2_label').click(); //Black
	await module.locator('#Sequences_2_3_label').click(); //A

	await module.locator('#Sequences_3_2_label').click(); //Black
	await module.locator('#Sequences_3_4_label').click(); //B
	
	await module.locator('#Sequences_4_2_label').click(); //Black
	await module.locator('#Sequences_4_3_label').click(); //A
	
	await module.locator('#Sequences_5_2_label').click(); //Black
	await module.locator('#Sequences_5_4_label').click(); //B
	
	await module.locator('#Sequences_6_2_label').click(); //Black
	await module.locator('#Sequences_6_4_label').click(); //B
	
	await module.locator('#Sequences_7_2_label').click(); //Black
	await module.locator('#Sequences_7_4_label').click(); //B
	
	await module.locator('#Sequences_8_2_label').click(); //Black
	await module.locator('#Sequences_8_5_label').click(); //C
	
	await module.locator('#Sequences_9_2_label').click(); //Black
	await module.locator('#Sequences_9_5_label').click(); //C

	await expect(module.locator('#Sequences_1_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_2_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_3_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_4_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_5_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_6_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_7_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_8_6_label')).toContainText('Cut');	
	await expect(module.locator('#Sequences_9_6_label')).toContainText('Cut');	
});