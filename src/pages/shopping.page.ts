import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

export class ShoppingPage extends BasePage {
    private buttonCart: string = '//div[@id="cart"]/button'
    private buttonTableCart = '//div/p/a[@href="https://thetestingworld.com/shop/index.php?route=checkout/cart"]'
    private textFeatured = '//div/h3[text()="Featured"]'
    constructor() {
        super()
    }
    async selectItem(idItem: number): Promise<void> {
        let selectorItem = '//button[@onclick="cart.add(' + '\'' + idItem + '\'' + ');"]'
        await ElementActions.click(selectorItem)
    }
    async clickButtonCart(): Promise<void> {
        await ElementActions.click(this.buttonCart);
    }
    async clickButtonTableCart(): Promise<void> {
        await ElementActions.click(this.buttonTableCart)
    }
    async putItemToWishlist(idItem: number): Promise<void> {
        let selectorItem = '//div/button[@onclick="wishlist.add(' + '\'' + idItem + '\'' + ');"]'
        await ElementActions.click(selectorItem)
    }
    async textFeaturedVisible(): Promise<boolean> {
        return await ElementActions.isElementVisible(this.textFeatured)
    }

}
export const shoppingPage = new ShoppingPage();