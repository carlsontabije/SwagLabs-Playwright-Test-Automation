import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  private readonly usernameField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder('Username');
    this.passwordField = page.getByPlaceholder('Password');
    this.loginButton = page.getByText('Login');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goToLogin() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async validateErrorMessage(expectedText: string) {
    await expect(this.errorMessage).toContainText(expectedText);
  }
}
