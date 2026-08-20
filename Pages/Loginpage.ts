import {Page} from "@playwright/test"

export default class Loginpage {
  constructor(public page: Page) {
    // Initialization code for the Loginpage class
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
  
async enterEmail(email: string) {
    await this.page.locator('input#customer_email').fill(email);
  }
  async enterPassword(password: string) {
    await this.page.locator('input#customer_password').fill(password);
  }
  async clickLoginButton() {
    await this.page.click("input[type='submit']");
  }
}