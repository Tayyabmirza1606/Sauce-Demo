import { Page } from "@playwright/test";
export default class Signup {
  constructor(public page: Page) {
    // Initialization code for the Signup class
  }


async clickOnSignupButton() {
    await this.page.getByRole('link', { name: 'Sign up' }).click();
  }
  async enterFirstName(firstName: string) {
  await this.page.locator('input#first_name').fill(firstName);
}
async enterLastName(lastName: string) {
  await this.page.locator('input#last_name').fill(lastName);
}
async enterEmail(email: string) {
  await this.page.locator('input#email').fill(email);
}
async enterPassword(password: string) {
  await this.page.locator('input#password').fill(password);
}
  async clickOnRegisterButton() {
  await this.page.getByRole('button', { name: 'Create' }).click();
}
}