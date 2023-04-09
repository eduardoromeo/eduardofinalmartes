import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

class WishListPage extends BasePage {
    constructor() {
        super()
    }
    private tblSelector: string = '//div[@id="content"]/div[@class="table-responsive"]/table';
    async deleteItemWishlist(idItem: number): Promise<void> {
        let selector = '//td/button[@onclick="cart.add(' + '\'' + idItem + '\'' + ');"]/following-sibling::a[1]'
        await ElementActions.click(selector)
    }
    async itemWishListVisible(idItem: number): Promise<boolean> {
        let selector = '//td/button[@onclick="cart.add(' + '\'' + idItem + '\'' + ');"]'
        let visible = await ElementActions.isElementVisible(selector)
        return visible
    }

}
export const wishListPage = new WishListPage()