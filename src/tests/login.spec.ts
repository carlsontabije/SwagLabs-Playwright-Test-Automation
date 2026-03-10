import user from '../data/users.json';
import { expect, test } from '../fixtures/baseTest';

test.describe('data-driven Authentication', () => {
  for (const persona of user) {
    test(`testing the logins for ${persona.username}`, async ({
      loginPage
    }) => {
      await loginPage.goToLogin();
      await loginPage.login(persona.username, process.env.SAUCE_PASSWORD!);

      if (persona.type === 'error_check') {
        await loginPage.validateErrorMessage(
          'Sorry, this user has been locked out.'
        );
      } else if (persona.type === 'visual_error' || 'visual_check') {
        const image = loginPage.page.locator('.inventory_item_img').first();
        await expect(image).toBeVisible();
      } else if (persona.type === 'performance') {
        await expect(loginPage.page).toHaveURL(/inventory.HTML/, {
          timeout: 10000
        });
      }
    });
  }
});
