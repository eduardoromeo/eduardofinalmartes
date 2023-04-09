import { BasePage } from "../base.page";
import { ElementActions } from "../../core/element-actions";
class HeaderPage extends BasePage {
    private spanTotal:string = '//a[@id="wishlist-total"]/span';
    private hrefSpanTotal:string = '//a[@id="wishlist-total"]'
    private attributeSpan:string = 'title'
    constructor() {
        super()
    }
    async spanVisible() {
        await ElementActions.isElementVisible(this.spanTotal)
    }
    async getElementTextSpanTotal() {
        await ElementActions.getElementText(this.spanTotal)
    }
    async clickSpanTotal() {
        await ElementActions.click(this.hrefSpanTotal)
    }

}
export const headerPage = new HeaderPage()