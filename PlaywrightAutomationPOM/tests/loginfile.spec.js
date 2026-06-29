const {test} = require('@playwright/test')
const {LoginPage} = require('../pageobjects/loginpage')
const logincreds = require('../utils/logincredsTestdata.json')
const loginData = JSON.parse(JSON.stringify(logincreds))
const {customdata} = require('../utils/test-base')

// test.describe.configure({mode:'parallel'})
customdata('Login to application', async ({page,logindata}) => {
    const POmanager = new POManager(page)
    const UserName = logindata.username
    const Password = logindata.password
    const loginpage = POmanager.getLoginPage()
    await loginpage.goto()
    await loginpage.login(UserName, Password)
    const title = await page.title()
    console.log(title)
})

