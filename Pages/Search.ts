import {Page} from "@playwright/test";
export default class Search {
    constructor(public page: Page){

    }
    async enterSearchfield(searchfield: string) {
        await this.page.locator('#search-field').fill(searchfield);
    }
}