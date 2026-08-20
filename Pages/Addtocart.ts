import { Page, expect } from "@playwright/test";

export default class Addtocart {
  constructor(public page: Page) {}

  async addProductToCart(productImageAlt: string, size: string, color: string) {
    await this.page.locator(`img[alt="${productImageAlt}"]`).click();
    await this.page.locator('#product-select-option-0').selectOption(size);
    await this.page.locator('#product-select-option-1').selectOption(color);
    await this.page.locator(".btn.add-to-cart").click();
    await expect(this.page.locator(".toggle-drawer.cart.desktop")).toBeVisible();
  }
async getCartCount(): Promise<string> {
  return (await this.page.locator('#cart-target-desktop').textContent()) ?? '';
}
  async clickOnAddToCartButton() {
    await this.page.goto("/");
    await this.page.getByRole('link', { name: 'Catalog' }).click();
    await expect(this.page.getByRole('heading', { name: 'Products' })).toBeVisible();

    await this.addProductToCart("Black heels", "L", "Red");
    const countAfterFirst = await this.page.locator('#cart-target-desktop').textContent();
    await expect(this.page.locator('#cart-target-desktop')).toHaveText('(1)');
  console.log('Cart count after adding Black heels:', await this.page.locator('#cart-target-desktop').textContent());

    await this.page.locator(".toggle-drawer.cart.desktop").click();

    await this.page.getByRole('link', { name: 'Catalog' }).click();
  await expect(this.page.getByRole('heading', { name: 'Products' })).toBeVisible();

    await this.addProductToCart("Noir jacket", "L", "Blue");
    const countAfterSecond = await this.page.locator('#cart-target-desktop').textContent();
    await expect(this.page.locator('#cart-target-desktop')).toHaveText('(2)');
    console.log('Cart count after adding Noir jacket:', await this.page.locator('#cart-target-desktop').textContent());


    await this.page.locator(".toggle-drawer.cart.desktop").click();
    await this.page.pause();
  }
}