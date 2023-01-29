import { test, expect } from '@playwright/test';
import exp from 'constants';

let module;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Keypad .card');
});

test('Todo: Write keypad tests.', async ({ page }) => {

});
