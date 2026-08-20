import { test } from "@playwright/test";
import Search from "../Pages/Search";
import Loginpage from "../Pages/Loginpage";
import Homepage from "../Pages/homepage";
import Aboutus from "../Pages/Aboutus";
import Signup from "../Pages/Signup";
import Addtocart from "../Pages/Addtocart";

const email = "Luckymirza@gmail.com";
const pass = "Lucky@123";

test.describe("Test Suite", () => {
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

test("login test_02", async ({page}) => {
    const loginpage = new Loginpage(page);
    await page.goto("/account/login");
    await loginpage.login(email, pass);
})

test("add to cart test_03", async ({page}) => {
    const loginpage = new Loginpage(page);
    const addToCart = new Addtocart(page);
    await page.goto("/");
    //await loginpage.login(email, pass);
    await addToCart.clickOnAddToCartButton();
})
})

// test("search test_01", async ({page}) => {
//     const search = new Search(page);
//     await page.goto("/");
//     await search.enterSearchfield("test");
//     await page.waitForTimeout(2000);
//     await page.screenshot({path: "screenshot.png"});
// })



