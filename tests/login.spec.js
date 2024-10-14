import { expect, test } from '@playwright/test';
import { ENDPOINTS } from '../fixtures/http';
import { PAGE_TEXT } from '../fixtures/pageText';
import { LoginPage } from '../POM/module/ui/loginPage';
import { EXISTING_USER } from '../fixtures/userData';
import { Common } from '../POM/module/ui/common';

let loginPage, common;

test.describe('Login user successfully', () => {
  test.beforeEach('Visit login page', async ({ page }) => {
    loginPage = new LoginPage(page);
    common = new Common(page);
    await page.goto(ENDPOINTS['LOGIN_ENDPOINT']);
    await expect(page.locator('h1')).toHaveText(PAGE_TEXT['H1_LOGIN']);
  });

  test('User should be logged in successfully', async ({ page }) => {
    await loginPage.login(
      page,
      EXISTING_USER['email'],
      EXISTING_USER['password']
    );

    await expect(
      page.locator(common['dashboardHeader'], {
        hasText: PAGE_TEXT['DASHBOARD_HEADER'],
      })
    ).toBeVisible();
  });
});
