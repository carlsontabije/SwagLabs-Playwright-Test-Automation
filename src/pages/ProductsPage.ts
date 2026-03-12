import { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  private readonly productCard: Locator;
  private readonly addToCartButton: Locator;
  private readonly goToCartButton: Locator;

  private readonly filterDropdown: Locator;
  private readonly itemName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCard = page
      .locator('.inventory_item')
      .filter({ hasText: 'Sauce Labs Fleece Jacket' });
    this.addToCartButton = this.productCard.getByRole('button', {
      name: 'Add to cart'
    });
    this.goToCartButton = page.locator('.shopping_cart_container');

    this.filterDropdown = page.locator('.product_sort_container');
    this.itemName = page.locator('.inventory_item_name');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.goToCartButton.click();
  }

  async filterItems(value: string) {
    await this.filterDropdown.selectOption(value);
  }

  async getItemName() {
    return await this.itemName.first().textContent();
  }
}
