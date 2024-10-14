export class Dashboard {
  constructor(page) {
    this.page = page;
    this.allPages = '.paginated';
    this.productCard = '[test-id="product-card"]';
    this.addToCartBtn = 'svg.h-6';
    this.cartButton = '.ml-3 button';
    this.clearCart = '.ml-2';
  }
  async navigateToPage(pageNum) {
    await this.page.locator(`button[aria-label="${pageNum}"]`).click();
    await this.page.waitForTimeout(3000);
  }

  async addProductToCart() {
    const firstProductCard = await this.page
      .locator(this.productCard)
      .first()
      .locator(this.addToCartBtn);
    if (firstProductCard.isEnabled()) {
      await firstProductCard.click();
      await this.page.waitForTimeout(3000);
    } else {
      await this.navigateToPage(1);
      await firstProductCard.click();
      await this.page.waitForTimeout(3000);
    }
  }
  async awaitEvent() {
    return this.page.waitForTimeout(3000);
  }
}
