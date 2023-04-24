import { test, expect } from '@playwright/test';
import exp from 'constants';

let module;
let answer;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Keypad .card');
	answer = await module.locator('div.solution');
});

test('group1', async ({ page }) => {
	await module.locator('label[for="keypad_0"]').click();
	await module.locator('label[for="keypad_1"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Ϙ');
	await expect(answer).toContainText('Ѧ');
	await expect(answer).toContainText('ƛ');
	await expect(answer).toContainText('Ϟ');
	await expect(answer).toContainText('Ѭ');
	await expect(answer).toContainText('ϗ');
	await expect(answer).toContainText('Ͽ');
});

test('group2', async ({ page }) => {
	await module.locator('label[for="keypad_0"]').click();
	await module.locator('label[for="keypad_7"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Ӭ');
	await expect(answer).toContainText('Ϙ');
	await expect(answer).toContainText('Ͽ');
	await expect(answer).toContainText('Ҩ');
	await expect(answer).toContainText('☆');
	await expect(answer).toContainText('ϗ');
	await expect(answer).toContainText('¿');
});

test('group3', async ({ page }) => {
	await module.locator('label[for="keypad_12"]').click();
	await module.locator('label[for="keypad_14"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('©');
	await expect(answer).toContainText('Ѽ');
	await expect(answer).toContainText('Ҩ');
	await expect(answer).toContainText('Ж');
	await expect(answer).toContainText('Ԇ');
	await expect(answer).toContainText('ƛ');
	await expect(answer).toContainText('☆');
});

test('group4', async ({ page }) => {
	await module.locator('label[for="keypad_10"]').click();
	await module.locator('label[for="keypad_18"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Ϭ');
	await expect(answer).toContainText('¶');
	await expect(answer).toContainText('ƀ');
	await expect(answer).toContainText('Ѭ');
	await expect(answer).toContainText('Ж');
	await expect(answer).toContainText('¿');
	await expect(answer).toContainText('ټ');
});

test('group5', async ({ page }) => {
	await module.locator('label[for="keypad_18"]').click();
	await module.locator('label[for="keypad_21"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('ψ');
	await expect(answer).toContainText('ټ');
	await expect(answer).toContainText('ƀ');
	await expect(answer).toContainText('Ͼ');
	await expect(answer).toContainText('¶');
	await expect(answer).toContainText('Ѯ');
	await expect(answer).toContainText('★');
});

test('group6', async ({ page }) => {
	await module.locator('label[for="keypad_23"]').click();
	await module.locator('label[for="keypad_24"]').click();

	await expect(answer).toBeVisible();
	await expect(answer).toContainText('Ϭ');
	await expect(answer).toContainText('Ӭ');
	await expect(answer).toContainText('҂');
	await expect(answer).toContainText('æ');
	await expect(answer).toContainText('ψ');
	await expect(answer).toContainText('Ҋ');
	await expect(answer).toContainText('Ω');
});