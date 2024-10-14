import { test, expect } from '@playwright/test';
import { ENDPOINTS } from '../fixtures/http';
import { PAGE_TEXT } from '../fixtures/pageText';
import { RegisterPage } from '../POM/module/ui/registerPage';
import { VALID_USER } from '../fixtures/userData';
import { Common } from '../POM/module/ui/common';
import { Dashboard } from '../POM/module/ui/dashboard';

let registerPage, common, dashboard;

test.describe('Register test cases', () => {
  test.beforeEach('Visit register page', async ({ page }) => {
    //Instantiate class
    registerPage = new RegisterPage(page);
    common = new Common(page);
    dashboard = new Dashboard(page);
    await page.goto(`${ENDPOINTS['REGISTER_ENDPOINT']}`);
    await expect(page.getByText(PAGE_TEXT['H1_REGISTER'])).toBeVisible();
  });

  test('User should be registered successfully', async ({ page }) => {
    await registerPage.register(
      page,
      VALID_USER['username'],
      VALID_USER['email'],
      VALID_USER['password']
    );

    await dashboard.awaitEvent();
    await expect(
      page.locator(common['dashboardHeader'], {
        hasText: PAGE_TEXT['DASHBOARD_HEADER'],
      })
    ).toBeVisible();
  });
});
