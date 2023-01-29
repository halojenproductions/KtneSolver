import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Any colour, detonate, no cells', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#MissileButton .card');
	await module.getByText('Blue').click();
	await module.getByText('Detonate').click();
	await module.locator('label[for="button_batts1"]').click();
	const answer = await module.locator('#button_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Hold');
});

test('White, abort or hold, no CAR', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#MissileButton .card');
	await module.getByText('White').click();
	await module.getByText('Abort').click();
	await module.getByText('No CAR').click();
	const answer = await module.locator('#button_solution');
	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Hold');
});