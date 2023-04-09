import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { configPage } from "../../userData";
import { loginPage } from "../../src/pages/login.page";
import { shoppingPage } from "../../src/pages/shopping.page";
import { headerPage } from "../../src/pages/components/header.page";
import { wishListPage } from "../../src/pages/wishList.page";
import { expect } from "chai";

setDefaultTimeout(configPage.lapseTime)


Given("The user puts the items {string} into the wishlist", async function (items: string) {
    loginPage.clickHome()
    let arrayItems: any[] = items.split(",")
    expect(await shoppingPage.textFeaturedVisible())
    for (let i = 0; i < arrayItems.length; i++) {
        await shoppingPage.putItemToWishlist(arrayItems[i] as number)
    }
})
When("The user clicks into the favorite option", async function () {
    await headerPage.clickSpanTotal()
})
Then("The user deletes {string} from the wishlist table", async function (items: string) {
    let arrayItems: any[] = items.split(",")
    for (let i = 0; i < arrayItems.length; i++) {
        console.log("****************** Eliminando item " + arrayItems[i] + "**************")
        await wishListPage.deleteItemWishlist(arrayItems[i] as number)
        let visibleItem = await wishListPage.itemWishListVisible(arrayItems[i] as number)
        expect(visibleItem).to.be.true
    }
})