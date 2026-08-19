import {Page} from "@playwright/test";
export default class Homepage {
  constructor(public page: Page) {
    // Initialization code for the Homepage class
  }
async clickOnAboutUs() {
    await this.page.click("a[href='/about-us']");
}
async clickOnContactUs() {
    await this.page.click("a[href='/contact-us']");
}
}