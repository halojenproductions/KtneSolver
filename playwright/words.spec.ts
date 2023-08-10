import { test, expect } from '@playwright/test';

let module;
let answer;
let stage1Solution;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Words .card');
	stage1Solution = await module.locator('#stage1Solution');
	answer = await module.locator('div.solution');
});

test('step 1, Left middle', async ({ page }) => {
	await module.locator('label[for="words_stage1_yes"]').click();
	await expect(stage1Solution).toContainText('Left middle');

	await module.locator('label[for="words_stage1_led"]').click();
	await expect(stage1Solution).toContainText('Left middle');

	await module.locator('label[for="words_stage1_theyare"]').click();
	await expect(stage1Solution).toContainText('Left middle');
});

test('step 1, Right middle', async ({ page }) => {
	await module.locator('label[for="words_stage1_blank"]').click();
	await expect(stage1Solution).toContainText('Right middle');

	await module.locator('label[for="words_stage1_you"]').click();
	await expect(stage1Solution).toContainText('Right middle');

	await module.locator('label[for="words_stage1_their"]').click();
	await expect(stage1Solution).toContainText('Right middle');

	await module.locator('label[for="words_stage1_red"]').click();
	await expect(stage1Solution).toContainText('Right middle');

	await module.locator('label[for="words_stage1_your"]').click();
	await expect(stage1Solution).toContainText('Right middle');

	await module.locator('label[for="words_stage1_read"]').click();
	await expect(stage1Solution).toContainText('Right middle');
});

test('step 2', async ({ page }) => {
	await module.locator('label[for="words_stage1_blank"]').click();

	await module.locator('label[for="words_stage2_ready"]').click();
	await expect(answer).toContainText('Yes, Okay, What, Middle, Left, Press, Right, Blank, Ready');

	await module.locator('label[for="words_stage2_first"]').click();
	await expect(answer).toContainText('Left, Okay, Yes, Middle, No, Right, Nothing, U-H-H-H, Wait, Ready, Blank, What, Press, First');

	await module.locator('label[for="words_stage2_no"]').click();
	await expect(answer).toContainText('Blank, U-H-H-H, Wait, First, What, Ready, Right, Yes, Nothing, Left, Press, Okay, No');

	await module.locator('label[for="words_stage2_blank"]').click();
	await expect(answer).toContainText('Wait, Right, Okay, Middle, Blank');

	await module.locator('label[for="words_stage2_nothing"]').click();
	await expect(answer).toContainText('U-H-H-H, Right, Okay, Middle, Yes, Blank, No, Press, Left, What, Wait, First, Nothing');

	await module.locator('label[for="words_stage2_yes"]').click();
	await expect(answer).toContainText('Okay, Right, U-H-H-H, Middle, First, What, Press, Ready, Nothing, Yes');
});