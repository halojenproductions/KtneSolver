import { test, expect } from '@playwright/test';
import exp from 'constants';

let module;
let answer;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#MissileButton .card');
	answer = await module.locator('div.solution');
});

// Case #1.
test('Blue, abort', async ({ page }) => {
	await module.getByText('Blue').click();
	await module.getByText('Abort').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Hold');
});

// Case #2.
test('Any colour, detonate, >1 batt', async ({ page }) => {
	await module.getByText('Yellow').click();
	await module.getByText('Detonate').click();
	await module.locator('label[for="button_batts2"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Click');

	await module.locator('label[for="button_batts3"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Click');
});

// Case #3.
test('White, hold, CAR', async ({ page }) => {
	await module.getByText('White').click();
	await module.getByText('Hold').click();
	await module.locator('label[for="button_car2"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Hold');
});

// Case #4.
test('Yellow or red, abort or hold, >2 batts, FRK', async ({ page }) => {
	await module.getByText('Yellow').click();
	await module.getByText('Abort').click();
	await module.locator('label[for="button_batts3"]').click();
	await module.locator('label[for="button_frk2"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Click');
});

// Case #5.
test('Yellow, detonate, <=1 batt, any FRK', async ({ page }) => {
	await module.getByText('Yellow').click();
	await module.getByText('Detonate').click();
	await module.locator('label[for="button_batts1"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Hold');
});

// Case #6.
test('Red, hold, <=1 batt', async ({ page }) => {
	await module.getByText('Red').click();
	await module.getByText('Hold').click();
	await module.locator('label[for="button_batts1"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Click');
});

// Case #7.
test('White, abort or hold, no CAR', async ({ page }) => {
	await module.getByText('White').click();
	await module.getByText('Abort').click();
	await module.locator('label[for="button_car1"]').click();
	await expect(module.locator('label[for="button_batts1"]')).toBeVisible();
	await module.locator('label[for="button_batts1"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Hold');
});

test('Any colour, detonate, no cells', async ({ page }) => {
	await module.getByText('Blue').click();
	await module.getByText('Detonate').click();
	await module.locator('label[for="button_batts1"]').click();
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Hold');
});
