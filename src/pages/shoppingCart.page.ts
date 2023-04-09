import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

class ShoppingCart extends BasePage {
    constructor() {
        super()
    }
    private dropdownCoupon: string = '//div/h4/a[@href="#collapse-coupon"]'
    private inputCoupon: string = '//input[@id="input-coupon"]'
    private dropDownShipping: string = '//a[@href="#collapse-shipping"]'
    private selectCountry: string = '//select[@id="input-country"]'
    private selectZone: string = '//select[@id="input-zone"]'
    private inputPostCode: string = '//input[@id="input-postcode"]'
    private dropDownGit: string = '//a[@href="#collapse-voucher"]'
    private inputGit: string = '//input[@id="input-voucher"]'
    private buttonCheckOut: string = '//a[text()="Checkout"]'

    private textCheckout: string = '//div[@id="content"]/h1[text()="Checkout"]'

    async clickDropDownCoupon(): Promise<void> {
        await ElementActions.click(this.dropdownCoupon)
    }
    async clickDropDownShipping(): Promise<void> {
        await ElementActions.click(this.dropDownShipping)
    }
    async clickDropDownGit(): Promise<void> {
        await ElementActions.click(this.dropDownGit)
    }
    async setInputCoupon(value: string): Promise<void> {
        await ElementActions.setText(this.inputCoupon, value)
    }
    async setInputPostCode(value: string): Promise<void> {
        await ElementActions.setText(this.inputPostCode, value)
    }
    async setInputGit(value: string): Promise<void> {
        await ElementActions.setText(this.inputGit, value)
    }
    async selectValueCountry(value: string): Promise<void> {
        await ElementActions.selectOption(this.selectCountry, value)
    }
    async selectValueZone(value: string): Promise<void> {
        await ElementActions.selectOption(this.selectZone, value)
    }
    async dropDownCouponVisible(): Promise<boolean> {
        return await ElementActions.isElementVisible(this.dropdownCoupon)
    }
    async dropDownShippingVisible(): Promise<boolean> {
        return await ElementActions.isElementVisible(this.dropDownShipping)
    }
    async dropDownGitVisible(): Promise<boolean> {
        return await ElementActions.isElementVisible(this.dropDownGit)
    }
    async clickCheckout(): Promise<void> {
        await ElementActions.click(this.buttonCheckOut)
    }

    async textChekoutVisble(): Promise<boolean> {
        return await ElementActions.isElementVisible(this.textCheckout)
    }
}
export const shoppingCart = new ShoppingCart()
