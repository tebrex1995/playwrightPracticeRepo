import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/module/ui/loginPage';
import { Dashboard } from '../POM/module/ui/dashboard';
import { EXISTING_USER } from '../fixtures/userData';
import { ENDPOINTS } from '../fixtures/http';
import { PAGE_TEXT } from '../fixtures/pageText';

let loginPage, dashboard;

test.describe('Add to cart tests', () => {
  test.beforeEach('Instantiate class and login', async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new Dashboard(page);
    //Visit URL
    await page.goto(ENDPOINTS['LOGIN_ENDPOINT']);
    await expect(page.locator('h1')).toHaveText(PAGE_TEXT['H1_LOGIN']);
    //Login
    await loginPage.login(
      page,
      EXISTING_USER['email'],
      EXISTING_USER['password']
    );
  });

  test('Add products to cart', async ({ page }) => {
    await dashboard.navigateToPage(4);
    await dashboard.addProductToCart();
    await expect(page.locator(dashboard.cartButton).first()).toHaveText('1');
    await dashboard.navigateToPage(1);
    await dashboard.addProductToCart();
    await dashboard.addProductToCart();
    await expect(page.locator(dashboard.cartButton).first()).toHaveText('3');
    await dashboard.navigateToPage(3);
    await dashboard.addProductToCart();
    await dashboard.addProductToCart();
    await dashboard.addProductToCart();
    await expect(page.locator(dashboard.cartButton).first()).toHaveText('6');
  });

  test.afterEach('Clear cart', async ({ page }) => {
    const cartButton = page.locator(dashboard.cartButton).first();
    const clearBtn = page.locator(dashboard.clearCart);
    await cartButton.click();
    await clearBtn.click();
    await dashboard.awaitEvent();
  });
});
