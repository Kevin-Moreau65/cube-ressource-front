import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Index ressource', () => {
	test('should not have any automatically detectable accessibility issues', async ({ page }) => {
		await page.goto('/ressources');
		await page.click('.content > a');
		const accessibilityScanResults = await new AxeBuilder.default({ page }).analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
