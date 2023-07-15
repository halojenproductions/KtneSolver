import { test, expect } from '@playwright/test';

let module;
let answer;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Words .card');
	answer = await module.locator('div.solution');
});

test('step 1, Left middle', async ({ page }) => {
	await module.locator('label[for="words_s1"]').click();
	await module.locator('label[for="words_display_yes"]').click();
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Left middle');

	await module.locator('label[for="words_display_led"]').click();
	await expect(answer).toContainText('Left middle');

	await module.locator('label[for="words_display_theyare"]').click();
	await expect(answer).toContainText('Left middle');
});

test('step 1, Right middle', async ({ page }) => {
	await module.locator('label[for="words_s1"]').click();
	await module.locator('label[for="words_display_blank"]').click();
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Right middle');

	await module.locator('label[for="words_display_you"]').click();
	await expect(answer).toContainText('Right middle');

	await module.locator('label[for="words_display_their"]').click();
	await expect(answer).toContainText('Right middle');
	
	await module.locator('label[for="words_display_red"]').click();
	await expect(answer).toContainText('Right middle');
	
	await module.locator('label[for="words_display_your"]').click();
	await expect(answer).toContainText('Right middle');
		
	await module.locator('label[for="words_display_read"]').click();
	await expect(answer).toContainText('Right middle');
});

test('step 2', async ({ page }) => {
	await module.locator('label[for="words_s2"]').click();
	await module.locator('label[for="words_display_ready"]').click();
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY');

	await module.locator('label[for="words_display_first"]').click();
	await expect(answer).toContainText('LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST');

	await module.locator('label[for="words_display_no"]').click();
	await expect(answer).toContainText('BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO');
	
	await module.locator('label[for="words_display_blank"]').click();
	await expect(answer).toContainText('WAIT, RIGHT, OKAY, MIDDLE, BLANK');
	
	await module.locator('label[for="words_display_nothing"]').click();
	await expect(answer).toContainText('UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING');
		
	await module.locator('label[for="words_display_yes"]').click();
	await expect(answer).toContainText('OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES');
});

test('step 2, No word available', async ({ page }) => {
	await module.locator('label[for="words_s2"]').click();
	await module.locator('label[for="words_display_c"]').click();
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('No word available');

	await module.locator('label[for="words_display_holdon"]').click();
	await expect(answer).toContainText('No word available');

	await module.locator('label[for="words_display_lead"]').click();
	await expect(answer).toContainText('No word available');
	
	await module.locator('label[for="words_display_read"]').click();
	await expect(answer).toContainText('No word available');
	
	await module.locator('label[for="words_display_there"]').click();
	await expect(answer).toContainText('No word available');
		
	await module.locator('label[for="words_display_says"]').click();
	await expect(answer).toContainText('No word available');
});

test('step 1, No position available', async ({ page }) => {
	await module.locator('label[for="words_s1"]').click();
	await module.locator('label[for="words_display_done"]').click();
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('No position available');

	await module.locator('label[for="words_display_hold"]').click();
	await expect(answer).toContainText('No position available');

	await module.locator('label[for="words_display_next"]').click();
	await expect(answer).toContainText('No position available');
	
	await module.locator('label[for="words_display_like"]').click();
	await expect(answer).toContainText('No position available');
	
	await module.locator('label[for="words_display_press"]').click();
	await expect(answer).toContainText('No position available');
		
	await module.locator('label[for="words_display_sure"]').click();
	await expect(answer).toContainText('No position available');
});