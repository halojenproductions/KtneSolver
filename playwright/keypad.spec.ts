import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Todo: Write keypad tests.', async ({ page }) => {
	await page.goto('http://localhost:8080/');
	const module = await page.locator('#Keypad .card');
	
});

