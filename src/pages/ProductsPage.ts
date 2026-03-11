import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  private readonly productCard: Locator;
  private readonly addToCartButton: Locator;
  private readonly goToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCard = page
      .locator('.inventory_item')
      .filter({ hasText: 'Sauce Labs Fleece Jacket' });
    this.addToCartButton = this.productCard.getByRole('button', {
      name: 'Add to cart'
    });
    this.goToCartButton = page.locator('.shopping_cart_container');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.goToCartButton.click();
  }
}
