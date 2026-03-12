import { filter } from '../../data/filterOptions';
import { expect, test } from '../../fixtures/baseTest';

test.describe('Inventory filtering Functionality', () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.goto();
  });
  for (const data of filter)
    test.only(`Verify filtering of Products by ${data.description}`, async ({
      productPage
    }) => {
      await test.step(`Select ${data.description} from dropdown`, async () => {
        await productPage.filterItems(data.value);
      });

      await test.step('Verify First item is correct', async () => {
        expect(await productPage.getItemName()).toBe(data.expectedFirstItem);
      });
    });
});
