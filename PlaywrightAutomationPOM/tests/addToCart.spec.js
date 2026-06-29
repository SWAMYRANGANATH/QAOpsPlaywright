const {test} = require('@playwright/test')
const {LoginPage} = require('../pageobjects/loginpage')
const addToCart = require('../pageobjects/addToCartPage')
const {customdata} = require('../utils/test-base')
const {POManager} = require('../pageobjects/POManager');



customdata('add to cart', async ({page,logindata}) => {
    const POmanager = new POManager(page)
    const UserName = logindata.username
    const Password = logindata.password
    const productNameIphone = "iphone X"
    const loginpage = POmanager.getLoginPage()
    await loginpage.goto()
    await loginpage.login(UserName, Password)
    const addtocartpage = POmanager.getAddToCartPage()
    const productName = await addtocartpage.getFirstProductName()
    const title = await page.title()
    console.log(title)
    console.log(productName)

    //select iphone x to the cart and checkout
    const firstProd = await page.locator('.card-body a').first().textContent()
    const products = page.locator('.card-body')
    for (let i = 0; i < await products.count(); ++i) {
        if (await products.nth(i).locator('a').textContent() === productNameIphone) {
            await products.nth(i).scrollIntoViewIfNeeded()
            await page.evaluate(() => {
  document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth', block: 'end' })
})
            //await products.nth(i).locator('text= Add ').click()
            await products.nth(i).locator('.card-footer > button').click()

            break;
        }
    }
    await page.locator(".nav-item.active").click();
    const bool = await page.locator(`h4:has-text('${productNameIphone}')`).isVisible()
    expect(bool).toBeTruthy()
    await page.locator('.btn.btn-success').click()

    await page.locator('#country').type('India')
    await page.locator('.checkbox-primary').check()
    await page.locator('input[value="Purchase"]').click()
    const alert = await page.locator('.alert.alert-success.alert-dismissible').waitFor()
    expect(await alert.textContent()).toContain("Success")




})