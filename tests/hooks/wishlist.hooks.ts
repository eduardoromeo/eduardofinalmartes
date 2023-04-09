import { After, Before, Status } from "@cucumber/cucumber";
import { BasePage } from "../../src/pages/base.page";
import { loginPage } from "../../src/pages/login.page";
import { driverInstance } from "../../src/core/driver";
import { configPage } from "../../userData";
import { CustomWorld } from "../../cucumber.config";
import { expect } from "chai";


Before({ name: 'Before UI Hook', tags: '@addDeleteWishlist' }, async function () {
    await driverInstance.startDriver()
    await driverInstance.goToPage(configPage.linkLogin)

    await loginPage.setUserName(configPage.userName)
    await loginPage.setPassword(configPage.passName)
    await loginPage.clickButton()
});

After({ name: 'After UI Hook', tags: '@addDeleteWishlist' }, async function () {
    await driverInstance.closeDriver();
});
After({name: 'Take Screenshot', tags: '@addDeleteWishlist'},async function(this: CustomWorld, scenario) {
    if(scenario.result?.status == Status.FAILED) {
        const image = await driverInstance.Page.screenshot();
        this.attach(image, 'image/png');
    }
});