import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

export class LoginPage extends BasePage {
    private username: string = '//input[@id="input-email"]';
    private password: string = '//input[@id="input-password"]';
    private buttonSign: string = '//input[@value="Login"]';
    private selectorHome: string = '//a[text()="Your Store"]';
    constructor() {
        super()
    }
    async setUserName(user: string) {
        await ElementActions.setText(this.username, user)
    }
    async setPassword(pass: string) {
        await ElementActions.setText(this.password, pass)
    }
    async clickButton() {
        await ElementActions.click(this.buttonSign)
    }
    async clickHome() {
        await ElementActions.click(this.selectorHome)
    }
}
export const loginPage = new LoginPage()