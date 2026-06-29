import { LoginPage } from "./loginpage";
import {addToCartPage} from "./addToCartPage";

class POManager {


    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.addtocartpage = new addToCartPage(this.page)
    }

getLoginPage() {
    return this.loginPage
}

getAddToCartPage() {
    return this.addtocartpage
}

}
module.exports = {POManager}