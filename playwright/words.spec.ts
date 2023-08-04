import { test, expect } from '@playwright/test';

let module;
let answer;
let instructon;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Words .card');
	instructon = await module.locator('#instruction');
	answer = await module.locator('div.solution');
});

test('step 1, Left middle', async ({ page }) => {
	await module.locator('label[for="words_stage1_yes"]').click();
	await expect(instructon).toContainText('Left middle');

	await module.locator('label[for="words_stage1_led"]').click();
	await expect(instructon).toContainText('Left middle');

	await module.locator('label[for="words_stage1_theyare"]').click();
	await expect(instructon).toContainText('Left middle');
});

test('step 1, Right middle', async ({ page }) => {
	await module.locator('label[for="words_stage1_blank"]').click();
	await expect(instructon).toContainText('Right middle');

	await module.locator('label[for="words_stage1_you"]').click();
	await expect(instructon).toContainText('Right middle');

	await module.locator('label[for="words_stage1_their"]').click();
	await expect(instructon).toContainText('Right middle');

	await module.locator('label[for="words_stage1_red"]').click();
	await expect(instructon).toContainText('Right middle');

	await module.locator('label[for="words_stage1_your"]').click();
	await expect(instructon).toContainText('Right middle');

	await module.locator('label[for="words_stage1_read"]').click();
	await expect(instructon).toContainText('Right middle');
});

test('step 2', async ({ page }) => {
	await module.locator('label[for="words_stage1_blank"]').click();

	await module.locator('label[for="words_stage2_ready"]').click();
	await expect(answer).toContainText('YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY');

	await module.locator('label[for="words_stage2_first"]').click();
	await expect(answer).toContainText('LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST');

	await module.locator('label[for="words_stage2_no"]').click();
	await expect(answer).toContainText('BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO');

	await module.locator('label[for="words_stage2_blank"]').click();
	await expect(answer).toContainText('WAIT, RIGHT, OKAY, MIDDLE, BLANK');

	await module.locator('label[for="words_stage2_nothing"]').click();
	await expect(answer).toContainText('UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING');

	await module.locator('label[for="words_stage2_yes"]').click();
	await expect(answer).toContainText('OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES');
});