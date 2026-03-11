import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  private readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async checkoutItem() {
    await this.checkoutButton.click();
  }
}
