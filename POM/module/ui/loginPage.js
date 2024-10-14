export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.btn = page.locator('button');
  }

  async login(page, email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.btn.click();
    await page.waitForLoadState('networkidle');
  }
}
