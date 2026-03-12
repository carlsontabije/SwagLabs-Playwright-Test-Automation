import { faker } from '@faker-js/faker';
import { expect, test } from '../../fixtures/baseTest';

test.describe('e2e Checkout', () => {
  test('testing user purchase flow', async ({
    productPage,
    cartPage,
    checkoutInfoPage,
    checkoutOverviewPage,
    checkoutCompletePage
  }) => {
    await test.step('Add product to cart then proceed to checkout', async () => {
      await productPage.addProductToCart();
      await productPage.goToCart();
      await cartPage.checkoutItem();
    });

    await test.step('Fill in user information', async () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const zip = faker.location.zipCode();
      await checkoutInfoPage.fillInfo(firstName, lastName, zip);
    });
    await test.step('Verify successful Purchase', async () => {
      await checkoutOverviewPage.finishPurchase();
      await checkoutCompletePage.verifySuccessMessage();
      await expect(productPage.page).toHaveURL(/inventory.html/);
    });
  });
});
