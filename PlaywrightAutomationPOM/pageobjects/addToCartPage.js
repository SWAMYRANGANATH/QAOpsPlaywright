class addToCartPage {

    constructor(page) {
        this.page = page
        this.productName = page.locator('.card-body a')
    }

    async getFirstProductName() {
        return await this.productName.first().textContent()
    }
}
module.exports = {addToCartPage}