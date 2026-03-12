import { expect, test as setup } from '../../fixtures/baseTest';
import { LoginPage } from '../../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLogin();

  const username = process.env.SAUCE_USERNAME!;
  const password = process.env.SAUCE_PASSWORD ?? 'fallback_if_local';
  await loginPage.login(username, password);

  await expect(page).toHaveURL(/.*inventory.html/);
  await page.context().storageState({ path: authFile });
});
