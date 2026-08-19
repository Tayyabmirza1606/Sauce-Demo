import { test } from "@playwright/test";
import Search from "../Pages/Search";
import Loginpage from "../Pages/Loginpage";
import Homepage from "../Pages/homepage";
import Aboutus from "../Pages/Aboutus";
import Signup from "../Pages/Signup";

const email = "Luckymirza@gmail.com";
const pass = "Lucky@123";
test("registration test_01", async ({page}) => {
    const signup = new Signup(page);
    await page.goto("/");
    await signup.clickOnSignupButton();
    await signup.enterFirstName("Lucky");
    await signup.enterLastName("Mirza");
    await signup.enterEmail(email);
    await signup.enterPassword(pass);
    await signup.clickOnRegisterButton();
})

test("login test_01", async ({page}) => {
    const loginpage = new Loginpage(page);
    await page.goto("/account/login");
    await loginpage.enterEmail(email);
    await loginpage.enterPassword(pass);
    await loginpage.clickLoginButton();
})

// test("search test_01", async ({page}) => {
//     const search = new Search(page);
//     await page.goto("/");
//     await search.enterSearchfield("test");
//     await page.waitForTimeout(2000);
//     await page.screenshot({path: "screenshot.png"});
// })



