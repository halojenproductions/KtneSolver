import { test, expect } from '@playwright/test';

let module;
let cellIdentifier;
let cellStart;
let cellFinish;
test.beforeEach(async ({ page }, testInfo) => {
	await page.goto('http://localhost:8080/');
	module = await page.locator('#Mazes .card');
});

test('identifier', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_5_5');
	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).toHaveClass(/identifier/);
	await expect(cellIdentifier.locator('svg use')).toHaveAttribute('href', /#circle$/);
});

test('start', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_5_5');
	cellStart = await module.locator('#cell_5_4');

	await cellIdentifier.locator('.cell-div').click();
	await cellStart.locator('.cell-div').click();

	await expect(cellStart).toHaveClass(/start/);
	await expect(cellStart.locator('svg use')).toHaveAttribute('href', /#square-fill$/);
});

test('finish', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_5_5');
	cellStart = await module.locator('#cell_5_4');
	cellFinish = await module.locator('#cell_4_5');

	await cellIdentifier.locator('.cell-div').click();
	await cellStart.locator('.cell-div').click();
	await cellFinish.locator('.cell-div').click();

	await expect(cellFinish).toHaveClass(/finish/);
	await expect(cellFinish.locator('svg use')).toHaveAttribute('href', /#triangle-fill$/);
});

test('move start', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_5_5');
	cellStart = await module.locator('#cell_5_4');
	cellFinish = await module.locator('#cell_4_5');

	await cellIdentifier.locator('.cell-div').click();
	await cellStart.locator('.cell-div').click();
	await cellFinish.locator('.cell-div').click();

	await expect(cellStart).toHaveClass(/start/);
	await expect(cellStart.locator('svg use')).toHaveAttribute('href', /#square-fill$/);

	cellStart = await module.locator('#cell_0_0'); // New start/current.
	await cellStart.locator('.cell-div').click();

	await expect(cellStart).toHaveClass(/start/);
	await expect(cellStart.locator('svg use')).toHaveAttribute('href', /#square-fill$/);
});

test('maze #1', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_1_0');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).not.toHaveClass(/wall-top/);
	await expect(cellIdentifier).toHaveClass(/wall-right/);
	await expect(cellIdentifier).not.toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).toHaveClass(/wall-left/);
});

test('maze #2', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_3_1');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).not.toHaveClass(/wall-top/);
	await expect(cellIdentifier).toHaveClass(/wall-right/);
	await expect(cellIdentifier).toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).not.toHaveClass(/wall-left/);
});

test('maze #3', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_3_3');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).not.toHaveClass(/wall-top/);
	await expect(cellIdentifier).toHaveClass(/wall-right/);
	await expect(cellIdentifier).not.toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).not.toHaveClass(/wall-left/);
});

test('maze #4', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_0_0');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).toHaveClass(/wall-top/);
	await expect(cellIdentifier).not.toHaveClass(/wall-right/);
	await expect(cellIdentifier).not.toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).toHaveClass(/wall-left/);
});

test('maze #5', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_2_4');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).not.toHaveClass(/wall-top/);
	await expect(cellIdentifier).not.toHaveClass(/wall-right/);
	await expect(cellIdentifier).not.toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).not.toHaveClass(/wall-left/);
});

test('maze #6', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_4_2');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).not.toHaveClass(/wall-top/);
	await expect(cellIdentifier).toHaveClass(/wall-right/);
	await expect(cellIdentifier).toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).not.toHaveClass(/wall-left/);
});

test('maze #7', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_0_1');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).toHaveClass(/wall-top/);
	await expect(cellIdentifier).not.toHaveClass(/wall-right/);
	await expect(cellIdentifier).toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).not.toHaveClass(/wall-left/);
});

test('maze #8', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_3_2');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).not.toHaveClass(/wall-top/);
	await expect(cellIdentifier).toHaveClass(/wall-right/);
	await expect(cellIdentifier).not.toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).not.toHaveClass(/wall-left/);
});

test('maze #9', async ({ page }) => {
	cellIdentifier = await module.locator('#cell_1_2');

	await cellIdentifier.locator('.cell-div').click();

	await expect(cellIdentifier).not.toHaveClass(/wall-top/);
	await expect(cellIdentifier).not.toHaveClass(/wall-right/);
	await expect(cellIdentifier).not.toHaveClass(/wall-bottom/);
	await expect(cellIdentifier).not.toHaveClass(/wall-left/);
});
