import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { configPage } from "../../userData";
import { loginPage } from "../../src/pages/login.page";
import { shoppingPage } from "../../src/pages/shopping.page";
import { shoppingCart } from "../../src/pages/shoppingCart.page";
import { expect } from "chai";

setDefaultTimeout(configPage.lapseTime)


Given("The user puts the items {string} into the chart", async function name(items: string) {
    let arrayItems: any[] = items.split(",")

    for (let i = 0; i < arrayItems.length; i++) {
        console.log(arrayItems[i])
        await shoppingPage.selectItem((arrayItems[i]) as number)
    }
})
Given("The user clicks on the button cart", async function () {
    await shoppingPage.clickButtonCart()
})
Given("The user clicks on button table", async function () {
    await shoppingPage.clickButtonTableCart()
    expect(await shoppingCart.dropDownCouponVisible()).to.be.true
    expect(await shoppingCart.dropDownShippingVisible()).to.be.true
    expect(await shoppingCart.dropDownGitVisible()).to.be.true
})
Given("The user fills the coupon code {string}", async function (input1: string) {
    await shoppingCart.clickDropDownCoupon()
    await shoppingCart.setInputCoupon(input1)
})
Given("The user fills the shipping and taxes ,Bolivia, Cochabamba and Code Postal {string}", async function (input1: string) {
    console.log(input1)
    let arrayInput: string[] = input1.split(',')
    console.log(arrayInput)
    await shoppingCart.clickDropDownShipping()
    await shoppingCart.selectValueCountry(arrayInput[0])
    await shoppingCart.selectValueZone(arrayInput[1])
    await shoppingCart.setInputPostCode(arrayInput[2])
})
Given("The  user fills the Git Certificate {string}", async function (input: string) {
    await shoppingCart.clickDropDownGit()
    await shoppingCart.setInputGit(input)
})
When("The user clicks on checkout", async function () {
    await shoppingCart.clickCheckout()
})
Then("The next page is CHECKOUT", async function () {
    console.log("***** Checkout***********")
    expect(await shoppingCart.textChekoutVisble()).to.be.true
})