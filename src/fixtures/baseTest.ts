import { test as base } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutCompletePage } from '../pages/Checkout/CheckoutCompletePage';
import { CheckoutInfoPage } from '../pages/Checkout/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/Checkout/CheckoutOverviewPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductsPage';

type Fixtures = {
  loginPage: LoginPage;
  cartPage: CartPage;
  productPage: ProductPage;
  checkoutInfoPage: CheckoutInfoPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  checkoutInfoPage: async ({ page }, use) => {
    await use(new CheckoutInfoPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  }
});

export { expect } from '@playwright/test';
