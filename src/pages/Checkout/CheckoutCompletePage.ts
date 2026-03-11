import { Locator, Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;
  private readonly purchaseSuccessMessage: Locator;
  private readonly returnHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.purchaseSuccessMessage = page.getByRole('heading', {
      name: 'Thank you for your order!'
    });
    this.returnHomeButton = page.getByRole('button', { name: 'Back Home' });
  }

  async verifySuccessMessage() {
    await expect(this.purchaseSuccessMessage).toBeVisible();
    await this.returnHomeButton.click();
  }
}
