import { Locator, Page } from '@playwright/test';

export class CheckoutInfoPage {
  readonly page: Page;
  private readonly firstnameField: Locator;
  private readonly lastnameField: Locator;
  private readonly zipcodeField: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstnameField = page.getByPlaceholder('First Name');
    this.lastnameField = page.getByPlaceholder('Last Name');
    this.zipcodeField = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async fillInfo(firstname: string, lastname: string, zipcode: string) {
    await this.firstnameField.fill(firstname);
    await this.lastnameField.fill(lastname);
    await this.zipcodeField.fill(zipcode);
    await this.continueButton.click();
  }
}
